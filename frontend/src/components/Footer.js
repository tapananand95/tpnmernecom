import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <Row>
          <Col className='text-center py-md-5' id='text-color'> &copy; OnlineKhareedo - Highest quality products at lowest possible prices! </Col>
        </Row>
    </footer>
  )
}

export default Footer
