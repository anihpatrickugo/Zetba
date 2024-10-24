import {  TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import {Ionicons, Feather} from '@expo/vector-icons';
import { lightGrayColor, primaryColor } from "@/components/common/variables";



export default function successScree() {

  const navigation = useNavigation();


  

  return (
    <UI.Containner noGradient style={{justifyContent: "space-between", alignItems: "center"}}>

     <View style={{width: "80%", justifyContent: "center", alignItems: "center", marginTop: 150}}>
       <Feather name="check-circle" size={90} color={primaryColor}/>
       
       <View style={{width: "100%", marginVertical: 20, alignItems: "center"}}>
          <UI.CustomText size="lg" bold color="white" style={{marginBottom: 20}}>Congratulations</UI.CustomText>
          <UI.CustomText size="sm" color={lightGrayColor} style={{textAlign: "center"}}>
          You’ve successfully purchased you Barbados Music Concert Ticket.
          </UI.CustomText>
          <UI.CustomText size="sm" color={lightGrayColor} style={{textAlign: "center"}}>
            Thanks for choosing Zetba.
          </UI.CustomText>
       
       </View>

     </View>

     
        <UI.Button variant="coloured" onPress={()=>router.navigate("/(ticket)/detail/[id]")} text="See Ticket"/>
       
    </UI.Containner>
  );
}


