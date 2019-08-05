import React from 'react';
class Code extends React.Component {
  render() {
    return (
      <div className="index--container--2OwOl">
        <div className="index--atom--lmAIo layout--content--3Smmq">
          <div className="ltr">
            <div className="index-module--markdown--2MdcR ureact-markdown ">
              <pre><code className="lang-bash">$ {this.props.code}</code></pre>
            </div>
          </div><span></span>
        </div>
      </div>
    );
  }
}

export default Code;