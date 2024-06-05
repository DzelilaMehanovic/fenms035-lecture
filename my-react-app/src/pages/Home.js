import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MyButton from '../components/MyButton/MyButton';
import Typography from '@mui/material/Typography';

const Home = () => {

  const handleMyButtonClick = () => {
    alert('Hello from My Button')
  }
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
        <MyButton onClick={handleMyButtonClick} text="My button" displayDetails={true}  width="399"/>
        <MyButton onClick={handleMyButtonClick} text="Second My button" width="399"/>
      </Stack>
      <Typography variant="caption" component="h2">Typography</Typography>
  </div>
  ) 
};

export default Home;