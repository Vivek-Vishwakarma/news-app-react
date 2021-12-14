import Nav from './components/Nav'
import News from './components/News'

import './App.css';
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
        <Switch>
          <Route exact path="/news-app-react">
            <News key="general" apiKey={apiKey} cat={'general'} />
          </Route>
          <Route exact path="/general">
            <News key="general" apiKey={apiKey}  cat={'general'} />
          </Route>
          <Route exact path="/business"> 
            <News key="business" apiKey={apiKey}  cat={'business'} />
          </Route>
          <Route exact path="/science">
            <News key="science" apiKey={apiKey}  cat={'science'} />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" apiKey={apiKey}  cat={'entertainment'} />
          </Route>
          <Route exact path="/health">
            <News key="health"  apiKey={apiKey}  cat={'health'} />
          </Route>
          <Route exact path="/technology">
            <News key="technology" apiKey={apiKey}  cat={'technology'} />
          </Route>
          <Route exact path="/game">
            <News key="technology" apiKey={apiKey}  cat={'game'} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
