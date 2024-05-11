import { useFetchPosts } from '../../shared/hooks/getPosts';
import { Card, Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Input } from '../Input';
import { useAddComment } from '../../shared/hooks/addComent';
import { useState } from 'react';
export const PostsB = () => {
    const { posts, loading } = useFetchPosts();
    const {
      postComment,
      loading: commentLoading,
      error: commentError,
    } = useAddComment();
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [commentTitle, setCommentTitle] = useState('');
    const [commentContent, setCommentContent] = useState('');
    const [selectedPostId, setSelectedPostId] = useState(null);
  
    const handleAddCommentClick = (postId) => {
      setSelectedPostId(postId);
      setShowCommentForm(true);
    };
  
    const handleCloseCommentForm = () => {
      setShowCommentForm(false);
    };
  
    const handleSubmitComment = async () => {
      try {
        if (!selectedPostId) {
          console.error('Error: selectedPostId is undefined');
          return;
        }
        await postComment(selectedPostId, commentTitle, commentContent);
        setShowCommentForm(false);
        setCommentTitle('');
        setCommentContent('');
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    };
  
    return (
      <div>
        <h1>Posts</h1>
        {loading ? (
          <div>Loading</div>
        ) : (
          <div>
            {posts.map((post) => (
              <Card key={post.pid} style={{ width: '18rem', margin: '10px' }}>
              <Card.Img src={post.imageURL} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.text}</Card.Text>
                <p>ID: {post.pid}</p>
                <Button onClick={() => handleAddCommentClick(post.pid)}>
                  Agregar comentario
                </Button>
              </Card.Body>
            </Card>
            ))}
          </div>
        )}
        <Modal show={showCommentForm} onHide={handleCloseCommentForm}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar Comentario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input
              label="Title"
              value={commentTitle}
              onChangeHandler={setCommentTitle}
              type="text"
            />
            <Input
              label="Content"
              value={commentContent}
              onChangeHandler={setCommentContent}
              type="textarea"
            />
            <Button variant='primary' onClick={handleSubmitComment} disabled={commentLoading}>
              {commentLoading ? "Añadiendo comentario" : "Añadir comentario"}
            </Button>
            {commentError && <p className="text-danger">{commentError}</p>}
          </Modal.Body>
        </Modal>
      </div>
    );
  };