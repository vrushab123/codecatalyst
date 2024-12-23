import React from "react";
import "./ButtonTypes.css";

const ButtonTypes = ({ closeModal }) => {
  // Sample card data
  const cardTypes = [
    {
      name: "Basic Hover Button",
      preview: (
        <button class="hover-btn">Hover Me</button>
      ),
      code: {
        html: `
<button class="hover-btn">Hover Me</button>`,
        css: `
.hover-btn {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.hover-btn:hover {
  background: #2980b9;
}`,
        js: "No JavaScript needed."
      }
    },
    {
      name: "Ripple Button Effect",
      preview: (
        <button class="ripple-btn">Ripple Effect</button>
      ),
      code: {
        html: `
<button class="ripple-btn">Ripple Effect</button>
`,
        css: `
.ripple-btn {
  position: relative;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background: #e74c3c;
  border: none;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
}

.ripple-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.5s, height 0.5s;
}

.ripple-btn:hover::after {
  width: 300px;
  height: 300px;
}
`,
        js: "No JavaScript needed."
      }
    },
    {
      name: "Glow Button",
      preview: (
        <button class="glow-btn">Glow</button>
      ),
      code: {
        html: `
<button class="glow-btn">Glow</button>
`,
        css: `
.glow-btn {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background: #8e44ad;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px #8e44ad;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.glow-btn:hover {
  box-shadow: 0 0 20px #8e44ad, 0 0 40px #8e44ad;
}
`,
        js: "No JavaScript needed."
      }
    },
    // Add more card types similarly
  ];

  return (
    <div className="cards-modal-overlay">
      <div className="cards-modal">
        {/* <button onClick={closeModal} className="close-button">&times;</button> */}
        <h2>Card Previews & Code</h2>
        <div className="cards-grid" style={{ display: "flex", gap: "30px" }}>
          {cardTypes.map((card, index) => (
            <div className="card-item" key={index}>
              <div className="card-preview">{card.preview}</div>
              <div className="card-code">
                <h3>{card.name}</h3>
                <h4>HTML Code:</h4>
                <pre style={{ height: "8%" }}><code>{card.code.html}</code></pre>
                <h4>CSS Code:</h4>
                <pre style={{ height: "8%" }}><code>{card.code.css}</code></pre>
                {card.code.js && (
                  <>
                    <h4>JavaScript Code:</h4>
                    <pre><code>{card.code.js}</code></pre>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <h1>More Buttons Types Coming Soon!</h1>
      </div>
    </div>
  );
};

export default ButtonTypes;
