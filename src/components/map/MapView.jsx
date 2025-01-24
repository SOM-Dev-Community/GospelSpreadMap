import { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./MapView.css";
import * as topojson from "topojson-client";

const MapView = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 960;
    const height = 550;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    const projection = d3
      .geoMercator()
      .scale(150)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "white")
      .style("border", "none")
      .style("padding", "5px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    d3.json(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    )
      .then((data) => {
        svg
          .selectAll("path")
          .data(data.features)
          .join("path")
          .attr("d", path)
          .attr("fill", "#80c320")
          .attr("stroke", "#fff")
          .on("mouseover", (event, d) => {
            const countryName = d.properties.ADMIN || d.properties.name;
            tooltip
              .style("opacity", 1)
              .text(countryName)
              .style("left", `${event.pageX + 10}px`)
              .style("top", `${event.pageY + 10}px`);
            d3.select(event.target).attr("fill", "blue");
          })
          .on("mousemove", (event) => {
            tooltip
              .style("left", `${event.pageX - 20}px`)
              .style("top", `${event.pageY - 30}px`);
          })
          .on("mouseout", (event) => {
            tooltip.style("opacity", 0);
            d3.select(event.target).attr("fill", "#80c320");
          });

        svg
          .append("path")
          .datum(topojson.mesh(data, data.objects.countries, (a, b) => a !== b))
          .attr("d", path)
          .attr("fill", "none")
          .attr("stroke", "")
          .attr("stroke-width", "1px");
      })
      .catch((error) => console.error("Error loading GeoJSON:", error));
  }, []);

  return (
    <div className="map-view">
      <h1
        className="title1"
        style={{ color: "white", fontFamily: "Times new roman" }}
      >
        THE GOSPEL SPREAD MAP
      </h1>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default MapView;
