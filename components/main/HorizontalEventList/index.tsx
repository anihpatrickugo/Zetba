
import React, {FC} from 'react'
import { FlatList } from 'react-native'
import HorizontalEventCard from './HorizontalEventCard'

type Props = {
  deleteIcon? : boolean
  data: any
}

const HorizontalEventList: FC<Props> = ({ deleteIcon, data}) => {

  return (
    <FlatList
    style={{ marginTop: 20, flex: 1}}
    contentContainerStyle={{width: '100%', gap: 15}}
    keyExtractor={(obj) => obj.id.toString()}
    data={data}
    showsVerticalScrollIndicator={false}
    renderItem={(obj)=> (<HorizontalEventCard key={obj.index} obj={obj} deleteIcon={deleteIcon} />)}

  />
  )
}


export default HorizontalEventList
