import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fap from "../../Assets/Projects/fap.png";
import jobportal from "../../Assets/Projects/jobportal.png";
import ser from "../../Assets/Projects/ser.png";

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
              imgPath={jobportal}
              isBlog={false}
              title="Job-portal-Mern-stack"
              description="A dynamic job portal built with React offering seamless navigation and user-friendly interface. Features include job listing with filters, user authentication, and a responsive design for diverse devices. Employers can post vacancies, while applicants can easily search, apply, and track their applications. Optimized for efficient job hunting experiences."
              ghLink="https://github.com/shubhamvbhadoriya/Job-portal-Mern-stack"
              demoLink="https://job-portal-shubham-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ser}
              isBlog={false}
              title="Speech emotion recognitionn"
              description="Speech emotion recognition (SER) is the process of identifying the underlying emotions conveyed in spoken language. It involves analyzing acoustic features such as pitch, intensity, and duration to classify emotions like happiness, sadness, anger, and more. SER finds applications in fields like psychology, human-computer interaction, and customer service, aiding in understanding and responding to human emotions effectively. Its advancements leverage machine learning and deep learning techniques to enhance accuracy, making it a valuable tool for various domains."
              ghLink="https://github.com/shubhamvbhadoriya/Speech-emotional-recognition"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fap}
              isBlog={false}
              title="Future admission prediction"
              description="Future admission prediction utilizes machine learning algorithms to forecast the likelihood of admission for prospective applicants based on various factors such as academic performance, standardized test scores, extracurricular activities, and personal statements. By analyzing historical admission data and patterns, these models can provide valuable insights to educational institutions."
              ghLink="https://github.com/shubhamvbhadoriya/Future-Admission-prediction"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
