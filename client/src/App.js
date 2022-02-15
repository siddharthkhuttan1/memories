import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Box from './components/atoms/box.atom';
import Posts from './components/Posts/Posts';
import usePosts from './hooks/usePosts.hook';
import Form from './components/Form/Form';

function App() {
  const {fetchPosts} = usePosts();
  useEffect(() => {
    console.log('fetching')
    fetchPosts();
  },[])
  return (
    <Box textAlign='center' mt={2}  height='100%' p={3}>
     <Header />
     
    <Box display='flex' flexDirection='column' flex='1' px={2} mt={5}>
      <Box flex = '0.3' display='flex'></Box>
      <Box flex = '0.7' flexDirection='row' display='flex'>
      <Box flex = '0.7' borderRight='1px dashed #ebebeb'><Posts /></Box>
      <Box flex = '0.3 '><Form /></Box>
      </Box>
      



    </Box>
    </Box>

  );
}

const Header = () => {
  return(
    <Box display='flex' border='1px solid #D6D6D6' borderRadius='4px' p={3} justifyContent='center'>
       <Box>
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mQAiDbZfA10qSWbHcFORHBEQ33nwgIhNbQ&usqp=CAU'} height='40px' width='60px' />
      </Box>
      <Box fontSize='32px' color='green'>
      MEMORIES
      </Box>
      <Box>
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mQAiDbZfA10qSWbHcFORHBEQ33nwgIhNbQ&usqp=CAU'} height='40px' width='60px' />
      </Box>

    </Box>
  )
}

export default App; 
 