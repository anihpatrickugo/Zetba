import {useState, useEffect} from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import * as UI from '@/components/common'
import { getCategories } from '@/api/events'
import { primaryColor } from '../common/variables'
import CategoryLoading from '../LoadingSkeletons/CategoryLoading'

const CategoryList = () => {
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState<any>(null)

  useEffect(()=>{

    const fetchCategories = async()=>{
      setLoading
      try{
        const data = await getCategories()
        setCategories(data.results)
      }catch(e: any){
        console.log(e)
      }finally{
        setLoading(false)
      }
    }

    fetchCategories()

  }, [])


  if (loading) return <CategoryLoading />

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
