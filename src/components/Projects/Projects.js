import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import card from "../../Assets/card.png";
import background from "../../Assets/background.png";
import randomPassImg from "../../Assets/heart.png";
import geoglid from "../../Assets/Screenshot (110).png";
import collegesite from "../../Assets/collegesite.png";
import shoppingCartImg from "../../Assets/Projects/shoppingCartImg.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geoglid}
              isBlog={false}
              title="GeoGlide "
              description="Utilizes the OpenStreetMap API to retrieve map data and location information. We have to just put the location and it will show it on the map"
              ghLink="https://principorwal.github.io/GeoGlide/"
              demoLink="https://geoglide.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={collegesite}
              isBlog={false}
              title="CollegeSite"
              description="Developed a responsive college or University website with some functionality. It consist of  details of our college , some reviews of our college pass out students, and some contact info"
              ghLink="https://github.com/PrinciPorwal/College_Site"
              demoLink="https://principorwal.github.io/College_Site//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomPassImg}
              isBlog={false}
              title="Love Calculator"
              description="	It's just a game for fun purpose that shows love percentage between you and loved ones, It's just random. It doesn't take the gurantee of love between you and your parteners,It may show some wrong percentage too
"
              ghLink="https://github.com/PrinciPorwal/Love_calculator"
              demoLink="https://principorwal.github.io/Love_calculator/"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={background}
              isBlog={false}
              title="Background Generator"
              description="It's generates different types of background with different colour.It's made of web Technologies like HTML, CSS, JavaScript"
              ghLink="https://github.com/PrinciPorwal/Background-Generator"
              demoLink="https://principorwal.github.io/Background-Generator/"
            />
          </Col>

      

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={card}
              isBlog={false}
              title="Invitation Card"
              description="It's the online Invitation card that can save our time or money that we spend on printing card for invitation .It also has a form that can help us knowing who will come or not from this we can also save the food that got waste usually ."
              ghLink="https://github.com/PrinciPorwal/WeddingCard"
              demoLink="https://principorwal.github.io/WeddingCard/"      
              // <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
