import React from 'react'
import { FlatList, View } from 'react-native'
import { lightWhiteColor, primaryColor, secondaryColor } from '../common/variables'
import { Skeleton } from  'moti/skeleton'


const PopularLoading = () => {
   
 
    
  return (
    <View style={{width: "100%", marginVertical: 8, gap: 6, flexDirection: "row", justifyContent:"space-between", flexWrap: 'wrap'}}>
             {/* item */}
             <Skeleton.Group show >
                 <Skeleton height={132} width={157} colorMode='dark' colors={[lightWhiteColor, secondaryColor]}>
               
                 <Skeleton.Group show>
                   <View style={{position: 'absolute', top: 10, right: 20}}>
                     <Skeleton height={20} width={22} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
                   </View>
                 
                   
                   <View style={{position: 'absolute', bottom: 20, right: 20, left: 20}}>
                    <Skeleton height={55} width={120} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
                   </View>
                 
                 </Skeleton.Group>
                 
                 </Skeleton>
            </Skeleton.Group>
            {/* end of item */}

             {/* item */}
             <Skeleton.Group show >
                 <Skeleton height={132} width={157} colorMode='dark' colors={[lightWhiteColor, secondaryColor]}>
               
                 <Skeleton.Group show>
                  <View style={{position: 'absolute', top: 10, right: 20}}>
                     <Skeleton height={20} width={22} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
                   </View>
                 
                   
                   <View style={{position: 'absolute', bottom: 20, right: 20, left: 20}}>
                    <Skeleton height={55} width={120} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
                   </View>
                 
                 </Skeleton.Group>
                 
                 </Skeleton>
            </Skeleton.Group>
            {/* end of item */}

             {/* item */}
             <Skeleton.Group show >
                 <Skeleton height={132} width={157} colorMode='dark' colors={[lightWhiteColor, secondaryColor]}>
               
                 <Skeleton.Group show>
                 <View style={{position: 'absolute', top: 10, right: 20}}>
                     <Skeleton height={20} width={22} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
                   </View>
                 
                   
                   <View style={{position: 'absolute', bottom: 20, right: 20, left: 20}}>
                    <Skeleton height={55} width={120} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
                   </View>
                 
                 </Skeleton.Group>
                 
                 </Skeleton>
            </Skeleton.Group>
            {/* end of item */}

             {/* item */}
             <Skeleton.Group show >
                 <Skeleton height={132} width={157} colorMode='dark' colors={[lightWhiteColor, secondaryColor]}>
               
                 <Skeleton.Group show>
                 <View style={{position: 'absolute', top: 10, right: 20}}>
                     <Skeleton height={20} width={22} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
                   </View>
                 
                   
                   <View style={{position: 'absolute', bottom: 20, right: 20, left: 20}}>
                    <Skeleton height={55} width={120} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
                   </View>
                 
                 </Skeleton.Group>
                 
                 </Skeleton>
            </Skeleton.Group>
            {/* end of item */}

             {/* item */}
             <Skeleton.Group show >
                 <Skeleton height={132} width={157} colorMode='dark' colors={[lightWhiteColor, secondaryColor]}>
               
                 <Skeleton.Group show>
                 <View style={{position: 'absolute', top: 10, right: 20}}>
                     <Skeleton height={20} width={22} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
                   </View>
                 
                   
                   <View style={{position: 'absolute', bottom: 20, right: 20, left: 20}}>
                    <Skeleton height={55} width={120} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
                   </View>
                 
                 </Skeleton.Group>
                 
                 </Skeleton>
            </Skeleton.Group>
            {/* end of item */}

             {/* item */}
             <Skeleton.Group show >
                 <Skeleton height={132} width={157} colorMode='dark' colors={[lightWhiteColor, secondaryColor]}>
               
                 <Skeleton.Group show>
                   <View style={{position: 'absolute', top: 10, right: 20}}>
                     <Skeleton height={20} width={22} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
                   </View>
                 
                   
                   <View style={{position: 'absolute', bottom: 20, right: 20, left: 20}}>
                    <Skeleton height={55} width={120} colorMode='dark' colors={[secondaryColor, primaryColor]}/>
                   </View>
                 
                 </Skeleton.Group>
                 
                 </Skeleton>
            </Skeleton.Group>
            {/* end of item */}

    </View>
  )
}
  
export default PopularLoading


       
