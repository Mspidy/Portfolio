import React from "react";
import { Card, CardText } from "reactstrap";

class About extends React.Component {
    render() {
        return (
            <>
                <h1 style={{ color: "#333", marginTop: "200px", fontSize: "90px", fontFamily: "Circularstd, sans-serif", color: "blank", marginLeft: "-750px" }}>Here's a bit</h1>
                <h1><strong style={{ color: "#4f7fd6", fontFamily: "Circularstd, sans-serif", fontSize: "70px", marginLeft: "-750px" }}>about me</strong></h1>
                <Card color="primary" style={{ marginLeft: "600px", marginBottom: "100px", marginTop: "-350px", marginRight: "10px" }}>
                    <CardText style={{ marginBottom: "100px" }}>
                        <h1>Why Work With Me ?</h1>
                        <h1 style={{ color: "white", transformStyle: "preserve-3d", transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)" }}>
                            I did my <strong>B.Tech</strong> in <strong>Electronics and communication</strong> from <strong>University Institute of Technology</strong> Burdwan,
                            which is under Burdwan University from West Bengal.
                            I completed my BE in 2019.
                            <br />
                            Total I have 6 months of Experience as an Intern.
                        </h1>
                        <h1>
                            To pursue a dynamic and challenging career with a reputed firm,
                            which provides opportunities to utilize and enhance my
                            knowledge, skills and capabilities towards the attainment of
                            organizational goals.
                        </h1>
                    </CardText>
                </Card>

            </>
        )
    }
}
export default About;