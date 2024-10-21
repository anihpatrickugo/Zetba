import React from 'react'
import { Image, TouchableOpacity, StyleSheet, View} from 'react-native'
import * as UI from '@/components/common/index'
import { lightGrayColor, lightWhiteColor, primaryColor } from "@/components/common/variables";
import { EvilIcons, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

const TicketCard = () => {
  return (
    <TouchableOpacity style={styles.ticket} onPress={()=>router.navigate({pathname: "/(ticket)/detail/[id]", params: {id: 1}})}>
    <Image 
    source={require("@/assets/images/dynamic/concert.png")} 
    style={{width: 63, height: 63, borderRadius: 4}} resizeMode="cover"/>

    <View style={styles.detail}>

        <UI.CustomText size='xs' color='white' bold>Barbados Music Festival</UI.CustomText>

        <View style={{ flexDirection: "row", gap: 4, alignItems: 'center', marginLeft: -3}}>
              <EvilIcons name="location" size={16} color="white" />
              <UI.CustomText size="xs" color="white" style={{fontSize: 10}}>Barbados</UI.CustomText>
        </View>


        <View style={{ flexDirection: "row", gap: 8, alignItems: 'center'}}>
              <Feather name="calendar" size={13} color="white" />
              <UI.CustomText size="xs" color="white" >Aug 15</UI.CustomText>
        </View>

    </View>


   <Feather name="arrow-right" size={24} color={primaryColor} />
</TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    ticket: {
        width: "100%",
        backgroundColor: lightWhiteColor,
        gap: 8,
        paddingVertical: 17,
        paddingHorizontal: 13,
        elevation: 2,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: lightGrayColor,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    detail:{
        flex: 1,
        gap: 4

    }
})

export default TicketCard
