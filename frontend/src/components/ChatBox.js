import React, {useContext} from 'react';

import { Box } from "@chakra-ui/layout";
//import "./styles.css";
import SingleChat from "./SingleChat";
import ChatContext from '../Context/chat-context';
// import {img} from 'beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721'
import imgage from './beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'


const Chatbox = ({ fetchAgain, setFetchAgain }) => {

  const { selectedChat } = useContext(ChatContext);

  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="gray.500"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
