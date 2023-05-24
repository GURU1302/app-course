import {
    Button,
    Container,
    Heading,
    HStack,
    Image,
    Input,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React, { useEffect, useState } from 'react';
  import { Link } from 'react-router-dom';

const Course=({
    views,
    title,
    imageSrc,
    id,
    addToPlaylistHandler,
    creator,
    description,
    lectureCount,
    loading
}) => {
    return (
        <VStack className='course' alignItems={['center', 'flex-start']}>
            <Image src={imageSrc} boxSize={'60'} objectFit={"contain"} />
            <Heading  
                textAlign={['center', 'left']}
                size={'sm'}
                maxW='200px'
                fontFamily={'sans-serif'}
                noOfLines={3}

                children={title}
            />
            <Text noOfLines={3} children={description} />

            <HStack>
                <Text 
                    fontWeight={'bold'}
                    textTransform={'uppercase'}
                    children={"creator"}
                />
                <Text 
                    fontWeight={'bold'}
                    textTransform={'uppercase'}
                    children={creator}
                />
            </HStack>
            <Heading 
                textAlign={['center','left']}
                size='xs'
                children={`Lectures - ${lectureCount}`}
                textTransform={'uppercase'}
            />
            <Heading 
                textAlign={['center','left']}
                size='xs'
                children={`Views - ${views}`}
                textTransform={'uppercase'}
            />

            <Stack 
            direction={['column','row']}
            alignItems={'center'}
            >
            <Link to={`/courses/${id}`}>
                <Button  colorScheme={'yellow'}>Watch Now</Button>
            </Link>
             
           <Button
           isLoading={loading}
           variant={'ghost'}
           colorScheme={'yellow'}
           onClick={() => addToPlaylistHandler(id)} 
           >
           Add to PlayList
           </Button>

            </Stack>
        </VStack>
    )
}



const Courses = () => {
    const [keywords, setKeywords]= useState('');
    const [category, setCategory]= useState('');

const addToPlaylistHandler=()=>{
    console.log("added to the playlist");
}

    const categories = [
        'Web development',
        'Artificial Intellegence',
        'Data Structure & Algorithm',
        'App Development',
        'Data Science',
        'Game Development',
      ];
  return (
    
    <Container
    minH={'95vh'}
    maxW={'container.lg'}
    paddingY={'8'}
    >
  <Heading children={"All Courses"}  m={'8'} />

  <Input  value={keywords}
    onChange={(e) => {
    setKeywords(e.target.value)
    }}
    placeholder={'Search a Course...'}
    type={'text'}
    focusBorderColor={'yellow.500'}
   />

<HStack
        overflowX={'auto'}
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
      direction={['column', 'row']}
      flexWrap='wrap'
      justifyContent={['flex-start' , 'space-evenly']}
      alignItems={['center' , 'flex-start']}
      >
      <Course
      title={'Sampel'}
      description={'Sampel'}
      views={23}
      imageSrc={'Sampel'}
      id={'Sampel'}
      creator= { 'Sampel boy'}
      lectureCount={2}
      addToPlaylistHandler={addToPlaylistHandler}
     />
      </Stack>


    </Container>


  )
}

export default Courses