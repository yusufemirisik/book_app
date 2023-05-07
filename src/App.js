import React,{useState,useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import İnspectionPage from './pages/İnspectionPage'


const App = () => {

  

  
  const getLocalStorage = () => {
    const inspected = sessionStorage.getItem('inspected')
    if(inspected){
        return JSON.parse(inspected)
    }
    return {}
}
      const [inspected,setİnspected] = useState(getLocalStorage())


      useEffect(()=>{
        
      sessionStorage.setItem('inspected',JSON.stringify(inspected))
      },[inspected])
      
      
      

  return (
    <Routes>
        <Route path='/' element={<Homepage inspected={inspected} setİnspected={setİnspected}  />}     />
        <Route path='/inspection' element={<İnspectionPage  inspected={inspected} setİnspected={setİnspected} />}   />
    </Routes>
  )
}

export default App