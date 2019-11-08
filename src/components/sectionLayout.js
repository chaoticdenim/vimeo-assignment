import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'

class SectionLayout extends Component {

    
    render() {
        return (
            <Row className="justify-content-center align-items-center" style={this.props.layoutStyle}>
                {this.props.children}
            </Row>
        );
    }
}

export default SectionLayout;