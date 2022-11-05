import React from "react";

const Like = ({ liked, onLike }) => {
  let classes = liked ? "bi bi-heart-fill" : "bi bi-heart";
  return (
    <i style={{ cursor: "pointer" }} onClick={onLike} className={classes}></i>
  );
};

export default Like;
