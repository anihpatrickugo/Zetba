
import { useLocalSearchParams } from 'expo-router';
import {  View, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import {AntDesign, EvilIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import PartyPopperIcon from "@/assets/icons/PartyPopper"
import MapView, {Marker}  from 'react-native-maps'
import {  lightGrayColor, grayColor, primaryColor, primaryLightColor} from "@/components/common/variables";
import { LinearGradient } from 'expo-linear-gradient';


const {width} = Dimensions.get('window')


export default function notifications() {

  const navigation = useNavigation();
  const { slug } = useLocalSearchParams();

  

  return (
      <ScrollView style={styles.containner} >
   
         <UI.Containner noGradient>

        <View style={styles.image}>
           <Image source={require("@/assets/images/dynamic/concert2.png")} 
           resizeMode="cover" style={{width: "100%", height: "100%"}}/>

             <LinearGradient
                colors={['transparent', grayColor]}
                style={{position: 'absolute', width: '100%', height: '100%'}}
                
               />
        </View>
      

       <View style={styles.header}>
          <UI.BackButton  navigation={navigation} />

          <TouchableOpacity>
               <AntDesign name="heart" size={24} color="red" />
          </TouchableOpacity>
          
       </View>

       {/* ticket details */}
       <View style={styles.details}>
        <View style={{flexDirection: "row", alignItems: "center", gap: 4}}>
        <PartyPopperIcon width={18} height={18} color="white"/>
        <UI.CustomText size='sm' color='white'>Festivals</UI.CustomText>
        </View>
        
        {/* name and price */}
        <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
          <UI.CustomText size="md" color="white" bold style={{width: 165}}>Barbados Music Festival</UI.CustomText>

          <View style={{width: 80, height: 30, justifyContent: "center", 
            alignItems: "center", backgroundColor: primaryColor, borderRadius: 4}}>
             <UI.CustomText size="sm" color="black">$80.50</UI.CustomText>
          </View>
        </View>

        {/* attendants */}
        <View style={{flexDirection: "row", alignItems: "center", gap: 4, marginVertical: 8}}>

                 <View style={{ flexDirection: "row", alignItems: 'center', marginLeft: 6}}>
                     <Image source={require("@/assets/images/dynamic/pro.jpeg")} style={styles.attendantImage}/>
                     <Image source={require("@/assets/images/dynamic/pro.jpeg")} style={styles.attendantImage}/>
                     <Image source={require("@/assets/images/dynamic/pro.jpeg")} style={styles.attendantImage}/>
                     <Image source={require("@/assets/images/dynamic/pro.jpeg")} style={styles.attendantImage}/>
                 </View>

                <UI.CustomText size="xs" color="white">+20k Attendant</UI.CustomText>
        </View>

        <UI.CustomText size="sm" color="white" bold style={{fontSize: 16}}>Description</UI.CustomText>
        <UI.CustomText size="xs" color="white">
          Get ready for Barbados music summer festival like never before. 
          Immerse yourself in a world of rhythm, harmony, 
          and unforgettable experience as we .....
          <UI.CustomText size="xs" color={primaryColor}> Read More.</UI.CustomText>
        </UI.CustomText>


        {/* time and venue */}
          <View style={{width: "100%", flexDirection: "row", marginVertical: 8}}>

           {/* venue */}
          
            <View style={{width: "45%", flexDirection: "row", gap: 8}}>
              <View style={{width: 30, height: 30, borderRadius: 15, backgroundColor: primaryLightColor, 
                justifyContent: "center", alignItems: "center"}}
                >
                <EvilIcons name="location" size={16} color={primaryColor} />
              </View>

              <View>
                <UI.CustomText size='xs' color={lightGrayColor} style={{fontSize: 10}}>Bridgetown</UI.CustomText>
                <UI.CustomText size='xs' color="white">Barbados</UI.CustomText>
              </View>

            </View>


           {/*time and date */}
        
            <View style={{width: "45%", flexDirection: "row", gap: 8}}>
              <View style={{width: 30, height: 30, borderRadius: 15, backgroundColor: primaryLightColor, 
                justifyContent: "center", alignItems: "center"}}
                >
                <MaterialCommunityIcons name="calendar-clock-outline" size={16} color={primaryColor} />
              </View>

              <View>
                <UI.CustomText size='xs' color={lightGrayColor} style={{fontSize: 10}}>Aug 15 - Aug 30</UI.CustomText>
                <UI.CustomText size='xs' color="white">08:00 - 20:00</UI.CustomText>
              </View>

            </View>

          </View>


          {/* map */}
          <View style={{width: "100%", marginVertical: 8}}>
            <UI.CustomText size='md' color='white' style={{fontSize: 16}}>Map</UI.CustomText>
             
             <View style={{borderTopLeftRadius: 20, borderTopRightRadius: 20,  overflow: 'hidden'}}>
               <MapView 
               style={styles.map} 
               initialRegion={{
                latitude: 9.072264,
                longitude: 7.491302,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
               >
                <Marker
                  coordinate={{ latitude: 9.072264, longitude: 7.491302}}
                  title="hello"
                  description="description"
                   >
                    <View style={{width: 26, height: 26, borderRadius: 13, 
                      backgroundColor: primaryColor, justifyContent: "center", alignItems: "center"}}>
                        <EvilIcons name="location" size={14} color="black" />
                    </View>
                   </Marker>
               </MapView>
             </View>

          </View>

       </View> 
         {/*  button */}

         <UI.Button text='Buy Ticket' variant='coloured' onPress={()=>navigation.navigate("detail/buyTicket/[id]")}/>
       </UI.Containner> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containner: {
    flex: 1,
    width: "100%",
    backgroundColor: grayColor,
  },

  image: {
    width, 
    height: 300, 
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  
  },
  
   header: {
      width: '100%', 
      flexDirection: 'row', 
      alignItems: 'center',
      marginBottom: 20, 
      justifyContent: "space-between"
    },

    details: {
      width: "100%",
      marginTop: 150,

    },

    attendantImage: {
      width: 20, 
      height: 20, 
      marginLeft: -4, 
      borderRadius: 10, 
      borderColor: "white", 
      borderWidth: 0.5
    },

    map: {
      width: '100%',
      height: 200,
      marginVertical: 4
    },

  
 
});
