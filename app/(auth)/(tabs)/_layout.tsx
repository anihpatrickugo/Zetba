import React from "react";
import {Feather, FontAwesome} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import TicketIcon from "@/assets/icons/Ticket";
import WalletIcon from "@/assets/icons/Wallet";
import CalendarCheckIcon from "@/assets/icons/CalendarCheck";
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
      screenOptions={{
        tabBarActiveTintColor: primaryColor,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: grayColor,
          borderTopColor: grayColor,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="ticket"
        options={{
          title: "Ticket",
          tabBarIcon: ({ color }) => <TicketIcon color={color} />,
        }}
      />

      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color }) => (<View style={{width: 24, height: 24, 
            backgroundColor: color, borderRadius: 12,
            justifyContent: 'center', alignItems: 'center'
          }}>
            <WalletIcon color={color} width={13} height={13}/></View>),
        }}
      />

      <Tabs.Screen
        name="event"
        options={{
          title: "Event",
          tabBarIcon: ({ color }) => <CalendarCheckIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
