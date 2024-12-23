import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // You can use any other style
import "./ProductCard.css";

const ProductCard = () => {
    const htmlCode = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="sneaker-preview">
        <div class="product-card">
            <div class="product-image">
                <img src="sneaker.png" alt="Sneaker" />
            </div>
            <div class="product-details">
                <h2>Nike Air Max</h2>
                <p>The ultimate sneaker for style and comfort.</p>
                <button class="buy-now">Buy Now</button>
            </div>
        </div>
    </div>
</body>

</html>`;

    const cssCode = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
}

.sneaker-preview {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #ff0909;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    position: relative;
}

.sneaker-preview:hover {
    width: 300px;
    height: 400px;
    border-radius: 20px;
}

.product-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.5s ease;
}

.sneaker-preview:hover .product-card {
    opacity: 1;
    transform: translateY(-10px);
}

.product-image {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eaeaea;
    transition: all 0.5s;
}

.product-image img {
    max-width: 100%;
    max-height: 100%;
    transition: transform 0.5s ease;
}

.sneaker-preview:hover .product-image img {
    transform: scale(1.1);
}

.product-details {
    text-align: center;
    padding: 20px;
}

.product-details h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.5s ease;
}

.product-details p {
    color: #ffffff;
    font-size: 0.9rem;
    margin-bottom: 20px;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.5s ease 0.1s;
}

.buy-now {
    background-color: #2314ff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.5s ease 0.2s;
}

.sneaker-preview:hover .product-details h2,
.sneaker-preview:hover .product-details p,
.sneaker-preview:hover .buy-now {
    opacity: 1;
    transform: translateY(0);
}`;

    return (
        <div className="product-card">
            <h1 className="main-heading" style={{ color: "blue" }}>
                Product Card
            </h1>

            <img
                src="/assets/product-card.png"
                alt="Modern Login Form Preview"
                className="preview-image"
            />

            <h2 className="section-heading">HTML:</h2>
            <p className="description">
                The given code is an HTML template for a product card. It includes a heading, an image, and a buy now button. The styles are applied using CSS classes. The card initially is circular an on hovering on it the styles are changed.
            </p>
            <SyntaxHighlighter language="html" style={materialDark} className="modern-form-html">
                {htmlCode}
            </SyntaxHighlighter>

            <h2 className="section-heading">CSS:</h2>
            <p className="description">
                The provided CSS code is used to style the product card. It includes classes for the main heading, preview image, product details, and buy now button. The styles are applied using CSS classes. The card initially is circular an on hovering on it the styles are changed.
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
                    const fileUrl = "/files/Product-Card.zip";
                    const link = document.createElement("a");
                    link.href = fileUrl;
                    link.download = "Product-Card.zip";
                    link.click();
                }}
            >
                Download Source Code
            </button>
        </div>
    );
};

export default ProductCard;
