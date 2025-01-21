import { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./MapView.css";

const MapView = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 960;
    const height = 550;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    // const zoom = d3.zoom().on("zoom", (event) => {
    //   svg.selectAll("g").attr("transform", event.transform);
    // });

    // svg.call(zoom);


    // svg
    //   .selectAll("path")
    //   .on("mouseover", (event, d) => {
    //     const name = d.properties.name; // Adjust to match GeoJSON properties
    //     const tooltip = d3
    //       .select("body")
    //       .append("div")
    //       .attr("class", "tooltip")
    //       .style("position", "absolute")
    //       .style("background", "white")
    //       .style("border", "1px solid black")
    //       .style("padding", "5px")
    //       .style("pointer-events", "none")
    //       .text(name);

    //     tooltip
    //       .style("left", event.pageX + "px")
    //       .style("top", event.pageY + "px");
    //   })
    //   .on("mouseout", () => {
    //     d3.select(".tooltip").remove();
    //   });




    const projection = d3
      .geoMercator()
      .scale(150)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    d3.json(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    )
      .then((data) => {
        // Draw the map
        svg
          .selectAll("path")
          .data(data.features)
          .join("path")
          .attr("d", path)
          .attr("fill", "#80c320")
          .attr("stroke", "#fff")
          .on("mouseover", (event, d) => {
            d3.select(event.target).attr("fill", "lightgreen");
          })
          .on("mouseout", (event, d) => {
            d3.select(event.target).attr("fill", "#80c320");
          });
          // Add labels for each country
        svg.append("g")
        .selectAll("text")
        .data(data.features)
        .join("text")
        .attr("x", d => {
          const [x] = projection(d3.geoCentroid(d));
          return x;
        })
        .attr("y", d => {
          const [, y] = projection(d3.geoCentroid(d));
          return y;
        })
        .text(d => d.properties.ADMIN || d.properties.name) // Use the property with country names
        .attr("font-size", "3px")
        .attr("text-anchor", "middle")
        .attr("fill", "black")
        .attr("pointer-events", "none"); // Ensure labels don’t interfere with interactions
    
      })
      .catch((error) => console.error("Error loading GeoJSON:", error));
  }, []);

  return <div>


  <svg ref={svgRef}></svg>
  </div>;
};

export default MapView;
