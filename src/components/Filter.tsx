import { Text, Button, IButtonProps, useTheme} from 'native-base';

type Props = IButtonProps & {
    title: string; 
    isActive?: Boolean; 
    type: 'open' | 'closed'; 
}

export function Filter ({title, isActive = false, type, ...rest}: Props) {
    const {colors}=useTheme(); 
    const colortType = type === 'open' ? colors.amber[700] : colors.indigo[700]
    
    return(
        <Button
        variant="subtle" 
        bg="gray.600"
        borderWidth={isActive ? 2 : 0} 
        borderColor={colortType}
        flex={1}
        size="sm"
        {...rest} 

        >
            <Text 
            color={isActive ? colortType : "gray.300"} 
            fontSize="xs"
            textTransform="uppercase" 
            >
                {title}
            </Text>

        </Button>
    )
}



