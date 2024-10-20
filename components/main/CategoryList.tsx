import React from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import * as UI from '@/components/common'

const CategoryList = () => {
  return (
    <View style={{width: "100%"}}>

      <FlatList
           data={[1, 2, 3, 4, 5, 6, 7, 8]}
           keyExtractor={(item) => item.toString()}
           horizontal
           showsHorizontalScrollIndicator={false}
           style={{marginVertical: 16, width: "100%"}}
          
            renderItem={({item}) => (
                <TouchableOpacity style={{ height: 30, borderRadius: 4, justifyContent: "center", alignItems: "center", flexDirection: "row", marginRight: 8, borderWidth: 0.5, borderColor: "white"}}>
                  <Image source={require("@/assets/images/dynamic/map-pin.png")} style={{ width: 10, height: 10, marginLeft: 10}}/>
                  <UI.CustomText size="xs" color="white" style={{marginHorizontal: 12}}>Category</UI.CustomText>
                </TouchableOpacity>
            )}
        />
    </View>
  )
}

export default CategoryList
