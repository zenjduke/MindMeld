import React, { Component } from "react";
import PatternCard from "./components/PatternCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Patterns from "./patterns.json";
import "./App.css";

function shufflePatterns(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting this.state.Patterns to the Patterns json array
  state = {
    Patterns,
    currentScore: 0,
    topScore: 0,
    resultMessage: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    let newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      resultMessage: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ resultMessage: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      resultMessage: "Get yourself together!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledPatterns = shufflePatterns(Patterns);
    this.setState({ Patterns: shuffledPatterns });
  };

  // Map over this.state.Patterns and render a PatternCard component for each Pattern object
  render() {
    return (
      <Wrapper>

        <Nav
          title="MindMeld"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          resultMessage={this.state.resultMessage}
        />

        <Title><p>Click on an image to earn points, but don't click on any more than once!</p></Title>

        {this.state.Patterns.map(Pattern => (
          <PatternCard
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            image={Pattern.image}
            id={Pattern.id}
            key={Pattern.id}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
