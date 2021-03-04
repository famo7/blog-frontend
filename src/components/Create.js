import React from "react";

const Create = ({
  handleCreate,
  title,
  setTitle,
  author,
  setAuthor,
  url,
  setUrl,
}) => {
  return (
    <form onSubmit={handleCreate}>
      <h1>create a blog</h1>
      <div>
        title:
        <input
          type="text"
          value={title}
          name="title"
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        author:
        <input
          type="text"
          value={author}
          name="author"
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
        url:
        <input
          type="text"
          value={url}
          name="author"
          onChange={({ target }) => setUrl(target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default Create;
