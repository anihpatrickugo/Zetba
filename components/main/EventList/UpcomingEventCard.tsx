import React, { FC } from 'react'
import { View, Image, Pressable, TouchableOpacity } from 'react-native'
import * as UI from "@/components/common";
import { primaryColor, grayColor } from "@/components/common/variables";
import {EvilIcons, AntDesign} from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { Event as EventProp } from './types';

const UpcomingEventCard = ({item}: any) => {
  const navigation = useNavigation()
  const date = new  Date(item.date)
  const month = date.toLocaleString('default', { month: 'short' });
  
  
  
  return (
    <Pressable onPress={() =>  navigation.navigate("event-detail/[id]", {id: item.id})} style={{marginVertical: 8, alignItems: "center",
        justifyContent: "space-between", width: 255, height: 296, borderRadius: 10}}>

         <View style={{justifyContent: "center", alignItems: "center", width: 44, height: 46, borderRadius: 4, backgroundColor: primaryColor, position: "absolute", top: 14, right: 20, zIndex: 10}}>
             <UI.CustomText size="md" bold>{date.getDate()}</UI.CustomText>
             <UI.CustomText size="xs" >{month}</UI.CustomText>
         </View>
         
           <Image source={{uri: item.photo}} style={{width: "100%", height: "100%"}} resizeMode="cover"/>
           
         <View style={{ width: "85%", backgroundColor: grayColor, opacity: 0.6, padding: 12,  borderRadius: 10,  position: "absolute", zIndex: 10, bottom: 20, right: 20,  }}>
            <UI.CustomText size="xs" color="white" bold >{item.title}</UI.CustomText>

            <View style={{ flexDirection: "row", gap: 2, alignItems: 'center'}}>
              <EvilIcons name="location" size={16} color="white" />
              <UI.CustomText size="xs" color="white" style={{fontSize: 10}}>{item.location_name}</UI.CustomText>
            </View>


             <View style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", gap: 2, alignItems: 'center', marginVertical: 12}}>
               <View style={{flexDirection: "row", alignItems: "center", gap: 4}}>

                 <View style={{ flexDirection: "row", alignItems: 'center', marginLeft: 6}}>
                  {item.attendants.map((attendant: any, index: any) => (
                               <Image key={index} source={require("@/assets/images/dynamic/pro.jpeg")} style={{width: 20, height: 20, marginLeft: -6, borderRadius: 10, borderColor: "white", borderWidth: 0.5}}/>
                  ) )}
                     
                     
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

export default UpcomingEventCard
