import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { coffiedata,coffiedataasc,coffiedatadesc } from "../Redux/coffiedata";
import { SimpleGrid, Box, Heading, useDisclosure } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,

} from "@chakra-ui/react";

const Advance = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = useSelector((store) => {
    return store.coffiereducer;
  });

  console.log(data);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  function handleAsc(){
    dispatch(coffiedataasc);
  }

  function handleDesc(){
    dispatch(coffiedatadesc);
  }

  useEffect(() => {
    dispatch(coffiedata);
  }, []);

  return (
    <div style={{display:"flex"}}>
      {loading && <h2>...loading</h2>}
      {error && <h2>...error</h2>}
      <SimpleGrid columns={2} spacing={10}>
        {data &&
          data.map((ele, index) => {
            return (
              <Box
                key={index}
                style={{
                  padding: "12px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <h2>Title is : {ele.title}</h2>
                <p>{ele.description}</p>
                {ele.ingredients.map((ele, index) => {
                  return (
                    <p key={index} style={{ marginTop: "14px" }}>
                      {ele}
                    </p>
                  );
                })}

                <img src={ele.image} style={{ width: "200px" }} alt="" />
                <Heading as="h6" size="xs" style={{ marginTop: "14px" }}>
                  Price is : {ele.price}
                </Heading>
              </Box>
            );
          })}
      </SimpleGrid>



      <Button ref={btnRef} colorScheme="teal" onClick={onOpen} style={{margin:"0px 14px"}}>
        Sidebar
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
          <Button colorScheme='blue' style={{margin:"0px 12px"}} onClick={handleAsc}>Asc</Button>
          <Button colorScheme='blue' onClick={handleDesc}>Desc</Button>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Advance;
