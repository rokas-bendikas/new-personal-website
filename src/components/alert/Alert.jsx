import React from 'react'

import "./Alert.css"

function BottomAlert() {

  let width = window.innerWidth;
  let MyAlert;

  console.log(width)

  if (width > 650) {
    MyAlert = (
      <div id="bottom-alert">
        <div className="alert alert-custom">
            ©2022 Rokas Bendikas. The website is built using <a href="https://reactjs.org/" target="_black">React</a>, 
            <a href="https://getbootstrap.com/" target="_black"> Bootstrap</a> and 
            <a href="https://www.w3schools.com/css/" target="_black"> CSS3</a>.
        </div>
    </div>);
  } else {
    MyAlert = (
      <div id="bottom-alert">
        <div className="alert alert-custom">
            ©2022 Rokas Bendikas.
        </div>
    </div>);
  }

  return (
    MyAlert
  )
}

export default BottomAlert