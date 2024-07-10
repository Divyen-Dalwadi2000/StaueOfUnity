import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CROUSAL_URL } from '../../config';

function Home() {
    return (
        <Carousel interval={1000}   >
            {
                CROUSAL_URL.map((crousal) => (
                    <Carousel.Item key={crousal.id} >
                        <img
                            src={crousal.url}
                            alt={crousal.name}
                            className="d-block w-100"
                        />
                        <Carousel.Caption>
                            <h3>{crousal.label} </h3>
                            <p>{crousal.paragraph}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

export default Home;
