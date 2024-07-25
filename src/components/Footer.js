import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
           <img src={logo} alt="" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sarandeep-singh-ghai-7439722b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/array_sahib?igsh=MWNidGM5bnJvbWF3OA%3D%3D&utm_source=qr"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/sarandeepsinghghai"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Thank You For Giving Your Time.  </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
