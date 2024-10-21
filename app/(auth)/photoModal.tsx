import { StyleSheet, View, TouchableOpacity } from 'react-native';
import * as UI from '@/components/common';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import { grayColor, lightGrayColor } from '@/components/common/variables';
import { useNavigation } from 'expo-router';


export default function Modal() {
   
    const navigation = useNavigation();

  return (
    <View style={styles.container}>

        <View style={styles.modal}>

            <TouchableOpacity style={styles.close} onPress={()=>navigation.goBack()}>
                 <AntDesign name="close" size={24} color={lightGrayColor} />
            </TouchableOpacity>

             <View style={styles.icon}>
                 <Feather name="image" size={43} color="white" />
             </View>

             <UI.CustomText size='sm' bold style={{fontSize:16, marginVertical: 14}}>Select your photos</UI.CustomText>

             {/* options */}
            <View style={styles.options}>

               <TouchableOpacity style={styles.option} onPress={()=>navigation.goBack()}>
                  <FontAwesome name="circle-o" size={14} color="black" />
                  <UI.CustomText size='sm' color='black'>Select from library</UI.CustomText>
               </TouchableOpacity>

               <TouchableOpacity style={styles.option} onPress={()=>navigation.goBack()}>
                  <FontAwesome name="circle-o" size={14} color="black" />
                  <UI.CustomText size='sm' color='black'>Take a shot</UI.CustomText>
               </TouchableOpacity>


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
    width: 70,
    height: 70,
    backgroundColor: grayColor,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },

  options: {
    width: "100%",
    gap: 20
  },

  option: {
    flexDirection: "row",
    gap: 12,
    alignItems: 'center'
  }
});
