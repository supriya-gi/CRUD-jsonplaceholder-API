import React, { useState } from "react";
import "../styles.css";
export const User = ({ name, email, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Name" name="name" defaultValue={name} />
          &nbsp;&nbsp;&nbsp;
          <input placeholder="Email" name="email" defaultValue={email} />
          &nbsp;&nbsp;&nbsp;
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="user">
          <span className="user-name">{name}</span>
          <span className="user-email">{email}</span>
          <div>
            <button className="editcolor" onClick={handleEdit}>
              Edit
            </button>
            &nbsp;&nbsp;&nbsp;
            <button className="danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
