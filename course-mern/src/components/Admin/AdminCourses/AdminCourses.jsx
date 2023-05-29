import {
    Box,
    Grid,
    Heading,
    HStack,
    Progress,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import React, { useEffect } from 'react';
  import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
  import cursor from '../../../assets/images/cursor.png';
  import Sidebar from '../Sidebar';

 
const AdminCourses = () => {
  return (
<Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box></Box>

      <Sidebar />
    </Grid>  )
}

export default AdminCourses