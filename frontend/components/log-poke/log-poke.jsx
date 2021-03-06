import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class LogPoke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    date: "",
                    double: false,
                    bleed: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDosageChange = this.handleDosageChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleBleedChange = this.handleBleedChange.bind(this);
    }

    componentDidMount() {
        document.title = "Log A Poke";
    }

    handleDosageChange(e) {
        this.setState({
            double: e.target.value
        });
    }

    handleDateChange(e) {
        this.setState({
            date: e.currentTarget.value
        });
    }

    handleBleedChange(e) {
        this.setState({
            bleed: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const poke = this.state;
        this.props.logPoke(poke).then(action => {
          if (action.type === 'RECEIVE_POKE') {
            this.props.history.push('/poke-log');
          }
        });
    }

    getTodayDateString() {
      const today = new Date();
      let day = today.getDate();
      day = day < 10 ? `0${day}` : day;
      let month = today.getMonth() + 1;
      month = month < 10 ? `0${month}` : month;
      return `${today.getFullYear()}-${month}-${day}`;
    }

    componentWillUnmount() {
      this.props.clearErrors();
    }

    render() {
        return(
        <div className= "log-poke">
            <h1 className= "log-poke__title"> Log a Poke </h1>
            <form id="log-poke-form" action="" className= "log-poke__form">
                <label className="log-poke__form-field"> Poke Date
                    <input type="date" className="log-poke__form-input" onChange={this.handleDateChange} max={this.getTodayDateString()}/>
                </label>
                <label className="log-poke__form-field">Dose
                    <div className="log-poke___toggle-bttn">
                        <input type="radio" id="switch_left" name="switch_2" value={false} defaultChecked={true} onClick={this.handleDosageChange}/>
                        <label htmlFor="switch_left">SINGLE
                        </label>

                        <input type="radio" id="switch_right" name="switch_2" value={true} onClick={this.handleDosageChange} />
                        <label htmlFor="switch_right">DOUBLE
                        </label>
                    </div>
                </label>
                <label className="log-poke__form-field">Bleed?
                   <select defaultValue="No Bleed" className="log-poke__form-select" onChange={this.handleBleedChange}>
                        <option>No Bleed</option>
                        <optgroup label="Lower Extremities">
                            <option value="left-foot"> Left Foot </option>
                            <option value="right-foot"> Right Foot </option>
                            <option value="left-ankle"> Left Ankle </option>
                            <option value="right-ankle">Right Ankle </option>
                            <option value="left-shin"> Left Shin </option>
                            <option value="right-shin"> Right Shin </option>
                            <option value="left-knee"> Left Knee</option>
                            <option value="right-knee"> Right Knee</option>
                            <option value="left-thigh"> Left Thigh </option>
                            <option value="right-thigh"> Right Thigh </option>
                        </optgroup>
                        <optgroup label="Upper Extremities">
                            <option value="left-hand"> Left Hand </option>
                            <option value="right-hand"> Right Hand </option>
                            <option value="left-wrist"> Left Wrist </option>
                            <option value="right-wrist"> Right Wrist </option>
                            <option value="left-forearm"> Left Forearm </option>
                            <option value="right-forearm"> Right Forearm </option>
                            <option value="left-elbow"> Left Elbow </option>
                            <option value="right-elbow"> Right Elbow </option>
                            <option value="left-upper-arm"> Left Upper Arm </option>
                            <option value="right-upper-arm"> Right Upper Arm </option>
                            <option value="left-shoulder"> Left Shoulder </option>
                            <option value="right-shoulder"> Right Shoulder </option>
                        </optgroup>

                        <optgroup label="Torso">
                            <option value="hips"> Hips </option>
                            <option value="glutes"> Glutes</option>
                            <option value="Midsection"> Midsection </option>
                            <option value="chest"> Chest </option>
                            <option value="lower-back"> Lower Back </option>
                            <option value="upper-back"> Upper Back </option>
                        </optgroup>

                        <optgroup label="Head">
                            <option value="neck"> Neck </option>
                            <option value="head"> Head </option>
                            <option value="nose"> Nose </option>
                            <option value="mouth"> Mouth </option>
                        </optgroup>

                    </select>
                </label>
                <p className='log-poke__errors'>{this.props.errors}</p>
                <button className="log-poke__submit" onClick= {this.handleSubmit}>LOG</button>
            </form>
        </div>
        );
    }
}

export default withRouter(LogPoke);
