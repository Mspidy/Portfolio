import jsPDF from "jspdf";
import React from "react";
import {
    Button,
} from "reactstrap";
import html2canvas from "html2canvas";

class Header extends React.Component {

    submitForm = async (event) => {
        event.preventDefault(); // prevent page reload
        const blob = await pdf(
            <MyDoc />
        ).toBlob();
    
        saveAs(blob, 'Prabhat.pdf');
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"rgb(0, 30, 60)"}}>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse">
                            <img src={require('./prabhat.jpg')}
                                class="rounded-circle" alt="Rounded Image" width="100" height="100"/>
                                <h1 style={{marginLeft:"10px",color:"blue"}}>Prabhat Kumar Dubey</h1>

                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li style={{ marginLeft: "100px" }}>
                                        <Button type="button" className="btn btn-outline-success" onClick={this.submitForm}>Resume</Button>
                                    </li>
                                    <li className="nav-item" style={{ marginLeft: "50px" }}>
                                        <Button type="button" className="btn btn-outline-info">Project</Button>
                                    </li>
                                    <li className="nav-item" style={{ marginLeft: "50px" }}>
                                        <Button type="button" className="btn btn-outline-primary" target="blank" href="https://github.com/Mspidy?tab=repositories">Github</Button>
                                    </li>
                                    <li className="nav-item" style={{ marginLeft: "50px" }}>
                                        <Button type="button" className="btn btn-outline-secondary">Skills</Button>
                                    </li>
                                    <li className="nav-item" style={{ marginLeft: "50px" }}>
                                        <Button type="button" className="btn btn-outline-primary">About</Button>
                                    </li>
                                    <li className="nav-item" style={{ marginLeft: "50px" }}>
                                        <Button type="button" className="btn btn-outline-success">Experience</Button>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Header;