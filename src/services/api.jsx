import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:8000/blog_2022238/v1",
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