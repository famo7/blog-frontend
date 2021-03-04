import React from "react";
import { render } from "@testing-library/react";
import Blog from "./Blog";

test("renders content", () => {
  const blog = {
    title: "test",
    author: "farhan",
  };

  const component = render(<Blog blog={blog} />);

  expect(component.container).toHaveTextContent("test farhan");
});
