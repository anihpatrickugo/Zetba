import client from '@/api/client'



// get all upcomming events
export const getAllTickets = async()=> {
    try{
      const res = await client.get('/tickets/')
      return res.data

    }catch(err){
      return err
    }

}