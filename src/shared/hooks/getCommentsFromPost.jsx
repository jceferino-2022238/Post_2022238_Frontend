import { useState, useEffect } from "react";
import { getCommentsFromPost } from "../../services";

export const getCommentsFromOnePost = () => {
  const [commentsFromPost, setCommentsFromPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async (postId) => {
    try {
      const response = await getCommentsFromPost(postId);
      if (!response.error) {
        setCommentsFromPost(response.data.comments);
      } else {
        console.error("Error fetching comments:", response.message);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return { commentsFromPost, fetchComments, loading };
};