import React from "react";
import ReactDOM from "react-dom";

function Contact(props) {
  return (
    <div className="my-style">
      <h1>My Contacts</h1>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" className="img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Contact
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="0898"
      email="b@beyonce.com"
    />
    <Contact
      name="Golden"
      img="https://static.wixstatic.com/media/f2c7ab_17e00adeeeec44309750a46e5718a30f~mv2.jpeg/v1/fill/w_980,h_784,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f2c7ab_17e00adeeeec44309750a46e5718a30f~mv2.jpeg"
      tel="098"
      email="golden@.com"
    />
  </div>,
  document.getElementById("root")
);
