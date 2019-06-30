import React from 'react';
import './App.sass';
import Router from './Router';
import { useFetch } from './useFetch';

const App = (props) => {
  const [data, loading, error] = useFetch('http://localhost:3006/continent');
  return (
    <div className="app-wrapper">
      { error && <div><h1>Something went wrong...</h1></div> }
      { loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <Router data={data} />
      )}
    </div>
  )
}


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       error: null
//     };
//   }

//   loading() {
//     return (
//       <h1 className="loadingData"> Loading data ... </h1>
//     );
//   };

//   componentDidMount() {
//     const url = 'http://localhost:3006/continent'

//     fetch(url)
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error ("Something went wrong...");
//         }
//       })
//       .then(data => this.setState({data: data}))
//       .catch(error => this.setState({error: error}));
//   }

//   render() {
//     const {data, error} = this.state
//     const content = data ? <Router data={data} /> : this.loading();

//     if (error) {
//     return (
//       <div className="error">
//         <h1>{error.message}</h1>
//       </div>
//       )
//     }

//     return (
//       <div className="app-wrapper">
//         {content}
//       </div>
//     )
//   }
// }

export default App;
