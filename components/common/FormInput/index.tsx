import React, { FC } from 'react'
import { StyleSheet, TextInputProps, TextInput, View } from 'react-native'
import { primaryLightColor } from "@/components/common/variables";



interface Props extends TextInputProps {
    icon?: JSX.Element
}

const FormInput: FC<Props> = ({children, icon, style, ...props}) => {


 return <View style={styles.containner}>
           {icon}
           <TextInput  placeholderTextColor={primaryLightColor} style={styles.inputField} {...props}/>
       </View> 

}

const styles = StyleSheet.create({
    containner: {
        width: "100%", 
        height: 90, 
        alignItems: "center", 
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
export {FormInput};
