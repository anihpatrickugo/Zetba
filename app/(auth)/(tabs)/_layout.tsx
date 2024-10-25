import React from "react";
import {Feather, FontAwesome} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import TicketIcon from "@/assets/icons/Ticket";
import WalletIcon from "@/assets/icons/Wallet";
import CalendarCheckIcon from "@/assets/icons/CalendarCheck";
import MoreIcon from "@/assets/icons/More";
import { grayColor, primaryColor } from "@/components/common/variables";
import { View } from "react-native";



// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {


  return (
    <Tabs
       initialRouteName="(home)"
      screenOptions={{
        tabBarActiveTintColor: primaryColor,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: grayColor,
          borderTopColor: grayColor,
          paddingBottom: 10,
        },
      }}

    
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="(ticket)"
        options={{
          title: "Ticket",
          tabBarIcon: ({ color }) => <TicketIcon color={color} />,
        }}
      />

      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color, focused }) => (<View style={{width: 24, height: 24, 
            backgroundColor: color, borderRadius: 12,
            justifyContent: 'center', alignItems: 'center'
          }}>
            <WalletIcon color='black' width={13} height={13}/></View>),
        }}
      />

      <Tabs.Screen
        name="(event)"
        options={{
          title: "Event",
          tabBarIcon: ({ color }) => <CalendarCheckIcon color={color} />,
        }}
      />

      <Tabs.Screen
        name="(more)"
        options={{
          title: "More",
          tabBarIcon: ({ color }) => <MoreIcon color={color} />,
        }}
      />
    </Tabs>
  );
}