import { useEffect, useState } from "react";
import { getPosts } from "../../services";
export const useFetchPosts = () =>{
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const fetchPosts = async () =>{
            try {
                const response = await getPosts()
                if(!response.error){
                    setPosts(response.data.posts)
                }else{
                    console.error('Error fetching posts:', response.message);
                }
            } catch (e) {
                console.error('Error fetching posts:', error);
            } finally{
                setLoading(false);
            }
        }
        fetchPosts()
    }, [])
    return {posts, loading}
}