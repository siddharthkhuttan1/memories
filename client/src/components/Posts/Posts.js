import React from 'react';
import Box from '../atoms/box.atom'
import Post from './Post/Post';


export default () => {
    const postsMock = [1,2,3,4,5];

    return(
        <Box display='flex' flexWrap='wrap'>
            {postsMock.map((post, index) => <Post key={index} />)}

        </Box>
    )
}