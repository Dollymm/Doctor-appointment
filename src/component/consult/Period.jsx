import axios from "axios"
import {useState } from "react"

const Period = () => {

    const [message,setMessage]=useState("")
    const [genMessage ,setGenMessage]=useState("")

    const [data,setData]=useState([])
    const handlePrompt=(e)=>{
        // console.log(e.target.value)
        setMessage(e.target.value)
    }
    // console.log("data",data)
    const getData=async()=>{
        try{
            let response= await axios.post('https://doctor-backend-6.onrender.com/chat',{message});
            // console.log("res",response.data) 
            setGenMessage(response.data)
            const newData=[...data,message]
            setData(newData)
            setMessage("")
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <div>
         <p>Hello this side Doctor Gen . How can I help you?</p>
     
      {
        data.map((iteam,index)=>{
            return(
                <div key={index}>
                    <p>{iteam}</p>
                    <p>{genMessage}</p>

                </div>
            )
        })
      }
            <input type="text" style={{border:'1px solid'}} value={message} onChange={handlePrompt}/>
<button onClick={getData}>Send</button>
    </div>
  )
}

export default Period
