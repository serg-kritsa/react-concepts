import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput(props) {
    console.log(props);
    return (
      <div className="field">
        <label>Enter Title</label>
        <input {...props.input} />
      </div>
    );
  }
  
  renderInputWithPassedProp({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        <Field name="title00" component={this.renderInput} />
        <Field name="title" component={this.renderInputWithPassedProp} label="Passed Title"/>
      </form>
    );
  }
}

export default reduxForm({
  form: 'myNameInStore'
})(StreamCreate);
