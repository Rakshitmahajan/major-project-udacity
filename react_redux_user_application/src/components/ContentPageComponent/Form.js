import React from 'react';
class Form extends React.Component {
  submitForm = (body) => {
    let form = document.getElementsByTagName('form');
    console.log('submit form', form)
    alert('svsdvds');
  }
  render() {
    console.log(this.props.data)
    return (
      <div className="index--container--2OwOl">
        <div className="index--atom--lmAIo layout--content--3Smmq">
          <div className="quiz-styles--prompt--ZLAZm">
            <div className="index-module--markdown--2MdcR ureact-markdown ">
              <h3 className="quiz-styles--question-number--3EbH8">Question-  {this.props.data.question}</h3>
            </div>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value={this.props.data.option1} id="exampleRadios1" name="option" />
            <label className="form-check-label">{this.props.data.option1}</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value={this.props.data.option2} id="exampleRadios1" name="option" />
            <label className="form-check-label">{this.props.data.option2}</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value={this.props.data.option3} id="exampleRadios1" name="option" />
            <label className="form-check-label">{this.props.data.option3}</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value={this.props.data.option4} id="exampleRadios1" name="option" />
            <label className="form-check-label">{this.props.data.option4}</label>
          </div>
          {/* <form onSubmit={this.submitForm}>
            <div className="quiz-styles--container--2-qpA">
              <div className="quiz-styles--prompt--ZLAZm">
                <h3 className="quiz-styles--question-number--3EbH8">Question 1 of 5</h3>
                <div className="index-module--markdown--2MdcR ureact-markdown ">
                  <p>{this.props.data.question}</p>
                </div>
              </div>
              <ul>
                <li className="_answer--answer-correct--13UjS _answer--answer--1HCPX">
                  <div className="_answer--answered-label--313DP">
                    <div className="index-module--markdown--2MdcR ureact-markdown ">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name={this.props.data.option1} id="exampleRadios1" value="option1" />
                        <label className="form-check-label">{this.props.data.option1}</label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="_answer--answer-correct--13UjS _answer--answer--1HCPX">
                  <div className="_answer--answered-label--313DP">
                    <div className="index-module--markdown--2MdcR ureact-markdown ">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name={this.props.data.option2} id="exampleRadios1" value="option2" />
                        <label className="form-check-label">{this.props.data.option2}</label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="_answer--answer-correct--13UjS _answer--answer--1HCPX">
                  <div className="index-module--markdown--2MdcR ureact-markdown ">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name={this.props.data.option3} id="exampleRadios1" value="option3" />
                      <label className="form-check-label">{this.props.data.option3}</label>
                    </div>
                  </div>
                </li>
                <li className="_answer--answer-correct--13UjS _answer--answer--1HCPX">
                  <div className="_answer--answered-label--313DP">
                    <div className="index-module--markdown--2MdcR ureact-markdown ">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name={this.props.data.option3} id="exampleRadios1" value="option4" />
                        <label className="form-check-label">{this.props.data.option3}</label>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="checkbox-quiz-atom--buttons--cp1vx _quiz-atom--buttons--3vJgG">
              <button className="vds-button vds-button--primary" aria-busy="false" type="button" onClick={this.submitForm}>
                <span className="vds-button__content">Submit</span></button>
            </div>
          </form> */}
          <span></span>
        </div>
      </div >
    );
  }
}

export default Form;