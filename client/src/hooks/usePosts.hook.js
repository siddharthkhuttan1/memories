import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {getPosts, addNewPost, setPosts} from '../actions/posts'
import {fetchAllPosts, createNewPost} from '../api'


export default function usePosts() {
    const dispatch = useDispatch();
    const postState = useSelector(state => state.posts);
    console.log({postState})

    const fetchPosts = useCallback(() => {
        fetchAllPosts().then(response=> {
            console.log({response})
            setPosts(response.data)
        })

    },[dispatch])

    const createNewPost = useCallback((reqBody) => {
        console.log('creating', reqBody)
        addNewPost(reqBody);

    },[dispatch])

    return{
        postState,
        fetchPosts,
        createNewPost
    }


     
}