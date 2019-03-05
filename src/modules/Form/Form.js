import React from 'react';
import AboutComponent from '../../modules/AboutComponent/AboutComponent';
import CoordinatorComponent from '../../modules/CoordinatorComponent/CoordinatorComponent';
import WhenComponent from '../../modules/WhenComponent/WhenComponent';
import PublishButton from '../PublishButton/PublishButton';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

export class Form extends React.Component {
  state = {
    form: {
      title: '',
      description: '',
      category_id: '',
      paid_event: '',
      event_fee: '',
      reward: '',
      date: '',
      duration: '',
      coordinator: {
        id: '',
        email: ''
      }
    },
    errors: []
  }

  handleInput = (e) => {
    if (e.target.name === 'duration') {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value * 3600,
        }
      });
    } else if (e.target.name === 'id' || e.target.name === 'email') {
      this.setState({
        form: {
          ...this.state.form,
          coordinator: { ...this.state.form.coordinator, [e.target.name]: e.target.value },
        }
      });
    } else if (e.target.name === 'paid_event') {
      this.setState({
        form: {
          ...this.state.form,
          paid_event: e.target.value === 'Paid event',
        }
      });
    } else {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        }
      });
    }
  }

  handleDateTimeChange = (dateTime) => {
    this.setState({
      form: {
        ...this.state.form,
        date: dateTime,
      },
    });
  }

  handleEmail = (coordinatorEmail) => {
    this.setState({
      form: {
        ...this.state.form,
        coordinator: {
          email: coordinatorEmail
        },
      },
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const reg = (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    this.setState({
      errors: []
    });
    let errors = [];
    if (this.state.form.title.length === 0) {
      errors.push('title');
    }
    if (this.state.form.description.length === 0) {
      errors.push('description');
    }
    if (this.state.form.date.length === 0) {
      errors.push('date');
    }
    if (this.state.form.paid_event && this.state.form.event_fee.length === 0) {
      errors.push('event_fee');
    }
    if (!reg.test(this.state.form.coordinator.email)) {
      errors.push('email');
    }
    if (this.state.form.coordinator.length === 0) {
      errors.push('coordinator');
    }
    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors
      });
    } else {
      console.log(this.state.form);
      this.props.history.push('/submit');
    }
  }

  render() {
    return (
      <form>
        <AboutComponent onChange={this.handleInput} required={this.state.errors} />
        <CoordinatorComponent
          onChange={this.handleInput}
          onEmailHandle={this.handleEmail}
          required={this.state.errors}
        />
        <WhenComponent
          onChange={this.handleInput}
          onDateTimeChange={this.handleDateTimeChange}
          required={this.state.errors}
        />
        <PublishButton onClick={this.handleSubmit} />
      </form>
    );
  }
}

Form.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Form);
