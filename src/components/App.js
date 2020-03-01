import React from 'react';
import Home from './Home/Home';
import Details from './Details/Details';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import SearchResults from './SearchResults/SearchResults';
import { Route, Switch } from 'react-router';
import { useRerender } from './../hooks/rerender';
import MoviesCard from './MoviesCard/MoviesCard';

export default function App() {
  const render = useRerender();

  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/top/:type" component={MoviesCard} />
        <Route path="/search-results/:search" component={SearchResults} />
        <Route path="/details/:id" component={Details} />
        <Route path="/" exact component={Home} />
      </Switch>

      <Footer />
    </div>
  );
}