import axios from "axios";
const api = axios.create({
    baseURL: "http://192.168.31.116:8000/blog_2022238/v1",
    timeout: 5000
})

export const getPosts = async () =>{
    try{
        return await api.get('/posts')
    }catch(e){
        return {
            e: true,
            message: e.message
        };
    }
}
export const getComments = async () =>{
    try{
        return await api.get("/comments")
    }catch(e){
        return{
            e:true,
            message: e.message
        }
    }
}
export const getCommentsFromPost = async (postId) =>{
    try {
        return await api.get(`/comments/${postId}`)
    } catch (e) {
        return{
            e:true,
            message: e.message
        }
    }
}
export const addComment = async (postId, title, content) =>{
    try {
        return await api.post(`/comments/${postId}`, {title, content})
    } catch (e) {
        return{
            e: true,
            message: e.message
        }
    }
}