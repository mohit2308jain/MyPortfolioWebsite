import React from 'react';
import '../stylesheets/ProjectAndCerti.css';
import { Card, CardBody, CardSubtitle, CardText, CardHeader, Button} from 'reactstrap';

const RenderCard = (props) => {
    const item = props.project;
    const buttonLabel = 'See Project';
    const link = item.link;
    
    return(
        <div className='col-12 col-sm-6 my-2'>
            <Card className="Cards">
                <CardHeader tag="h4" style={{ backgroundColor: '#123', color:'#FFF', textAlign:'center'}}>
                {item.name}
                </CardHeader>
                <CardBody>
                    <CardSubtitle>{item.year}</CardSubtitle>
                    <CardText>{item.description}
                    </CardText>
                    <Button color="secondary" onClick={() => window.open(link, "_blank")}>{buttonLabel}</Button>
                </CardBody>
            </Card>
        </div>
    )
}

class Projects extends React.Component{

    render(){
        const projects = this.props.projects.map((pro) => {
            return (
                <RenderCard project={pro} />
            )
        })

        return(
            <div className="container-fluid py-5 border-bottom border-top border-white" style={{backgroundColor:'#222', color:'white'}}>
                <div className="border border-white rounded p-1 m-3">
                    <div className="row m-2"><div className='CardHeading h1 col-12'>Projects</div></div>
                    <div className="row m-2">
                        {projects}
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;