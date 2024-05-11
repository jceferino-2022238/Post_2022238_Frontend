import { useState, useEffect } from 'react';
import { getComments } from '../../services';
export const getCommentsB = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getComments();
        if (!response.error) {
          setComments(response.data.comments);
        } else {
          console.error('Error fetching comments:', response.message);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, []);
  return { comments, loading };
};
