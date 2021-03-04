import React, { useState } from "react";
import Blog from "./Blog";
import Create from "./Create";
const Blogs = ({
  blogs,
  user,
  handleLogOut,
  handleCreate,
  title,
  setTitle,
  author,
  setAuthor,
  url,
  setUrl,
  visible,
  setVisible,
}) => {
  return (
    <div>
      <h2>blogs</h2>
      <h4>{user.name} logged in</h4>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
      <button onClick={handleLogOut}>Log out</button>
      <p></p>
      {visible ? null : (
        <button onClick={() => setVisible(true)}>New Blog</button>
      )}
      {visible ? (
        <Create
          handleCreate={handleCreate}
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          url={url}
          setUrl={setUrl}
        />
      ) : null}
      <p></p>
      <button onClick={() => setVisible(false)}>Cancel</button>
    </div>
  );
};

export default Blogs;
