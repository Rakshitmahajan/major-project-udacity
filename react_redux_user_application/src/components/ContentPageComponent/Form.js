import React from 'react';
class Form extends React.Component {
  submitForm = (e) => {
    e.preventDefault();
    // console.log('dfss', this.props.data);
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.submitForm(e)}>
          <div className="form-group">
            <label><p className="h3 p-0">{this.props.data.question}</p></label>
          </div>
          <div className="radio">
            <label><input type="radio" name="optradio" value={this.props.data.option1} />{this.props.data.option1}<br /></label>
          </div>
          <div className="radio">
            <label><input type="radio" name="optradio" value={this.props.data.option2} />{this.props.data.option2}<br /></label>
          </div>
          <div className="radio">
            <label><input type="radio" name="optradio" value={this.props.data.option3} />{this.props.data.option3}<br /></label>
          </div>
          <div className="radio">
            <label><input type="radio" name="optradio" value={this.props.data.option4} />{this.props.data.option4}<br /></label>
          </div>
          <button className='btn btn-primary' type='submit'>SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default Form;