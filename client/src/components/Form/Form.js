import React, {useState} from 'react';
import usePosts from '../../hooks/usePosts.hook';
import Box from '../atoms/box.atom'
import { Input, Button } from './styles'


export default () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const{ createNewPost } = usePosts();

    const isButtonDisabled = !title || !description;

    const handleSubmitClick = () => {
        const reqBody = {
            creator: 'Siddharth Khuttan',
            title: title,
            message: description,
            tags: ["Travel", "nature"]
        }
        createNewPost(reqBody);

    }

    const handleImageUploadClick = (event) => {

    }

    return (
        <Box width='100%' justifyContent='center' display='flex' flexDirection='column'> 
        Add a new post
        <Box>
        <Box>
            <Input type='text' placeholder='Add title' value={title} onChange={(event) => setTitle(event.target.value)} />
        </Box>
        <Box>
            <Input type='text' placeholder='Add description' value={description} onChange={(event) => setDescription(event.target.value)} />
        </Box>
        {/* <Box>
            <Input type='file' placeholder='Upload image' value={title} onChange={handleImageUploadClick} accept='image/png, image/gif, image/jpeg' />
        </Box> */}
        </Box>
        <Box display='flex' justifyContent='center'>
        <Button bgColor={isButtonDisabled ? '#d6d6d6' : '#256fef'} onClick={isButtonDisabled ? () => {} : handleSubmitClick} >Submit</Button>
        </Box>
        </Box>
    )
}