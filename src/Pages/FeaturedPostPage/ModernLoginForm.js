import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // You can use any other style
import "./ModernLoginForm.css";

const ModernLoginForm = () => {
    const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Modern Login Form | Code_Catalyst27</title>
  <link rel='stylesheet' href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'>
  <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Poppins&amp;display=swap'>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="wrapper">
    <div class="login_box">
      <div class="login-header">
        <span>Login</span>
      </div>
      <div class="input_box">
        <input type="text" id="user" class="input-field" required>
        <label for="user" class="label">Username</label>
        <i class="bx bx-user icon"></i>
      </div>
      <div class="input_box">
        <input type="password" id="pass" class="input-field" required>
        <label for="pass" class="label">Password</label>
        <i class="bx bx-lock-alt icon"></i>
      </div>
      <div class="remember-forgot">
        <div class="remember-me">
          <input type="checkbox" id="remember">
          <label for="remember">Remember me</label>
        </div>
        <div class="forgot">
          <a href="#">Forgot password?</a>
        </div>
      </div>
      <div class="input_box">
        <input type="submit" class="input-submit" value="Login">
      </div>
      <div class="register">
        <span>Don't have an account? <a href="#">Register</a></span>
      </div>
    </div>
  </div>
</body>
</html>
  `;

    const cssCode = `
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
}

.login_box {
  width: 400px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-header {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.input_box {
  position: relative;
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.label {
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 14px;
  background: white;
  padding: 0 5px;
}
`;

    return (
        <div className="modern-login-form">
            <h1 className="main-heading" style={{ color: "blue" }}>
                Modern Login Form
            </h1>

            <img
                src="/assets/modernloginform.jpeg"
                alt="Modern Login Form Preview"
                className="preview-image"
            />

            <h2 className="section-heading">HTML:</h2>
            <p className="description">
                The given code is an HTML document that represents a modern login form. It includes input fields for username and password, a remember me checkbox, a forgot password link, a login button, and a register link. The form is styled using CSS and utilizes the Boxicons library for icons. The Poppins font is also imported for typography.
            </p>
            <SyntaxHighlighter language="html" style={materialDark} className="modern-form-html">
                {htmlCode}
            </SyntaxHighlighter>

            <h2 className="section-heading">CSS:</h2>
            <p className="description">
                The provided CSS code is used to style the login form. It sets the font family to “Poppins”, defines color variables, sets a background image for the body, and applies styles to various elements such as the login box, input fields, labels, icons, and submit button. It also includes media queries for responsive design on smaller screens.
            </p>
            <SyntaxHighlighter language="css" style={materialDark} className="modern-form-css">
                {cssCode}
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

export default ModernLoginForm;
