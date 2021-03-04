import React, { useState, useEffect } from "react";
import Blogs from "./components/Blogs";
import blogService from "./services/blogs";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("blogUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <h1>Login to application</h1>
      <div>
        username:
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password:
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );

  const handleLogin = (event) => {
    event.preventDefault();
    blogService
      .login({ username, password })
      .then((response) => {
        setUser(response);
        window.localStorage.setItem("blogUser", JSON.stringify(response));
      })
      .catch((err) => {
        setErrorMessage("Wrong credentials");
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };

  const handleLogOut = () => {
    window.localStorage.removeItem("blogUser");
    setUser(null);
  };

  const handleCreate = (event) => {
    event.preventDefault();
    blogService.setToken(user.token);
    blogService.create({ title, author, url }).then((response) => {
      setBlogs(blogs.concat(response));
      setTitle("");
      setAuthor("");
      setUrl("");
      setVisible(false);
    });
  };

  return (
    <div>
      {errorMessage}
      {user === null ? (
        loginForm()
      ) : (
        <Blogs
          blogs={blogs}
          user={user}
          handleLogOut={handleLogOut}
          handleCreate={handleCreate}
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          url={url}
          setUrl={setUrl}
          visible={visible}
          setVisible={setVisible}
        />
      )}
    </div>
  );
};

export default App;
