import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // You can use any other style
import "./CardHover.css";

const CardHover = () => {
    const htmlCode = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Card Hover Effect</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="card">
        <div class="card-image"></div>
        <img src="boy.png" alt="Hover Image" class="hover-image">
    </div>
</body>

</html>`;

    const cssCode = `body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

.card {
    position: relative;
    width: 300px;
    height: 400px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    transform-origin: center bottom;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    cursor: pointer;
    perspective: 1000px;
    background-color: blue;
    overflow: visible;
}

.card:hover {
    transform: rotateX(30deg);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
}

.card-image {
    background-color: blue;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
    overflow: visible;
}

.hover-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8) perspective(1000px) rotateX(70deg);
    width: 80%;
    height: 80%;
    object-fit: cover;
    border-radius: 10px;
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.card:hover .card-image {
    transform: scale(0.9);
    overflow: visible;
}

.card:hover .hover-image {
    opacity: 1;
    transform: translate(-50%, -68%) scale(1) perspective(1000px) rotateX(0deg);
}`;

    return (
        <div className="card-hover">
            <h1 className="main-heading" style={{ color: "blue" }}>
                Image Gallery
            </h1>

            <img
                src="/assets/Hovering 3D.png"
                alt="Modern Login Form Preview"
                className="preview-image"
            />

            <h2 className="section-heading">HTML:</h2>
            <p className="description">
                The given code is an HTML structure for an image gallery. It includes a heading, a preview image, and a container for the gallery items. The gallery items are represented by div elements with a class of "gallery-item". Each item contains an image and a title. The title is positioned absolutely at the bottom left of the item.
            </p>
            <SyntaxHighlighter language="html" style={materialDark} className="modern-form-html">
                {htmlCode}
            </SyntaxHighlighter>

            <h2 className="section-heading">CSS:</h2>
            <p className="description">
                The provided CSS code styles the image gallery. It sets the layout, positions the title, and adds hover effects to the gallery items. The hover effect increases the flex value of the item when the mouse is over it. The CSS also styles the preview image and the main heading. The hover effect is dynamic and is handled by JavaScript.
            </p>
            <SyntaxHighlighter language="css" style={materialDark} className="modern-form-css">
                {cssCode}
            </SyntaxHighlighter>

            {/* <h2 className="section-heading">JS:</h2>
            <p className="description">
                The provided JS code handles the hover effects dynamically. It adds event listeners to each gallery item to change the flex value when the mouse is over it. The flex value is reset when the mouse leaves the item.
            </p>
            <SyntaxHighlighter language="js" style={materialDark} className="modern-form-js">
                {jsCode}
            </SyntaxHighlighter>

            <p className="description">
                You can customize the styles further to suit your application's theme.
            </p> */}

            <button
                className="download-button"
                onClick={() => {
                    const fileUrl = "/files/3D Hovering.zip";
                    const link = document.createElement("a");
                    link.href = fileUrl;
                    link.download = "3D-Hovering-Card.zip";
                    link.click();
                }}
            >
                Download Source Code
            </button>
        </div>
    );
};

export default CardHover;
