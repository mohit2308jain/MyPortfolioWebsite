import React from 'react';
import '../stylesheets/IntroComponent.css';
import profilepicture from '../img/profilepicture.jpeg';
import { Jumbotron, Container } from 'reactstrap';

class Intro extends React.Component {
  
  render(){
    return(
      <React.Fragment>
        <Jumbotron fluid style={{ marginBottom:'0px'}}>
          <Container fluid>
            <div className="intro" style={{marginTop:'30px', marginBottom:'30px'}}>
              <h1 className="section__title section__title--intro">
                  Hi, I am <div className="font-weight-bold">Mohit Jain</div>
              </h1>
              <p className="section__subtitle section__subtitle--intro font-weight-bold">MERN Stack Dev</p>
              <img src={profilepicture} alt="Profile" className="intro__img border border-dark" />
            </div>
          </Container>
        </Jumbotron>
      </React.Fragment>
    )
  }
}

export default Intro;
