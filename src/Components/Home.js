import React from "react";
import { Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../App.css";
import picture from "../Assets/picture.png";
import "bootstrap/dist/css/bootstrap.min.css";


function Home() {
  const wrapper = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #000000, #6b38fb)",
    color: "#6B38FB",
    fontFamily: "'Jacquard 12', sans-serif",
    padding: "20px",
    position: "relative",
  };

  const titleStyle = {
    textAlign: "left",
    marginTop: "0.1vh",
    marginBottom: "5vh",
    fontSize: "11vw",
    color: "#FFFFFF",
  };

  const textStyle = {
    textAlign: "left",
    marginBottom: "5vh",
    fontSize: "0.5vw",
    color: "#FFFFFF",
    shapeOutside: "url(" + picture + ")",
    float: "left",
    width: "50%",
    padding: "0 20px",
    fontFamily: "Pixelify Sans",
  };

  const btnWrapper = {
    display: "flex",
    justifyContent: "flex-start",
    gap: "20px",
    marginTop: "5vh",
  };

  const btnStyle = {
    fontFamily: "Pixelify Sans",
    fontWeight: 600,
    fontSize: "1.1vw",
    padding: "10px 20px",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    border: "0px solid #E437FB",
    borderRadius: "50px",
    transition: "background-color 0.3s ease-in-out",
  };

  const webBtnStyle = {
    ...btnStyle,
    backgroundColor: "#E437FB",
  };

  const markdownBtnStyle = {
    ...btnStyle,
    border: "2px solid #8e0ce8",
    color: "#8e0ce8",
  };

  const imgStyle = {
    position: "absolute",
    bottom: 0,
    right: 0,
    maxWidth: "50%",
    height: "auto",
  };

  return (
    <div style={wrapper}>
      <Container>
        <Row style={{ width: "100%" }}>
          <h1 style={titleStyle}>CodeEditor</h1>
        </Row>
        <Row style={{ width: "100%", justifyContent: "flex-start" }}>
          <div style={textStyle}>
            <h5>
              С помощью данного редактора вы можете превратить свои идеи в веб-проекты из любой точки мира. Создавайте и тестируйте веб-страницы с помощью этого мощного инструмента для веб-разработки.
            </h5>
          </div>
        </Row>
        <div style={btnWrapper}>
          <Button variant="primary" style={webBtnStyle} as={Link} to="/web">
            web-editor
          </Button>
          <Button variant="primary" style={markdownBtnStyle} as={Link} to="/markdown">
            markdown-editor
          </Button>
        </div>
        <img src={picture} alt="stone angel" style={imgStyle} />
      </Container>
    </div>
  );
}

export default Home;
