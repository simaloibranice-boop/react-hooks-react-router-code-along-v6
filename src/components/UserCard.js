import React from "react";

function UserCard({user}) {
  return (
    <article
    style={{
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "8px",
      margin: "10px 0"
    }}
    >
        <h2>{user.name}</h2>
    </article>
  );
};

export default UserCard;
