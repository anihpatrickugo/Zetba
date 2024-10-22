
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
             <UI.CustomText size="sm" color="white">Ticket</UI.CustomText>
           </View>

           <TouchableOpacity style={styles.shareButton}>
              <AntDesign name="sharealt" size={24} color="black" />
           </TouchableOpacity>
       </View>

       {/* ticket */}
       <ScrollView style={{width: '100%', flex: 1}} showsVerticalScrollIndicator={false}>
         <View style={styles.ticket}>
          <Image source={require("@/assets/images/dynamic/concert.png")} 
                 borderRadius={15} 
                 resizeMode='stretch' 
                 style={{ width: "100%", height: 125, marginVertical: 12}}
            />


            <UI.CustomText size='md' color='white' bold>Barbados Music Festival</UI.CustomText>

            <View style={{width: "100%", height: 0.5, backgroundColor: lightGrayColor, marginVertical: 20}}/>


            {/* details */}
            <View style={{width: "100%", gap: 12}}>
                <View>
                    <UI.CustomText size='xs' color={lightGrayColor}>Venue</UI.CustomText>
                    <UI.CustomText size='sm' color='white'>Bridgetown City Central, Barbados</UI.CustomText>
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                 
                <View style={{gap: 12}}> 
                   <View>
                         <UI.CustomText size='xs' color={lightGrayColor}>Name</UI.CustomText>
                        <UI.CustomText size='sm' color='white'>Michael John</UI.CustomText>
                    </View>
                    <View>
                         <UI.CustomText size='xs' color={lightGrayColor}>Time</UI.CustomText>
                        <UI.CustomText size='sm' color='white'>08:00 - 20:00</UI.CustomText>
                    </View>
                   
                </View>


                <View style={{gap: 12}}>
                   <View>
                         <UI.CustomText size='xs' color={lightGrayColor}>Date</UI.CustomText>
                        <UI.CustomText size='sm' color='white'>Aug 15 - Aug 30</UI.CustomText>
                    </View>
                   <View>
                         <UI.CustomText size='xs' color={lightGrayColor}>Seat</UI.CustomText>
                        <UI.CustomText size='sm' color='white'>None</UI.CustomText>
                    </View>
                </View>

                </View>

            </View>


            <View style={{width: "100%", height: 0.5, backgroundColor: lightGrayColor, marginVertical: 20}}/>


            {/* qrcode */}
            <UI.CustomText size='sm' color='white'>Scan QRcode</UI.CustomText>

            <View style={{backgroundColor: 'white', padding: 12, marginVertical: 12}}>
                <QRCode
                    value="http://awesome.link.qr"
                     size={150}
                    />
            </View>


            
       </View>


       {/* button */}
       <UI.Button variant='coloured' text='Download Ticket' onPress={()=>{}} 
       icon={<Feather name="download" size={20} color="white" />}/>

      </ScrollView>

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
