import {  View, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import NoteIcon from '@/assets/icons/NotebookPen';
import EventIcon from '@/assets/icons/Events';
import KeyboardIcon from '@/assets/icons/KeyboardMusic';
import DollarIcon from '@/assets/icons/DollarCircle';
import {AntDesign, Feather, EvilIcons} from '@expo/vector-icons';
import { router } from "expo-router";
import {lightGrayColor} from "@/components/common/variables"



export default function NewEvent() {

  const navigation = useNavigation();

  

  return (
      <UI.Containner>

        <View style={styles.header}>
          <UI.BackButton  navigation={navigation} screenName="/(more)/index" />
          
           <View style={{width: "100%", flex: 1, marginLeft: -30,  alignItems: "center"}}>
             <UI.CustomText size="sm" color="white">Create Event</UI.CustomText>
           </View>
       </View>


      <ScrollView  style={styles.form} showsVerticalScrollIndicator={false}>

       {/* form */}
       <KeyboardAvoidingView 
       behavior="position" 
       style={{width: "100%", gap: 20, marginVertical: 20}} 
       contentContainerStyle={{flex: 1, gap: 16}} >
         
         <UI.CustomTextInput 
             placeholder="Event name" 
             keyboardType="default" 
             icon={(<EventIcon color={lightGrayColor} width={16} height={16} />)}/>

        <TouchableOpacity onPress={()=>router.navigate("/photoModal")} style={styles.image}>
            <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>

         <UI.CustomTextInput 
             placeholder="Location" 
             keyboardType="default" 
             icon={(<EvilIcons name="location" size={16} color={lightGrayColor} />)}/>

            
          <UI.FormInput 
             placeholder="Description" 
             multiline = {true}
             numberOfLines = {4}
             keyboardType="default" 
             icon={(<NoteIcon color={lightGrayColor} width={16} height={16} />)}/>


          <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
               <View style={{width: 150}}>
                   <UI.CustomTextInput 
                   placeholder="Start Date" 
                    keyboardType="default" 
                    icon={(<Feather name="calendar" size={16} color={lightGrayColor} />)}/>
               </View>
               <View style={{width: 150}}>
                   <UI.CustomTextInput 
                   placeholder="Time" 
                    keyboardType="default" 
                    icon={(<Feather name="clock" size={16} color={lightGrayColor} />)}/>
               </View>
          </View>

          <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
               <View style={{width: 150}}>
                   <UI.CustomTextInput 
                   placeholder="End Date" 
                    keyboardType="default" 
                    icon={(<Feather name="calendar" size={16} color={lightGrayColor} />)}/>
               </View>
               <View style={{width: 150}}>
                   <UI.CustomTextInput 
                   placeholder="Time" 
                    keyboardType="default" 
                    icon={(<Feather name="clock" size={16} color={lightGrayColor} />)}/>
               </View>
          </View>


         <UI.CustomTextInput 
             placeholder="Concert" 
             keyboardType="default" 
             icon={(<KeyboardIcon width={16} height={16} color={lightGrayColor} />)}/>

         <UI.CustomTextInput 
             placeholder="Price" 
             keyboardType="decimal-pad" 
             icon={(<DollarIcon width={16} height={16} color={lightGrayColor}/>)}/>

            <UI.Button variant="coloured" onPress={()=>{}} style={{width: '100%'}} text="Create Event"/>

       </KeyboardAvoidingView>
        </ScrollView>
    </UI.Containner>
  );
}

const styles = StyleSheet.create({
   header: {
      width: '100%', 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    },

    form :{
        width: '100%',
        gap: 20,
        flex: 1
    },

  image: {
        width: 55, 
        height: 58, 
        borderRadius: 12, 
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: 'center'
      },
    
 
});

