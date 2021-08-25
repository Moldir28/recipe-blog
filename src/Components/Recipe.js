import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import marked from "marked";
import { client } from "../client";

import "./Post.css";

export const Recipe = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    client
      .getEntry(id)
      .then((response) => {
        setArticle(response);
        setLoading(false);
      })
      .catch(console.error);
    }, []);
  
    if (loading) return "Loading...";
  
    return (
      <div>
        <div>{article.fields.name}</div>
        <img
          className="featuredImage"
          src={article.fields.featuredImage.fields.file.url}
          alt={article.fields.name}
          title={article.fields.name}
        />
      </div>
    );
}
