import React from "react";
import "./Cards.css";

const Carousels = ({ closeModal }) => {
    // Sample card data
    //   const cardTypes = [
    //     {
    //       name: "Flipping Card",
    //       preview: (
    //         <div className="flipping-card">
    //           <div className="flipping-card-inner">
    //             <div className="flipping-card-front">Front</div>
    //             <div className="flipping-card-back">Back</div>
    //           </div>
    //         </div>
    //       ),
    //       code: {
    //         html: `
    // <div class="flipping-card">
    //   <div class="flipping-card-inner">
    //     <div class="flipping-card-front">Front</div>
    //     <div class="flipping-card-back">Back</div>
    //   </div>
    // </div>`,
    //         css: `
    // .flipping-card {
    //   width: 200px;
    //   height: 300px;
    //   perspective: 1000px;
    // }

    // .flipping-card-inner {
    //   position: relative;
    //   width: 100%;
    //   height: 100%;
    //   text-align: center;
    //   transition: transform 0.8s;
    //   transform-style: preserve-3d;
    // }

    // .flipping-card:hover .flipping-card-inner {
    //   transform: rotateY(180deg);
    // }

    // .flipping-card-front,
    // .flipping-card-back {
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //   backface-visibility: hidden;
    // }

    // .flipping-card-front {
    //   background-color: #bbb;
    //   color: black;
    // }

    // .flipping-card-back {
    //   background-color: #2980b9;
    //   color: white;
    //   transform: rotateY(180deg);
    // }`,
    //         js: "No JavaScript needed."
    //       }
    //     },
    //     {
    //       name: "Folding Card",
    //       preview: (
    //         <div className="folding-card">
    //           <div className="folding-card-front">Front</div>
    //           <div className="folding-card-back">Back</div>
    //         </div>
    //       ),
    //       code: {
    //         html: `
    // <div class="folding-card">
    //   <div class="folding-card-front">Front</div>
    //   <div class="folding-card-back">Back</div>
    // </div>`,
    //         css: `
    // .folding-card {
    //   width: 200px;
    //   height: 300px;
    //   overflow: hidden;
    //   position: relative;
    // }

    // .folding-card-front {
    //   background: #e74c3c;
    //   color: white;
    //   height: 100%;
    //   transition: transform 0.5s;
    // }

    // .folding-card:hover .folding-card-front {
    //   transform: translateY(-100%);
    // }

    // .folding-card-back {
    //   background: #3498db;
    //   color: white;
    //   position: absolute;
    //   top: 100%;
    //   height: 100%;
    //   width: 100%;
    //   transition: top 0.5s;
    // }

    // .folding-card:hover .folding-card-back {
    //   top: 0;
    // }`,
    //         js: "No JavaScript needed."
    //       }
    //     },
    //     {
    //       name: "Hovering Card",
    //       preview: (
    //         <div className="hover-card">
    //           <h3>Hover Card</h3>
    //           <p>This card elevates on hover.</p>
    //         </div>
    //       ),
    //       code: {
    //         html: `
    // <div class="hover-card">
    //   <h3>Hover Card</h3>
    //   <p>This card elevates on hover.</p>
    // </div>`,
    //         css: `
    // .hover-card {
    //   width: 200px;
    //   padding: 20px;
    //   background: #ffffff;
    //   border: 1px solid #ddd;
    //   border-radius: 8px;
    //   text-align: center;
    //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    //   transition: transform 0.3s, box-shadow 0.3s;
    // }

    // .hover-card:hover {
    //   transform: translateY(-10px);
    //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    //   background-color: #f0f8ff;
    // }`,
    //         js: "No JavaScript needed."
    //       }
    //     },
    //     // Add more card types similarly
    //   ];

    return (
        <div className="cards-modal-overlay">
            <div className="cards-modal">
                {/* <button onClick={closeModal} className="close-button">&times;</button> */}
                <h2>Carousels Previews & Code</h2>
                {/* <div className="cards-grid" style={{ display: "flex", gap: "30px" }}>
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
        </div> */}
                <h1>Carousel Types Coming Soon!</h1>
            </div>
        </div>
    );
};

export default Carousels;
