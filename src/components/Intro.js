import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

import '../stylesheets/Intro.css';
import profilepicture from '../img/profilepicture.jpeg';

const Intro = () => {

    return(
        <React.Fragment>
            <Jumbotron fluid style={{ marginBottom:'0px'}}>
                <Container fluid>
                <div className="intro" style={{marginTop:'30px', marginBottom:'30px'}}>
                    <h1 className="section__title section__title--intro">
                        Hi, I am <div className="font-weight-bold">Mohit Jain</div>
                    </h1>
                    <p className="section__subtitle section__subtitle--intro font-weight-bold">Salesforce Developer</p>
                    <img src={profilepicture} alt="Profile" className="intro__img border border-dark" />
                </div>
                </Container>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Intro;
