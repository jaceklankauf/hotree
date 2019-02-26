import React from 'react';
import NumberInput from '../../base/common/components/NumberInput/NumberInput';

export class DurationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeInputValue: ''
    };
  }

  timeInputOnChange = (e) => {
    this.setState({
      timeInputValue: e.target.value,
    });
  };
  
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
                onChange={this.timeInputOnChange}
                name="Number"
                label="Number"
                placeholder="Number"
                value={this.state.timeInputValue}
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

export default DurationComponent;
