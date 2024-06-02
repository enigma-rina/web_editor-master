import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Editor from "./WebEditor/Editor";
import Footer from "./Footer";
import { useLocalStorage } from "../Hooks/LocalStorage";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function LaunguageManager() {
  const getBlobURL = (code, type) => {
    const blob = new Blob([code], { type });
    return URL.createObjectURL(blob);
  };

  const htmlDefault = `
  <div class="container">
    <h1>Welcome to CodeEditor</h1>
    <p>Это простой пример страницы с использованием различных стилей.</p>
    <button id="action-button">Click me!</button>
  </div>`;

  const cssDefault = `
  body {
    font-family: Arial, sans-serif;
    background: linear-gradient(150deg, #00ffed 0%, #fb36f4 100%);
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  h1 {
    color: #333;
  }
  p {
    color: #666;
  }
  #action-button {
    padding: 10px 20px;
    background: #fb36f4;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  #action-button:hover {
    background: #00ffed;
  }`;

  const jsDefault = `
  document.getElementById("action-button").addEventListener("click", function() {
    alert("Button clicked!");
  });`;

  const [htmlVal, updateHtmlStrorage] = useLocalStorage("html", htmlDefault);
  const [cssVal, updateCssStrorage] = useLocalStorage("css", cssDefault);
  const [jsVal, updateJsStrorage] = useLocalStorage("js", jsDefault);

  const [html, updateHtml] = useState(htmlVal);
  const [css, updateCss] = useState(cssVal);
  const [js, updateJs] = useState(jsVal);

  const cssURL = getBlobURL(css, "text/css");
  const jsURL = getBlobURL(js, "text/javascript");

  const srcDoc = `
      <!DOCTYPE html>
      <html>
      <head>
      ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      </head>
        <body>${html}
        ${js && `<script src="${jsURL}"></script>`}
        </body>
      </html>`;

  useEffect(() => {
    setTimeout(() => {}, 500);
    updateHtmlStrorage(html);
    updateCssStrorage(css);
    updateJsStrorage(js);
  }, [html, css, js]);

  return (
    <div>
      <Container fluid={true} className="pane pane-top">
        <Row noGutters={true}>
          <Col md={4} className="editor-lang">
            <div className="editor-text">
              <i className="fab fa-html5"> </i> HTML
            </div>
            <Editor
              launguage="xml"
              value={html}
              onChange={(newVal) => {
                updateHtml(newVal);
              }}
            />
          </Col>

          <Col md={4} className="editor-lang">
            <div className="editor-text">
              <i className="fab fa-css3-alt"></i> CSS
            </div>
            <Editor
              launguage="css"
              value={css}
              onChange={(newVal) => {
                updateCss(newVal);
              }}
            />
          </Col>

          <Col md={4} className="editor-lang">
            <div className="editor-text">
              <i className="fab fa-js-square"></i> JS
            </div>
            <Editor
              launguage="javascript"
              value={js}
              onChange={(newVal) => {
                updateJs(newVal);
              }}
            />
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="pane pane-bottom">
        <Row noGutters={true}>
          <iframe
            srcDoc={srcDoc}
            className="output-pane"
            allowFullScreen
          ></iframe>
        </Row>
      </Container>
      
      <Footer />
    </div>
  );
}

export default LaunguageManager;
