import {  View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import * as UI from '@/components/common';
import DollarIcon from '@/assets/icons/DollarCircle';
import WalletIcon from '@/assets/icons/Wallet';
import { lightGrayColor, primaryColor, primaryLightColor} from "@/components/common/variables"



export default function NewEvent() {

  const navigation = useNavigation();

  return (
      <UI.Containner noGradient>

        <View style={styles.header}>
          <UI.BackButton  navigation={navigation} />
          
           <View style={{width: "100%", flex: 1, marginLeft: -30,  alignItems: "center"}}>
             <UI.CustomText size="sm" color="white">Checkout</UI.CustomText>
           </View>

       </View>

       <View style={{width: "100%", marginBottom: 12, marginTop: 24}}>
         <Image source={require("@/assets/images/dynamic/concert2.png")} style={{width: "100%", height: 130, borderRadius: 8}}/>
        <UI.CustomText size="md" bold color="white">Barbados Music Festival</UI.CustomText>
        <UI.CustomText size="xs" bold color={lightGrayColor}>Aug 15 - Aug 30 | 08:00 - 20:00 </UI.CustomText>
        <UI.CustomText size="xs" bold color={lightGrayColor}>Bridgetown City Central, Barbados</UI.CustomText>
       </View>

       <View style={{width: "100%", marginVertical: 12, flexDirection: 'row', gap: 35}}>
          <View style={{width: "40%", flexDirection: "row", gap: 8}}>
            <View style={{width: 30, height: 30, borderRadius: 15, 
                backgroundColor: primaryLightColor, justifyContent: "center", alignItems: "center"}}>
                  <DollarIcon color={primaryColor} width={18} height={18}/>
            </View>
            <View style={{width: 85, height: 30, borderRadius: 8, borderWidth: 1,
                borderColor: 'white', justifyContent: "center", alignItems: "center"}}>
                  <UI.CustomText size="sm" color="white">$85.50</UI.CustomText>
            </View>

          </View>


          <View style={{width: "40%", flexDirection: "row", gap: 8}}>
            <View style={{width: 30, height: 30, borderRadius: 15, 
                backgroundColor: primaryLightColor, justifyContent: "center", alignItems: "center"}}>
                  <WalletIcon color={primaryColor} width={14} height={14}/>
            </View>
            <View style={{width: 85, height: 30, borderRadius: 8, borderWidth: 1,
                borderColor: 'white', justifyContent: "center", alignItems: "center"}}>
                  <UI.CustomText size="sm" color="white">0.001462</UI.CustomText>
            </View>

          </View>
       
       </View>
       

       
       <View style={{width: "100%", height: 1, backgroundColor: lightGrayColor}}/>


         {/* wallet address */}
       <View style={{width: "100%", marginVertical: 20, gap: 8}}>
        <UI.CustomText size="md" color="white" style={{fontSize: 16}}>Payment Wallet</UI.CustomText>

        <View  style={{flexDirection: 'row', gap: 12}}>
            <Image source={require("@/assets/images/tether.png")} style={{ width: 16, height: 16}}/>
            <UI.CustomText size="sm" color="white">3dercghn35rh.....7ds5hg6</UI.CustomText>

        </View>

       </View>

       {/* end of wallet address */}

       <View style={{width: "100%", height: 1, backgroundColor: lightGrayColor}}/>


       {/* total */}
       <View style={{width: "100%", marginVertical: 16}}>
          <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
            <UI.CustomText size="sm" style={{fontSize: 16}} color="white">Charge:</UI.CustomText>
            <UI.CustomText size="sm" style={{fontSize: 16}} color="white" bold>$1.00</UI.CustomText>
          </View>

          <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
            <UI.CustomText size="sm" style={{fontSize: 16}} color="white">Total:</UI.CustomText>
            <UI.CustomText size="sm" style={{fontSize: 16}} color="white" bold>$85.50</UI.CustomText>
          </View>

       </View>


       <UI.Button variant="coloured" text="Buy Now" onPress={()=>{router.navigate("detail/buyTicket/success")}} style={{ alignSelf: "flex-end"}}/>


      
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

