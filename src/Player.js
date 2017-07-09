import React from 'react';
import PropTypes from 'prop-types';
import './Player.css';
import ScoreControls from './ScoreControls';

const Player = (props) => {
  return (
    <div className="Player">
      <h2 className="Player-name">
        {props.name}
      </h2>
      <div className="Player-score">
        {props.score}
      </div>
        <ScoreControls 
          onChange={props.changeScore}
        />
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  changeScore: PropTypes.func.isRequired,
}

export default Player;