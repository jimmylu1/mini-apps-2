import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import chartjs from "chart.js";

export default class Chart extends Component {
  componentDidMount() {
    const { dataKeys, dataValues } = this.props;
    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: dataKeys,
        datasets: [
          {
            label: "Value in $",
            data: dataValues,
            backgroundColor: "rgba(142, 112, 255, 0.2)",
            borderColor: "rgba(165, 112, 255, 1)",
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return (
      <div>
        <canvas id="myChart" />
      </div>
    );
  }
}
