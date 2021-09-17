import Nav from './components/Nav'
import News from './components/News'

import './App.css';
import Header from './components/Header';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const apiKey = process.env.REACT_APP_API

  return (
    <>
      <Router>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/news-app-react">
            <News key="general" size={9} apiKey={apiKey} country={'in'} cat={'general'} />
          </Route>
          <Route exact path="/general">
            <News key="general" size={9} apiKey={apiKey} country={'in'} cat={'general'} />
          </Route>
          <Route exact path="/business"> 
            <News key="business" size={9} apiKey={apiKey} country={'in'} cat={'business'} />
          </Route>
          <Route exact path="/science">
            <News key="science" size={9} apiKey={apiKey} country={'in'} cat={'science'} />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" size={9} apiKey={apiKey} country={'in'} cat={'entertainment'} />
          </Route>
          <Route exact path="/health">
            <News key="health" size={9} apiKey={apiKey} country={'in'} cat={'health'} />
          </Route>
          <Route exact path="/technology">
            <News key="technology" size={9} apiKey={apiKey} country={'in'} cat={'technology'} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
