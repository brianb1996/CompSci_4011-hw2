import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MyDataSlide1, MyDataSlide2, MyDataSlide3 } from '../api/MyData'


const CarouselStyle = {
    width: '100%',
    height: '400px',
    backgroundColor: '#999966',
    display:'flex',
    justifyContent: 'center',
    textAlign: 'center'
}

const SpinThru = () =>{
    return(
        <Carousel style={CarouselStyle}>
            <Carousel.Item style={{position:'unset'}}>
                <MyDataSlide1 />
                <Carousel.Caption>
                    <h1>School</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{position:'unset'}}>
                <MyDataSlide2 />
                <Carousel.Caption>
                    <h1>Work</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{position:'unset'}}>
                <MyDataSlide3 />
                <Carousel.Caption>
                    <h1>Hobbies</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

const AboutMe = () =>{
    return(
        <div style={{display:'flex', justifyContent: 'center'}}>
        <SpinThru/>
        </div>
    )
}

export default AboutMe