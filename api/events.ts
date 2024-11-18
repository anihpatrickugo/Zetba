import client from '@/api/client'



// get all upcomming events
export const getUpcommingEvents = async()=> {
    try{
      const res = await client.get('/events/?upcoming=true')
      return res.data

    }catch(err){
      return err
    }

}


// get all popular events
export const getPopularEvents = async()=> {
  try{
    const res = await client.get('/events/?popular=true')
    return res.data

  }catch(err){
    return err
  }
}


//get event detail by id
export const getEventDetail = async(id: number)=> {
  try{
    const res = await client.get(`/events/${id}/`)
    return res.data

  }catch(err){
    return err
  }
}


// get my events
export const getMyEvents = async()=> {
  try{
    
    const res = await client.get('/my-events/')
    return res.data

  }catch(err){
    return err
  }
}



// get category list
export const getCategories = async()=> {
  try{
    const res = await client.get('/categories/')
    return res.data

  }catch(err){
    return err
  }
}

