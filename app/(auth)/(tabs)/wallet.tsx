import { useState } from "react";
import {  View,  ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import {Feather} from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';
import { lightGrayColor, primaryColor, primaryLightColor } from "@/components/common/variables";


export default function password() {

  const navigation = useNavigation();
  const [showBalance, setShowBalance] = useState(false);

  

  return (
      <UI.Containner noGradient>
      

       <View style={styles.header}>
          <UI.BackButton  navigation={navigation} screenName="/(more)/index" />
          
           <View style={{width: "100%", flex: 1, marginLeft: -30,  alignItems: "center"}}>
             <UI.CustomText size="sm" color="white">Wallet</UI.CustomText>
           </View>
       </View>


       <ScrollView showsVerticalScrollIndicator={false} style={{width: "100%", flex: 1}}>

      
 
       {/* balance */}
       <View style={styles.balanceContainner}>
            <UI.CustomText size="xs" color="white">
            Current Balance</UI.CustomText>

            <View style={{width: '100%', justifyContent: "space-between", flexDirection: 'row'}}>
              <UI.CustomText size="xl" color="white" >
              {showBalance ? '2,000' : '******'}</UI.CustomText>

              <TouchableOpacity onPress={()=>{setShowBalance(!showBalance)}}>
                <Feather name="eye" size={24} color="white" />
              </TouchableOpacity>

            </View>

            <UI.CustomText size="xs" color={lightGrayColor} >
            Bitcoin</UI.CustomText>

       </View>

       {/* wallet address */}
       <View style={styles.walletAddressContainner}>
         <View style={{backgroundColor: 'white', padding: 12}}>
          <QRCode
           value="http://awesome.link.qr"
           size={230} 
            />
         </View>


         <View style={styles.walletAddress}>
            <UI.CustomText size="sm" color={primaryColor} >
                Your wallet id is: 3rtgyte5...ftdsr  
             </UI.CustomText>

             <TouchableOpacity>
                <Feather name="copy" size={14} color={primaryColor}/>
              </TouchableOpacity>

         </View>


       </View>
 

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

    balanceContainner: {
      backgroundColor: primaryLightColor,
      width: '100%',
      padding: 20,
      borderRadius: 10,
      gap: 10,
      marginVertical: 20
    },
 
    walletAddressContainner: {
      backgroundColor: primaryLightColor,
      width: '100%',
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 10,
      gap: 10,
      marginVertical: 20,
      alignItems: 'center'
    },

    walletAddress: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 5
    }
 
});
