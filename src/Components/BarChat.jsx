import React, { useEffect, useRef } from "react";
import { select, axisBottom, scaleLinear, axisRight, scaleBand } from "d3";
const BarChat = () => {
  const data = [50, 80, 130, 90, 120, 95];
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(data.map((value, index) => index)) 
      .range([0, 620])
      .padding(0.8);

    const yScale = scaleLinear().domain([0, 160]).range([150, 0]);

    const xAxis = axisBottom(xScale).ticks(data.length);
    //   .tickFormat((index) => index + 1);

    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis).style("display","none");

    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);
    svg.select(".y-axis").style("display", "none");

    svg
      .selectAll(".bar")
      .attr("fill", "green")
      .attr("rx", 5)
      .data(data)
      .join("rect") .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1,-1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("height", (value) => 150 - yScale(value))

    
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
        {/* <path d="M0,150 100,100,150,120" stroke="green" fill="none"/> */}
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </React.Fragment>
  );
};

export default BarChat;
