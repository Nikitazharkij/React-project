import React, {Component} from 'react';
import './App.sass';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'
import Loading from './Loading'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null
    };
  }

  componentDidMount() {
    const url = 'http://localhost:3006/continent'

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error ("Something went wrong...");
        }
      })
      .then(data => this.setState({data: data}))
      .catch(error => this.setState({error: error}));
  }

  render() {
    const {data, error} = this.state
    const content = data ? <Main data={data} /> : <Loading />;

    if (error) {
    return (
      <div className="error">
        <h1>{error.message}</h1>
      </div>
      )
    }

    return (
      <div className="app-wrapper">
        <Header />
        {content}
        <Footer />
      </div>
    )
  }
}

export default App;
