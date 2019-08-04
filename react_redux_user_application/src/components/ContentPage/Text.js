import React from 'react';
class Text extends React.Component {
  render() {
    return (
      <div className="index--container--2OwOl">
        <div className="index--atom--lmAIo layout--content--3Smmq">
          <div className="ltr">
            <h1 id="collaboration-setup">{this.props.heading}</h1>
            <div className="index-module--markdown--2MdcR ureact-markdown ">
              <p>{this.props.paragraph}</p>
            </div>
          </div><span></span>
        </div>
      </div>
    );
  }
}

export default Text;