import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

 const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      // zIndex={'overlay'}
      // variant="ghost"
      // color="current"
      // position={'fixed'}
      // top={'4'}
      // right={'4'}
      // marginLeft="2"
      // onClick={toggleColorMode}
      // icon={<SwitchIcon />}
      // {...props}
    />
  );
};

export default ColorModeSwitcher;