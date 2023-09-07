import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import { useState } from "react";

function Comment() {
  const [commentData, setCommentData] = useState({
    commentText: "",
  });

  const [addComment, { error, data }] = useMutation(ADD_COMMENT);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCommentData({ ...commentData, [name]: value });
    console.log(name, value);
  };

  const handleFormSubmit = async (e) => {
    console.log("test");
    e.preventDefault();
    console.log(data);
    try {
      const { data } = await addComment({ variables: { ...commentData } });
    } catch (e) {
      console.log(e);
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
      />
      <button type="submit" className="submit" onClick={handleFormSubmit}>
        Add Comment
      </button>
    </>
  );
}

export default Comment;
