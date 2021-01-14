import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/forms/form';
import Results from './components/results/result';
import './components/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        count: 0,
        headers: {},
        results: [],
        display: false
      }
    }

  getApiResults = (apiResults, headers) => {
    console.log('HEADERS on App.JS:', headers);
    this.setState({ count: apiResults.count, results: apiResults.results, headers })
    if(this.state) { this.setState({display: true}) }
  }

  render() {
    console.log('APP.JS STATE:', this.state);
    return (
      <section>
        <Header />
        <Form 
          returnApiResults={this.getApiResults}  
        />
        { !this.state.display ? "" : 
          <Results 
            apiResults={this.state}
          />
        }
        <Footer />
      </section>
    )
  }
}

export default App;
