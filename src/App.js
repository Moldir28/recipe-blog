import React, { useState, useEffect } from "react";

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
    <div className="App">
      <Header />
      <Main>
        <Posts posts={articles} />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
