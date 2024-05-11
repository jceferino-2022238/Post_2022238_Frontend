import { useState } from "react";
import { addComment } from "../../services";

export const useAddComment = () =>{
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

   const postComment = async (postId, title, content) =>{
    setLoading(true);
    try {
        const response = await addComment(postId, title, content);
        if (!response.error) {
            console.log("Comment added successfully:", response.data);
        } else {
            setError(response.message);
            console.error("Error adding comment:", response.message);
        }
    } catch (e) {
        setError(e.message);
        console.error("Error adding comment:", e.message);
   } finally {
        setLoading(false);
   }
  }

  return { postComment, loading, error };
}