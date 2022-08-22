import {Center, Spinner}  from 'native-base';
//Center mantém todos os elementos no centro 
// Spinner da um efeito de loading

export function Loading (){
    return(
        <Center flex={1} bg="gray.700">
            <Spinner  color="green.700"/>
        </Center>
    )
}

// O center está mantendo o componente de loading ( Spinner) no centro.s 