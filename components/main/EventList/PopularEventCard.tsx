import React from 'react'
import { View, Image, Pressable, TouchableOpacity } from 'react-native'
import * as UI from "@/components/common";
import { primaryColor, grayColor } from "@/components/common/variables";
import {EvilIcons, AntDesign} from '@expo/vector-icons';
import { useNavigation } from 'expo-router';



const PopularEventCard = () => {
 
   const navigation = useNavigation()

  return (
    <Pressable onPress={() => navigation.navigate("event-detail/[id]", {id: 1})} style={{marginVertical: 8, alignItems: "center",
        justifyContent: "space-between", width: 150,  height: 132,  }}>

         <View style={{justifyContent: "center", alignItems: "center", width: 26, height: 26, borderRadius: 2.27, backgroundColor: primaryColor, position: "absolute", top: 7, right: 10, zIndex: 10}}>
             <UI.CustomText size="xs" style={{fontSize: 10.84}} bold>15</UI.CustomText>
             <UI.CustomText size="xs" style={{fontSize: 6.19}} >Aug</UI.CustomText>
         </View>
         
           <Image source={require("@/assets/images/dynamic/concert2.png")} style={{width: "100%", height: "100%", borderRadius: 8 }} resizeMode="cover"/>
           
         <View style={{ width: "87%", backgroundColor: grayColor, opacity: 0.6, padding: 6,  borderRadius: 5,  position: "absolute", zIndex: 10, bottom: 10, right: 10, left: 10  }}>
            <UI.CustomText size="xs" color="white" bold  style={{fontSize: 8}}>Barbados Music Festival </UI.CustomText>

            <View style={{ flexDirection: "row", gap: 2, alignItems: 'center'}}>
              <EvilIcons name="location" size={12} color="white" />
              <UI.CustomText size="xs" color="white" style={{fontSize: 7}}>Barbados</UI.CustomText>
            </View>


             <View style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", gap: 2, alignItems: 'center', marginVertical: 12}}>
               <View style={{flexDirection: "row", alignItems: "center", gap: 4}}>

                 <View style={{ flexDirection: "row", alignItems: 'center', marginLeft: 6}}>
                     <Image source={require("@/assets/images/dynamic/pro.jpeg")} style={{width: 12.54, height: 12.54, marginLeft: -6, borderRadius: 10, borderColor: "white", borderWidth: 0.5}}/>
                     <Image source={require("@/assets/images/dynamic/pro.jpeg")} style={{width: 12.54, height: 12.54, marginLeft: -6, borderRadius: 10, borderColor: "white", borderWidth: 0.5}}/>
                     <Image source={require("@/assets/images/dynamic/pro.jpeg")} style={{width: 12.54, height: 12.54, marginLeft: -6, borderRadius: 10, borderColor: "white", borderWidth: 0.5}}/>
                     <Image source={require("@/assets/images/dynamic/pro.jpeg")} style={{width: 12.54, height: 12.54, marginLeft: -6, borderRadius: 10, borderColor: "white", borderWidth: 0.5}}/>
                 </View>

                  <UI.CustomText size="xs" color="white" style={{fontSize: 6}}>+20k Attendant</UI.CustomText>
               </View>

               <TouchableOpacity>
                  <AntDesign name="heart" size={12.54} color="white" />
               </TouchableOpacity>
             </View>
         </View>
       </Pressable>
  )
}

export default PopularEventCard
