import { useFetchPosts } from "../../shared/hooks/getPosts";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
export const PostsB = () =>{
    const {posts, loading} = useFetchPosts()
    return(
        <div>
            <h1>Posts</h1>
            {loading ? (
                <div>Loading</div>
            ):(
                <div>
                    {posts.map(post =>(
                        <Card key={post._id} style={{width:'18rem', margin:'10px'}}>
                            <Card.Img src={post.imageURL}/>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.text}</Card.Text>
                                <Button>Agregar comentario</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}