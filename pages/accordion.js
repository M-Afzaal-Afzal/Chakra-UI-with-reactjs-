import React from 'react';

import {
    Box,
    VStack,
    HStack,
    Heading,
    Stack,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Spacer
} from '@chakra-ui/react'

import {AddIcon, MinusIcon} from "@chakra-ui/icons";

const questions = [
    {
        id: 1,
        title: 'Do I have to allow the use of cookies?',
        info:
            'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
    },
    {
        id: 2,
        title: 'How do I change my My Page password?',
        info:
            'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
    },
    {
        id: 3,
        title: 'What is BankID?',
        info:
            'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
    },
    {
        id: 4,
        title: 'Whose birth number can I use?',
        info:
            'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
    },
    {
        id: 5,
        title: 'When do I recieve a password ordered by letter?',
        info:
            'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
    },
]

const Accordions = () => {
    return (
        <Box p={[4, 8,16, 32]} minH={'100vh'} align={'center'} w={'100%'} bg={'#4b145b'}>

            <Box p={'2rem 2.5rem'} maxW={'55rem'} bg={'white'}>
                <Stack spacing={4} direction={['column','column','column','row']}>
                    <Box w={['100%','100%','100%','250px']}>
                        <Heading align={'left'} fontSize={'3xl'}>
                            Questions And Answers About Login
                        </Heading>
                    </Box>

                    <VStack w={'100%'}>

                        <Accordion w={'100%'} allowToggle defaultIndex={[0]} allowMultiple>
                            <VStack spacing={4}>
                                {
                                    questions.map((question) => (
                                        <AccordionItem w={'100%'} id={question.id} py={4} px={6} border={'1px solid #ccc'}>

                                            {
                                                ({isExpanded}) => (
                                                    <>
                                                        <HStack>
                                                            <Box>
                                                                <Heading fontSize={'lg'}>
                                                                    {question.title}
                                                                </Heading>
                                                            </Box>
                                                            <Spacer/>
                                                            <Box>
                                                                <AccordionButton background={'#eee'} p={2}
                                                                                 rounded={'full'}>
                                                                    {/*<AccordionIcon/>*/}
                                                                    {isExpanded ? (
                                                                        <MinusIcon fontSize={12}/>
                                                                    ) : (
                                                                        <AddIcon fontSize={12}/>
                                                                    )}
                                                                </AccordionButton>
                                                            </Box>
                                                        </HStack>
                                                        <AccordionPanel align={'left'} p={0} mt={4} pb={4}>
                                                            {
                                                                question.info
                                                            }
                                                        </AccordionPanel>
                                                    </>
                                                )
                                            }


                                        </AccordionItem>
                                    ))
                                }
                            </VStack>


                        </Accordion>

                    </VStack>

                </Stack>
            </Box>
        </Box>
    );
};

export default Accordions;
