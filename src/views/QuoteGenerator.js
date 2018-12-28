import React, { Component } from "react";

class QuoteGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuotes: [],
      quote: "test",
      author: "author"
    };

    this.getAllQuotes = this.getAllQuotes.bind(this);
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  componentWillMount() {
    this.getAllQuotes(() => {
      this.getNewQuote();
    });
  }

  getAllQuotes(callback) {
    let req = new XMLHttpRequest();
    req.open(
      "GET",
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
      true
    );
    req.send();
    req.onload = function() {
      let quotesData = JSON.parse(req.responseText);
      console.log(quotesData);
      this.setState({
        allQuotes: quotesData
      });
      callback();
    }.bind(this);
  }

  getNewQuote() {
    //randomize quote
    let randomIndex = Math.floor(Math.random() * 102);
    let newQuote = this.state.allQuotes.quotes[randomIndex];

    this.setState({
      quote: newQuote.quote,
      author: newQuote.author
    });
  }

  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <div id="text">{this.state.quote}</div>
          <div id="author">{this.state.author}</div>
          <button id="new-quote" onClick={this.getNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteGenerator;
