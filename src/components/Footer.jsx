import {
  Box,
  Button,
  Heading,
  Stack,
  VStack,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'white'} minH={'40'} p={'6'}>
      <Stack direction={['column', 'row']}>
        <VStack w={'full'} alignItems={'stretch'} px={'2'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            subscribe to get updates
          </Heading>
          <HStack py={'2'} borderBottom={'2px solid white'}>
            <Input
              placeholder="Enter E-mail Here..."
              border={'none'}
              outline={'none'}
              borderRadius={'none'}
              focusBorderColor="none"
            />
            <Button
              colorScheme="purple"
              p={'0'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          justifyContent={'center'}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            video hub
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading textTransform={'uppercase'} textAlign={'center'} size={'md'}>
            social media
          </Heading>
          <Button variant={'link'} colorScheme="white">
            <a href="www.youtube.com" target="_blank">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a href="www.instagram.com" target="_blank">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a href="www.github.com" target="_blank">
              GitHub
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
