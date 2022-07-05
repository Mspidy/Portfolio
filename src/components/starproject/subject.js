import React from "react";
import { Container } from "reactstrap";

class Subject extends React.Component {
    render() {
        return (
            <>
                <Container style={{ marginTop: "180px" }}>
                    <h1 style={{ fontSize: "70px", textAlign: "center", marginBottom: "50px" }}>Web Development</h1>
                </Container>
                <div class="card-group">
                    <div class="card" style={{ marginLeft: "70px" }}>
                        <img src={require('./Angulars.png')} class="card-img-top" />
                        <h1 class="card-title" style={{ textAlign: "center" }}>Full-Fledged Framework</h1>
                        <div class="card-body">
                            <p class="card-text">A component-based framework for building scalable web applications.Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications</p>
                        </div>
                    </div>
                    &nbsp;
                    &nbsp;
                    <div class="card">
                        <img src={require('./django.png')} class="card-img-top" />
                        <h1 class="card-title" style={{ textAlign: "center" }}>Python Web framework</h1>
                        <div class="card-body">
                            <p class="card-text">Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. For developing a Web Application or API Backend. For Rapid Development of some web application. Deploying the application Fast and Scaling it according to your needs</p>
                        </div>
                    </div>
                    &nbsp;
                    &nbsp;
                    <div class="card">
                        <img src={require('./ReactJS.png')} class="card-img-top" />
                        <h1 class="card-title" style={{ textAlign: "center" }}>JS library</h1>
                        <div class="card-body">
                            <p class="card-text">React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.React enables developers to create web applications that can change your data without reloading your page.</p>
                        </div>
                    </div>
                    &nbsp;
                    &nbsp;
                    <div class="card" style={{ marginRight: "70px" }}>
                        <img src={require('./golang.jpg')} class="card-img-top" />
                        <h1 class="card-title" style={{ textAlign: "center" }}>HTTP web framework</h1>
                        <div class="card-body">
                            <p class="card-text">A high-performance HTTP web framework written in Golang (Go).Gin has a martini-like API and claims to be up to 40 times faster. Gin allows you to build web applications and microservices in Go. It contains a set of commonly used functionalities (e.g., routing, middleware support, rendering, etc.)</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Subject;