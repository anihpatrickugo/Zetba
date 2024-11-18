
import React, {FC} from 'react'
import { FlatList } from 'react-native'
import MyTicketCard from './MyTicketCard'

type Props = {
  pathRoute: string
  deleteIcon? : boolean
  data: any
}

const MyTicketList: FC<Props> = ({pathRoute, deleteIcon, data}) => {
  return (
    <FlatList
    style={{ marginTop: 20, flex: 1}}
    contentContainerStyle={{width: '100%', gap: 15}}
    keyExtractor={(obj) => obj.id.toString()}
    data={data}
    showsVerticalScrollIndicator={false}
    renderItem={(obj)=> (<MyTicketCard key={obj.index} obj={obj} pathRoute={pathRoute} deleteIcon={deleteIcon} />)}

  />
  )
}


export default MyTicketList
