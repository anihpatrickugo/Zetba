import { SafeAreaView, StyleSheet } from "react-native"
import { grayColor } from "../variables"
import { LinearGradient } from "expo-linear-gradient"

const Containner = ({children}: any) => {
  return (
    <LinearGradient style={styles.containner} 
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
        paddingTop: 62,
        backgroundColor: grayColor,
        position: 'absolute',
    }
})

export {Containner}
