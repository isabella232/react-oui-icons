import React from 'react';
import PropTypes from 'prop-types';


const AbIcon = ({fill, width, height}) => (
    <svg fill={fill} width={width} height={height} baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M16.759 16H1a.5.5 0 0 1 0-1h15.759C20.434 15 23 12.738 23 9.5S20.434 4 16.759 4H12a.5.5 0 0 1 0-1h4.759C21.022 3 24 5.673 24 9.5S21.022 16 16.759 16z"/>
        <path d="M5.5 21a.502.502 0 0 1-.354-.146l-5-5a.5.5 0 0 1 0-.707l5-5a.5.5 0 0 1 .707.707L1.207 15.5l4.646 4.646A.5.5 0 0 1 5.5 21z"/>
    </svg>
)

AbIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

AbIcon.defaultProps = {
    fill: '#666',
    width: 200,
    height: 200
}

export default AbIcon;