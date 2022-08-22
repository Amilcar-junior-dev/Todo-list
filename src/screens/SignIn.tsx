import {VStack, Heading} from 'native-base';
function SignIn (){ //Todo componente deve começar com letra maiúscula
    return (
        <VStack flex={1} alignItems="center" bg="gray.700" px={8} pt={24}>
            <Heading color="gray.100" fontSize="xl" mt={20} >
                Acesse sua conta  
            </Heading>
        </VStack>
    )
}
export default SignIn;