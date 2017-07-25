import React from 'react';
import PropTypes from 'prop-types';


const DuplicateIcon = ({fill, small, medium, large}) => {
    let size = '16'
    if(small) { size = '16' }
    else if(medium) { size = '24' }
    else if(large) { size = '32' }

    return (
        <svg fill={fill} width={size} baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M23.5 21h-20a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5h20a.5.5 0 0 1 .5.5v20a.5.5 0 0 1-.5.5zM4 20h19V1H4v19z"/>
            <path d="M15.5 18h-4a.5.5 0 0 1-.5-.5V13H6.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5H11V3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V8h4.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H16v4.5a.5.5 0 0 1-.5.5zM12 17h3v-4.5a.5.5 0 0 1 .5-.5H20V9h-4.5a.5.5 0 0 1-.5-.5V4h-3v4.5a.5.5 0 0 1-.5.5H7v3h4.5a.5.5 0 0 1 .5.5V17z"/>
            <path d="M19.5 24H.5a.5.5 0 0 1-.5-.5v-19A.5.5 0 0 1 .5 4H2v1H1v18h18v-1h1v1.5a.5.5 0 0 1-.5.5z"/>
        </svg>
    )
}

DuplicateIcon.protoTypes = {
    fill: PropTypes.string
}

export default DuplicateIcon;