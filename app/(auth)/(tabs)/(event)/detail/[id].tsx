
import { useLocalSearchParams } from 'expo-router';
import {  View, StyleSheet, TouchableOpacity, Image, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import {AntDesign, Feather} from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';
import {  lightGrayColor, lightWhiteColor} from "@/components/common/variables";


export default function notifications() {

  const navigation = useNavigation();
  const { slug } = useLocalSearchParams();

  

  return (
      <UI.Containner noGradient>
      

       <View style={styles.header}>
          <UI.BackButton  navigation={navigation} screenName="/(more)/index" />
          
           <View style={{width: "100%", flex: 1, marginLeft: -30,  alignItems: "center"}}>
             <UI.CustomText size="sm" color="white"> Event Detail</UI.CustomText>
           </View>

           <TouchableOpacity style={styles.shareButton}>
              <AntDesign name="sharealt" size={24} color="black" />
           </TouchableOpacity>
       </View>

       {/* ticket */}
       

    </UI.Containner>
  );
}

const styles = StyleSheet.create({
   header: {
      width: '100%', 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      marginBottom: 20, 
    },

    shareButton: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
    },
   
    ticket: {
        width: "100%",
        flex: 1,
        backgroundColor: lightWhiteColor,
        borderRadius: 20,
        padding: 12,
        marginBottom: 20,
        alignItems: "center"

        
    }
 
});
