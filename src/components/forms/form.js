import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      input: '',
      route: 'get',
      headers: []
    }
  }
  
  getApiResults = async () => {
    const url = this.state.input;
    const apiResults = await fetch(url, { method: this.state.route, mode: 'cors' })
      .then(response => {
        if (response.status !==200) return;
        for (let headers of response.headers.entries()) {
          this.setState({ headers: headers })
        };
        return response.json();
    })
    this.props.returnApiResults(apiResults, this.state.headers);

    
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

    return (
      <>
        <form id="url-submit" onBlur={this.handleInput}>
            <textarea  placeholder="Enter your API's url here and choose your action below." name="url" />
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
