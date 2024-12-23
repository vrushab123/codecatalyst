import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // You can use any other style
import "./ModernPortfolio.css";

const ModernPortfolio = () => {
    const htmlCode = `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Valentines Day Card</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
 
  <div id="card">
    <center><h1>Valentines Day Card </h1></center>
    <div class="heart" id="heart1">
      <div id="half1">
        <div id="circle"></div>
        <div id="rec"></div>
      </div>
      <div id="half2">
        <div id="circle"></div>
        <div id="rec"></div>
      </div>
    </div>
    <div id="message">
      <h2>Happy Valentines Day</h2>
    </div>
    <div class="heart" id="heart2">
      <div id="half1">
        <div id="circle"></div>
        <div id="rec"></div>
      </div>
      <div id="half2">
        <div id="circle"></div>
        <div id="rec"></div>
      </div>
    </div>
  </div>
  
</body>
</html>
  `;

    const cssCode = `@import url(https://fonts.googleapis.com/css?family=Poiret+One);
body {
  background-color: #ddd;
  font-family: "Poiret One", Segoe UI Light, cursive;
}

#card {
  position: absolute;
  top: 100px;
  width: 460px;
  height: 260px;
  left: 50%;
  margin-left: -230px;
}

#card .heart {
  width: 260px;
  height: 260px;
  float: left;
}
#card .heart #circle {
  height: 130px;
  width: 130px;
  border-radius: 50%;
  background-color: #d32f2f;
}
#card .heart #rec,
#card .heart #rec2 {
  margin-top: -60px;
  width: 130px;
  height: 130px;
  background-color: #d32f2f;
  border-radius: 35% 0 0 0;
}
#card .heart #half2 {
  -ms-transform: rotate(-90deg);
  /* IE 9 */
  -webkit-transform: rotate(-90deg);
  /* Chrome, Safari, Opera */
  transform: rotate(-90deg);
  margin-top: -330px;
  margin-left: -200px;
}
#card #heart2 {
  margin-top: -60px;
  margin-left: -130px;
}
#card #heart2 #circle,
#card #heart2 #rec {
  background-color: #fff;
}
#card #heart2 #half2 #rec {
  border-bottom: 1px solid #eee;
  margin-top: -61px;
}
#card #message {
  float: left;
  width: 200px;
  height: 200px;
  margin-left: -130px;
  background-color: #333;
  border-radius: 35% 0 35% 0;
  text-align: center;
}
#card #message h2 {
  font-size: 20px;
  color: #fff;
  width: 160px;
  margin-top: 60px;
  margin-left: 16px;
}
#card #heart1 {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  -webkit-animation: closeLeft 2s ease-in-out forwards;
  -moz-animation: closeLeft 2s ease-in-out forwards;
  -ms-animation: closeLeft 2s ease-in-out forwards;
  animation: closeLeft 2s ease-in-out forwards;
}
#card #heart2 {
  -webkit-animation: closeRight 2s ease-in-out forwards;
  -moz-animation: closeRight 2s ease-in-out forwards;
  -ms-animation: closeRight 2s ease-in-out forwards;
  animation: closeRight 2s ease-in-out forwards;
}

#card:hover #heart1 {
  -webkit-animation: openLeft 2s ease-in-out forwards;
  -moz-animation: openLeft 2s ease-in-out forwards;
  -ms-animation: openLeft 2 ease-in-out forwards;
  animation: openLeft 2s ease-in-out forwards;
}
#card:hover #heart2 {
  -webkit-animation: openRight 2s ease-in-out forwards;
  -moz-animation: openRight 2s ease-in-out forwards;
  -ms-animation: openRight 2 ease-in-out forwards;
}

@-webkit-keyframes closeLeft {
  from {
    -webkit-transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
  }
}
@-moz-keyframes closeLeft {
  from {
    -moz-transform: rotateY(0deg);
  }
  to {
    -moz-transform: rotateY(180deg);
  }
}
@-ms-keyframes closeLeft {
  from {
    -ms-transform: rotateY(0deg);
  }
  to {
    -ms-transform: rotateY(180deg);
  }
}
@keyframes closeLeft {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
}
@-moz-keyframes openLeft {
  from {
    -moz-transform: rotateY(180deg);
  }
  to {
    -moz-transform: rotateY(0deg);
  }
}
@-webkit-keyframes openLeft {
  from {
    -webkit-transform: rotateY(180deg);
  }
  to {
    -webkit-transform: rotateY(0deg);
  }
}
@-ms-keyframes openLeft {
  from {
    -ms-transform: rotateY(180deg);
  }
  to {
    -ms-transform: rotateY(0deg);
  }
}
@keyframes openLeft {
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
@-moz-keyframes openRight {
  0% {
    -moz-transform: rotateX(180deg);
  }
  100% {
    -moz-transform: rotateX(0deg) rotateZ(180deg);
  }
}
@-webkit-keyframes openRight {
  0% {
    -webkit-transform: rotateX(180deg);
  }
  100% {
    -webkit-transform: rotateX(0deg) rotateZ(180deg);
  }
}
@-ms-keyframes openRight {
  0% {
    -ms-transform: rotateX(180deg);
  }
  100% {
    -ms-transform: rotateX(0deg) rotateZ(180deg);
  }
}
@keyframes openRight {
  0% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(0deg) rotateZ(180deg);
  }
}
@-webkit-keyframes closeRight {
  from {
    -webkit-transform: rotateX(0deg) rotate(180deg);
  }
  to {
    -webkit-transform: rotateX(180deg);
  }
}
@-moz-keyframes closeRight {
  from {
    -moz-transform: rotateX(0deg) rotate(180deg);
  }
  to {
    -moz-transform: rotateX(180deg);
  }
}
@-ms-keyframes closeRight {
  from {
    -ms-transform: rotateX(0deg) rotate(180deg);
  }
  to {
    -ms-transform: rotateX(180deg);
  }
}
@keyframes closeRight {
  from {
    transform: rotateX(0deg) rotate(180deg);
  }
  to {
    transform: rotateX(180deg);
  }
}
`;

    return (
        <div className="modern-portfolio">
            <h1 className="main-heading" style={{ color: "blue" }}>
                Modern Portfolio
            </h1>

            <img
                src="/assets/ModernPortfolio.png"
                alt="Modern Login Form Preview"
                className="preview-image"
            />

            <h2 className="section-heading">Elevate Your Online Presence</h2>
            <p className="description">
                For Your Carreer or Business to get more visibility and recognition, you need a professional website. Our modern portfolio template is designed to showcase your work, skills, and experience in a visually appealing way. So Have a look at our modern portfolio template and get ready to elevate your online presence.
            </p>
            <p className="description">
                This Template contains all the necessary features to create a professional website. It includes a responsive design, a modern layout. Such a modern looking template will surely attract more visitors to your website. Get a upperhand in the competitive world of online presence.
            </p>
            {/* <SyntaxHighlighter language="html" style={materialDark} className="modern-form-html">
                {htmlCode}
            </SyntaxHighlighter> */}

            {/* <h2 className="section-heading">CSS:</h2>
            <p className="description">
                This CSS code styles a Valentine’s Day card webpage, setting the background color, font, and layout. It creates two heart shapes, styled with red and white colors, and adds animation for a flipping effect when hovering over them. Overall, it enhances the visual appeal of the Valentine’s Day card.
            </p>
            <SyntaxHighlighter language="css" style={materialDark} className="modern-form-css">
                {cssCode}
            </SyntaxHighlighter>

            <p className="description">
                You can customize the styles further to suit your application's theme.
            </p> */}

            <button
                className="download-button"
                onClick={() => {
                    const fileUrl = "/files/ModernPortfolio.zip";
                    const link = document.createElement("a");
                    link.href = fileUrl;
                    link.download = "Modern-Portfolio.zip";
                    link.click();
                }}
            >
                Download Source Code
            </button>
        </div>
    );
};

export default ModernPortfolio;
