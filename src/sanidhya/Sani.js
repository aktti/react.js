import React, { useState } from 'react'
import { baseurl } from './env'

const Query = () => {

    const [id , setID] = useState(2)
    const [desc , setDesc] = useState("updated desc")
    const [title , setTitle] = useState("updated title")

    const editTaskByQueryParams = () =>{

    const head = new Headers()
    head.append("Authorization", `Bearer ${localStorage.getItem("token")}`)
    // head.append("Content-Type","application/json")


    const requestSetting = {
    method : "GET",
    headers : head,
    redirect: "follow"
    }

    fetch(`${baseurl}/learner/edit/task/desc?id=${id}&desc=${desc}`, requestSetting)
    .then(
        async (response)=>{
            const jsonResult = await response.json()


            if (jsonResult?.status == "001") {
                alert("Success")
            } else {
                alert("Problem occured")
            }


        }
    )
    .catch((error)=>{
        console.log(error);
    })



    }




    const editTaskByParams = () =>{

    const head = new Headers()
    head.append("Authorization", `Bearer ${localStorage.getItem("token")}`)
    // head.append("Content-Type","application/json")


    const requestSetting = {
    method : "GET",
    headers : head,
    redirect: "follow"
    }

    fetch(`${baseurl}/learner/edit/task/title/${id}/${title}`, requestSetting)
    .then(
        async (response)=>{
            const jsonResult = await response.json()


            if (jsonResult?.status == "001") {
                alert("Success")
            } else {
                alert("Problem occured")
            }


        }
    )
    .catch((error)=>{
        console.log(error);
    })



    }






  return (
    <div>

        <button onClick={editTaskByQueryParams}>
            edit task (query params)
        </button>



        <button onClick={editTaskByParams}>
            edit title (params)
        </button>
    </div>
  )
}

export default Query

