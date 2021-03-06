import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, 
    CardHeader, CardFooter, ListGroup, ListGroupItem, Button } from 'reactstrap';

import '../stylesheets/About.css';

const About = (props) => {

    const link = props.link;

        return(
            <React.Fragment>
                <section className="about-me">
                    <h2 className="section__title section__title--about">Who I am</h2>
                    <p className="section__subtitle section__subtitle--about">Senior Analyst at Capgemini, India</p>
                </section>
                <div className="container-fluid b1">
                    <div className="row p-2">
                        <div className="col-12">
                            <Card className="Card1 my-3">
                                <CardHeader tag="h3" style={{ backgroundColor: '#123', color:'#FFF', textAlign:'center'}}>
                                About ME
                                </CardHeader>
                                <CardBody>
                                    <CardText>{props.about}</CardText>
                                    </CardBody>
                                    <CardFooter>
                                    <Button color="danger" onClick={() => window.open(link, "_blank")}>Resume</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-12 col-md-8">

                            <div className="row">
                                <div className="col-12 my-3">
                                    <Card className="Card1">
                                        <CardHeader tag="h3" style={{ backgroundColor: '#123', color:'#FFF', textAlign:'center'}}>
                                        Experience
                                        </CardHeader>
                                        <CardBody>
                                        {
                                            props.exp.map((ex, key) => {
                                                return(
                                                    <div className="my-3">
                                                        <CardTitle className="font-weight-bold h4">{key+1}. <u>{ex.title}</u></CardTitle>
                                                        <CardSubtitle>
                                                            {ex.period}<br />
                                                            {ex.location}
                                                        </CardSubtitle>
                                                        <CardText>{ex.tasks}</CardText>
                                                    </div>
                                                )
                                            })
                                        }
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-md-4 my-3">

                            <Card className="Card1">
                                <CardHeader tag="h3" style={{ backgroundColor: '#123', color:'#FFF', textAlign:'center'}}>
                                    Skilled In
                                </CardHeader>
                                <CardBody>
                                    <ListGroup>
                                        {
                                            props.skills.map((skill, index) => {
                                                return(
                                                    <ListGroupItem key={index}>{skill}</ListGroupItem>
                                                )
                                            })
                                        }
                                    </ListGroup>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </React.Fragment>            
        )

}

export default About;
