// src/App.js
import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import "../App.css"; // Usage de lien CSS pour la modification de l'image Hello
import Hi from "../Image/Hello.webp";

const firstName = "Jade"; // Changez ce prénom pour tester les conditions

function App() {
  return (
    <>
      <Container>
        <Card style={{ width: "18rem", height: "23rem", margin: "20px auto" }}>
          <Image />
          <Card.Body>
            <Name />
            <Price />
            <Description />
          </Card.Body>
        </Card>
        <div
          style={{
            textAlign: "center",
            fontFamily: "Theano Dildot",
            marginTop: "20px"
          }}
        >
          <h2>Hello, {firstName ? firstName : "there"}! 🤗🤗🤗</h2>
          {firstName && <img src={Hi} alt="Greeting" className="imgHello" />}
        </div>
      </Container>
    </>
  );
}

export default App;
