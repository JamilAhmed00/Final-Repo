import './App.css';
import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Home from './Components/Home/Home';
import AddService from './Components/AddService/AddService';
import UpdateService from './Components/UpdateService/UpdateService';
import Extra from './Components/Extra/Extra';
import AddUpcomming from './Components/AddUpcomming/AddUpcomming';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
      <Route exact path="/" element={<Home/>} />

      <Route exact path="/Banner" element={<Banner/>} />
      {/* <Route path="/Contact" element={<Contact/>} /> */}
      <Route exact path="/Services" element={<Services/>} />
      <Route path="/AddService" element={<AddService/>} />
      <Route path="/Extra" element={<Extra/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/updateService/:serviceId" element={<UpdateService />} />
      <Route path="/AddUpcomming" element={<AddUpcomming />} />
    </Routes>
      <Container>
      <div className='text-center footer mar grad'>
       <Row>
        <Col className='lft'>
         <h1 className='sz'> About us</h1>
         <Nav.Link className='smll' href="/"> Company Info</Nav.Link>
         <Nav.Link className='smll' href="/"> Business Area</Nav.Link>
         <Nav.Link className='smll' href="/"> Brand Identity</Nav.Link>
         <Nav.Link className='smll' href="/"> Investor Relations </Nav.Link>
         <Nav.Link className='smll' href="/"> Ethics</Nav.Link>

         <Nav.Link className='smll' href="/">Samsung Design </Nav.Link>
        </Col>

        <Col className='lft'>
         <h1> Contact us</h1>
         <Nav.Link className= 'smll' href="/"> FaceBook</Nav.Link>
         <Nav.Link className='smll' href="/"> Linkdin</Nav.Link>
         <Nav.Link className= 'smll' href="/"> Instagram</Nav.Link>
        </Col>
       </Row>
      </div>
      </Container>

    </div>
    
  );
}

export default App;
