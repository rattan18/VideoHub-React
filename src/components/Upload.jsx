import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'}>
      <VStack h={'full'} color={'purple.500'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />

        <form>
          <HStack>
            <Input required type='file' css={{
              "&::file-selector-button" : {
                border: 'none',
                width: 'calc(100% + 36px)',
                height: '100%',
                marginLeft: '-18px',
                backgroundColor: 'white',
                color: '#805ad5',
                fontWeight: '500'
              }
            }}></Input>
            <Button colorScheme='purple' type='submit'>Upload</Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
