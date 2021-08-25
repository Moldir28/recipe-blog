import { Link } from "react-router-dom";
import "./Post.css";
import { Link } from "react-router-dom";

export const Post = ({ article, key }) => {
  const { name, featuredImage, recipeIntro } = article.fields;
  console.log(article);
  return (
    <div className="post__home">
      <div>
        <Link to={`/recipe/${article.sys.id}`}>
          <h2 className="title">{name}</h2>
        </Link>
      </div>

      {featuredImage && (
        <img
          className="featuredImage"
          src={featuredImage.fields.file.url}
          alt={name}
          title={name}
        />
      )}
      <p>{recipeIntro}</p>
    </div>
  );
};
