import { Post } from "./Post";

export const Posts = ({ posts }) => {
  console.log(posts);

  return (
    <div>
      {posts.map((article, index) => (
        <Post article={article} key={index} />
      ))}
    </div>
  );
};
