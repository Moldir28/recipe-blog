import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import { client } from "./client";
import { Posts } from "./Components/Posts";

import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        setArticles(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Main>
            <Posts posts={articles} />
          </Main>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
