import React from 'react';
import PropTypes from 'prop-types';
import { employees } from '../../assets/mocks/employes';

export class CategorySelect extends React.Component {
  render() {
    const personMe = employees.find((employee) => employee.id === 3);
    const { required } = this.props;
    return (
      <React.Fragment>
        <div className="htr-input-wrapper">
          <div className="htr-label-box">
            <div className={`htr-label ${required ? 'required-label' : 'req'}`}>
              RESPONSIBLE
            </div>
          </div>
          <div className="htr-input-box">
            <select
              className={`htr-select ${required ? 'required' : 'req'}`}
              onChange={this.props.onChange}
              name="id"
            >
              <optgroup label="Me">
                <option key={personMe.id} value={personMe.id}>
                  {personMe.name} {personMe.lastname}
                </option>
              </optgroup>
              <optgroup label="Others">
                {employees.filter((employee) => employee.id !== 3).map((employee) =>
                  <option key={employee.id} value={employee.id}>
                    {employee.name} {employee.lastname}
                  </option>
                )}
              </optgroup>
            </select>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

CategorySelect.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.bool
};

export default CategorySelect;
