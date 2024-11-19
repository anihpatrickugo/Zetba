import React, {FC} from 'react'
import * as UI from "@/components/common/index"
import { View, FlatList } from 'react-native'
import { lightWhiteColor, primaryColor, secondaryColor } from '../common/variables'
import { Skeleton } from  'moti/skeleton'



const TicketEventLoading = () => {

    const data = [1, 2, 3, 4, 5]

  return (
    <FlatList
    data={data}
    keyExtractor={(item) => item.toString()}
    showsVerticalScrollIndicator={false}
    style={{ width: "100%", marginTop: 20}}
    contentContainerStyle={{gap: 16, alignItems: 'center'}}
    renderItem={({item}) => (
      
        <Skeleton.Group show >
        <Skeleton height={80} width={310} colorMode='dark' colors={[lightWhiteColor, secondaryColor]}>
        <View>
         <View style={{position: 'absolute', top: 8, left: 10}}>
           <Skeleton height={60} width={60} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
         </View>


         <View style={{position: 'absolute', top: 8, right: 10}}>

            <Skeleton.Group show>
             <View style={{gap: 8}}>
               <Skeleton height={16} width={200} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
               <Skeleton height={14} width={180} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
               <Skeleton height={12} width={160} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
              </View>
             </Skeleton.Group>
         </View>

        </View>
        </Skeleton>
    </Skeleton.Group>
    )}
  />
  )
}

export default TicketEventLoading
