import React, {Component} from 'react';
import './App.sass';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataServer: null
    };
  }

  componentDidMount() {
    let url = 'http://localhost:3006/continent'
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let element = <Main state = {data} />
        this.setState({dataServer: element})
      })
      .catch(e => {
        console.log(e);
      })
  }

  render() {
    return (
      <div className="app-wrapper">
        <Header />
        {this.state.dataServer}
        <Footer />
      </div>
    )
  }
}

export default App;
