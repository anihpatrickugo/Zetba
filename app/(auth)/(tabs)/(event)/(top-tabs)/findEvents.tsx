import React from 'react';
import { View } from 'react-native';
import * as UI from "@/components/common/index"
import TicketList from '@/components/main/TicketList';

const Event: React.FC = () => {
    return (
        <UI.Containner>
        <View style={{ marginTop: 80}}>
           <TicketList pathRoute="event-detail/[id]"/>
        </View>
    </UI.Containner>
        
    );
};



export default Event;