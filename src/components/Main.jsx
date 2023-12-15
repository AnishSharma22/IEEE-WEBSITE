import React from 'react';
import {Container,Text,Button} from  '@chakra-ui/react';

const Main = () => {
  return (
    <div style={{width:'100%',height:'87vh',color:'white'}}>
        <Container maxW="container.xl" style={{height:'87vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <div>
                <Text fontSize='6xl'>Your future of better learning </Text>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><Text fontSize='6xl' >starts here.</Text></div>

            </div>
            <div style={{marginTop:'20px'}}>
                <Text fontSize='2xl'>Make global connections along your path. Become an IEEE member</Text>
            </div>
            <div style={{display:'flex',width:'15vw',justifyContent:'space-between'}}>
                <div style={{marginTop:'20px',display:'flex',flexDirection:'column'}} >
                   
                    <Button color='#6A57A9'>Events</Button>
                </div>
                <div style={{marginTop:'20px',display:'flex',flexDirection:'column'}}>
                 
                    <Button bg='transparent' border='1px' borderColor='white' color='white' _hover={{bg:'#9983E9'}}>Events</Button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Main