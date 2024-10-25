import React from 'react'
import { View, StyleSheet } from 'react-native'
import * as UI from "@/components/common/index"
import { useNavigation } from 'expo-router'
import VerticalEventList from '@/components/main/EventList/VerticalEventList'


const upcomingEvents = () => {
    const navigation = useNavigation()

  return (
    <UI.Containner>
      <View style={styles.header}>
          <UI.BackButton  navigation={navigation} />
          
           <View style={{width: "100%", flex: 1, marginLeft: -30,  alignItems: "center"}}>
             <UI.CustomText size="sm" color="white">Upcoming Events</UI.CustomText>
           </View>

       </View>

       <VerticalEventList data={[1, 2, 3]}/>
    </UI.Containner>
  )
}

const styles = StyleSheet.create({
    header: {
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      },
})

export default upcomingEvents
