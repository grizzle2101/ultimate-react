import { useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  //task 1 - store page data
  const pageSize = 10;
  const [page, setPage] = useState<number>(1);

  //task 2 - pass to usePosts
  const { data: posts, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  //task 4 - add buttons
  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary my-3"
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Previous
      </button>

      <button
        className="btn btn-primary my-3 ms-1"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </>
  );
};

export default PostList;
