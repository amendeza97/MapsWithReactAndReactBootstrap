import React from 'react';

import { Container, Row, Col } from 'react-bootstrap'

import MapOptionCard from '../../Components/MapOptionCard/MapOptionCard';

import './MapOptions.css'

function MapOptions({ mapsOptions }) {

    return (
        <Container className="baseMapOptions" fluid="true">
            <div className="imageOptions">

            </div>
            <Row noGutters="true" className="rowOptions p-4 justify-content-md-center">
                {mapsOptions.map((map, index) => {
                    return (
                        <Col key={index} sm="12" xs="6" md="2" className="p-2">
                            <MapOptionCard {...map} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );

}

export default MapOptions;