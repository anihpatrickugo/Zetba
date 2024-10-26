import { Stack } from 'expo-router';
import * as UI from "@/components/common/index"
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { primaryColor } from '@/components/common/variables';
import { router } from 'expo-router';



export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(top-tabs)" options={{ header: ()=> <Header /> }}/>
      <Stack.Screen name="upcomingEvents" options={{headerShown: false}}/>
      <Stack.Screen name="popularEvents" options={{headerShown: false}}/>

        
    </Stack>
  );
}





const Header = () => {
  return (
   <View style={styles.header}>
   
    <View style={{width: "100%", flex: 1, marginRight: -30,  alignItems: "center"}}>
      <UI.CustomText size="sm" color="white">Event</UI.CustomText>
    </View>

    <TouchableOpacity  style={styles.addButton} onPress={()=> router.navigate("event-detail/newEvent")}>
       <Ionicons name="add-circle-outline" size={24} color="black" />
   </TouchableOpacity>
</View>
  )
}

const styles = StyleSheet.create({
   header: {
       width: '100%', 
       flexDirection: 'row', 
       justifyContent: 'space-between', 
       alignItems: 'center',
       backgroundColor: "transparent",
       paddingHorizontal: 16,
       position: "absolute",
       left: 0,
       right: 0,
       top: 45,
     },

     addButton: {
       width: 30,
       height: 30,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: primaryColor,
       borderRadius: 4,
   },
})




