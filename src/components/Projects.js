import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardHeader, Button, CardFooter} from 'reactstrap';

import '../stylesheets/ProjectAndCerti.css';

const RenderCard = (props) => {
    const item = props.project;
    const buttonLabels = item.labels;
    const links = item.links;
    
    return(
        <div className='d-flex col-12 col-md-6 my-2'>
            <Card className="Cards flex-fill">
                <CardHeader tag="h4" style={{ backgroundColor: '#123', color:'#FFF', textAlign:'center'}}>
                {item.name}
                </CardHeader>
                <CardBody>
                    <CardSubtitle>{item.year}</CardSubtitle>
                    <CardText>{item.description}
                    </CardText>
                </CardBody>
                <CardFooter>
                    {
                        buttonLabels.map((label, index) => {
                            return(
                            <span className="mr-2" key={index}>
                                <Button className="mb-2 font-weight-bold" color="dark" outline onClick={() => window.open(links[index], "_blank")}>{label}</Button>
                            </span>
                            )
                        })
                    }
                </CardFooter>
            </Card>
        </div>
    )
}

const Projects = (props) => {

    const projects = props.projects.map((pro) => {
        return (
            <RenderCard project={pro} key={pro.id}/>
        )
    })

    return(
        <div className="container-fluid py-5 border-bottom border-top border-white" style={{backgroundColor:'#222', color:'white'}}>
            <div className="border border-white rounded">
                <div className="row m-2"><div className='CardHeading h1 col-12'>Projects</div></div>
                <div className="row m-2">
                    {projects}
                </div>
            </div>
        </div>
    )
}

export default Projects;
