import {fetchAllPosts, createNewPost} from '../api'
import * as actionTypes from './actionTypes'

export const setPosts = (value) => {
    console.log({value})
    return{
        type: actionTypes.SET_POSTS,
        value: value
    }
}

export const updatePosts = (value) => {
    return{
        type: actionTypes.UPDATE_POSTS,
        value: value
    }
}


export const getPosts = () => {
    fetchAllPosts().then(response=> {
        console.log({response})
    })
}

export const addNewPost = (reqBody) => {
        createNewPost(reqBody).then(response => {
            console.log({response})
        })
    

}