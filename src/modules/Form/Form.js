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
      date: '',
      duration: '',
      coordinator: {
        id: '',
        email: ''
      }
    }
  }
  
  handleInput = (evt) => {
    this.setState({
      form: {
        ...this.state.form,
        [evt.target.name]: evt.target.value,
      }
    });
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
