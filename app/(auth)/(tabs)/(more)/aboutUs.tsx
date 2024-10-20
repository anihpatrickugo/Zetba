import {  View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import { lightGrayColor } from "@/components/common/variables";


export default function AboutUs() {

  const navigation = useNavigation();

  

  return (
      <UI.Containner noGradient>

       <View style={styles.header}>
          <UI.BackButton  navigation={navigation} screenName="/(more)/index" />
          
           <View style={{width: "100%", flex: 1, marginLeft: -30,  alignItems: "center"}}>
             <UI.CustomText size="sm" color="white">About Us</UI.CustomText>
           </View>
       </View>
 
       <ScrollView 
             showsVerticalScrollIndicator={false} 
             style={{marginTop: 20, width: '100%', flex: 1,}}
             contentContainerStyle={{gap: 20}}>

            <UI.CustomText size="xs" color={lightGrayColor} >
            Single-origin belly plaid hoodie dsa godard austin. 
            Craft drinking park live-edge heard goth ascot. 
            Synth hell four kombucha bread tbh narwhal adaptogen chicken out. 
            +1 pork everyday shaman leggings bread quinoa locavore pabst chia. 
            Subway pin forage boys meh brunch bruh. 
            Bespoke stumptown hammock narwhal +1 austin. 
            Man vegan live-edge cleanse chillwave fixie. Toast mumblecore kickstarter roof boys. 
            </UI.CustomText>

            <UI.CustomText size="xs" color={lightGrayColor} >
            Single-origin belly plaid hoodie dsa godard austin. 
            Craft drinking park live-edge heard goth ascot. 
            Synth hell four kombucha bread tbh narwhal adaptogen chicken out. 
            +1 pork everyday shaman leggings bread quinoa locavore pabst chia. 
            Subway pin forage boys meh brunch bruh. 
            Bespoke stumptown hammock narwhal +1 austin. 
            Man vegan live-edge cleanse chillwave fixie. Toast mumblecore kickstarter roof boys. 
            </UI.CustomText>

            <UI.CustomText size="xs" color={lightGrayColor} >
            Single-origin belly plaid hoodie dsa godard austin. 
            Craft drinking park live-edge heard goth ascot. 
            Synth hell four kombucha bread tbh narwhal adaptogen chicken out. 
            +1 pork everyday shaman leggings bread quinoa locavore pabst chia. 
            Subway pin forage boys meh brunch bruh. 
            Bespoke stumptown hammock narwhal +1 austin. 
            Man vegan live-edge cleanse chillwave fixie. Toast mumblecore kickstarter roof boys. 
            </UI.CustomText>

           
       </ScrollView>


     
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

    
 
});
