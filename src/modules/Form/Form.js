import React from 'react';
import AboutComponent from '../../modules/AboutComponent/AboutComponent';
import CoordinatorComponent from '../../modules/CoordinatorComponent/CoordinatorComponent';
import WhenComponent from '../../modules/WhenComponent/WhenComponent';
import PublishButton from '../PublishButton/PublishButton';

export class Form extends React.Component {
  state = {
    form: {
      title: '',
      description: '',
      category_id: '',
      paid_event: '',
      event_fee: '',
      reward: '',
      date: {
        date: '',
        time: ''
      },
      duration: '',
      coordinator: {
        id: '',
        email: ''
      }
    }
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
    } else if (e.target.name === 'date' || e.target.name === 'time') {
      this. setState({
        form: {
          ...this.state.form,
          date: {...this.state.form.date, [e.target.name]: e.target.value},
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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.form);
  }

  render() {
    return (
      <form>
        <AboutComponent onChange={this.handleInput} />
        <CoordinatorComponent onChange={this.handleInput} />
        <WhenComponent onChange={this.handleInput} />
        <PublishButton onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default Form;
