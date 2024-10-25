import React from 'react'
import { View, Image, Pressable, TouchableOpacity } from 'react-native'
import * as UI from "@/components/common";
import { primaryColor, grayColor } from "@/components/common/variables";
import {EvilIcons, AntDesign} from '@expo/vector-icons';
import { router } from 'expo-router';



const VerticalEventCard = () => {


  return (
    <Pressable onPress={() => router.push({pathname: "/(event)/detail/[id]", params: {id: 1}})} style={{marginVertical: 8, alignItems: "center",
        justifyContent: "space-between", width: 285, height: 184 }}>

         <View style={{justifyContent: "center", alignItems: "center", width: 35, height: 37, borderRadius: 4, backgroundColor: primaryColor, position: "absolute", top: 14, right: 20, zIndex: 10}}>
             <UI.CustomText size="sm" bold>15</UI.CustomText>
             <UI.CustomText size="xs" >Aug</UI.CustomText>
         </View>
         
           <Image source={require("@/assets/images/dynamic/concert2.png")} style={{width: "100%", height: "100%", borderRadius: 8 }} resizeMode="cover"/>
           
         <View style={{ width: "87%", backgroundColor: grayColor, opacity: 0.6, padding: 6,  borderRadius: 10,  position: "absolute", zIndex: 10, bottom: 20, right: 20,  }}>
            <UI.CustomText size="xs" color="white" bold >Barbados Music Festival </UI.CustomText>

            <View style={{ flexDirection: "row", gap: 2, alignItems: 'center'}}>
              <EvilIcons name="location" size={16} color="white" />
              <UI.CustomText size="xs" color="white" style={{fontSize: 10}}>Barbados</UI.CustomText>
            </View>


             <View style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", gap: 2, alignItems: 'center', marginVertical: 12}}>
               <View style={{flexDirection: "row", alignItems: "center", gap: 4}}>

                 <View style={{ flexDirection: "row", alignItems: 'center', marginLeft: 6}}>
                     <Image source={require("@/assets/images/dynamic/pro.jpeg")} style={{width: 20, height: 20, marginLeft: -6, borderRadius: 10, borderColor: "white", borderWidth: 0.5}}/>
                     <Image source={require("@/assets/images/dynamic/pro.jpeg")} style={{width: 20, height: 20, marginLeft: -6, borderRadius: 10, borderColor: "white", borderWidth: 0.5}}/>
                     <Image source={require("@/assets/images/dynamic/pro.jpeg")} style={{width: 20, height: 20, marginLeft: -6, borderRadius: 10, borderColor: "white", borderWidth: 0.5}}/>
                     <Image source={require("@/assets/images/dynamic/pro.jpeg")} style={{width: 20, height: 20, marginLeft: -6, borderRadius: 10, borderColor: "white", borderWidth: 0.5}}/>
                 </View>

                  <UI.CustomText size="xs" color="white" style={{fontSize: 8}}>+20k Attendant</UI.CustomText>
               </View>

               <TouchableOpacity>
                  <AntDesign name="heart" size={20} color="white" />
               </TouchableOpacity>
             </View>
         </View>
       </Pressable>
  )
}

export default VerticalEventCard
