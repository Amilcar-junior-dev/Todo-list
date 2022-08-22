import {Button as ButtonNativebase, IButtonProps, Heading} from 'native-base';

// Criando um tipo Props que tem um titulo e será passado para o botão, dizendo que o botão em si será deste tipo.
// O IButtonProps determina que o tipo Props recebe/extende todas as propriedades do IButtonProps mais o title
type Props = IButtonProps & { 
    title: string;
}
// Com o ...rest é possível utilizar o tipo title e todo o resto que for utilizada la no componente button de signin
export function Button({title, ...rest}:Props) {
    return (
        <ButtonNativebase 
        bg="blueGray.600"
        fontSize="sm"
        rounded="sm"
        _pressed={{
            bg: "blueGray.900"
        }}

        {...rest}>
            <Heading color="white" fontSize="sm">
                {title}
            </Heading>
        </ButtonNativebase>
    )
}