import {  View, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import UserRoundCheckIcon from '@/assets/icons/UserRoundCheck';
import { primaryColor } from "@/components/common/variables";

export default function createUsername() {

  const navigation = useNavigation();

  

  return (
    <UI.Containner>

        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 26 }}>
          <UI.BackButton  navigation={navigation} screenName="hello" />
       </View>
       
       <View style={{width: "100%", marginVertical: 20}}>
          <UI.CustomText size="lg" bold color="white" style={{marginBottom: 20}}>Create Username  
            <UserRoundCheckIcon color={primaryColor} /> </UI.CustomText>
          <UI.CustomText size="sm" color="white">
          Choose a unique Zetba Username</UI.CustomText>
       </View>

       <UI.CustomTextInput 
           placeholder="Enter new username" 
           keyboardType="default" 
           icon={(<UserRoundCheckIcon color="white" />)}/>

        <UI.Button variant="coloured" onPress={()=>router.push("/success")} style={{width: '100%', marginVertical: 36}} text="Continue"/>
       
    </UI.Containner>
  );
}

const styles = StyleSheet.create({
 
 
});
