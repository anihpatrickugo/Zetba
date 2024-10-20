
import React from 'react'
import { FlatList } from 'react-native'
import TicketCard from './TicketCard'

const TicketList = () => {
  return (
    <FlatList
    style={{ marginTop: 20, flex: 1}}
    contentContainerStyle={{width: '100%', gap: 15}}
    data={[1 ]}
    showsVerticalScrollIndicator={false}
    renderItem={()=>(<TicketCard/>)}

  />
  )
}


export default TicketList
