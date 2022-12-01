import React, { Component } from 'react';
import { nanoid } from 'nanoid';
export default class FormInput extends Component {
  state = {
    day: '',
    id: nanoid(),
    time: '',
    build: false,
    evo: false,
    evoSpeed: false,
    buildSpeed: false,
    huch: false,
    huchSpeed: false,
    egg: false,
    animal: false,
    buildPowerSpeed: false,
    evoPowerSpeed: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      day,
      time,
      build,
      evo,
      evoSpeed,
      buildSpeed,
      huch,
      huchSpeed,
      egg,
      animal,
      evoPowerSpeed,
      buildPowerSpeed,
    } = this.state;
    // if (!day & !time) {
    //   if (
    //     build ||
    //     evo ||
    //     evoSpeed ||
    //     buildSpeed ||
    //     huch ||
    //     huchSpeed ||
    //     egg ||
    //     animal ||
    //     evoPowerSpeed ||
    //     buildPowerSpeed
    //   ) {
    //     console.log('не хватает дня или времени или рассвета');
    //   }
    // }

    this.props.onSubmit(this.state);
    this.reset();
  };
  handleInputChange = event => {
    // console.log(event.currentTarget.value);
    this.setState({ name: event.currentTarget.value });
  };
  handleInputnumberChange = event => {
    this.setState({ number: event.currentTarget.value });
  };
  handleInputTimeChange = e => {
    this.setState({ time: e.currentTarget.value });
  };
  HandleBuildChange = e => {
    console.log(e);
    this.setState({ build: e.currentTarget.checked });
  };
  HandleEvoChange = e => {
    console.log(e);
    this.setState({ evo: e.currentTarget.checked });
  };
  HandleEvoSpeedChange = e => {
    console.log(e);
    this.setState({ evoSpeed: e.currentTarget.checked });
  };
  HandleBuildSpeedChange = e => {
    console.log(e);
    this.setState({ buildSpeed: e.currentTarget.checked });
  };
  HandleHuchSpeedChange = e => {
    console.log(e);
    this.setState({ huchSpeed: e.currentTarget.checked });
  };
  HandleHuchChange = e => {
    console.log(e);
    this.setState({ huch: e.currentTarget.checked });
  };
  HandleBuildPowerSpeedChange = e => {
    console.log(e);
    this.setState({ buildPowerSpeed: e.currentTarget.checked });
  };
  HandleEvoPowerSpeedChange = e => {
    console.log(e);
    this.setState({ evoPowerSpeed: e.currentTarget.checked });
  };
  handleInputDayChange = e => {
    this.setState({ day: e.currentTarget.value });
  };
  HandleSpeedChange = e => {
    this.setState({
      evoSpeed: true,
      buildSpeed: true,
      huchSpeed: true,
    });
  };

  reset = () => {
    console.log('reset');
    this.setState({
      // day: '',
      id: nanoid(),
      // time: '',
      build: false,
      evo: false,
      evoSpeed: false,
      buildSpeed: false,
      huch: false,
      huchSpeed: false,
      egg: false,
      animal: false,
      buildPowerSpeed: false,
      evoPowerSpeed: false,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="radio"
              name="day"
              value="monday"
              onChange={this.handleInputDayChange}
              checked={this.state.day === 'monday'}
            />
            monday
            <input
              type="radio"
              name="day"
              value="tuesday"
              onChange={this.handleInputDayChange}
              checked={this.state.day === 'tuesday'}
            />
            tuesday
            <input
              type="radio"
              name="day"
              value="wednesday"
              onChange={this.handleInputDayChange}
              checked={this.state.day === 'wednesday'}
            />
            wednesday
            <input
              type="radio"
              name="day"
              value="thursday"
              onChange={this.handleInputDayChange}
              checked={this.state.day === 'thursday'}
            />
            thursday
            <input
              type="radio"
              name="day"
              value="friday"
              onChange={this.handleInputDayChange}
              checked={this.state.day === 'friday'}
            />
            friday
            <input
              type="radio"
              name="day"
              value="saturday"
              onChange={this.handleInputDayChange}
              checked={this.state.day === 'saturday'}
            />
            Saturday
            <input
              type="radio"
              name="day"
              value="sunday"
              onChange={this.handleInputDayChange}
              checked={this.state.day === 'sunday'}
            />
            Sunday
          </label>
          <br />
          <input
            type="radio"
            name="time"
            value="0"
            onChange={this.handleInputTimeChange}
            checked={this.state.time === '0'}
          />
          00
          <input
            type="radio"
            name="time"
            value="1"
            onChange={this.handleInputTimeChange}
            checked={this.state.time === '1'}
          />
          01
          <input
            type="radio"
            name="time"
            value="2"
            onChange={this.handleInputTimeChange}
            checked={this.state.time === '2'}
          />
          02
          <input
            type="radio"
            name="time"
            value="3"
            onChange={this.handleInputTimeChange}
            checked={this.state.time === '3'}
          />
          03
          <input
            type="radio"
            name="time"
            value="4"
            onChange={this.handleInputTimeChange}
            checked={this.state.time === '4'}
          />
          04
          <input
            type="radio"
            name="time"
            value="5"
            onChange={this.handleInputTimeChange}
            checked={this.state.time === '5'}
          />
          05
          <input
            type="radio"
            name="time"
            value="6"
            onChange={this.handleInputTimeChange}
            checked={this.state.time === '6'}
          />
          06
          <input
            type="radio"
            name="time"
            value="7"
            onChange={this.handleInputTimeChange}
            checked={this.state.time === '7'}
          />
          07
          <input
            type="radio"
            name="exp"
            value={8}
            onChange={this.handleInputTimeChange}
            checked={this.state.time === '8'}
          />
          08
          <br />
          <input
            type="checkbox"
            name="build"
            checked={this.state.build}
            onChange={this.HandleBuildChange}
          />
          build
          <input
            type="checkbox"
            name="evo"
            checked={this.state.evo}
            onChange={this.HandleEvoChange}
          />
          evo
          <input
            type="checkbox"
            name="evoSpeed"
            checked={this.state.evoSpeed}
            onChange={this.HandleEvoSpeedChange}
          />
          evoSpeed
          <input
            type="checkbox"
            name="evoSpeed"
            checked={this.state.buildSpeed}
            onChange={this.HandleBuildSpeedChange}
          />
          buildSpeed
          <input
            type="checkbox"
            name="huch"
            checked={this.state.huch}
            onChange={this.HandleHuchChange}
          />
          huch
          <input
            type="checkbox"
            name="huchSpeed"
            checked={this.state.huchSpeed}
            onChange={this.HandleHuchSpeedChange}
          />
          huchSpeed
          <input
            type="checkbox"
            name="huchSpeed"
            checked={this.state.buildPowerSpeed}
            onChange={this.HandleBuildPowerSpeedChange}
          />
          buildPowerSpeed
          <input
            type="checkbox"
            name="huchSpeed"
            checked={this.state.evoPowerSpeed}
            onChange={this.HandleEvoPowerSpeedChange}
          />
          EvoPowerSpeed
          <input
            type="checkbox"
            name="Speed"
            checked={this.state.Speed}
            onChange={this.HandleSpeedChange}
          />
          Speed
          <br />
          <button>Add Colony action</button>
        </form>
      </div>
    );
  }
}
