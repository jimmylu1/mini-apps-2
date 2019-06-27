import React, { Component } from "react";
import axios from "axios";
import Line from "./Chart.jsx";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      dataKeys: [],
      dataValues: []
    };
  }

  componentDidMount() {
    axios
      .get("/price")
      .then(res => {
        this.setState({
          dataKeys: Object.keys(res.data.bpi),
          dataValues: Object.values(res.data.bpi)
        });
        console.log(this.state.dataKeys);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { dataKeys, dataValues } = this.state;
    if (dataKeys.length === 0) {
      return null;
    }
    return (
      <div>
        <Line dataKeys={dataKeys} dataValues={dataValues} />
      </div>
    );
  }
}
