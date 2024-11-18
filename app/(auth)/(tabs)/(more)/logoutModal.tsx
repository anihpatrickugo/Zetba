import { StyleSheet, Text, View } from 'react-native';
import { useSession } from '@/app/ctx';
import * as UI from '@/components/common';
import Feather from '@expo/vector-icons/Feather';
import { grayColor, lightGrayColor } from '@/components/common/variables';
import { useNavigation } from 'expo-router';
import * as SecureStore from 'expo-secure-store'

export default function Modal() {
    const { signOut, session } = useSession();
    const navigation = useNavigation();

    const logout = async()=>{
      
      await SecureStore.deleteItemAsync('accessToken');
      await SecureStore.deleteItemAsync('refreshToken');
      signOut()
    }

  return (
    <View style={styles.container}>

        <View style={styles.modal}>

             <View style={styles.icon}>
                 <Feather name="log-out" size={43} color="white" />
             </View>

             <UI.CustomText size='sm' bold style={{fontSize:16, marginVertical: 14}}>Logout</UI.CustomText>

             <UI.CustomText size='xs' color={lightGrayColor} style={{textAlign: 'center',}}>
                Once you logout, you will not be able to access your account till you login back
             </UI.CustomText>


             <View style={styles.buttons}>
                 <View style={{width: 100}}>
                    <UI.Button variant='dark' text="Cancel" onPress={() => navigation.goBack()} />
                 </View>
                 <View style={{width: 100}}>
                    <UI.Button variant='coloured' text="Continue" onPress={logout} />
                 </View>
            </View>
          

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modal: {
    width: 266,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    padding: 30
  },

  icon: {
    width: 70,
    height: 70,
    backgroundColor: grayColor,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttons: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
     width: '100%', 
     marginTop: 30,
    //  gap: 20
    }
});
