import { Table } from 'react-bootstrap';
import { getCommentsB } from '../../shared/hooks/getComments';
export const CommentsTableO = () => {
  const { comments, loading } = getCommentsB();
  return (
    <Table striped bordered hover className="mx-auto">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Content</th>
          <th>Post ID</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan={4}>Loading...</td>
          </tr>
        ) : (
          comments.map((comment, index) => (
            <tr key={comment._id}>
              <td>{index + 1}</td>
              <td>{comment.title}</td>
              <td>{comment.content}</td>
              <td>{comment.post}</td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};
