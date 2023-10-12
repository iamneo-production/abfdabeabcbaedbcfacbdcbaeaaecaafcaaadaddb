import React from "react";
import { render, fireEvent, screen, getByTestId, getAllByTestId } from "@testing-library/react";
import App from "../components/App";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import ModifyPost from "../components/ModifyPost";

test("displayes_create_new_page", () => {
  const { getByLabelText } = render(<App />);
  const titleElement = screen.getByText(/Create new/i);
  userEvent.click(titleElement)
  const titleLabel = getByLabelText(/Title/i);
  const contentLabel = getByLabelText(/Content/i);
  expect(titleLabel).toBeInTheDocument();
  expect(contentLabel).toBeInTheDocument();
});
test("cancel_while_creating_blog", () => {
  const { getByLabelText,getByText } = render(<App />);
  const titleElement = screen.getByText(/Create new/i);
  userEvent.click(titleElement)
  const titleLabel = getByLabelText("Title");
  const contentLabel = getByLabelText(/Content/i);
  fireEvent.change(titleLabel, { target: { value: "New Title" } });
  fireEvent.change(contentLabel, { target: { value: "New Content" } });
  expect(titleLabel.value).toBe("New Title");
  expect(contentLabel.value).toBe("New Content");
  const  cancelButton = getByText(/cancel/i);
  userEvent.click(cancelButton)
});
test("creating_new_blog", () => {
  const { getByLabelText,getByText } = render(<App />);
  const titleElement = screen.getByText(/Create new/i);
  userEvent.click(titleElement)
  const titleLabel = getByLabelText("Title");
  const contentLabel = getByLabelText("Content");
  fireEvent.change(titleLabel, { target: { value: "New Title" } });
  fireEvent.change(contentLabel, { target: { value: "New Content" } });
  expect(titleLabel.value).toBe("New Title");
  expect(contentLabel.value).toBe("New Content");
  const SubmitButton = getByText(/save/i);
  userEvent.click(SubmitButton)
  const content1 = getByText("New Title");
  const content2= getByText("New Content");
  expect(content1).toBeInTheDocument();
  expect(content2).toBeInTheDocument();
});
test("editing_the_existing_blog", async() => {
  const { getByLabelText, getByText, getByTestId,queryAllByTestId } = render(<App />);
  const titleElement = screen.getByText(/Create new/i);
  userEvent.click(titleElement);

  const titleLabel = getByLabelText("Title");
  const contentLabel = getByLabelText("Content");
  fireEvent.change(titleLabel, { target: { value: "New Title" } });
  fireEvent.change(contentLabel, { target: { value: "New Content" } });
  expect(titleLabel.value).toBe("New Title");
  expect(contentLabel.value).toBe("New Content");

  const SubmitButton = getByText(/save/i);
  userEvent.click(SubmitButton);

  const content1 = getByText("New Title");;
  const content2 = getByText("New Content");
  expect(content1).toBeInTheDocument();
  expect(content2).toBeInTheDocument();

  const editButton = getByTestId("edit-post"); // Use a regular expression to match the unique test ids
    userEvent.click(editButton);

    const titleLabel2 = getByLabelText("Title");
    const contentLabel2= getByLabelText("Content");

    fireEvent.change(titleLabel2, { target: { value: "Updated Title" } });
    fireEvent.change(contentLabel2, { target: { value: "Updated Content" } });


    const updatebutton = getByText(/update post/i);
    userEvent.click(updatebutton);
  const updatedcontent1 = getByText("Updated Title");
  const updatedcontent2 = getByText("Updated Content");
  expect(updatedcontent1).toBeInTheDocument();
  expect(updatedcontent2).toBeInTheDocument();
});

test("cancel_while_editing", async() => {
  const { getByLabelText, getByText, getByTestId,queryAllByTestId } = render(<App />);
  const titleElement = screen.getByText(/Create new/i);
  userEvent.click(titleElement);

  const titleLabel = getByLabelText("Title");
  const contentLabel = getByLabelText("Content");
  fireEvent.change(titleLabel, { target: { value: "Title2" } });
  fireEvent.change(contentLabel, { target: { value: "Content2" } });
  expect(titleLabel.value).toBe("Title2");
  expect(contentLabel.value).toBe("Content2");

  const SubmitButton = getByText(/save/i);
  userEvent.click(SubmitButton);

  const content1 = getByText("Title2");;
  const content2 = getByText("Content2");
  expect(content1).toBeInTheDocument();
  expect(content2).toBeInTheDocument();

  const editButton = getByTestId("edit-post"); // Use a regular expression to match the unique test ids
    userEvent.click(editButton);

    const titleLabel2 = getByLabelText("Title");
    const contentLabel2= getByLabelText("Content");

    fireEvent.change(titleLabel2, { target: { value: "Updated Title" } });
    fireEvent.change(contentLabel2, { target: { value: "Updated Content" } });


    const updatebutton = getByText(/cancel/i);
    userEvent.click(updatebutton);
  const updatedcontent1 = getByText("Title2");
  const updatedcontent2 = getByText("Content2");
  expect(updatedcontent1).toBeInTheDocument();
  expect(updatedcontent2).toBeInTheDocument();
});

test("deleting_the_blog", async() => {
  const { getByLabelText, getByText, getByTestId,queryAllByTestId } = render(<App />);
  const titleElement = screen.getByText(/Create new/i);
  userEvent.click(titleElement);

  const titleLabel = getByLabelText("Title");
  const contentLabel = getByLabelText("Content");
  fireEvent.change(titleLabel, { target: { value: "New Title" } });
  fireEvent.change(contentLabel, { target: { value: "New Content" } });
  expect(titleLabel.value).toBe("New Title");
  expect(contentLabel.value).toBe("New Content");

  const SubmitButton = getByText(/save/i);
  userEvent.click(SubmitButton);

  const content1 = getByText("New Title");;
  const content2 = getByText("New Content");
  expect(content1).toBeInTheDocument();
  expect(content2).toBeInTheDocument();

  const deleteButton = getByTestId("delete-post"); // Use a regular expression to match the unique test ids
  userEvent.click(deleteButton);

  const deletedName = screen.queryByText("New Title");
  const deletedEmail = screen.queryByText("New Content");

  expect(deletedName).toBeNull();
  expect(deletedEmail).toBeNull();
  const nopostcontent = getByText("There are no posts yet.");
  expect(nopostcontent).toBeInTheDocument();
  
});


test("renders ModifyPost with the 'Update Post' button", () => {
  // Mock functions to simulate user interactions
  const mockUpdatePost = jest.fn();
  const mockSavePostTitleToState = jest.fn();
  const mockSavePostContentToState = jest.fn();

  // Mock initial props for the ModifyPost component
  const props = {
    title: "Sample Title",
    content: "Sample Content",
    updatePost: mockUpdatePost,
    savePostTitleToState: mockSavePostTitleToState,
    savePostContentToState: mockSavePostContentToState,
  };

  // Render the ModifyPost component with the mocked props
  render(<ModifyPost {...props} />);

  // Check if the "Modify Post" title is rendered
  const modifyPostTitle = screen.getByText("Modify Post");
  expect(modifyPostTitle).toBeInTheDocument();

  // Check if the "Update Post" button is rendered
  const updateButton = screen.getByText(/Update Post/i);
  expect(updateButton).toBeInTheDocument();

  // Simulate a button click and test if the updatePost function is called
  fireEvent.click(updateButton);
  expect(mockUpdatePost).toHaveBeenCalled();
});