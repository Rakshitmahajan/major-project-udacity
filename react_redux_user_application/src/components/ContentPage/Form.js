import React from 'react';
class Form extends React.Component {
  state = {
    option: null
  }
  submitForm = (e) => {
    this.setState({
      option: e.target.value
    })
  }
  submitData = () => {
    let title = document.getElementById('modal-body');
    if (this.state.option === this.props.data.answer)
      title.innerHTML = 'Great Work';
    else title.innerHTML = 'Try Again';
  }
  render() {
    return (
      <div className="index--container--2OwOl">
        <div className="index--atom--lmAIo layout--content--3Smmq">
          <div className="quiz-styles--prompt--ZLAZm">
            <div className="index-module--markdown--2MdcR ureact-markdown ">
              <h3 className="quiz-styles--question-number--3EbH8">Question - {this.props.data.question}</h3>
            </div>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="option1" id="exampleRadios1" name="option" onClick={(e) => this.submitForm(e)} />
            <label className="form-check-label">{this.props.data.option1}</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="option2" id="exampleRadios1" name="option" onClick={(e) => this.submitForm(e)} />
            <label className="form-check-label">{this.props.data.option2}</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="option3" id="exampleRadios1" name="option" onClick={(e) => this.submitForm(e)} />
            <label className="form-check-label">{this.props.data.option3}</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="option4" id="exampleRadios1" name="option" onClick={(e) => this.submitForm(e)} />
            <label className="form-check-label">{this.props.data.option4}</label>
          </div>
          <div className="checkbox-quiz-atom--buttons--cp1vx _quiz-atom--buttons--3vJgG">
            <button type="button" className="vds-button vds-button--primary" data-toggle="modal" data-target="#exampleModal" onClick={this.submitData}>
              <span className="vds-button__content">Submit</span>
            </button>
          </div>
          <span></span>

          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title" id="exampleModalLabel"></h2>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body" id='modal-body'>...</div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Form;