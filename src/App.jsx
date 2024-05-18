import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, toggleValue } from './redux/counterSlice'
import { login } from './redux/authSlice'
import Todo from './Todo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleProduct from './SingleProduct'


function App() {
  const { count, toggle } = useSelector((state) => state.counter)
  // console.log(state)

  const { isLoggedIN, name } = useSelector((state) => state.auth)
  // console.log(state)
  const dispatch = useDispatch()
  const handleDecrease = () => {
    dispatch(decrement())
  }
  const handleIncrease = () => {
    dispatch(increment())
  }
  const handleToggle = () => {
    dispatch(toggleValue())
  }
  const handleLogin = () => {
    dispatch(login())
  }

  return (
  <BrowserRouter>
  <Routes>
<Route path="/" element={<Todo/>}/>
<Route path="/:productId" element={<SingleProduct/>}/>

  </Routes>
  
  </BrowserRouter>
  )
}

export default App
