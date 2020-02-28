import React from 'react';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Route, Switch } from 'react-router';
import { useRerender } from './../hooks/rerender';

export default function App() {
  const render = useRerender();

  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/details/:id" component={render && MovieDetails} />
        <Route path="/" exact component={Home} />
      </Switch>

      <Footer />
    </div>
  );
}