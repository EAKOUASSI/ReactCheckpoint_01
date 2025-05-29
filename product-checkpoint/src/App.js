import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = "Eric"; // ou "" si tu veux tester l'autre condition

function App() {
  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <Card style={{ width: "20rem" }} className="shadow p-3">
        <Image />
        <Card.Body className="text-center">
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="mt-3 text-center">
        <h4>Bonjour{firstName ? ` ${firstName} !` : " !"}</h4>
        {firstName && (
          <img
            src="https://via.placeholder.com/100"
            alt="avatar"
            className="rounded-circle mt-2"
          />
        )}
      </div>
    </Container>
  );
}

export default App;
