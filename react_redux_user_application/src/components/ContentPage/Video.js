import React from 'react';
class Video extends React.Component {
  state = {}
  render() {
    return (
      <div className="index--container--2OwOl">
        <div className="index--atom--lmAIo layout--content--3Smmq">
          <div>
            <div className="video-atom--video--1rflY">
              <div className="wrapper--wrapper--2PKhg">
                <div
                  className="youtube-player--youtubeframeBorder-player--1kyG7">
                  <div
                    className="youtube-player--embed-responsive-16x9--x203G youtube-player--_embed-responsive--wS2qC">
                    <div className="">
                      <iframe className="embed-responsive-item" frameBorder="0" allowFullScreen="1"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        title="YouTube video player" width="640" height="360"
                        src={this.props.src} id="widget6"></iframe></div>
                  </div>
                </div>
              </div>
            </div>
          </div><span></span>
        </div>
      </div>
    );
  }
}

export default Video;