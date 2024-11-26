import './App.css'
import Typical from 'react-typical'

function App() {


  return (
   <main className='div-principal'>
      <Typical
     steps={[
      'olaa', 1000,
      "sdsdsd", 1000,
     ]}
    loop={4} 
   
     
     /> 
   </main>
  )
}

export default App
