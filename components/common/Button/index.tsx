import React, { FC } from 'react'
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'
import { primaryColor, grayColor } from '../variables'
import { LinearGradient } from 'expo-linear-gradient'

interface Props extends TouchableOpacityProps {
    text: string,
    variant: "coloured" | "light" | "dark" | "danger" | "cancel",
    onPress: () => void;
    noBorder?:  boolean;
    icon?: JSX.Element ;
    transverse?: boolean
}

const Button: FC<Props> = ({text, variant, icon, onPress, transverse, noBorder, style, ...props}) => {
   let variantStyles = {button: null, buttonText: null}


//    variant types and styles
   switch (variant){

    case "coloured":
        variantStyles = {button: { colors: ['#59F2C4', '#1C6650'] },  buttonText: {color: "white" }}

        break;

    case "light":
        variantStyles =  { 
            button: { colors: ['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.4)'],  borderWidth: noBorder ? 0 : 1, borderColor: 'white'},  
            buttonText: {color: 'white' }}
        break;

     case "dark":
        variantStyles =  { 
            button: { colors: [grayColor, grayColor],  borderWidth: noBorder ? 0 : 1, borderColor: 'white'},  
            buttonText: {color: 'white' }}
        break;


     case "danger":
        variantStyles =  { 
            button: { colors: ['red', 'red'],  borderWidth: noBorder ? 0 : 1, borderColor: 'white'},  
            buttonText: {color: 'white' }}
        break;

     case "cancel":
        variantStyles =  { 
            button: { colors: [grayColor, grayColor],  borderWidth: noBorder ? 0 : 1, borderColor: 'white'},  
            buttonText: {color: 'white' }}
        break;

   

    default: 
        variantStyles =  {button: {backgroundColor: primaryColor},  buttonText: {color: "white" }}
        break;
   }

  return (
    <TouchableOpacity style={{width: '100%'}} onPress={onPress}>
        <LinearGradient 
        colors={variantStyles?.button?.colors}
        style={[style, styles.button, variantStyles.button]} {...props}>
            
            <Text style={[styles.buttonText, variantStyles.buttonText]}> 
                {icon && (icon)} {text}
            </Text>
        </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        paddingVertical: 12,
        borderRadius: 8,
      },
    
      buttonText: {
        textAlign: "center",
        color: "white",
        fontFamily: 'Inter',
        fontSize: 16,
      }
})
export {Button};
