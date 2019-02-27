import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../../assets/mocks/categories';

export class CategorySelect extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="htr-input-wrapper">
          <div className="htr-label-box">
            <div className="htr-label">
              CATEGORY
            </div>
          </div>
          <div className="htr-input-box">
            <select
              className="htr-select"
              name="category_id"
              onChange={this.props.onChange}
            >
              <option
                defaultValue
                className="htr-default-select"
                disabled
                selected
              >
                Select your category
              </option>
              {categories.map((category) =>
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              )}
            </select>
          </div>
        </div>
        <div className="htr-input-wrapper subsidiary">
          <div className="htr-label-box"></div>
          <div className="htr-input-box subsidiary-text-box">
            <div className="subsidiary-text">Describe topic and people who should be interested in this event</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CategorySelect.propTypes = {
  onChange: PropTypes.func,
};

export default CategorySelect;
