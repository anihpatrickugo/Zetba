import React from 'react';
import { View,  Image, StyleSheet, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { grayColor, primaryColor } from '@/components/common/variables';
import * as UI from '@/components/common';

const Onboarding = () => {
    const router = useRouter();

    return (
        
     <View
        style={styles.container}>

           <View style={{width: '100%'}}>
              <Image source={require('../assets/images/onboarding.png')} style={{width: '100%', height: 300}} />
              <LinearGradient
                colors={['transparent','rgba(0,0,0,1.0)']}
                style={{position: 'absolute', width: '100%', height: '100%'}}
                
               />
           </View>


           <LinearGradient 
              colors={['black', 'transparent']}  
              style={{flex: 1, width: "100%", padding: 12}}
              locations={[0.6, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.35, y: 1.4 }}

             >
            
              <UI.CustomText color={grayColor} size='sm'>Unlimited Event Ticket Explorer</UI.CustomText>
              <UI.CustomText color='white' size='3xl' style={{width: '80%'}}>Live, Enjoy and Connect with People</UI.CustomText>
               
              
              <TouchableOpacity style={styles.button} onPress={()=>router.navigate('/login')}>
                  <View style={{flexDirection: "row", alignItems: "flex-end", gap: 4}}>
                     <UI.CustomText color='white' size='md'>Explore Now</UI.CustomText>
                     <MaterialIcons name="keyboard-double-arrow-right" size={24} color="white" />
                  </View>
              </TouchableOpacity>

           </LinearGradient>


      </View>
           
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: primaryColor,
    },

    button : {
        width: '100%', 
        position: 'absolute', 
        bottom: 30, 
        alignItems: 'center',
    }
    
    
});

export default Onboarding;