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
                        <div className="col-12 col-md-8">
                            <div className="row">
                                <div className="col-12">
                                    <Card className="Card1 my-3">
                                        <CardHeader tag="h3" style={{ backgroundColor: '#123', color:'#FFF', textAlign:'center'}}>
                                        About ME
                                        </CardHeader>
                                        <CardBody>
                                            <CardText>{this.props.about}</CardText>
                                            <Button color="danger" onClick={() => window.open(link, "_blank")}>Resume</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 my-3">
                                    <Card className="Card1">
                                        <CardHeader tag="h3" style={{ backgroundColor: '#123', color:'#FFF', textAlign:'center'}}>
                                        Experience
                                        </CardHeader>
                                        <CardBody>
                                            <CardTitle className="font-weight-bold">{this.props.exp.title}</CardTitle>
                                            <CardSubtitle>{this.props.exp.period}</CardSubtitle>
                                            <CardText>{this.props.exp.tasks}</CardText>
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
                                            this.props.skills.map((skill, index) => {
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
}

export default About;
