import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const LineGraph = ({ data }) => (
  <div>
    <Line data={data} />
  </div>
);

export default LineGraph;
