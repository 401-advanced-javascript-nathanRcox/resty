import React from 'react'; 
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      input: '',
      route: '',
    }
  }
  
  handleInput = event => {
    event.preventDefault();
    const userInput = event.target.url.value;
    this.setState({ input: userInput });

    if(this.state.route) { this.setState({ display: true })};
  }

  handleClick = event => {
    event.preventDefault();
    let userSelection = event.target.value;
    this.setState({ route: userSelection });

    if(this.state.input) { this.setState({ display: true })};
  }

  render() {
    console.log('STATE:', this.state)
    return (
      <>
        <form id="url-submit" onSubmit={this.handleInput}>
          <textarea  placeholder="Enter your API's url here and choose your action below." name="url" />
          <button type="submit">Submit URL</button>
        </form>
        <form id="route-selection" onClick={this.handleClick}>
          <input type="submit" value="POST" />
          <input type="submit" value="GET" /> 
          <input type="submit" value="PUT" /> 
          <input type="submit" value="DELETE" />
        </form>
        { !this.state.display ? "" : 
        <div id="rendered-input">
          {/* <h2 id="route">Route: {this.state.route}</h2> */}
          <p id="URL">URL / ROUTE:
            <h2> {this.state.input}/{this.state.route}</h2>
          </p>
        </div>
        }

      </>
    )
  }
  
}


export default Form;
