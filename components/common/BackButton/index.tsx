import React from 'react'
import { Pressable, StyleSheet, Text} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface Props {
    navigation: any,
    screenName: string
}

const BackButton: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <Pressable  style={styles.backButton} onPress={()=>router.back()}>
        <AntDesign name="left" size={24} color="black" />
    </Pressable>
  )
}

const styles = StyleSheet.create({
    backButton: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
    },
})
export {BackButton}
