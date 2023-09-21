import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'3'}
        left={'3'}
        borderRadius={'full'}
        colorScheme="purple"
        w={'10'}
        h={'10'}
        p={'0'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button variant={'ghost'} colorScheme="purple" onClick={onClose}>
                <Link to={'/'}>Home</Link>
              </Button>
              <Button variant={'ghost'} colorScheme="purple" onClick={onClose}>
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button variant={'ghost'} colorScheme="purple" onClick={onClose}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>
              <Button variant={'ghost'} colorScheme="purple" onClick={onClose}>
                <Link to={'/upload'}>Upload</Link>
              </Button>
            </VStack>

            <HStack
              w={'full'}
              justifyContent={'space-evenly'}
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
            >
              <Button colorScheme="purple" onClick={onClose}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                variant={'outline'}
                colorScheme="purple"
                onClick={onClose}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
