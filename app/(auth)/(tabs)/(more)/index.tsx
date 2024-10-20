
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as UI from '@/components/common';
import SquareUserIcon from "@/assets/icons/SquareUser";
import TicketIcon from "@/assets/icons/Ticket2";
import BookUserIcon from "@/assets/icons/BookUser";
import { primaryColor } from '@/components/common/variables';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';

const More = () => {

 
    
    return (
        <UI.Containner>
            <UI.CustomText size="sm" color="white" style={{fontSize: 16}}>More</UI.CustomText>
            
            {/* links */}
            <View style={{ width: "100%", gap: 8, marginVertical: 32}}>

                <TouchableOpacity style={styles.link} onPress={()=>router.navigate("/profile")}>
                    <SquareUserIcon width={16} height={16} color={primaryColor}/>
                    <UI.CustomText size="sm" color="white">Profile</UI.CustomText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={()=>router.navigate("/notifications")}>
                  <Feather name="bell" size={16} color={primaryColor} />
                    <UI.CustomText size="sm" color="white">Notification</UI.CustomText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={()=>router.navigate("/(ticket)")}>
                    <TicketIcon width={14} height={14} color={primaryColor}/>
                    <UI.CustomText size="sm" color="white">My Ticket</UI.CustomText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={() => {router.navigate("/password")}}>
                    <Feather name="lock" size={16} color={primaryColor} />
                    <UI.CustomText size="sm" color="white">Password</UI.CustomText>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}} style={styles.link}>
                     <Feather name="settings" size={16} color={primaryColor} />
                    <UI.CustomText size="sm" color="white">Settings</UI.CustomText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={() => {router.navigate("/aboutUs")}}>
                    <BookUserIcon width={16} height={16} color={primaryColor}/>
                    <UI.CustomText size="sm" color="white">About Us</UI.CustomText>
                </TouchableOpacity>

            </View>

            {/* logout */}
            <TouchableOpacity onPress={()=>router.navigate("/logoutModal")} 
                 style={[styles.link, {marginVertical: 20}]}>
                    <Feather name="log-out" size={16} color={primaryColor} />
                    <UI.CustomText size="sm" color="white">Logout</UI.CustomText>
            </TouchableOpacity>

        </UI.Containner>
    );
};

const styles = StyleSheet.create({
   link: {
    width: "100%",
    backgroundColor: "rgba(89, 242, 196, 0.1)",
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 5
   }
});

export default More;