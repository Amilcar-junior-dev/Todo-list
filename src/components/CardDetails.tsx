import { ReactNode } from "react";
import {IconProps} from 'phosphor-react-native';
import { VStack, HStack, Text, Box, useTheme } from "native-base";

type Props = {
    title: string;
    description?: string;
    footer?: string | null;
    icon: React.ElementType<IconProps>;
    children?: ReactNode;
}


export function CardDetails({
    title,
    description,
    footer = null,
    icon: Icon, // Como o icon será utilizado como componente deve ser iniciado com letra maiúscula, por isso se atribui assim
    children
}: Props) { 

    const {colors} = useTheme();



    return (
        <VStack bg="gray.500" p={5} mt={5} rounded="sm">
            <HStack alignItems="center" mb={4}>
                <Icon  color={colors.primary[700]} />
                <Text ml={2} color="gray.300" fontSize="sm" textTransform="uppercase">
                    {title}
                </Text>
            </HStack>
            {//!! torna a propriedade boleana && faz papel de então ( se tiver descrição renderiza o Text passando a descrição)
                !!description && 
                <Text color="gray.100" fontSize="md">
                    {description}
                </Text>
            }

            {children}

            {
                !!footer &&
                <Box borderTopWidth={1} borderTopColor="gray.700" mt={3}>
                    <Text mt={3} color="gray.300" fontSize="sm">
                        {footer}
                    </Text>

                </Box>
            }
        </VStack>
    )
}