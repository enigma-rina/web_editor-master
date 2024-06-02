import React, { useState, useEffect } from "react";
import { Remarkable } from "remarkable";
import { Container, Row, Col } from "react-bootstrap";
import { useLocalStorage } from "../../Hooks/LocalStorage";
import { linkify } from "remarkable/linkify";
import TextareaAutosize from "react-autosize-textarea";
import Toolbar from "./Toolbar";
import Footer from "../Footer";
import fileDownload from "js-file-download";
import "bootstrap/dist/css/bootstrap.min.css";

function Editor() {
  const InitialVal = `## Добро пожаловать в Редактор

  **Возможности**
  
  - _Пользовательская панель инструментов_
  - _Поддержка HTML_
  - _Просмотр в режиме реального времени_
  - _Загрузка файла_`;

  const body = {
    background: "#222223",
    paddingTop: "30px",
    paddingBottom: "50px",
    fontFamily: "Pixelify Sans",
    color: "white",
  };
  const mdIn = {
    fontFamily: "monospace",
    width: "100%",
    height: "auto",
    minHeight: "80vh",
    padding: "15px 15px",
    borderRadius: "2px",
    background: "white",
    boxShadow: "rgb(0 0 0 / 49%) 2px 2px 10px",
    border: 0,
    outline: "none",
  };
  const mdOut = {
    fontFamily: "monospace",
    width: "100%",
    height: "auto",
    minHeight: "80vh",
    padding: "15px 15px",
    borderRadius: "2px",
    background: "white",
    boxShadow: "rgb(0 0 0 / 49%) 2px 2px 10px",
    backgroundColor: "#f3f3f3",
    color: "black",
  };

  var md = new Remarkable({
    html: true,
    xhtmlOut: true,
    langPrefix: "language-",
    quotes: "“”‘’",
    typographer: true,
  });
  md.use(linkify);

  const [userInput, updateStorageInput] = useLocalStorage(
    "mdEditor",
    InitialVal
  );
  const [userOut, updateOut] = useState("");

  useEffect(() => {
    let res = md.render(userInput);
    updateOut(res);
  }, [userInput]);

  const handelChange = (e) => {
    updateStorageInput(e.target.value);
  };

  return (
    <div>
      <Container fluid style={body}>
        <Row
          style={{
            justifyContent: "center",
            paddingLeft: "45px",
            paddingRight: "45px",
            paddingTop: "25px",
          }}
        >
          <Col md={6} className="text-center">
            <h3 className="text-center">Markdown Editor</h3>
            <Toolbar
              clickHandler={() => {
                fileDownload(userInput, "README.md");
              }}
            />
            <TextareaAutosize
              id="textarea_input"
              onChange={handelChange}
              value={userInput}
              style={mdIn}
            />
          </Col>
          <Col md={6} style={{ paddingTop: "35px" }}>
            <h3 className="text-center"> HTML Preview</h3>
            <div
              dangerouslySetInnerHTML={{ __html: userOut }}
              style={mdOut}
            ></div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default Editor;
