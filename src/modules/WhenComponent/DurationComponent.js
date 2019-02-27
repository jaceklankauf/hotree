import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from '../../base/common/components/NumberInput/NumberInput';

export class DurationComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="htr-input-wrapper">
          <div className="htr-label-box">
            <label className="htr-label">
              DURATION
            </label>
          </div>
          <div className="htr-input-box">
            <div className="htr-number-input-container">
              <NumberInput
                type="number"
                onChange={this.props.onChange}
                name="duration"
                label="Number"
                placeholder="Number"
                value={this.value}
              />
              <label className="htr-input-label">
                hour
              </label>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

DurationComponent.propTypes = {
  onChange: PropTypes.func,
};

export default DurationComponent;
