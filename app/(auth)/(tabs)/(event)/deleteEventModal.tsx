import { StyleSheet, View, TouchableOpacity } from 'react-native';
import * as UI from '@/components/common';
import {FontAwesome, AntDesign} from '@expo/vector-icons';
import {lightGrayColor } from '@/components/common/variables';
import { useLocalSearchParams, useNavigation } from 'expo-router';


export default function Modal() {
   
    const navigation = useNavigation();
     const {id} = useLocalSearchParams();


     const handleDelete = () => { 
        console.log(`Deleting event with id: ${id}`)
        navigation.goBack()
       }

  return (
    <View style={styles.container}>

        <View style={styles.modal}>

            <TouchableOpacity style={styles.close} onPress={()=>navigation.goBack()}>
                 <AntDesign name="close" size={24} color={lightGrayColor} />
            </TouchableOpacity>

             <View style={styles.icon}>
                 <AntDesign name="delete" size={30} color="white" />
             </View>

             <UI.CustomText size='sm' bold style={{ marginVertical: 14, textAlign: "center", width: 260}}>
                Are you sure you want to delete the event, all data about the event will be erased  
            </UI.CustomText>

             {/* options */}
            <View style={styles.options}>

               <View style={styles.option}>
                   <UI.Button onPress={()=>navigation.goBack()} text='Cancel' variant='cancel'/>
               </View>

               <View style={styles.option}>
                   <UI.Button onPress={handleDelete} text='Delete' variant='danger'/>
               </View>

            </View>
          

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  modal: {
    width: "100%",
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    padding: 30
  },

  close: {
    position: 'absolute',
    top: 32,
    right: 30
  },

  icon: {
    width: 63,
    height: 63,
    backgroundColor: 'red',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },

  options: {
    width: "100%",
    gap: 20,
    flexDirection: "row",
    justifyContent: 'center'
  },

  option: {
    width: 128
  }
});
