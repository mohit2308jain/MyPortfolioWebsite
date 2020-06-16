import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import { PROJECTS } from '../shared/projects';
import { CERTIFICATIONS } from '../shared/certifications';
import { ABOUT, SKILLS, LINK, EXP } from '../shared/about';

import Intro from './IntroComponent';
import About from './AboutComponent';
import Footer from './FooterComponent'
import ProCert from './ProjectAndCerti';
import Header from './HeaderComponent';

class Main extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            projects: PROJECTS,
            certifications: CERTIFICATIONS,
            about: ABOUT,
            skills: SKILLS,
            link: LINK,
            exp: EXP
        }
    }

    render(){
        return(
        <React.Fragment>
            <div style={{position: 'fixed', zIndex: '100', top: '0', right: '0', left: '0'}}>
            <Header />
            </div>
            <Switch>
                <Route path='/home' component={Intro} />
                <Route path='/about' component={() => <div>
                    <About about={this.state.about} skills={this.state.skills}
                                    link={this.state.link} exp={this.state.exp}/> 
                    <ProCert projects={this.state.projects} 
                                    certifications={this.state.certifications}/>
                    </div> }  />
                <Redirect to='/home' />
            </Switch>     
            <Footer />
                
        </React.Fragment>
        )
    }
}



export default Main;