import { useState} from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth'; // Importação para utilizar a autenticação.
import {VStack, Heading, Icon, useTheme} from 'native-base'; // Icon é um elemento para se utilizar os icones que se deseja.

// import { Envelope} from 'phosphor-react-native';
import { Envelope, Key} from 'phosphor-react-native';
import { Input } from '../components/input';
import {Button} from '../components/Button';


function SignIn (){ //Todo componente deve começar com letra maiúscula
    const [isLoading, setIsLoading]=useState(false); // estado que vai verificar se está logando
    const [email, setEmail]=useState(''); // Começa como vazio
    const [password, setPassword]=useState('');//Começa como vazio.

    const {colors}= useTheme(); // Desestruturando e pegando o colors de dentro do useTheme

    function handleSignIn() {  // ë recomendável sempre fazer uma verificação antes de cada login;
        if(!email || !password) { // faz verificação, se o email ou a senha não existirem retorna um alerta
            return Alert.alert('Entrar', 'Informe e-mail e senha'); // o return é adicionado pq caso seja disparado o alerta, com o return não permite que o código continue a rodar ele paa aqui mesmo.
            // No Alert.alert o primeiro grupo de string, no caso ( entrar) é o titulo e o segundo grupo é a mensagem em si
        }
        setIsLoading(true); //Estando true mudará o estado do isLoading ativando a propriedade isLoading do botão fazedno aparecer o load de carregamento

        //Logo abaixo se encontra o método de autenticação
        auth() //Utiliza o auth do firebase para verificar a autenticação
        .signInWithEmailAndPassword(email, password) //Escolhido este método ( login com senha e email)se deve passar email e senha
        .then(response => { //devolve os dados do usuário cadastrados
            console.log(response);
        })
        .catch((error)=>{ // Usado para fazer tratamento de erro caso algo dê errado
            console.log(error); //Vai mostrar no console se tiver algum erro, assim se pode visualizar para corrigir
            setIsLoading(false); // Se deu erro cancela o efeito de load

            //Criando tratamento de erro que ajuda o usuário a identificar
            if(error.code === 'auth/invalid-email'){ //Este erro é referente ao código do erro que aparece no console ( error.code)
                return Alert.alert('Entrar', 'E-mail inválido!');
            }
            if ( error.code === 'auth/wrong-password') {
                return Alert.alert('Entrar', 'E-mail ou senha inválida');
            }
            if ( error.code === 'auth/user-not-found') {
                return Alert.alert('Entrar', 'E-mail ou senha inválida');
            }

            return Alert.alert('Entrar', 'Não foi possível acessar'); 


        })


    }

    return (
        <VStack flex={1} alignItems="center" bg="gray.700" px={8} pt={24}>
            <Heading color="gray.100" fontSize="xl" mt={20} >
                Acesse sua conta  
            </Heading>
            <Input placeholder="email"
             mb={4}
             InputLeftElement={<Icon ml={4} as={<Envelope color={colors.gray[300]}/>} />}
             onChangeText={setEmail}//Quando o valor do input mudar irá passar para o setName, que por sua vez, passa o valor para o name.
             /> 
            <Input placeholder="senha"
             InputLeftElement={<Icon ml={4} as={<Key color={colors.gray[300]}/>} />}
             secureTextEntry // Esconde as letras
             mb={8}
             onChangeText={setPassword}
            /> 
            <Button 
             title="Entrar" 
             w="full" 
             onPress={handleSignIn}/* Full fazs a largura ocupar toda a tela*/
             isLoading={isLoading} //isloading é uma porpriedade do botao que faz aparecer o carregamento
            /> 
        </VStack>
    )
}
export default SignIn

// Cada input acima pode receber propriedades individuais, e devido ao (...rest do componente) será transmitido essas propriedades ao componente.

// InputLeftElement recebe uma chaves pois queremos que nele seja renderizado um elemento, portanto, é passado para ele o <Icon /> com o AS={}, na qual, iremos inserir a biblioteca de icones que desejamos, sendo assim, será remontado ao <Icons /> que ele é um ícone daquele tipo de biblioteca, no caso, do tipo envelop.
// color={colors.gray[300]} acessa a propriedade colors desetruturada do usetheme e pega a cor que se deseja para o icone