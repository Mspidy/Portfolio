import React from "react";
import { Container } from "reactstrap";
import "./skill.css";

class Skills extends React.Component{
    render(){
        return(
            <>
                <Container>
                    <h1 style={{ fontSize: "70px", textAlign: "center", marginBottom:"50px" }}>Expertise In</h1>
                </Container>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <img src={require('./html.png')}/>
                        </div>
                        <div className="slide">
                            <img src={require('./css.png')}/>
                        </div>
                        <div className="slide">
                            <img src={require('./python.png')}/>
                        </div>
                        <div className="slide">
                            <img src={require('./django.png')}/>
                        </div>
                        <div className="slide">
                            <img src={require('./github.png')}/>
                        </div>
                        <div className="slide">
                            <img src={require('./Angular.png')}/>
                        </div>
                        <div className="slide">
                            <img src={require('./ReactJS.png')}/>
                        </div>
                        <div className="slide">
                            <img src={require('./TypeScript.png')}/>
                        </div>
                        <div className="slide">
                            <img src={require('./golang.jpg')}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Skills;