import React, { useEffect } from 'react'
import { getSingleProduct, getTodo } from './redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Todo = () => {
    const navigate=useNavigate()
    const {loading,todoData,error,name,isLoggedin}=useSelector(state=>state.auth)
    console.log(loading)
    console.log(todoData)
const dispatch=useDispatch()
// const handleFetch=()=>{
// dispatch(getTodo())
// }

const handlePage=(id)=>{
    dispatch(getSingleProduct(id))
navigate(`/${id}`)

}


useEffect(()=>{
    dispatch(getTodo())
},[])



  return (
    <div>
{todoData&&
    todoData.map((item)=>{
        return <h2 key={item.id} onClick={()=>handlePage(item.id)}>{item.title}</h2>
    })
}



    </div>
  )
}

export default Todo
