import React, { Component } from "react";
import { Card, Chart, CountryPicker } from "./components/index";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    console.log(fetchedData);
  }

  render() {
    return (
      <div className={styles.container}>
        <Card></Card>
        <Chart></Chart>
        <CountryPicker />
      </div>
    );
  }
}

export default App;
