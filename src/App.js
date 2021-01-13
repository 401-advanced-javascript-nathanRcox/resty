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
        results: []
      }
    }

  getApiResults = (apiResults) => {
    // console.log('API RESULTS FULL:', apiResults);
    // console.log('API RESULTS COUNT:', apiResults.count);
    // console.log('API RESULTS.RESULTS:', apiResults.results);
    this.setState({ count: apiResults.count, results: apiResults.results })
  }

  render() {
    console.log('APP.JS STATE:', this.state);
    return (
      <section>
        <Header />
        <Form 
          returnApiResults={this.getApiResults}  
        />
        <Results 
          apiResults={this.state}
        />
        <Footer />
      </section>
    )
  }
}

export default App;
