import React, { useEffect, useRef } from "react";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  scaleLinear,
   axisRight,
} from "d3";
const LineChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 620]);

    const yScale = scaleLinear().domain([0, 160]).range([150, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index + 1);

    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "green");

    svg.select(".y-axis").style("display", "none");
    svg.select(".x-axis").style("color", "gray");
    svg.selectAll(".x-axis line").remove();
    svg.selectAll(".x-axis .text");

  }, [data]);

  return (
    <React.Fragment>
      <svg
        ref={svgRef}
        style={{
          width: "100%",
          height: "25.6vh",
          overflow: "visible",
          marginTop: "50px",
        }}
      >
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </React.Fragment>
  );
};
export default LineChart;
