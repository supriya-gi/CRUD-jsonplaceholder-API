import React from "react";

export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value);
    evt.target.name.value = "";
    evt.target.email.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add new user</h3>
      <input placeholder="Name" name="name" /> &nbsp;&nbsp;&nbsp;
      <input placeholder="Email" name="email" />
      &nbsp;&nbsp;&nbsp;
      <button onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  );
};
