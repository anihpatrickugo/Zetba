import { View, StyleSheet, Image, ScrollView } from "react-native";
import { useSession } from "@/app/ctx";
import * as UI from "@/components/common"
import Feather from '@expo/vector-icons/Feather';
import FilterIcon from "@/assets/icons/Filter";
import { danger, lightGrayColor, primaryColor } from "@/components/common/variables";
import { TouchableOpacity } from "react-native";
import CategoryList from "@/components/main/CategoryList";
import UpcomingEventList from "@/components/main/EventList/UpcomingEventList";
import PopularEventList from "@/components/main/EventList/PopularEventList";
import { router } from "expo-router";



export default function TabOneScreen() {
  const { signOut, session } = useSession();

  return (
    <UI.Containner>
      <View style={styles.header}>

        {/* profile */}
        <View style={{flex: 1, flexDirection: "row", gap: 9, alignItems: "center"}}>
          <Image source={require("@/assets/images/dynamic/pro.jpeg")} style={styles.profileImage}/>

          <View style={{gap: 3, flex: 1}}>
            <UI.CustomText size="xs" color={lightGrayColor}>Lagos, NG</UI.CustomText>
            <UI.CustomText size="sm" color="white" bold>Hello, User3456</UI.CustomText>
          </View>

        </View>


        {/* bell */}
        <TouchableOpacity style={styles.bellContainner} onPress={()=>router.navigate("/notifications")}>
          <View style={styles.notification}/>
           <Feather name="bell" size={16} color="white" />
        </TouchableOpacity>

      </View>



      <ScrollView showsVerticalScrollIndicator={false} style={{width: "100%", flex: 1}}>
      
       {/* tittle */}
      <View style={{width: "100%", marginVertical: 12}}>
         <UI.CustomText size="lg" color="white" bold>Explore Events</UI.CustomText>
      </View>

        {/* search box */}
      <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 12}}>
         
         <View style={{ flexDirection: "row", flex: 1}}>
            <UI.CustomTextInput placeholder="Search" icon={<TouchableOpacity>
               <Feather name="search" size={20} color="white" />
             </TouchableOpacity>} />
         </View>

         <TouchableOpacity 
           onPress={() => router.navigate("/modal")}
           style={{width: 41, height: 36, backgroundColor: primaryColor, 
            justifyContent: "center", alignItems: "center", borderRadius: 4}}>
            <FilterIcon width={20} height={20} fill="white"/>
         </TouchableOpacity>
      </View>


      {/* categories */}
      <View style={{width: '100%'}}>
      <CategoryList/>
      </View>


        
        {/* upcoming events */}
        <View style={{width: "100%"}}>
          <UpcomingEventList/>
        </View>


        {/* popular events */}
        <View style={{width: "100%"}}> 
           <PopularEventList />
        </View>

        </ScrollView>
 
    </UI.Containner>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16

  },


  profileImage: {
    width: 35, 
    height: 35, 
    borderRadius: 18, 
    borderWidth: 1, 
    borderColor: "rgba(255, 255, 255, 0.8)"
  },

  bellContainner: {
    width: 28, 
    height: 28, 
    justifyContent: "center", 
    alignItems: "center", 
    borderWidth: 1,
    borderRadius: 4, 
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(0, 0, 0, 0.25)"
  },

  notification: {
    position: 'absolute', 
    top: 2, 
    right: 2, 
    width: 7, 
    height: 7, 
    borderRadius: 4, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: danger
  }
});
