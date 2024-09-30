import React, { FC } from 'react'
import { StyleSheet, TextInputProps, TextInput } from 'react-native'



interface Props extends TextInputProps {
}

const FormInput: FC<Props> = ({children, style, ...props}) => {


 return  <TextInput style={[styles.inputField, style]} {...props}>{children}</TextInput>

}

const styles = StyleSheet.create({
    inputField: {
        height: 40,
        padding: 12,
        borderWidth: 1,
        borderColor: 'white',
        color: 'white',
        borderRadius: 8,
        fontFamily: 'Inter'
 
    }
})
export {FormInput};
