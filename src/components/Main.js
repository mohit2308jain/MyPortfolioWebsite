import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import { PROJECTS } from '../shared/projects';
import { CERTIFICATIONS } from '../shared/certifications';
import { ABOUT, SKILLS, LINK, EXP } from '../shared/about';

import Intro from './Intro';
import About from './About';
import Footer from './Footer'
import Certifications from './Certifications';
import Projects from './Projects';
import ContactForm from './ContactForm';
import Header from './Header';

const Main = () => {
    const [projects] = React.useState(PROJECTS);
    const [certifications, setCertifications] = React.useState(CERTIFICATIONS);
    const [about, setAbout] = React.useState(ABOUT);
    const [skills, setSkills] = React.useState(SKILLS);
    const [link, setLink] = React.useState(LINK);
    const [exp, setexp] = React.useState(EXP);
            
    return(
        <React.Fragment>
            <div style={{position: 'fixed', zIndex: '100', top: '0', right: '0', left: '0'}}>
            <Header />
            </div>
            <Switch>
                <Route path='/home' component={() => <div>
                    <Intro />
                    <Projects projects={projects} />
                    </div>} />
                <Route path='/about' component={() => <div>
                    <About about={about} skills={skills}
                                    link={link} exp={exp}/> 
                    <Certifications certifications={certifications}/>
                    </div> }  />
                <Route path='/contact' component={ContactForm} />
                <Redirect to='/home' />
            </Switch>     
            <Footer />
                
        </React.Fragment>
    )
}

export default Main;