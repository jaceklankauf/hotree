import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from '../../base/common/components/NumberInput/NumberInput';

export class RewardInput extends React.Component {
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
                onChange={this.props.onChange}
                name="reward"
                label="Number"
                placeholder="Number"
                // value={this.state.pointsInputValue}
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

RewardInput.propTypes = {
  onChange: PropTypes.func,
};

export default RewardInput;
