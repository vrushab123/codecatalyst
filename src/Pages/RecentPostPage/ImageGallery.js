import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // You can use any other style
import "./ImageGallery.css";

const ImageGallery = () => {
    const htmlCode = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Image Gallery</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <h1>Hover To View Full Image</h1>
    <div class="image-gallery">
        <div class="gallery-item" style="background-image: url('https://via.placeholder.com/100x300');">
            <span class="gallery-title">Image 1</span>
        </div>
        <div class="gallery-item" style="background-image: url('https://via.placeholder.com/100x300');">
            <span class="gallery-title">Image 2</span>
        </div>
        <div class="gallery-item" style="background-image: url('https://via.placeholder.com/100x300');">
            <span class="gallery-title">Image 3</span>
        </div>
        <div class="gallery-item" style="background-image: url('https://via.placeholder.com/100x300');">
            <span class="gallery-title">Image 4</span>
        </div>
        <div class="gallery-item" style="background-image: url('https://via.placeholder.com/100x300');">
            <span class="gallery-title">Image 5</span>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>
  `;

    const cssCode = `/* styles.css */

body {
    margin: 0;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000000;
}

h1 {
    color: blue;
}

.image-gallery {
    display: flex;
    width: 75%;
    gap: 141px;
    overflow: hidden;
    background-color: transparent;
}

.gallery-item {
    flex: 1;
    height: 300px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    position: relative;
    transition: flex 0.3s ease-in-out, transform 0.3s ease-in-out;
    cursor: pointer;
    background-color: blue;
}

.gallery-item:hover {
    flex: 4;
    transform: scale(1.05);
}

.gallery-title {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    pointer-events: none;
}
`;
    const jsCode = `const galleryItems = document.querySelectorAll('.gallery-item');

// Optionally handle hover effects dynamically
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Add hover class dynamically if needed
        item.style.flex = "4";
    });

    item.addEventListener('mouseleave', () => {
        // Reset flex when hover ends
        item.style.flex = "1";
    });
});
`;

    return (
        <div className="image-gallery">
            <h1 className="main-heading" style={{ color: "blue" }}>
                Image Gallery
            </h1>

            <img
                src="/assets/Image Gallery.png"
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

            <h2 className="section-heading">JS:</h2>
            <p className="description">
                The provided JS code handles the hover effects dynamically. It adds event listeners to each gallery item to change the flex value when the mouse is over it. The flex value is reset when the mouse leaves the item.
            </p>
            <SyntaxHighlighter language="js" style={materialDark} className="modern-form-js">
                {jsCode}
            </SyntaxHighlighter>

            <p className="description">
                You can customize the styles further to suit your application's theme.
            </p>

            <button
                className="download-button"
                onClick={() => {
                    const fileUrl = "/files/Modern-Login-Form.zip";
                    const link = document.createElement("a");
                    link.href = fileUrl;
                    link.download = "modern-login-form.zip";
                    link.click();
                }}
            >
                Download Source Code
            </button>
        </div>
    );
};

export default ImageGallery;
