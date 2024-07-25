import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const emailId = "your-email@example.com";
  const phoneNumber = "+1234567890";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text} copied to clipboard`);
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <p>Email: {emailId} <button onClick={() => copyToClipboard(emailId)}>Copy</button></p>
                <p>Phone: {phoneNumber} <button onClick={() => copyToClipboard(phoneNumber)}>Copy</button></p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
