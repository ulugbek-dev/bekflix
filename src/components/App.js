import React from 'react';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Route, Switch } from 'react-router';

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/details/:id" component={MovieDetails} />
        <Route path="/" exact component={Home} />
      </Switch>

      <Footer />
    </div>
  );
}