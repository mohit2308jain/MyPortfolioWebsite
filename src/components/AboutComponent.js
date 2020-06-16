import React from 'react';
import '../stylesheets/AboutComponent.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader, ListGroup, ListGroupItem, Button } from 'reactstrap';

class About extends React.Component{
    
    render(){

        const link = this.props.link;

        return(
            <React.Fragment>
                <section className="about-me">
                    <h2 className="section__title section__title--about">Who I am</h2>
                    <p className="section__subtitle section__subtitle--about">Student at SRM Institute of Science & Technology.</p>
                </section>
                <div className="container-fluid b1">
                    <div className="row p-2">
                        <div className="col-12 col-sm-4 my-5">

                            <Card className="Card1">
                                <CardHeader tag="h3" style={{ backgroundColor: '#00FF7F', color:'#000', textAlign:'center'}}>
                                About ME
                                </CardHeader>
                                <CardBody>
                                    <CardText>{this.props.about}</CardText>
                                    <Button color="secondary" onClick={() => window.open(link, "_blank")}>Resume</Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-sm-4 my-5">

                            <Card className="Card1">
                                <CardHeader tag="h3" style={{ backgroundColor: '#00FF7F', color:'#000', textAlign:'center'}}>
                                Experience
                                </CardHeader>
                                <CardBody>
                                    <CardTitle className="font-weight-bold">{this.props.exp.title}</CardTitle>
                                    <CardSubtitle>{this.props.exp.period}</CardSubtitle>
                                    <CardText>{this.props.exp.tasks}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-sm-4 my-5">

                            <Card className="Card1">
                                <CardHeader tag="h3" style={{ backgroundColor: '#00FF7F', color:'#000', textAlign:'center'}}>
                                    Skilled In
                                </CardHeader>
                                <CardBody>
                                    <CardText>
                                    <ListGroup>
                                        {
                                            this.props.skills.map((skill) => {
                                                return(
                                                    <ListGroupItem>{skill}</ListGroupItem>
                                                )
                                            })
                                        }
                                    </ListGroup>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </React.Fragment>            
        )
    }
}

export default About;
