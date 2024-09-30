import React, { FC } from 'react'
import { StyleSheet, TextInput, View, TextInputProps } from 'react-native'



interface Props extends TextInputProps {
    icon: JSX.Element
}

const CustomTextInput: FC<Props> = ({icon, ...props}) => {


 return <View style={styles.containner}>
         {icon}
       <TextInput  placeholderTextColor='white' style={styles.inputField} {...props}/>
 </View> 

}

const styles = StyleSheet.create({

    containner: {
        width: "100%", 
        height: 40, 
        alignItems: "flex-end", 
        padding: 8, 
        gap: 8,  
        flexDirection: 'row',  
        borderRadius: 8, 
        borderWidth: 1,
        borderColor: 'white'
     },

    inputField: {
        height: "100%" ,
        flex: 1,
        color: 'white',
        fontFamily: 'Inter', 
    }
})
export {CustomTextInput};
