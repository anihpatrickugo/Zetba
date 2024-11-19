import React, {FC} from 'react'
import * as UI from "@/components/common/index"
import { View, FlatList } from 'react-native'
import { lightWhiteColor, primaryColor, secondaryColor } from '../common/variables'
import { Skeleton } from  'moti/skeleton'





const MoreEventLoading = () => {

    const data = [1, 2, 3]

  return (
    <View style={{width: "100%", alignItems: "center", marginVertical: 8}}>
    <FlatList
      data={data}
      keyExtractor={(item) => item.toString()}
      showsVerticalScrollIndicator={false}
      style={{ width: "100%"}}
      contentContainerStyle={{gap: 16, alignItems: 'center'}}
      renderItem={({item}) => (
          <Skeleton.Group show >
          <Skeleton height={184} width={285} colorMode='dark' colors={[lightWhiteColor, secondaryColor]}>
        <Skeleton.Group show>
            <View style={{position: 'absolute', top: 15, right: 20}}>
            <Skeleton height={37} width={35} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
            </View>

            
            <View style={{position: 'absolute', bottom: 20, right: 20, left: 20}}>
             <Skeleton height={95} width={245} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
            </View>

        </Skeleton.Group>

          </Skeleton>
      </Skeleton.Group>
      )}
    />

  </View>
  )
}

export default MoreEventLoading
