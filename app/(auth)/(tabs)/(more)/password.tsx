import {  View, StyleSheet, KeyboardAvoidingView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import {Feather} from '@expo/vector-icons';


export default function password() {

  const navigation = useNavigation();

  

  return (
      <UI.Containner noGradient>
      <KeyboardAvoidingView behavior="position" contentContainerStyle={styles.form} style={styles.form}>

       <View style={styles.header}>
          <UI.BackButton  navigation={navigation} screenName="/(more)/index" />
          
           <View style={{width: "100%", flex: 1, marginLeft: -30,  alignItems: "center"}}>
             <UI.CustomText size="sm" color="white">Security</UI.CustomText>
           </View>
       </View>
 
       <View style={{width: '100%'}}>
            <UI.CustomText size="xs" color="white" style={{marginTop: 20}}>
              You can now change your password</UI.CustomText>
       </View>


       {/* form */}

         <UI.CustomTextInput 
             placeholder="Recent Password" 
             keyboardType="default" 
             secureTextEntry={true}
             icon={(<Feather name="lock" size={16} color="white" />)}/>

         <UI.CustomTextInput 
             placeholder="Create New Password" 
             keyboardType="default" 
             secureTextEntry={true}
             icon={(<Feather name="lock" size={16} color="white" />)}/>

         <UI.CustomTextInput 
             placeholder="Confirm New Password" 
             keyboardType="default"
             secureTextEntry={true} 
             icon={(<Feather name="lock" size={16} color="white" />)}/>

      

            <UI.Button variant="coloured" onPress={()=>{}} style={{width: '100%', marginVertical: 30}} text="Done"/>

       
       </KeyboardAvoidingView>
    </UI.Containner>
  );
}

const styles = StyleSheet.create({
   header: {
      width: '100%', 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    },

    form :{
        width: '100%',
        alignItems: "center",
        gap: 20,
    },
    
 
});
