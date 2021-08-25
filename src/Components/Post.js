import marked from "marked";
import "./Post.css";
import { Link } from "react-router-dom";

export const Post = ({ article, key }) => {
  const { name, featuredImage, description, recipeIntro } = article.fields;
  const postDescription = marked(description);
  const whatevs = () => {
    console.log(article.sys.id);
  };
  
  return (
    <div className="post" onClick={whatevs}>
      <Link to={`/recipe/${article.sys.id}`}>
      <h2 className="title">{name}</h2>
      </Link>
      {featuredImage && (
        <img
          className="featuredImage"
          src={featuredImage.fields.file.url}
          alt={name}
          title={name}
        />
      )}
      <p>{recipeIntro}</p>
      {/* <section dangerouslySetInnerHTML={{ __html: postDescription }} /> */}
    </div>
  );
};
