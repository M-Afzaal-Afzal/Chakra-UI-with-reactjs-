import React, {useState} from 'react';
import {Avatar, Box, Button, Divider, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {AnimatePresence, AnimateSharedLayout, motion} from "framer-motion";
import { wrap } from "popmotion";

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 100 : -100,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const Reviews = () => {

    const reviews = [
        {
            id: 1,
            name: 'susan smith',
            job: 'web developer',
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
            text:
                "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
            id: 2,
            name: 'anna johnson',
            job: 'web designer',
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
            text:
                'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
            id: 3,
            name: 'peter jones',
            job: 'intern',
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
            text:
                'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
            id: 4,
            name: 'bill anderson',
            job: 'the boss',
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
            text:
                'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
        },
    ];


    const MotionBox = motion(Box);
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, reviews.length, page);
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };


    const [selected, setSelected] = useState(0);

    const checkNumber = (index) => {
        if (index === -1) {
            return 3;
        }

        if (index === reviews.length) {
            return 0;
        }

        return index;
    }

    const selectRandom = () => {
        const random = Math.floor(Math.random() * reviews.length);
        if (random === selected) {
            setSelected(checkNumber(selected + 1));
        } else {
            setSelected(checkNumber(random));
        }
    }

    const prevReview = (index) => {
        setSelected(checkNumber(index - 1));
        paginate(1);
    }

    const nextReview = (index) => {
        setSelected(checkNumber(index + 1))
        paginate(-1);
    }

    return (
        <Box bg='gray.200' w='100%' p={[4, 8, 16]}>
            <Box mb={16} align={'center'} w={'100%'}>
                <VStack spacing={3} d={'inline-block'}>
                    <Heading color={'#102A42'} as={'h1'} fontSize={"4xl"}>
                        Our Reviews
                    </Heading>
                    <Divider h={'5px'} width={'100px'} bg={'facebook.700'} colorScheme={'facebook'}
                             orientation={'horizontal'}/>
                </VStack>
            </Box>

            <Box overflow={'hidden'} boxShadow={'2xl'} bg={'white'} maxW={'35rem'} mx={'auto'} p={[8]}>
                <AnimatePresence exitBeforeEnter initial={false} custom={direction}>

                    <MotionBox
                        key={reviews[selected].id}
                        layout
                        // transition={{type: 'linear', duration: .5}}
                        // initial={{x: 300, opacity: 0}}
                        // animate={{x: 0, opacity: 1}}
                        // exit={{x: -300, opacity: 0}}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: {type: "spring", stiffness: 300, damping: 30},
                            opacity: {duration: 0.2}
                        }}
                        drag="x"
                        dragConstraints={{left: 0, right: 0}}
                        dragElastic={1}
                        onDragEnd={(e, {offset, velocity}) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                                setSelected(checkNumber(reviews[selected].id -1 - 1));
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                                setSelected(checkNumber(reviews[selected].id -1 + 1));

                            }
                        }}
                    >
                        <Box
                            align={'center'} mb={4}>
                            <Avatar boxShadow={'lg'} mb={4} w={150} h={150} name={'A'}
                                    src={reviews[selected].image}/>
                            <Heading fontSize={'lg'}>{reviews[selected].name}</Heading>
                            <Text color={'#49a6e9'}>{reviews[selected].job}</Text>
                            {/*<Image src={'/test'} objectFit={'cover'} layout={'fill'}/>*/}
                        </Box>
                        <Text align={'center'}>
                            {reviews[selected].text.substring(0, 190)} ...
                        </Text>
                    </MotionBox>
                </AnimatePresence>

                <VStack align={'center'}>
                    <HStack mt={6} justify={'center'} spacing={4}>
                        <Button onClick={prevReview.bind(this, selected)} color={'#49a6e9'} _hover={{color: '#21c1e9'}}
                                variant={'unstyled'}>
                            <ChevronLeftIcon w={8} h={8}/>
                        </Button>
                        <Button onClick={nextReview.bind(this, selected)} color={'#49a6e9'} _hover={{color: '#21c1e9'}}
                                variant={'unstyled'}>
                            <ChevronRightIcon w={8} h={8}/>
                        </Button>
                    </HStack>
                    <Button onClick={selectRandom} colorScheme={'brand'}>Surprise me</Button>
                </VStack>

            </Box>

        </Box>
    );
};

export default Reviews;
