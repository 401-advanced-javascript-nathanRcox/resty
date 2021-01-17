import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      url: '',
      route: '',
    }
  }
  
  getApiResults = async (route) => {
    const url = this.state.url;
    // let headers = {};
    console.log('URL:', url);
    const apiResults = await fetch(url, { method: route, mode: 'no-cors' })
      .then(response => { // or let data = await apiResults.json();
        // console.log('Response', response.json());
        if (response.status !==200) return;
        // for (let pair of response.headers.entries()) {
        //   headers[pair[0]] = pair[1]
        // };
        // console.log('RESPONSE:', response.json());
        return response.json();
    })
    // console.log('API RESULTS on FORM:', apiResults.results);
    this.props.returnApiResults(apiResults);
  }

  handleInput = event => {
    event.preventDefault();
    const userInput = event.target.value;
    this.setState({ url: userInput });

    if(this.state.route) { 
      this.setState({ display: true });
    };
  }

  handleClick = event => {
    event.preventDefault();
    let userSelection = event.target.value;
    this.setState({ route: userSelection });

    if(this.state.url) {
      this.setState({ display: true });
      this.getApiResults(userSelection);
    }

  }

  render() {
    console.log('FORM STATE:', this.state)
    // https://pokeapi.co/api/v2/pokemon
    return (
      <>
        <form id="url-submit" onBlur={this.handleInput}>
            <input type="text"  placeholder="Enter your API's url here and choose your action below." name="url" />
          {/* <button onClick={this.getApiResults} type="submit">Submit URL+Route</button> */}
        </form>
        <div id="route-selection" onClick={this.handleClick}>
            <input type="submit" value="post" />
            <input type="submit" value="get" /> 
            <input type="submit" value="put" /> 
            <input type="submit" value="delete" />
        </div>

        { !this.state.display ? "" : 
        <div id="rendered-input">
          <h2 id="URL">API URL: {this.state.url}/{this.state.route}</h2>
        </div>
        }
      </>
    )
  }
  
}


export default Form;
