import React, { Component } from 'react';
import {
  Route,
  Switch,
  } from 'react-router-dom'

import './App.css';
import { Header } from './components/Header';

import HomeComponent from './components/Home';
import AlbumComponent from './components/Album';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <div className="App-wrapper">
            <Switch>
              <Route exact path="/" component={HomeComponent} />
              <Route path="/album/:id" component={AlbumComponent} />
            </Switch>
          </div>
        </main>

        <footer>
          <span>Created by Movses Poghosyan</span>
        </footer>
      </div>
    );
  }

}
