import React from 'react'
import { FlatList } from 'react-native'
import { lightWhiteColor, secondaryColor } from '../common/variables'
import { Skeleton } from  'moti/skeleton'


const CategoryLoading = () => {
   
    const data =new Array(5); 
    
  return (

             <FlatList
               overScrollMode='never'
               data={data}
               horizontal
               contentContainerStyle={{gap: 20, padding: 8}}
               showsHorizontalScrollIndicator={false}
               keyExtractor={(_, index) => index.toString()}
               style={{ width: '100%',}}
               renderItem={
                () => (
                
              <Skeleton.Group show >
                  <Skeleton height={30} width={100} colorMode='dark' colors={[lightWhiteColor, secondaryColor]}>
                  </Skeleton>
              </Skeleton.Group>
                )
               }
             />
        
  )
}


export default CategoryLoading
