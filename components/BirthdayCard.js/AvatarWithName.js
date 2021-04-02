import React from 'react'

import { Heading, Flex, Avatar, Text, HStack } from '@chakra-ui/react'

const defaultHeadingColor = '#333638'

const AvatarWithName = ({ person }) => {
    return (
        <HStack spacing='3'>
            <Avatar name='test' src={person.image} />
            <Flex direction='column'>
                <Heading fontWeight='semi-bold' color={defaultHeadingColor} size='md'>
                    {person.name}
                </Heading>
                <Text fontSize='sm' color='gray.400'>{person.age} years</Text>
            </Flex>
        </HStack>
    )
}

export default AvatarWithName
