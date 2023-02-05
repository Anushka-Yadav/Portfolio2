import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Weather on Web",
      description: "Web Development",
      imgUrl: projImg1,
    },
    {
      title: "Restaurant Website",
      description: "Web Development",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio",
      description: "Web Development",
      imgUrl: projImg3,
    },
    {
      title: "Weather on Web",
      description: "Web Development",
      imgUrl: projImg1,
    },
    {
      title: "Restaurant Website",
      description: "Web Development",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio",
      description: "Web Development",
      imgUrl: projImg3,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Recently, I had made projects on Web Development mostly. 
                  But, ahead am proceeding toward programming and connecting databases and building backend.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                      <p> ✔️I enjoy challenges that enable me to grow. I like to relate everything in this field with our day-to-day examples.
                          ✔️Have Explored various parts of country, meet lots of people , so am able to adapt any kind of Surroundings and Circumstances.
                          ✔️Always ready to push up my potential and test myself.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I am always ready to have new /experiences, meet new people and learn new things. I always find the idea of impacting the world through my works.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Interested in DSA and its amzing to learn about its applications in today's world where data is increasing day by day and managing it is a primarily big task.</p>
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