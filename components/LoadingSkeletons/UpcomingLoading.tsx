import React from 'react'
import { FlatList, View } from 'react-native'
import { lightWhiteColor, primaryColor, secondaryColor } from '../common/variables'
import { Skeleton } from  'moti/skeleton'


const UpcomingLoading = () => {
   
    const data =new Array(2); 
    
  return (

             <FlatList
               overScrollMode='never'
               data={data}
               horizontal
               contentContainerStyle={{gap: 20, paddingHorizontal: 8}}
               showsHorizontalScrollIndicator={false}
               keyExtractor={(_, index) => index.toString()}
               style={{ width: '100%',}}
               renderItem={
                () => (
                
              <Skeleton.Group show >
                  <Skeleton height={250} width={235} colorMode='dark' colors={[lightWhiteColor, secondaryColor]}>
                <Skeleton.Group show>
                    <View style={{position: 'absolute', top: 20, right: 20}}>
                    <Skeleton height={46} width={44} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
                    </View>

                    
                    <View style={{position: 'absolute', bottom: 20, right: 20, left: 20}}>
                     <Skeleton height={95} width={200} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
                    </View>

                </Skeleton.Group>

                  </Skeleton>
              </Skeleton.Group>
                )
               }
             />
        
  )
}


export default UpcomingLoading
