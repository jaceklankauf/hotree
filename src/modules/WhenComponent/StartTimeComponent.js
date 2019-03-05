import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export class StartTimeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'AM',
      date: '',
      time: ''
    };
  }

  handleChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value,
      [changeEvent.target.name]: changeEvent.target.value
    }, this.handleDateTimeChange(changeEvent));
  };

  handleDateTimeChange = (changeEvent) => {
    const { date, time } = this.state;
    if (date && time) {
      const format12Time = time + changeEvent.target.value;
      const format24Time = moment(format12Time, ['h:mm A']).format('HH:mm');
      const dateTime = date + 'T' + format24Time;
      this.props.onDateTimeChange(dateTime);
    }
  }

  render() {
    const { required } = this.props;
    return (
      <React.Fragment>
        <div className="htr-input-wrapper">
          <div className="htr-label-box">
            <div className={`htr-label ${required ? 'required-label' : 'req'}`}>
              STARTS ON
            </div>
          </div>
          <div className="htr-input-box">
            <div className="htr-number-input-container">
              <input
                className={`htr-input date ${required ? 'required' : ''}`}
                type="date"
                min={new Date().toISOString().split('T')[0]}
                name="date"
                onChange={this.handleChange}
              >
              </input>
              <label className="htr-input-label">
                at
              </label>
              <input
                className={`htr-input time ${required ? 'required' : ''}`}
                type="time"
                min="00:00"
                max="12:00"
                name="time"
                onChange={this.handleChange}
              />
            </div>
            <div className="htr-radio-box">
              <div className="htr-radio">
                <input
                  type="radio"
                  value="AM"
                  checked={this.state.selectedOption === 'AM'}
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
                <label className="htr-input-label">
                  PM
                </label>
              </div>
            </div>
          </div>
          {required ? <span className="tooltip">date and time cannot be empty</span> : ''}
        </div>
      </React.Fragment>
    );
  }
}

StartTimeComponent.propTypes = {
  onChange: PropTypes.func,
  onDateTimeChange: PropTypes.func,
  required: PropTypes.bool
};

export default StartTimeComponent;
