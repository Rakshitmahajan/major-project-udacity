import React from 'react';
class Comment extends React.Component {
  state = {}
  render() {
    return (
      <div className="index--container--2OwOl">
        <div className="index--atom--lmAIo layout--content--3Smmq">
          <div className="ltr">
            <div className="index-module--markdown--2MdcR ureact-markdown ">
              <blockquote><p><i>{this.props.comment}</i></p></blockquote>
            </div>
          </div><span></span>
        </div>
      </div>
    );
  }
}

export default Comment;