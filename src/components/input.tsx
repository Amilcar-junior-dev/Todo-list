import {Input as NativeBaseInput, IInputProps} from 'native-base';

export function Input ({...rest}:IInputProps) { //IInputProps diz que todas as propriedades do input que estão no ...rest é do tipo IInputProps.
    return (
        <NativeBaseInput
        bg="coolGray.50"
        h={14}
        size="md"
        borderWidth={0}
        fontSize="md"
        fontFamily="body"
        color="red"
        placeholderTextColor="gray.300"
        _focus={{ // Quando clica no input e da o foco retorna essas configurações.
            borderWidth:1, // largura da borda
            borderColor: "blue.900", // cor da borda
            bg:"black" // cor de fundo quando está em foco
        }}
        {...rest}  // 
        />
    )
};

// Ao utilizar o rest operator (...rest) é possível pegar todas as porpriedades que estão sendo colocadas no meu componente input e além disso, em cada input diferente customizar de forma individual de modo que cada input possa ter as suas particularidades, sendo que , cada propriedade individual em inputs diferente virá para o meu componente principal, no caso este. 

//IInputProps é utilizado para que as propriedades do input possa aparecer onde eu chamar o meu componente de input