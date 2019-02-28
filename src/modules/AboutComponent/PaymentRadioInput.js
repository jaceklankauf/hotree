import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from '../../base/common/components/NumberInput/NumberInput';

export class PaymentRadioInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'Free event',
      feeInputValue: ''
    };
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value },
      this.props.onChange(e));
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
                  name="paid_event"
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
                  name="paid_event"
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
                      required={true}
                      type="number"
                      onChange={this.props.onChange}
                      name="event_fee"
                      label="Fee"
                      placeholder="Fee"
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

PaymentRadioInput.propTypes = {
  onChange: PropTypes.func,
};

export default PaymentRadioInput;
