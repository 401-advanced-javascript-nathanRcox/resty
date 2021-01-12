import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/forms/form';
import './components/app.scss';

class App extends React.Component {

  render() {
    return (
      <section>
        <Header />
        <Form />
        <Footer />
      </section>
    )
  }
}

export default App;
