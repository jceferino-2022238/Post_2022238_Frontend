import { useFetchPosts } from '../../shared/hooks/getPosts';
import { Card, Modal } from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Input } from '../Input';
import { useAddComment } from '../../shared/hooks/addComent';
import { useState } from 'react';
import { getCommentsFromOnePost } from '../../shared/hooks/getCommentsFromPost.jsx';
import './posts.css';
export const PostsB = () => {
  const { posts, loading } = useFetchPosts();
  const {
    fetchComments,
    loading: getCommentLoading,
    error: getCommentError,
    commentsFromPost,
  } = getCommentsFromOnePost();
  const {
    postComment,
    loading: commentLoading,
    error: commentError,
  } = useAddComment();
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showCommentTable, setShowCommentTable] = useState(false);
  const [commentTitle, setCommentTitle] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [expandedStates, setExpandedStates] = useState([]);
  const handleShowCommentsClick = (postId) => {
    setSelectedPostId(postId);
    setShowCommentTable(true);
    fetchComments(postId);
  };
  const handleCloseCommentTable = () => {
    setShowCommentTable(false);
  };
  const handleAddCommentClick = (postId) => {
    setSelectedPostId(postId);
    setShowCommentForm(true);
  };

  const handleCloseCommentForm = () => {
    setShowCommentForm(false);
  };

  const handleGetCommentTable = async () => {
    try {
      if (!selectedPostId) {
        console.error('Error: selectedPostId is undefined');
        return;
      }
      await fetchComments(selectedPostId);
      setShowCommentTable(false);
    } catch (error) {
      console.error('Error showing comments:', error);
    }
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
  const handleExpandedClick = (index) => {
    setExpandedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div>
      <h1>Posts</h1>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="card-list">
          {posts.map((post, index) => (
            <Card key={post.pid} style={{ width: '18rem', margin: '10px' }}>
              <Card.Img src={post.imageURL} className="post-img" />
              <Card.Body>
                <Card.Text className="card-text">
                  Clase: {post.classI}
                </Card.Text>
                <Card.Text className="card-text">
                  {expandedStates[index]
                    ? post.text
                    : post.text.substring(0, 50)}
                  <br />
                  <br />
                  {expandedStates[index] && <span>ID: {post.pid}</span>}
                </Card.Text>
                <Button
                  onClick={() => handleExpandedClick(index)}
                  className="btn-showMore"
                >
                  {expandedStates[index] ? 'Mostrar Menos' : 'Mostrar Más'}
                </Button>
                <Button
                  onClick={() => handleAddCommentClick(post.pid)}
                  className="btn-add"
                >
                  Agregar comentario
                </Button>
                <Button
                  onClick={() => handleShowCommentsClick(post.pid)}
                  className="btn-comment"
                >
                  Ver Comentarios
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
            label="Título"
            value={commentTitle}
            onChangeHandler={setCommentTitle}
            type="text"
          />
          <Input
            label="Contenido"
            value={commentContent}
            onChangeHandler={setCommentContent}
            type="textarea"
          />
          <Button
            variant="primary"
            onClick={handleSubmitComment}
            disabled={commentLoading}
            className="add-form-comment"
          >
            {commentLoading ? 'Añadiendo comentario' : 'Añadir comentario'}
          </Button>
          {commentError && <p className="text-danger">{commentError}</p>}
        </Modal.Body>
      </Modal>
      <Modal show={showCommentTable} onHide={handleCloseCommentTable}>
        <Modal.Header closeButton>
          <Modal.Title>Comentarios del Post</Modal.Title>
          <Modal.Body>
            <Table striped bordered hover className="mx-auto">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Content</th>
                </tr>
              </thead>
              <tbody>
                {commentsFromPost.map((comment, index) => (
                  <tr key={comment._id}>
                    <td>{index + 1}</td>
                    <td>{comment.title}</td>
                    <td>{comment.content}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </div>
  );
};
