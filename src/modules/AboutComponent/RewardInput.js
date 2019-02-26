import React from 'react';
import NumberInput from '../../base/common/components/NumberInput/NumberInput';

export class RewardInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pointsInputValue: ''
    };
  }

  pointsInputOnChange = (e) => {
    this.setState({
      pointsInputValue: e.target.value,
    });
  };
  
  render() {
    return (
      <React.Fragment>
        <div className="htr-input-wrapper">
          <div className="htr-label-box">
            <label className="htr-label">
              REWARD
            </label>
          </div>
          <div className="htr-input-box">
            <div className="htr-number-input-container">

              <NumberInput
                type="number"
                onChange={this.pointsInputOnChange}
                name="Number"
                label="Number"
                placeholder="Number"
                value={this.state.pointsInputValue}
              />
              <label className="htr-input-label">
                reward points for attendance
              </label>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RewardInput;
