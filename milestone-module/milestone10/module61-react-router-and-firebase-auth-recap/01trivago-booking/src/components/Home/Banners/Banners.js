import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import travel from '../../../images/banner/travel-tourism-banner.jpg';
import airPlane from '../../../images/banner/airplane-banner.jpg';
import winter from '../../../images/banner/winter-banner.jpg';

const banners = [
    {
        "id": 1,
        "name": "Travel & Tourism",
        "picture": travel
    },
    {
        "id": 2,
        "name": "Air Plane",
        "picture": airPlane
    },
    {
        "id": 3,
        "name": "Winter",
        "picture": winter
    }
]

const Banners = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banners[0].picture}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{banners[0].name}</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banners[1].picture}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>{banners[1].name}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banners[2].picture}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>{banners[2].name}</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banners;