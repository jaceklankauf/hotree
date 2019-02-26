import React from 'react';

export class PaymentRadioInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'Free event',
    };
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="htr-input-wrapper">
          <div className="htr-label-box">
            <div className="htr-label">
              STARTS ON
            </div>
          </div>
          <div className="htr-input-box">
            <div className="htr-number-input-container">
              <input
                className="htr-input date"
                type="date"
                min={new Date().toISOString().split('T')[0]}>
              </input>
              <label className="htr-input-label">
                at
              </label>
              <input className="htr-input time" type="time" min="00:00" max="12:00"></input>
            </div>
            <div className="htr-radio-box">
              <div className="htr-radio">
                <input
                  type="radio"
                  value="AM"
                  checked={this.state.selectedOption === 'AM'}
                  onChange={this.handleOptionChange}
                />
                <label className="htr-input-label">
                  AM
                </label>
              </div>
              <div className="htr-radio">
                <input
                  type="radio"
                  value="PM"
                  checked={this.state.selectedOption === 'PM'}
                  onChange={this.handleOptionChange}
                />
                <label className="htr-input-label">
                  PM
                </label>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PaymentRadioInput;
