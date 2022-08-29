import {Input as NativeBaseInput, IInputProps} from 'native-base';

export function Input ({...rest}:IInputProps) { 
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
        _focus={{ 
            borderWidth:1, 
            borderColor: "blue.900",
            bg:"black" 
        }}
        {...rest}  
        />
    )
};

