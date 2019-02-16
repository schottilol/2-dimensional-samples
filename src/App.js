/** @format */

import React from 'react';
import Layout from './components/Layout';
import DotSequency from './components/DotSequency';
import styles from './App.module.css';
import ContingencyTable from './components/ContingencyTable';
// import Statistic from './lib/Statistics';
// import TextInput from './components/Input/Text';

class StatisticApp extends React.Component {
  state = {
    statistics: null,
    userChoice: null,
    //userChoice: 2
  };

  setUserChoice(value) {
    this.setState({ userChoice: value });
  }

  renderChoiceRadioButtons() {
    return (
      <div>
        <div>
          <div className="card">
            <div className="card-body">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="checkDotSequence"
                  name="radioInput"
                  className="custom-control-input"
                  value="2"
                  onClick={this.setUserChoice.bind(this, 1)}
                />
                <label className="custom-control-label" for="checkDotSequence">
                  Punktfolge
                </label>
              </div>

              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="checkContigencyTable"
                  name="radioInput"
                  className="custom-control-input"
                  value="1"
                  onClick={this.setUserChoice.bind(this, 2)}
                />
                <label
                  className="custom-control-label"
                  for="checkContigencyTable"
                >
                  Kontigenztafel
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderChoice() {
    if (this.state.userChoice === null) {
      return this.renderChoiceRadioButtons();
    } else if (this.state.userChoice === 1) {
      return (
        <div>
          <DotSequency />
        </div>
      );
    } else if (this.state.userChoice === 2) {
      return (
        <div>
          <ContingencyTable />
        </div>
      );
    }
  }

  render() {
    return (
      <Layout>
        <div className={styles.centerParent}>{this.renderChoice()}</div>
      </Layout>
    );
  }

  // render() {
  //   return (
  //     <Layout>
  //       <div className={styles.sheet}>
  //         <span>{new Date().toLocaleString()}</span>
  //         <ContingencyTable />
  //       </div>
  //     </Layout>
  //   );
  // }
}

export default StatisticApp;
