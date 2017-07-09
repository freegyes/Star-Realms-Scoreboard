import React from 'react'
import PropTypes from 'prop-types'
import './ScoreControls.css'

const ScoreControls = (props) => {
    let incrementValues = [-10, -5, -1, 1, 5, 10]
    return (
      <div className="Score-controls">
        {incrementValues.map((value, index) =>
          <span 
            onClick={() => props.onChange(value)} 
            key={index} 
          >
            {value}
          </span>
        )}
      </div>
    );
}

ScoreControls.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default ScoreControls

