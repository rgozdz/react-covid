import React, { Component } from "react";
import "./App.css";
import { fetchGlobalData, fetchCountryData } from "./api";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";

class App extends Component {
  s;

  state = {
    globalData: {},
    countryData: {},
  };

  async componentDidMount() {
    const globalData = await fetchGlobalData();
    this.setState({ globalData });

    const countryName = "poland";
    const countryData = await fetchCountryData(countryName);
    this.setState({ countryData });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>World</h1>
        <Cards data={this.state.globalData}></Cards>

        <h1 style={{ textAlign: "center" }}>Poland</h1>
        <Cards data={this.state.countryData}></Cards>

        <Chart></Chart>
      </div>
    );
  }
}

export default App;
