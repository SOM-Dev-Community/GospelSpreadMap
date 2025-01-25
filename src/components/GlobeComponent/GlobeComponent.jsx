import React, { useEffect, useMemo, useState } from "react";
import {
  Viewer,
  ImageryLayer,
  IonWorldImageryStyle,
  GeoJsonDataSource,
  Color,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import * as Cesium from "cesium";
import { useReach } from "../../context/ReachProvider";
import CountryDetailsDialog from "../CountryDetailsDialog/CountryDetailsDialog";
import px from "../../assets/px.png";
import nx from "../../assets/nx.png";
import py from "../../assets/py.png";
import ny from "../../assets/ny.png";
import pz from "../../assets/pz.png";
import nz from "../../assets/nz.png";

const GlobeComponent = () => {
  const { countries } = useReach();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

console.log(countries);


  const handleDialogClose = () => setDialogOpen(false);

  const countriesMap = useMemo(() => {
    return new Map(countries.map((country) => [country.country, country]));
  }, [countries]);

  useEffect(() => {
    // Initialize Cesium Viewer
    const viewer = new Viewer("cesiumContainer", {
      animation: false,
      timeline: false,
      fullscreenButton: false,
      navigationHelpButton: false,
      infoBox: false,
      baseLayerPicker: false,
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      requestRenderMode: true,
      maximumRenderTimeChange: 0.5,
      scene3DOnly: true
    });
    viewer.scene.skyBox = new Cesium.SkyBox({
      sources: {
        positiveX: px,
        negativeX: nx,
        positiveY: pz,
        negativeY: nz,
        positiveZ: py,
        negativeZ: ny,
      },
    });
    viewer.scene.skyAtmosphere.show = false;
    viewer.scene.globe.maximumScreenSpaceError = 2;
    viewer.scene.globe.enableLighting = false; // Disable lighting effects caused by the sun
    viewer.scene.sun.show = false; // Hides the sun
    viewer.camera.frustum.near = 1.0;
    viewer._cesiumWidget._creditContainer.style.display = "none";
    viewer.screenSpaceEventHandler.removeInputAction(
      Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
    );

    viewer.scene.screenSpaceCameraController.maximumZoomDistance = 20000000;
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(
        139.767052,
        35.681167,
        10000000.0
      ),
    });

    // Loading GeoJSON data
    viewer.dataSources
      .add(
        GeoJsonDataSource.load(
          "/World_Countries_(Generalized)_9029012925078512962.geojson",
          {
            stroke: Color.WHITE.withAlpha(0.3),
            fill: Color.BLUE.withAlpha(0.3),
            strokeWidth: 2,
          }
        )
      )
      .then((dataSource) => {
        const entities = dataSource.entities.values;

        entities.forEach((entity) => {
          if (entity.properties && entity.properties.hasProperty("COUNTRY")) {
            const countryName = entity.properties.COUNTRY.getValue();
            const countryData = countriesMap.get(countryName);

            if (countryData) {
              // Setting the color based on reach status
              entity.polygon.material = countryData.reached
                ? Cesium.Color.BLUE.withAlpha(0.6) // Blue for reached
                : Cesium.Color.GREEN.withAlpha(0.6); // Green for not reached
            } else {
              entity.polygon.material = Cesium.Color.GREEN.withAlpha(0.6); // Red for unmatched
            }
          }
        });
      });

    // Handles clicks on the globe
    const clickHandler = viewer.screenSpaceEventHandler.setInputAction(
      (click) => {
        const pickedEntity = viewer.scene.pick(click.position);
        if (Cesium.defined(pickedEntity) && pickedEntity.id) {
          const countryName = pickedEntity.id.properties?.COUNTRY?.getValue();
          const countryData = countriesMap.get(countryName);
          if (countryData) {
            setSelectedCountry(countryData);
            setDialogOpen(true);
          }
        }
      },
      Cesium.ScreenSpaceEventType.LEFT_CLICK
    );

    const imageryLayer = ImageryLayer.fromWorldImagery({
      style: IonWorldImageryStyle.AERIAL_WITH_LABELS,
    });
    viewer.imageryLayers.add(imageryLayer);

    const defaultLayer = viewer.imageryLayers.get(0);
    viewer.imageryLayers.remove(defaultLayer);

    return () => {
      viewer.screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_CLICK
      );
      viewer.destroy();
    };
  }, [countriesMap]);

  return (
    <>
      <div id="cesiumContainer" style={{ width: "100vw", height: "100vh" }} />
      <CountryDetailsDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        country={selectedCountry}
      />
    </>
  );
};

export default GlobeComponent;
