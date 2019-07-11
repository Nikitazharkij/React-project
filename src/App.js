import React from 'react';
import './App.sass';
import { Route, Switch } from 'react-router-dom';
import { useFetch } from './useFetch';
import HeaderHome from './pages/HeaderHome/HeaderHome';
import HeaderCity from './pages/HeaderCity/HeaderCity';
import Error from './pages/Error/Error';
import Loading from './pages/Loading/Loading';
import Footer from './pages/Footer/Footer';
import MainHome from './pages/MainHome/MainHome';
import MainCity from './pages/MainCity/MainCity';
import MainPlace from './pages/MainPlace/MainPlace';
import Print from  './pages/Print/Print';
import Tv from './pages/Tv/Tv';
import Present from './pages/Present/Present';
import Clock from './pages/Clock/Clock';

const App = (props) => {
  const [data, loading, error] = useFetch('http://localhost:3006/continents?_embed=cities');

  return (
    <div className="app-wrapper">
      <header>
        <Switch>
          <Route exact path = '/' component={HeaderHome} />
          <Route path = '/info' component={HeaderCity} />
          <Route component={HeaderCity} />
        </Switch>
      </header>
      <main>
        { error && <Error /> }
        { loading ? <Loading /> : (
          <Switch>
            <Route exact path = '/' render = {() => <MainHome data={data} />} />
            <Route exact path = '/info/city/:continentId/:citySlug'
                   render = {({ match }) => <MainCity match={match}/>} />
            <Route path = '/info/city/:continentId/:citySlug/:placeType/:cityId/:placeId'
                   render = {({ match }) => <MainPlace match={match}/>} />
            <Route path = '/info/print' component={Print} />
            <Route path = '/info/tv' component={Tv} />
            <Route path = '/info/present' component={Present} />
            <Route path = '/info/clock' component={Clock} /> 
            <Route component={Error} />
          </Switch>
          )
        }
      </main>
      <footer> 
        <Footer />
      </footer>
    </div>
  )
}

export default App;
