import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsTab1 = [
    {
      title: "Swasthya Services",
      description: "Starting Page",
      imgUrl: projImg1,
      link: "https://swasthya-serivce.onrender.com"
    },
    {
      title: "Swasthya Services",
      description: " Integrated ChatBot",
      imgUrl: projImg2,
      link: "https://swasthya-serivce.onrender.com"
    },
    {
      title: "Swasthya Services",
      description: "Diseases Prediction Page",
      imgUrl: projImg3,
      link: "https://swasthya-serivce.onrender.com"
    },
  ];

  const projectsTab2 = [
    {
      title: "ANPR",
      description: "Detection of foreign numberplate",
      imgUrl: projImg4,
    },
    {
      title: "ANPR",
      description: "Accuracy Chart",
      imgUrl: projImg5,
    },
    {
      title: "ANPR",
      description: "Detection of indian numberplate",
      imgUrl: projImg6,
    },
  ];

  const projectsTab3 = [
    {
      title: "Customer Segmentation",
      description: "Customer Segmentation using histplot",
      imgUrl: projImg7,
    },
    {
      title: "Customer Segmentation",
      description: "Customer Segmentation using kmeans",
      imgUrl: projImg8,
    },
    {
      title: "Customer Segmentation",
      description: "Customer Segmentation using kmeans",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of my projects which i made while persuing B.TECH.
                  Project 1:- It's a full stack website named "Swasthya Services" aiming to provide basic amneties to a person in need like oxygen supply, blood bank and many more.We also made a diseaase prediction tool.
                  Note:- Have a visit to  website to get a clear picture of our work.
                  Project 2:- Automatic Numberplate Recognition System using OCR.
                  Project 3:- Customer Segmentation Using Python Libraries.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsTab1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsTab2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projectsTab3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
