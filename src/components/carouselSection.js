import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlayCircle, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {Palette} from 'react-palette'
import "./carouselSection.css"
import Container from 'react-bootstrap/Container'



class CarouselSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        let url = "https://api.vimeo.com/ondemand/genres/action+adventure/pages?per_page=7";
        let token = process.env.REACT_APP_VIMEO_TOKEN
        fetch(url, {
            method: 'get',
            headers: new Headers({
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())
        .then(res => {
            let movies = []
            res.data.forEach(el => {
                console.log(res);
                let splitURL = el.uri.split("/");
                let page_id = splitURL[splitURL.length -1];
                let imageURL = el.pictures.sizes[7].link;
                movies.push({
                    name: el.name,
                    description: el.description,
                    page_id: page_id,
                    image: imageURL
                })
            })
            this.setState({movies: movies})
        })
        .catch(err => console.log(`error: ${err}`))
    }


    render() {

        console.log(process.env.REACT_APP_VIMEO_TOKEN)

        const movies = this.state.movies;
        let prevIconStyle={fontSize:"50px", marginLeft: "20vw"};
        let nextIconStyle={fontSize:"50px", marginRight: "20vw"};

        return (
            <Carousel style={{width: "100%"}}
                indicators={false}
                interval={null}
                nextIcon={<FontAwesomeIcon className="controls" icon={faChevronRight} style={nextIconStyle}/>}
                prevIcon={<FontAwesomeIcon className="controls" icon={faChevronLeft} style={prevIconStyle}/>}
            >
                    {movies.map(movieData => (
                        <Carousel.Item key={movieData.image}>
                            <Palette src={movieData.image}>
                                {({ data, loading, error }) => (
                                    <React.Fragment>
                                        <div className="carousel-background" style={{backgroundImage: `url(${movieData.image})`, filter: "blur(20px)", WebkitFilter: "blur(20px)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", width:"100%", height:"100%", position: "absolute", transform: "scale(1.2"}}></div>
                                        <div style={{position: "absolute", width: "100%", height: "100%", top: "0", left: "0", backgroundColor: data.muted, opacity: 0.5}}></div>
                                        <div style={{position: "absolute", width: "100%", height: "100%", top: "0", left: "0", backgroundColor: "black", opacity: 0.2}}></div>
                                        <Row className="align-content-center justify-content-center" style={{ padding:"100px 0px"}}>
                                            <Col xl={2}>
                                                <img
                                                className="d-block w-100 movie-image"
                                                src={movieData.image}
                                                alt={movieData.name+ " poster"}
                                                style={{height: "400px",minHeight: "400px"}}
                                                />
                                            </Col>
                                            <Col xl={4} className="mt-5 mx-auto mx-md-0">
                                                <Container>
                                                    <h3 style={{color:"white"}}>{movieData.name}</h3>
                                                    <p style={{color: "#cecece", fontSize: "20px"}}>{movieData.description.split(".")[0]}.</p> {/*Couldn't find any short description in the page data, so I simply took the first sentence of the description.*/}
                                                    <Button className="custom-button mt-3" style={{backgroundColor:data.muted, outline: "none", border: "none"}}><FontAwesomeIcon icon={faPlayCircle}/> Buy Now</Button>
                                                    <Button className="custom-button outline-custom mt-3">Watch Trailer</Button>
                                                </Container>
                                            </Col>
                                        </Row>
                                    </React.Fragment>
                                )}
                            </Palette>
                        </Carousel.Item>
                    ))}
            </Carousel>
        );
    }
}

export default CarouselSection;