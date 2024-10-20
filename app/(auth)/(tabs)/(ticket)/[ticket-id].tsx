import {  View, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import { primaryLightColor } from "@/components/common/variables";


export default function TicketDetails() {

  const navigation = useNavigation();

  

  return (
      <UI.Containner noGradient>
      

       <View style={styles.header}>
          <UI.BackButton  navigation={navigation} screenName="/(more)/index" />
          
           <View style={{width: "100%", flex: 1, marginLeft: -30,  alignItems: "center"}}>
             <UI.CustomText size="sm" color="white">Ticket</UI.CustomText>
           </View>
       </View>


       <FlatList
         style={{ marginTop: 20, flex: 1}}
         contentContainerStyle={{width: '100%', gap: 15}}
         data={[1, 2 ]}
         showsVerticalScrollIndicator={false}
         renderItem={()=>(<View style={styles.notification}>
            <UI.CustomText size="xs" color="white">
              We’ll like to congratulate you on your new account you open. 
              Please don’t hesitate to enjoy our services and features.
            </UI.CustomText>
         </View>)}
       />
       


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
   
    notification: {
        width: "100%",
        backgroundColor: primaryLightColor,
        paddingVertical: 9,
        paddingHorizontal: 11,
        borderRadius: 5
    }
 
});
