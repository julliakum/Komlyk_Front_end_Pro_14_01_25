import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SmileCard extends Component {
  handleVote = () => {
    this.props.onVote(this.props.smiley.id);
  };

  render() {
    const { emoji, label, votes } = this.props.smiley;

    return (
      <div className="card m-2 text-center">
        <div className="card-body">
          <h1>{emoji}</h1>
          <h5>{label}</h5>
          <p>Votes: {votes}</p>
          <button className="btn btn-primary" onClick={this.handleVote}>
            Vote
          </button>
        </div>
      </div>
    );
  }
}

export default SmileCard;
