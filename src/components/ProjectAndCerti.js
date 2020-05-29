import React from 'react';
import '../stylesheets/ProjectAndCerti.css';
import { Card, CardBody, CardSubtitle, CardText, CardHeader, Button} from 'reactstrap';

const RenderCard = (props) => {
    let item;
    let buttonLabel='';
    if(props.project){
        item = props.project;
        buttonLabel='See Project';
    }
    else{
        item=props.certification
        buttonLabel = 'See Certification'
    }
    const link = item.link;
    return(
        <div className='col-12 col-sm-6 my-2'>
            <Card className="Cards">
                <CardHeader tag="h3" style={{ backgroundColor: '#00FF7F', color:'#000', textAlign:'center'}}>
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

class ProCert extends React.Component{

    render(){
        const projects = this.props.projects.map((pro) => {
            return (
                <RenderCard project={pro} />
            )
        })

        const certifications = this.props.certifications.map((cert) => {
            return (
                <RenderCard certification={cert} />
            )
        })

        return(
            <div className="container-fluid py-5 border-bottom border-top border-white" style={{backgroundColor:'black', color:'white'}}>
                <div className="border border-white rounded p-1 m-3">
                    <div className="row m-2"><div className='CardHeading h1 col-12'>Projects</div></div>
                    <div className="row m-2">
                        {projects}
                    </div>
                </div>

                <div className="border border-white rounded p-1 my-5 mx-3">
                    <div className="row m-2"><div className='CardHeading col-sm-12'>Certifications</div></div>
                    <div className="row m-2">
                        {certifications}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProCert;