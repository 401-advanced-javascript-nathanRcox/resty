import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      url: '',
      route: '',
      object: {
        name: '',
        brand: '',
        type: ''
      },
      history: [],
    }
  }
  
  getApiResults = async (route) => {
    const url = this.state.url;
    let headers = {};
    const apiResults = await fetch(url, 
      { method: route, 
        mode: 'cors' })
      .then(response => { // or let data = await apiResults.json();
        if (response.status !==200) return;
        for (let pair of response.headers.entries()) {
          headers[pair[0]] = pair[1];
          // this.setState({ headers: headers});
        };
        return response.json();
    })
    // console.log('API RESULTS on FORM:', apiResults, headers);
    this.props.returnApiResults(apiResults, headers);
  }

  postOrPut2Api = async (data) => {
    const url = this.state.url;
    const route = this.state.route;
    // console.log('URL:', this.state.url, 'Route:', this.state.route);
    let headers = {
      'Accept': 'application/json',
      "content-type":"application/json; charset=utf-8"
    };
    const apiResults = await fetch(url, 
      { method: route, 
        mode: 'cors', 
        body: data, 
        headers: headers,
      })
      .then(response => {
        if (response.status !==200) console.error('No beuno.');
        for (let pair of response.headers.entries()) {
          headers[pair[0]] = pair[1];     
        };
        return response.json();
      });
      this.props.returnApiResults(apiResults, headers);
      // console.log('API Results:', apiResults);
      // console.log('Headers:', headers);
  }

  collateHistory = async (route) => {
    // const history = await { [route]: this.state.url };
    const history = await `${route}: ${this.state.url}`;

    this.setState({ history: [...this.state.history, history] });
    this.props.returnHistory(this.state.history);
  }

  // This handles the textarea for the URL.
  handleInput = event => {
    event.preventDefault();
    const userInput = event.target.value;
    this.setState({ url: userInput });

    if(this.state.route) { 
      this.setState({ display: true });
    };
  }

  // This handles clicking on post or put.
  handlePutPost = event => {
    event.preventDefault();
    let userSelection = event.target.value;
    this.setState({ route: userSelection });

    if(this.state.url) {
      this.setState({ display: true });
      this.collateHistory(userSelection);
    }
  }

  // This handles clicking on get and delete.
  handleClick = event => {
    event.preventDefault();
    let userSelection = event.target.value;
    this.setState({ route: userSelection });

    if(this.state.url) {
      this.setState({ display: true });
      this.getApiResults(userSelection);
      this.collateHistory(userSelection);
    }
  }

  handleObject = event => {
    event.preventDefault();
    // console.log('EVENT:', event.target.object.value);

    let object = event.target.object.value;
    this.setState({ object });
    // console.log('URL:', this.state.url, 'Route:', this.state.route);
    this.postOrPut2Api(object);
  }

  render() {
    console.log('FORM STATE:', this.state)
    // https://pokeapi.co/api/v2/pokemon
    return (
      <>
        <form id="url-submit" onBlur={this.handleInput}>
            <textarea type="text"  placeholder="Enter your API's url here and choose your action below." name="url" cols="70" rows="2" />
        </form>
        <div id="route-selection" >
          <input type="submit" value="post" onClick={this.handlePutPost}/>
          <input type="submit" value="put" onClick={this.handlePutPost}/> 
          <input type="submit" value="get" onClick={this.handleClick}/> 
          <input type="submit" value="delete" onClick={this.handleClick}/>
        </div>

        { !this.state.display ? "" : 
        <div id="rendered-input">
          <h2 id="URL">API URL: {this.state.url}</h2>
        </div>
        }

        { (this.state.route === 'post' || this.state.route === 'put') ?  
        <form id="object" onSubmit={this.handleObject}>
            <textarea id="put-post-text" name="object" type="text" rows="5" placeholder="If posting or updating, enter the relevant data as an object here." />
            <button type="submit">{this.state.route}</button>
        </form> 
        : ""
        }
      </>
    )
  }
  
}


export default Form;
