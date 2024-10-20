import { View, StyleSheet} from "react-native";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import OTPTextView from "react-native-otp-textinput";
import { useState } from "react";

export default function OTPVerification() {
 
  const navigation = useNavigation();

  const [code, setCode] = useState("");


  return (
    <UI.Containner>

        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 26 }}>
          <UI.BackButton  navigation={navigation} screenName="signup" />
       </View>
       
       <UI.CustomText size="xs" color="white" style={{marginTop: 50, fontSize: 13}}>
       A verification code has be sent your email. Please enter it here to 
       continue to your Zetba Wallet.</UI.CustomText>


          {/* otp input */}
          
          <OTPTextView 
            inputCount={5}
            handleTextChange={(text) => setCode(text)}
            tintColor={"white"}
            textInputStyle={styles.underlineStyleBase}
            containerStyle={{marginVertical: 40}}
            
            />
         

        <View style={{width: '100%',  justifyContent: 'space-between', alignItems: 'center', gap: 20, marginVertical: 40}}>
          <UI.Button variant="coloured" onPress={()=>router.navigate("/createUsername")} style={{width: '100%'}} text="Verify"/>
        </View>

        
          

       
    </UI.Containner>
  );
}



const styles = StyleSheet.create({
  
    underlineStyleBase: {
      width: 55,
      height: 55,
      borderWidth: 0.6,
      borderRadius: 4.77,
      color: "white",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    
    },
  
    underlineStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  });