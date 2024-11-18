import {useState, useLayoutEffect} from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import * as UI from '@/components/common'
import { getCategories } from '@/api/events'
import { primaryColor } from '../common/variables'

const CategoryList = () => {
  
  const [categories, setCategories] = useState<any>([])

  useLayoutEffect(()=>{

    const fetchCategories = async()=>{
      const data = await getCategories()
      setCategories(data.results)
    }

    fetchCategories()

  }, [])

  return (
    <View style={{width: "100%"}}>

      <FlatList
           data={categories}
           keyExtractor={(item) => item.id.toString()}
           horizontal
           showsHorizontalScrollIndicator={false}
           style={{marginVertical: 16, width: "100%"}}
          
            renderItem={({item}) => (
                <TouchableOpacity key={item.id} style={{ height: 30, borderRadius: 4, justifyContent: "center", alignItems: "center", flexDirection: "row", marginRight: 8, borderWidth: 0.5, borderColor: primaryColor}}>
                  {/* <Image source={require("@/assets/images/dynamic/map-pin.png")} style={{ width: 10, height: 10, marginLeft: 10}}/> */}
                  <UI.CustomText size="xs" color={primaryColor} style={{marginHorizontal: 12}}>{item.name}</UI.CustomText>
                </TouchableOpacity>
            )}
        />
    </View>
  )
}

export default CategoryList
