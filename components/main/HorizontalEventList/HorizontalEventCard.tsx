import React, {FC} from 'react'
import { Image, TouchableOpacity, StyleSheet, View} from 'react-native'
import * as UI from '@/components/common/index'
import { lightGrayColor, lightWhiteColor, primaryColor } from "@/components/common/variables";
import { EvilIcons, Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

type Props = {
  obj: any
  deleteIcon?: boolean
}

const HorizontalEventCard: FC<Props> = ({obj, deleteIcon}) => {
  
  const navigation = useNavigation();

   
  const onDelete = () => {
    navigation.navigate("event-detail/deleteEventModal", {id: obj.item.id})
  }
  return (
    <TouchableOpacity style={styles.ticket} onPress={()=>navigation.navigate( 'event-detail/[id]', {id: obj.item.id})}>
    <Image 
    source={{uri: obj.item.photo}} 
    style={{width: 63, height: 63, borderRadius: 4}} resizeMode="cover"/>

    <View style={styles.detail}>

        <UI.CustomText size='xs' color='white' bold>{obj.item.title}</UI.CustomText>

        <View style={{ flexDirection: "row", gap: 4, alignItems: 'center', marginLeft: -3}}>
              <EvilIcons name="location" size={16} color="white" />
              <UI.CustomText size="xs" color="white" style={{fontSize: 10}}>{obj.item.location_name}</UI.CustomText>
        </View>


        <View style={{ flexDirection: "row", gap: 8, alignItems: 'center'}}>
              <Feather name="calendar" size={13} color="white" />
              <UI.CustomText size="xs" color="white" >Aug 15</UI.CustomText>
        </View>

    </View>

     { deleteIcon ? (
         <TouchableOpacity style={styles.deleteIcon} onPress={onDelete}>
           <AntDesign name="delete" size={14} color="red" />
         </TouchableOpacity>
     ) : (

       <Feather name="arrow-right" size={24} color={primaryColor} />
     )}
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

    },

    deleteIcon: { 
        width: 28, 
        height: 28, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'white', 
        borderRadius: 3
    }
})

export default HorizontalEventCard
