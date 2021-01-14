import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      input: '',
      route: 'get',
    }
  }
  
  getApiResults = async () => {
    const url = this.state.input;
    let headers = {};
    const apiResults = await fetch(url, { method: this.state.route, mode: 'cors' })
      .then(response => { // or let data = await apiResults.json();
        if (response.status !==200) return;
        for (let pair of response.headers.entries()) {
          headers[pair[0]] = pair[1]
          // this.setState({ headers: headers })
        };
        return response.json();
    })
    this.props.returnApiResults(apiResults, headers);

    
  }

  handleInput = event => {
    event.preventDefault();
    const userInput = event.target.value;
    this.setState({ input: userInput });

    if(this.state.route) { 
      this.setState({ display: true });
    };
  }

  handleClick = event => {
    event.preventDefault();
    let userSelection = event.target.value;
    this.setState({ route: userSelection });
    this.getApiResults();

    if(this.state.input) { this.setState({ display: true })};
  }

  render() {
    // console.log('STATE:', this.state)
    // https://pokeapi.co/api/v2/pokemon
    return (
      <>
        <form id="url-submit" onBlur={this.handleInput}>
            <input type="text"  placeholder="Enter your API's url here and choose your action below." name="url" />
          <div id="route-selection" onClick={this.handleClick}>
            <input type="submit" value="post" />
            <input type="submit" value="get" /> 
            <input type="submit" value="put" /> 
            <input type="submit" value="delete" />
          </div>
          {/* <button onClick={this.getApiResults} type="submit">Submit URL+Route</button> */}
        </form>

        { !this.state.display ? "" : 
        <div id="rendered-input">
          <h2 id="URL">API URL: {this.state.input}/{this.state.route}</h2>
        </div>
        }
      </>
    )
  }
  
}


export default Form;
