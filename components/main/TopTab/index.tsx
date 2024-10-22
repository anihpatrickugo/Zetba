import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as UI from "@/components/common/index"
import { lightWhiteColor, primaryColor} from '@/components/common/variables';

export default function MyTabBar({ state, descriptors, navigation, position }: any) {
    return (
      <View style={styles.containner}>
         
       {/* rooutes */}
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.button, {backgroundColor:  isFocused ? '#59F2C433' : lightWhiteColor}]}
            >
              <UI.CustomText size='xs' color={isFocused ? primaryColor : 'white'} >
                {label}
              </UI.CustomText>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  
const styles = StyleSheet.create({
   containner: { 
    flexDirection: 'row',
    justifyContent: "center",
     gap: 30,
     marginTop: 30, 
     backgroundColor: "transparent", 
     zIndex: 5, 
     position: 'absolute', 
     top: 65, 
     left: 20,
     right: 20
     },

    button: { 
      flex: 1,
       alignItems: "center",  
       paddingVertical: 5, 
       paddingHorizontal: 10, 
       borderRadius: 6,
      }
})
  
  