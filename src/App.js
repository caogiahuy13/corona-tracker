import React from "react";

import { Card, Chart, CountryPicker } from "./components/index";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Card></Card>
      <Chart></Chart>
      <CountryPicker />
    </div>
  );
}

export default App;
