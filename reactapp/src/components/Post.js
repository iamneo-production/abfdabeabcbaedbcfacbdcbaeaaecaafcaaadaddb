import React from "react";

const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <>
      <div className="card card-width">
        <section key={id}>
          <h3>{title}</h3>
          <hr className="new1"></hr>
          <p>{content}</p>
          <span title="edit post" onClick={() => editPost(id)} >
            <i className="edit-button far fa-edit fa-2x button-css" data-testid="edit-post" />
          </span>
          <span title="delete post" onClick={() => deletePost(id)} >
            <i className="delete-button fas fa-trash fa-2x ml-2 button-css" data-testid="delete-post"/>
          </span>

        </section>
      </div>
    </>
  );
};

export default Post;
