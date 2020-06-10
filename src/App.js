import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components/index";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data}></Cards>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}></Chart>
      </div>
    );
  }
}

export default App;
