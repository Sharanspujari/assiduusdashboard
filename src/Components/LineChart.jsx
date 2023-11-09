import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = () => {

    const chartRef = useRef();

    useEffect(() => {
      drawChart();
    }, []);
  
    const drawChart = () => {
      const data = [
        { month: 30, value: 9 },
        { month: 60, value: 10 },
        { month: 80, value: 11 },
        { month: 100, value: 12 },
        { month: 80, value: 13 },
        { month: 70, value: 14 },
        { month: 50, value: 15 },
        { month: 70, value: 16 },
        { month: 90, value: 17 },
        { month: 70, value: 18 },
      ];
  
      const margin = { top: 20, right: 20, bottom: 40, left: 40 };
      const width = 400 - margin.left - margin.right;
      const height =250 - margin.top - margin.bottom;
  
      const svg = d3.select(chartRef.current)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
  
      const x = d3.scaleBand()
        .domain(data.map(d => d.month))
        .range([0, width])
        .padding(0.1);
  
      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .nice()
        .range([height, 0]);
  
      const line = d3.line()
        .x(d => x(d.month) + x.bandwidth() / 2)
        .y(d => y(d.value));
  
      svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('stroke-width', 2)
        .attr('d', line);
  
      svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', d => x(d.month) + x.bandwidth() / 2)
        .attr('cy', d => y(d.value))
        .attr('r', 4);
  
      // Create X and Y axes
      svg.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(x));
  
      svg.append('g')
        .call(d3.axisLeft(y));
    };
  
  return (
    <svg ref={chartRef}></svg>
  )
}

export default LineChart