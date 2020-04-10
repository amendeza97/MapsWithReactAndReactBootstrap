import React, { useState } from 'react';

import { Container, Image, OverlayTrigger, Popover } from 'react-bootstrap';

import './MapOptionCard.css'

function MapOptionCard({ title, image, info, link, docUrl }) {

    const [focused, setFocused] = useState(false);
    const handleMouseEvent = function () {
        setFocused(!focused);
    }

    const popOver = (
        <Popover id="popover">
            <Popover.Title className="title">{title}</Popover.Title>
            <Popover.Content>
                <p className="info">{info}</p>
            </Popover.Content>
        </Popover>
    );

    const renderLink = function () {
        let element = null;
        if (focused) {
            element = (
                <div className="docContainer mt-1 pb-1">
                    <a className="docUrl" href={docUrl}>See documentation</a>
                </div>
            );
        }
        return element;
    }

    return (
        <OverlayTrigger placement="bottom" overlay={popOver}>
            <Container className="baseMapOptionCard pr-3 pl-3 pt-3 pb-3"
                onMouseEnter={handleMouseEvent}
                onMouseLeave={handleMouseEvent}>
                <Image src={image} fluid />
                {renderLink()}
            </Container>
        </OverlayTrigger>
    );

}

export default MapOptionCard;