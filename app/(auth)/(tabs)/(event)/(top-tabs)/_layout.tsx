
import {
    createMaterialTopTabNavigator,
    MaterialTopTabNavigationOptions,
    MaterialTopTabNavigationEventMap
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';

import { withLayoutContext } from 'expo-router';
import MyTabBar from '@/components/main/TopTab';

const {Navigator} = createMaterialTopTabNavigator()


export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);




export default function Layout() {
  return (
     <MaterialTopTabs tabBar={props => <MyTabBar {...props} />}>
        <MaterialTopTabs.Screen name="myEvents"  options={{title: "My Events"}}/>
        <MaterialTopTabs.Screen name="findEvents" options={{title: "Find Events"}}/>
     </MaterialTopTabs>
  );
}




