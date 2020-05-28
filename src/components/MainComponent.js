import React, {Component} from 'react';
import { PROJECTS } from '../shared/projects';
import { CERTIFICATIONS } from '../shared/certifications';

import Header from './HeaderComponent';
import Intro from './IntroComponent';
import About from './AboutComponent';
import Footer from './FooterComponent'
import ProCert from './ProjectAndCerti';

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            projects: PROJECTS,
            certifications: CERTIFICATIONS
        }
    }

    render(){
        return(
        <React.Fragment>
                <Intro />
                <About /> 
                <ProCert projects={this.state.projects} certifications={this.state.certifications}/>      
                <Footer />
        </React.Fragment>
        )
    }
}



export default Main;