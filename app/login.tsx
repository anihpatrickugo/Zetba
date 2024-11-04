import { View, StyleSheet } from "react-native";
import { useSession } from "./ctx"
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import { lightGrayColor, primaryColor } from "@/components/common/variables";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import { dynamicClient } from "@/dynamicClient";



export default function Login() {
  const { signIn } = useSession();
  const navigation = useNavigation();

 


  // const handleLogin = () => {
  //   //Adicione sua lógica de login aqui
  //   signIn();
  //   //Antes de navegar, tenha certeza de que o usuário está autenticado
  //   router.replace("/");
  // };

  const handleSendOTP = async () => {
    await dynamicClient.auth.email.sendOTP('iampatrickugo@gmail.com')
    // setOtpSent(true)
    console.log("done")
  }


  const handleLogin = () => {
    //Adicione sua lógica de login aqui
    signIn();
    //Antes de navegar, tenha certeza de que o usuário está autenticado
    router.replace("/");
  };

  return (
    <UI.Containner>

        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 26 }}>
          <UI.BackButton  navigation={navigation} screenName="hello" />
       </View>
       
       <View style={{width: "100%", marginVertical: 20}}>
          <UI.CustomText size="lg" bold color="white" style={{marginBottom: 20}}>Sign Up 👋</UI.CustomText>
          <UI.CustomText size="sm" color="white">
            Please, insert your email address or connect an existing wallet for your a account.</UI.CustomText>
       </View>

       <UI.CustomTextInput 
           placeholder="your@example.com" 
           keyboardType="email-address" 
           icon={(<AntDesign name="mail" size={24} color="white" />)}/>



        <View style={{width: '100%', flexDirection: "row", marginVertical: 30, gap: 8,  alignItems: 'flex-start'}}>
          <MaterialCommunityIcons name="shield-check-outline" size={16} color={lightGrayColor} />
          <UI.CustomText size="xs" color={lightGrayColor}>By signing up, you agree to the 
            <UI.CustomText style={{textDecorationLine: "underline"}} size="xs" color={lightGrayColor}> Terms of Service</UI.CustomText> and
            <UI.CustomText style={{textDecorationLine: "underline"}} size="xs" color={lightGrayColor}> Privacy Policy</UI.CustomText>
             </UI.CustomText>

        </View>

        <View style={{width: '100%',  justifyContent: 'space-between', alignItems: 'center', gap: 20}}>
          <UI.Button variant="coloured" onPress={()=>router.navigate("/OTPVerification")} style={{width: '100%'}} text="Sign Up"/>

          <UI.Button variant="light" onPress={handleSendOTP} style={{width: '100%'}} text="Connect Wallet"/>
        </View>

        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8, marginVertical: 24}}>
          <UI.CustomText size="sm" color={lightGrayColor}>Already have an account?</UI.CustomText>
          <UI.CustomText size="sm" color={primaryColor} style={{textDecorationLine: "underline"}} >Sign In</UI.CustomText>
        </View>
          

       
    </UI.Containner>
  );
}

const styles = StyleSheet.create({
 
 
});
