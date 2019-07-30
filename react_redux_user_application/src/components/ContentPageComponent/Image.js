/*
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img
*/
import React from 'react';
import './Image';
class Image extends React.Component {
  state = {}
  // imagePopup = () => {
  //   var modal = document.getElementById("myModal");
  //   var img = document.getElementById("myImg");
  //   var modalImg = document.getElementById("img01");
  //   var captionText = document.getElementById("caption");
  //   modal.style.display = "block";
  //   modalImg.src = this.src;
  //   captionText.innerHTML = this.alt;
  //   var span = document.getElementsByClassName("close")[0];
  // }
  // spanOnclick = () => {
  //   var modal = document.getElementById("myModal");
  //   modal.style.display = "none";
  // }
  render() {
    console.log(this.props.src);
    return (
      <div>
        <div>
          <img id='myImg' src={this.props.src} className="img-fluid" alt="Responsive image" onClick={this.imagePopup} />
        </div>
        <div>
          <p>
            <em className='text-muted blockquote-footer'>
              {this.props.caption}
            </em>
          </p>
        </div>
        {/* <div id="myModal" className="modal">
          <span className="close" onClick={this.spanOnclick}>&times;</span>
          <img className="modal-content" id="img01" />
          <div id="caption"></div>
        </div> */}
      </div>
    );
  }
}

export default Image;