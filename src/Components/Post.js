import marked from "marked";
import "./Post.css";

export const Post = ({ article, key }) => {
  const { name, featuredImage, description, recipeIntro } = article.fields;
  const postDescription = marked(description);
  const whatevs = () => {
    console.log(article.sys.id);
  };
  return (
    <div className="post" onClick={whatevs}>
      <h2 className="title">{name}</h2>
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
