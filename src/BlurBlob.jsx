import React from 'react'
import PropTypes from 'prop-types'

function BlurBlob({ position, size }) {

    const { top, left } = position;
    const { width, height } = size;
    return (
        <div className='absolute'
            style={{
                top: top,
                left: left,
                width: width,
                height: height,
                transform: 'translate(-50% ,-50%)',
            }}>
            <div className='w-full h-full bg-purple-700 rounded-full opacity-60 blur-3xl animate-blob'></div>
        </div>
    )
}
//Define prop types
BlurBlob.PropTypes = {
    position: PropTypes.shape(
        {
            top: PropTypes.string.isRequired,
            left: PropTypes.string.isRequired,
        }),
    size: PropTypes.shape(
        {
            width: PropTypes.string.isRequired,
            innerHeight: PropTypes.string.isRequired,
        }),
}

export default BlurBlob