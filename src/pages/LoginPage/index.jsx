import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import logi from '../../assets/images/gatewaydoc.png';
import { useDimensions } from '../../hooks/useDimensions';
import styles from './style';
import user from '../../assets/images/user.png';
import visible from '../../assets/images/visible.png';
import hide from '../../assets/images/hide.png';

function LoginPage() {
  const { innerWidth } = useDimensions();
  const [showPw, setShoPw] = useState(false);
  return (
    <Grid templateColumns="repeat(8, 1fr)" gap={4}>
      <GridItem
        colStart={innerWidth > 900 ? 3 : 1}
        colEnd={innerWidth > 900 ? 7 : 9}
        rowStart={1}
        style={styles.formContainer}
      >
        <VStack spacing={10} width={innerWidth > 500 ? '70%' : '90%'}>
          <Box>
            <img src={logi} height="180px" width="180px" alt="" />
          </Box>
          <Box>
            <p>Connectez-vous a votre compte</p>
          </Box>
          <Box width="100%">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <img
                  src={user}
                  alt=""
                  width="25px"
                  height="25px"
                  style={{ ...styles.inputIconLeft }}
                />
              </InputLeftElement>
              <Input w="full" placeholder="username" size="lg" mb={3} />
            </InputGroup>
            <InputGroup>
              <InputRightElement onClick={() => setShoPw((v) => !v)}>
                <img
                  src={showPw ? visible : hide}
                  alt=""
                  width="25px"
                  height="25px"
                  style={{ ...styles.inputIconRight, cursor: 'pointer' }}
                />
              </InputRightElement>
              <Input
                w="full"
                placeholder="**********"
                size="lg"
                type={showPw ? 'text' : 'password'}
              />
            </InputGroup>
          </Box>
          <Box width="100%">
            <Link to="/content">
              <Button w="full" colorScheme="blue">
                Connexion
              </Button>
            </Link>
          </Box>
        </VStack>
      </GridItem>
    </Grid>
  );
}

export default LoginPage;
