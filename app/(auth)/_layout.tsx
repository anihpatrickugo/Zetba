import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { Redirect, Stack } from 'expo-router';

import { useSession } from '../ctx';
import { grayColor, primaryColor } from '@/components/common/variables';

const {width, height} = Dimensions.get('screen')

export default function AppLayout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <View style={{width, height, justifyContent: "center", alignItems: "center", backgroundColor: grayColor}}>
         <ActivityIndicator size="large"  color={primaryColor}/>
    </View>;
    
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.


  if (!session) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="notifications" />
      <Stack.Screen
        name="photoModal"
        options={{
          presentation: 'containedTransparentModal',
          animation: 'slide_from_bottom'
        }}
        
      />
    </Stack>
  )
}
