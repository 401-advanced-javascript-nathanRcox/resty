import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../forms/form';
import Results from '../results/result';
import History from '../history/history';
// import './reset.scss';
import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        // count: 0,
        headers: {},
        results: [],
        history: [],
        display: false
      }
    }

  getApiResults = (apiResults, headers) => {
    this.setState({ headers, results: apiResults  });
    if(this.state) { this.setState({display: true}) }
  }

  getHistory = (history) => {
    this.setState({ history });
  };

  render() {
    console.log('APP STATE:', this.state);
    return (
      <section>
        <Header />
        <Form 
          returnApiResults={this.getApiResults}
          returnHistory={this.getHistory}
        />
        { !this.state.display ? "" : 
          <Results apiResults={this.state} />
        }
        <History history={this.state.history} />
        <Footer />
      </section>
    )
  }
}

export default App;
