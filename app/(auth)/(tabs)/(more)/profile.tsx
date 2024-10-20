import {  View, StyleSheet, KeyboardAvoidingView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import SquareUserIcon from '@/assets/icons/SquareUser';
import {Feather, EvilIcons} from '@expo/vector-icons';


export default function profile() {

  const navigation = useNavigation();

  

  return (
      <UI.Containner>
      <KeyboardAvoidingView behavior="position" contentContainerStyle={styles.form} style={styles.form}>

       <View style={styles.header}>
          <UI.BackButton  navigation={navigation} screenName="/(more)/index" />
          
           <View style={{width: "100%", flex: 1, marginLeft: -30,  alignItems: "center"}}>
             <UI.CustomText size="sm" color="white">Profile</UI.CustomText>
           </View>
       </View>
       


       {/* form */}
        <View>
          <Image source={require("@/assets/images/dynamic/pro.jpeg")} style={styles.profileImage}/>
        </View>

         <UI.CustomTextInput 
             placeholder="Name" 
             keyboardType="default" 
             icon={(<SquareUserIcon color="white" width={16} height={16} />)}/>

         <UI.CustomTextInput 
             placeholder="Username" 
             keyboardType="default" 
             icon={(<SquareUserIcon color="white" width={16} height={16} />)}/>

         <UI.CustomTextInput 
             placeholder="Email" 
             keyboardType="email-address" 
             icon={(<Feather name="mail" size={16} color="white" />)}/>

         <UI.CustomTextInput 
             placeholder="Phone" 
             keyboardType="phone-pad" 
             icon={(<Feather name="phone" size={16} color="white" />)}/>

         <UI.CustomTextInput 
             placeholder="Location" 
             keyboardType="web-search" 
             icon={(<EvilIcons name="location" size={16} color="white" />)}/>

            <UI.Button variant="coloured" onPress={()=>{}} style={{width: '100%'}} text="Done"/>

       
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

    profileImage: {
        width: 80, 
        height: 80, 
        borderRadius: 40, 
        borderWidth: 2, 
        borderColor: "rgba(255, 255, 255, 0.8)"
      },
    
 
});
