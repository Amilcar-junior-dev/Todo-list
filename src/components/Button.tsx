import {Button as ButtonNativebase, IButtonProps, Heading} from 'native-base';


type Props = IButtonProps & { 
    title: string;
}

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