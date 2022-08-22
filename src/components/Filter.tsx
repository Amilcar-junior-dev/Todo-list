import { Text, Button, IButtonProps, useTheme} from 'native-base';

type Props = IButtonProps & {
    title: string; // O componente filter deve ter um title para saber qual é o tipo do chamado.
    isActive?: Boolean; // Boleano para determiar se a chamada estará ativa ou não.
    type: 'open' | 'closed'; // Para determinar se está aberto ou fachado.
}
// A propriedade isActive é opcional e caso ela não seja informada começará com o valor false, terminado logo abaixo.
export function Filter ({title, isActive = false, type, ...rest}: Props) {
    const {colors}=useTheme(); // Acessa as cores do useTheme
    const colortType = type === 'open' ? colors.indigo[700] : colors.amber[700]
    //Condiciona as cores, se estiver open retornará uma cor, senão, retornará outra.
    return(
        <Button
        variant="subtle" // Esta propriedade mexe com o preenchimento do botão.
        bg="gray.600"
        borderWidth={isActive ? 2 : 0} // Condicional faz com que se estiver ativo tenha borda, senão, não tenha.
        borderColor={colortType}
        flex={1}
        size="sm"
        {...rest} //Passa o resto das propriedades para o button

        >
            <Text 
            color={isActive ? colortType : "gray.300"} 
            fontSize="xs"
            textTransform="uppercase" // Faz os textos ficarem em caixa alta
            >
                {title}
            </Text>

        </Button>
    )
}