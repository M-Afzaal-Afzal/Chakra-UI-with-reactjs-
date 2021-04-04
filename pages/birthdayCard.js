import React, { useState } from 'react'
import { Heading, Box, VStack, Button } from '@chakra-ui/react'
import AvatarWithName from '../components/BirthdayCard.js/AvatarWithName'

const birthdayCard = () => {

    const persons = [
        {
            id: 1,
            name: 'Bertie Yates',
            age: 29,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        },
        {
            id: 2,
            name: 'Hester Hogan',
            age: 32,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
        },
        {
            id: 3,
            name: 'Larry Little',
            age: 36,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        },
        {
            id: 4,
            name: 'Sean Walsh',
            age: 34,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        },
        {
            id: 5,
            name: 'Lola Gardner',
            age: 29,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        },
    ];

    const [state, setState] = useState(persons);

    const defaultHeadingColor = '#333638'

    const clearAll = () => {
        setState([]);
    }

    return (
        <Box p={[2, 4, 8, 12]} bgColor='#F28AB2' w='100vw' minHeight='100vh'>
            <Box p='8' boxShadow='2xl' borderRadius='lg' bgColor='#fff' m='auto' maxW={'25rem'} >
                <Heading color={defaultHeadingColor}  fontWeight='bold' fontSize='xl'>
                    {state.length} Birthdays Today
                </Heading>
                <Box mt={8}>
                    <VStack spacing='5' align='left'>
                        {
                            state.map(person => {
                                return <AvatarWithName key={person.id} person={person} />
                            })
                        }
                    </VStack>
                    <Button onClick={clearAll} _focus={{ boxShadow: 'none' }} color='white' colorScheme='brand' isFullWidth mt='8'>
                        Clear All
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default birthdayCard;