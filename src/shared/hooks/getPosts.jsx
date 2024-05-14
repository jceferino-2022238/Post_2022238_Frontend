import { useEffect, useState } from "react";
import { getPosts } from "../../services";

export const useFetchPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await getPosts();
                if (!response || !response.data) {
                    throw new Error("Invalid response format");
                }
                if (!response.error) {
                    if (response.data.posts) {
                        setPosts(response.data.posts);
                    } else {
                        console.error("Error: No posts found in response");
                    }
                } else {
                    console.error("Error fetching posts:", response.message);
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return { posts, loading };
};