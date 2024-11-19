import { View, StyleSheet, Pressable } from "react-native";
import { useSession, } from "./ctx"
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import { lightGrayColor, primaryColor } from "@/components/common/variables";
import { AntDesign } from "@expo/vector-icons";
import GoogleIcon from '@/assets/icons/Google'
import { getJWT } from "@/api/auth";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";


export default function Login() {
  const [error, setError] = useState<string|null>(null)
  const [loading, setLoading] = useState(false)

  //  form states
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useSession();
  const navigation = useNavigation();

    const handleLogin = async () => {
      setLoading(true)
      setError(null)
      try{
        const data = await getJWT(username, password)
        const accessToken = data.access
        const refreshToken = data.refresh
         //Adicione sua lógica de login aqui
         await SecureStore.setItemAsync('accessToken', accessToken)
         await SecureStore.setItemAsync('refreshToken', refreshToken)
          signIn(accessToken);
        //Antes de navegar, tenha certeza de que o usuário está autenticado
         router.replace("/");
        

      }catch(e: any){
        console.log('error', e.message.toString())
        setError(e.message.toString())
      }finally{
        setLoading(false)
      }

    };
  
  if(loading){
    return (
      
        <UI.Loading text='loading' />
      
    )
  }  

  return (
    <UI.Containner>
        

        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 26 }}>
          <UI.BackButton  navigation={navigation} screenName="hello" />
       </View>
       
       <View style={{width: "100%", marginVertical: 20}}>
          <UI.CustomText size="lg" bold color="white" style={{marginBottom: 20}}>Sign In 👋</UI.CustomText>
          <UI.CustomText size="sm" color="white">
            Please, insert your username and password.</UI.CustomText>
       </View>

       <UI.CustomTextInput 
           placeholder="Enter Username" 
           keyboardType="default" 
           value={username}
           onChangeText={(e)=>setUsername(e)}
           icon={(<AntDesign name="user" size={24} color="white" />)}/>

       <View style={{marginVertical: 10}}/>

       <UI.CustomTextInput 
           placeholder="Enter Password" 
           keyboardType="default" 
           secureTextEntry
           value={password}
           onChangeText={(e)=>setPassword(e)}
           icon={(<AntDesign name="lock" size={24} color="white" />)}/>



        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8, marginVertical: 24}}>
          <UI.CustomText size="sm" color={lightGrayColor}>Don't have an account?</UI.CustomText>
          <UI.CustomText size="sm" color={primaryColor} style={{textDecorationLine: "underline"}} >Sign Up</UI.CustomText>
        </View>


        <View style={{width: '100%', marginVertical: 16,  justifyContent: 'space-between', alignItems: 'center', gap: 10}}>
          <UI.Button variant="coloured" onPress={handleLogin} style={{width: '100%'}} text="Sign In"/>

          <UI.CustomText size="sm" color={lightGrayColor}>or</UI.CustomText>

          <UI.Button variant="light" onPress={()=>{}} style={{width: '100%'}} 
          icon={ <GoogleIcon width={24} height={24} color='white' />}
          // icon={(<AntDesign name="lock" size={24} color="white" />)}
          text='Continue With Google'/>

          <UI.CustomText size="sm" color={primaryColor} style={{textDecorationLine: "underline"}} >Forgot Pasword?</UI.CustomText>
        </View>


       
    </UI.Containner>
  );
}

const styles = StyleSheet.create({
 
 
});
