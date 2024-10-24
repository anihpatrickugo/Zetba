import { StyleSheet, View } from "react-native"
import { grayColor } from "../variables"
import { LinearGradient } from "expo-linear-gradient"
import { FC } from "react";


type Props = {
   noGradient?: boolean;
   children: JSX.Element | JSX.Element[];
}

const Containner: FC<Props> = ({children, style, noGradient, ...props}: any) => {
  
  if (noGradient) return (
    <View style={[styles.containner, style]}>
      {children}
    </View>
  )

  return (
    <LinearGradient style={[styles.containner, style ]} 
      colors={['#1C6650', grayColor]}
       locations={[0, 0.15]}

    >
      {children}   
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    containner: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        padding: 20,
        paddingTop: 40,
        backgroundColor: grayColor,
    }
})

export {Containner}
