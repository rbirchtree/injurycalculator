import React, { Component } from 'react';

import NumberInput from './number-input';
import Output from './output';

class Calculator extends Component {
  constructor(props){
    super(props);
      this.state = { 
        hourlyRate: 1, //26
        timePerAVisit: 1,//1
        numberOfVisits: 1,//40,
        carWorth: 5000, //9000
        timeDrivingToRehab: 1, //.5
        timeWithAtty: 1, //1,
        attyfees: .33,
        selfImprovementfactor: 1, //1.1 could have done more value added activities
        timeAtSceneOfAccident: 1,//2
        timeRentingCar: 1,//1
        doubleEntry: 2
      };
  };
    setHourlyRate(hourlyRate){
      this.setState({
        hourlyRate
      }); 
    };
    
    setTimePerAVisit(timePerAVisit){
      this.setState({
        timePerAVisit
      });
    };

    setNumberOfVisits(numberOfVisits){
      this.setState({
        numberOfVisits
      });
    };

    setTimeDrivingToRehab(timeDrivingToRehab){
      this.setState({
        timeDrivingToRehab
      });
    };

    setCarWorth(carWorth){
      this.setState({
        carWorth
      });
    };

    setTimeWithAtty(timeWithAtty){
      this.setState({
        timeWithAtty
      });
    };

    setTimeAtSceneOfAccident(timeAtSceneOfAccident){
      this.setState({
        timeAtSceneOfAccident
      });
    ;}

    setTimeRentingCar(timeRentingCar){
      this.setState({
        timeRentingCar
      });
    };

    setSelfImprovementfactor(selfImprovementfactor){
      this.setState({
        selfImprovementfactor
      });
    };

    setAttyFees(attyfees){
      this.setState({
        attyfees
      });
    };

  render() {
      let {hourlyRate,timePerAVisit, timeAtSceneOfAccident, numberOfVisits, carWorth, timeDrivingToRehab, timeWithAtty,
        timeRentingCar, selfImprovementfactor, attyfees} = this.state;
      const rate = (Number(hourlyRate) * Number(timePerAVisit) * Number(numberOfVisits));
       let oneTime = hourlyRate * (Number(timeAtSceneOfAccident)+Number(timeWithAtty)+Number(timeRentingCar))
       let total = Number(carWorth) +selfImprovementfactor * ( oneTime + rate );
       let attyFeesEstimate = total*2 * attyfees;
       
    return (
        <div className="container">
            <h1>Total Vehicle & Rehab Compensation Calculator</h1>
            <form className="flex-outer">
              <NumberInput label="Hourly Rate" value={this.state.hourlyRate}
                onChange={value => this.setHourlyRate(value)}
              />
              <NumberInput label="Time at Rehab per a Visit and at Home Doing Physical Therapy" value={this.state.timePerAVisit}
                onChange={value => this.setTimePerAVisit(value)}
                />
              <NumberInput label="Number of Visits to Rehab" value={numberOfVisits}
                onChange={value => this.setNumberOfVisits(value)}
                />

              <NumberInput label="Time Driving to Rehab" value={timeDrivingToRehab} 
                onChange={value => this.setTimeDrivingToRehab(value)}  
              />
              <NumberInput label="Car Worth" step={500} value={carWorth}
              onChange={value => this.setCarWorth(value)}
              />
              <NumberInput label="Time With Attorney" value={timeWithAtty}
                onChange={value=> this.setTimeWithAtty(value)}
                />
              <NumberInput label="Time at Scene of the Accident" value={timeAtSceneOfAccident}
              onChange={value=> this.setTimeAtSceneOfAccident(value)}
              />
              <NumberInput label="Time Renting a Car" value={timeRentingCar}
              onChange={value=> this.setTimeRentingCar(value)}
              />
              <NumberInput label="Self Improvement Factor for Client i.e. Time Value Money"
                value={selfImprovementfactor}
                onChange={value => this.setSelfImprovementfactor(value)}
                />
              <NumberInput label="Attorney Fees"
                value={attyfees}
                onChange={value => this.setAttyFees(value)}
                />
              <Output value={total} label="Estimated Value"/>
              <Output value={total*2} label="Estimated Value * 2(Double Entry"/>
              <Output value={attyFeesEstimate.toFixed(2)} label="Estimated Value * 2 with Attorney Fees"/>
            </form>
        </div>
    );
  }
};

export default Calculator;
