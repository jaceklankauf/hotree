import React from 'react';
import NumberInput from '../../base/common/components/NumberInput/NumberInput';

export class PaymentRadioInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'Free event',
      feeInputValue: ''
    };
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  feeInputOnChange = (e) => {
    this.setState({
      feeInputValue: e.target.value,
    });
  };
  
  render() {
    return (
      <React.Fragment>
        <div className="htr-input-wrapper">
          <div className="htr-label-box">
            <div className="htr-label">
              PAYMENT
            </div>
          </div>
          <div className="htr-input-box">
            <div className="htr-radio-box">
              <div className="htr-radio">
                <input
                  type="radio"
                  value="Free event"
                  checked={this.state.selectedOption === 'Free event'}
                  onChange={this.handleOptionChange}
                />
                <label className="htr-input-label">
                  Free event
                </label>
              </div>
              <div className="htr-radio">
                <input
                  type="radio"
                  value="Paid event"
                  checked={this.state.selectedOption === 'Paid event'}
                  onChange={this.handleOptionChange}
                />
                <label className="htr-input-label">
                  Paid event
                </label>
              </div>
              <div>
                {this.state.selectedOption === 'Paid event' ?
                  <div className="htr-number-input-container">
                    <NumberInput
                      type="number"
                      onChange={this.feeInputOnChange}
                      name="Fee"
                      label="Fee"
                      placeholder="Fee"
                      value={this.state.feeInputValue}
                    />
                    <label className="htr-input-label">
                      $
                    </label>
                  </div>
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PaymentRadioInput;
