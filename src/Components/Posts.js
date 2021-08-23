import { Post } from "./Post";

export const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((article, index) => (
        <Post article={article} key={index} />
      ))}
    </div>
  );
};
