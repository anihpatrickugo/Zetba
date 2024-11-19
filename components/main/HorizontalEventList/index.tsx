
import React, {FC} from 'react'
import { FlatList } from 'react-native'
import * as UI from "@/components/common/index";
import HorizontalEventCard from './HorizontalEventCard'
import TicketEventLoading from '@/components/LoadingSkeletons/TicketEventLoading';

type Props = {
  deleteIcon? : boolean
  data: any,
  loading: boolean
}

const HorizontalEventList: FC<Props> = ({ deleteIcon, data, loading}) => {

  if (loading) return <TicketEventLoading />
  
  
  if (data?.length === 0) return <UI.CustomText size="lg">No event</UI.CustomText>

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
