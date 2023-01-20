
import { Button, ChakraProvider, Wrap } from '@chakra-ui/react'
import { useState } from 'react';
import Cards from "./componets/Cards"


function App() {

   const [info, setInfo]= useState([
    {nome:"joana", arroba: "@joana"},
    {nome:"maria", arroba: "@maria"},
    {nome:"joao", arroba: "@joao"}
   ])


  return (
  <ChakraProvider>
    {/* <Button colorScheme='blue'>Button</Button>
    <Cards/> */}
    <Wrap>
    { info.map((user) => {
    // console.log(info);
    return <Cards nome={user.nome} arroba={user.arroba}  />;
  })}
    </Wrap>
  </ChakraProvider>
  );
}

export default App;
