import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import { useState } from "react";

function Comment({ _id }) {
  const [commentData, setCommentData] = useState({
    commentText: "",
  });

  const [Comment, { error, data }] = useMutation(ADD_COMMENT);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Comment({
        variables: { ...commentData, photoId: _id },
      });
      console.log(data, commentData);
    } catch (e) {
      console.log(e);
      console.log("Hey");
    }

    // setCommentData({ commentText: "" });
  };

  return (
    <>
      <input
        type="text"
        name="commentText"
        value={commentData.commentText}
        onChange={handleInputChange}
        style={{ color: "black" }}
      />
      <button type="submit" className="submit" onClick={handleFormSubmit}>
        Add Comment
      </button>
    </>
  );
}

export default Comment;
