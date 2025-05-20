import React, { Component } from 'react';
import SmileCard from './components/SmileCard';

class App extends Component {
  state = {
    smileys: [],
    winner: null
  };

  componentDidMount() {
    fetch('/smileys.json')
      .then(res => res.json())
      .then(data => this.setState({ smileys: data }));
  }

  handleVote = (id) => {
    const updated = this.state.smileys.map(smile =>
      smile.id === id ? { ...smile, votes: smile.votes + 1 } : smile
    );
    this.setState({ smileys: updated });
  };

  handleShowResults = () => {
    const winner = this.state.smileys.reduce((max, smile) =>
      smile.votes > max.votes ? smile : max
    );
    this.setState({ winner });
  };

  render() {
    return (
      <div className="container mt-4">
        <h2 className="text-center mb-4">Vote for the cutest emoticon</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.smileys.map(smiley => (
            <SmileCard key={smiley.id} smiley={smiley} onVote={this.handleVote} />
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-success" onClick={this.handleShowResults}>
            Show Results
          </button>
          {this.state.winner && (
            <div className="mt-3">
              <h4>Winner:</h4>
              <h1>{this.state.winner.emoji} — {this.state.winner.label} ({this.state.winner.votes} votes)</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
