
import React, {FC} from 'react'
import { FlatList } from 'react-native'
import TicketCard from './TicketCard'

type Props = {
  pathRoute: string
  deleteIcon? : boolean
}

const TicketList: FC<Props> = ({pathRoute, deleteIcon}) => {
  return (
    <FlatList
    style={{ marginTop: 20, flex: 1}}
    contentContainerStyle={{width: '100%', gap: 15}}
    keyExtractor={(obj) => obj.toString()}
    data={[1,2,3,4,5,6,7,8,9,10 ]}
    showsVerticalScrollIndicator={false}
    renderItem={(obj )=> (<TicketCard key={obj.item} obj={obj.item} pathRoute={pathRoute} deleteIcon={deleteIcon} />)}

  />
  )
}


export default TicketList
