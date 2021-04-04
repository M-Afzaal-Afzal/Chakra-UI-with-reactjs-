import React from 'react';
import { VStack, Container, LightMode, Divider, Input, Button, useColorMode } from '@chakra-ui/react'
import { InputGroup, InputLeftElement } from '@chakra-ui/input'
import { PhoneIcon } from '@chakra-ui/icons'

const Form = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Container maxW={'container.xl'} p={16}>
            <form action={'submit'}>
                {/*<Center p={16}>*/}

                <VStack mx={"auto"} w={'25rem'} spacing={4}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<PhoneIcon color="blue.300" />}
                        />
                        <Input
                            variant={'filled'}
                            focusBorderColor={'orange.500'}
                            colorScheme={'yellow'}
                            placeholder={'name'}

                        />

                    </InputGroup>
                    <Input _hover={{ border: '1px solid green' }}
                        placeholder={'name'} />
                    <Input placeholder={'name'} />
                    <Input placeholder={'name'} />
                    <Divider />
                    <LightMode>
                        <Button fontSize={'1.5rem'} size={'lg'} _focus={{ outline: 'none' }} colorScheme={'yellow'}
                            boxShadow={'md'} _hover={{ boxShadow: 'lg', outline: 'none' }} _active={{ boxShadow: "xl" }}
                            onClick={toggleColorMode} isFullWidth variant={'outline'}>Click me</Button>
                    </LightMode>
                </VStack>


                {/*</Center>*/}
            </form>
        </Container>
    );
};


export default Form;