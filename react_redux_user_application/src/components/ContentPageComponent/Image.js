import React from 'react';
import './concepts.css';
class Image extends React.Component {
  render() {
    return (
      <div className="index--container--2OwOl">
        <div className="index--atom--lmAIo layout--content--3Smmq">
          <div>
            <a href="#" className="image-atom--image-atom--1XDdu">
              <div className="index--image-atom-content--YoZVu">
                <div className="index--image-and-annotations-container--1o6QP">
                  <img src={this.props.src} alt={this.props.alt} width="2512px" className="index--image--1wh9w" />
                  <div className="index--caption--34paT p-0">
                    <div className="index-module--markdown--2MdcR ureact-markdown ">
                      <p><em>{this.props.caption}</em></p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <span></span>
        </div><br />
      </div>
    );
  }
}

export default Image;