import React from 'react';
import Box from '../../atoms/box.atom'


export default () => {
    return(
        <Box border='1px solid #D6D6D6' borderRadius='6px' p={2} mt={2} width='250px' mr={2}>
            <img src={`https://images.unsplash.com/photo-1643188438863-3a65f0f3c26f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80`} height='100px' width='160px' />
            <Box mt={2} fontSize='14px' color='#828282'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt urna augue, non pellentesque purus feugiat vel. Pellentesque faucibus dolor non sem dignissim porttitor. In posuere porta augue id congue. Nulla scelerisque commodo dolor, quis euismod ligula rhoncus et. In nec tristique leo, eu dapibus ex. Nunc eget lacus vitae metus tempus molestie non ut ex. Aenean tincidunt pretium leo, non vehicula arcu consequat sed. Sed lacus nunc, auctor sit amet luctus at, iaculis ut libero. Praesent mollis a ipsum ut laoreet.</Box>
        </Box>
    )
}