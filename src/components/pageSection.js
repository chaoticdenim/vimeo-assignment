import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import SectionLayout from './sectionLayout'


class pageSection extends Component {

    render() {
        const loremIpsumText = "Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem agestas mauris venenatis commodo eu id nibh. Ut porta libera sed semper faucibus"
        
        var fontcolor = ""
        this.props.bgColor !== "white" ? fontcolor="white" : fontcolor="black"
        let pictureOrder;
        let textOrder;

        if(this.props.pictureAlignLeft) {
            pictureOrder = 1;
            textOrder = 2;
        } else {
            pictureOrder = 2;
            textOrder = 1;
        }

        var rowStyle = {padding: this.props.padding, color: fontcolor};

        if(this.props.gradientBackground) {
            rowStyle.background = `linear-gradient(to bottom, ${this.props.bgColor}, white)`;
        } else {
            rowStyle.backgroundColor = this.props.bgColor;
        }

        return (

            <SectionLayout layoutStyle={rowStyle}>
                <Col xl={{span: 4, order: pictureOrder}}>
                    <img className="d-block w-100 mx-auto" src={this.props.imgSrc} style={{maxWidth: "60vw"}} alt='placeholder'/>
                </Col>
                <Col className="mt-5 mt-xl-0" xl={{span: 4, order: textOrder}}>
                    <div className="" style={{maxWidth: "800px"}}>
                        <h2>{this.props.title}</h2>
                        <p>{loremIpsumText}</p>
                    </div>
                </Col>
            </SectionLayout>
        );
    }
}

export default pageSection;