import React, { Component } from "react";
import axios from "axios";
import Chart from "./Chart.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get("/price")
      .then(res => {
        let labels = res.data[0];
        let data = res.data[1];
        this.setState({
          labels: labels,
          datasets: [
            {
              label: "PRICES",
              lineTension: 0.3,
              backgroundColor: "rgb(37, 89, 63)",
              borderColor: "rgb(37, 89, 63)",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgb(37, 89, 63)",
              pointBackgroundColor: "#999999",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgb(37, 89, 63)",
              pointHoverBorderColor: "rgb(37, 89, 63)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: data
            }
          ]
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <hr />
        <Chart data={this.state} />
      </div>
    );
  }
}
