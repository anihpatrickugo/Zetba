import {  View, StyleSheet, FlatList } from "react-native";
import {TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import Feather from '@expo/vector-icons/Feather';
import { primaryColor } from "@/components/common/variables";

export default function Modal() {

  const navigation = useNavigation();

  

  return (
    <UI.Containner>

        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 26 }}>
             <UI.BackButton  navigation={navigation} screenName="hello" />
              
              <View style={{flex: 1, alignItems: 'center'}}>
                <UI.CustomText size="sm" color="white"  style={{fontSize: 16}}>Filter</UI.CustomText>
              </View>
        </View>
       
       <View style={{width: '100%', marginVertical: 20, flex: 1}}>
         <FlatList
            showsVerticalScrollIndicator={false}
            data={[0, 1, 2, 3, 4, 5, 6]}
            renderItem={({item}) => (
            <TouchableOpacity style={{flexDirection: "row", gap: 8, alignItems: "center", width: "100%"}}>
                <Feather name="circle" size={24} color="white" />
               <UI.CustomText size="sm" color="white" style={{marginVertical: 6, fontSize: 16}}>Filter {item}</UI.CustomText>
           </TouchableOpacity>
            )}
         />

       </View>
       
        <UI.Button variant="coloured" onPress={()=>navigation.goBack()} text="Continue"/>
       
    </UI.Containner>
  );
}

