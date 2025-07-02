
import './App.css'
import Search from './components/Search'
import WeatherShow from './components/WeatherShow'

function App() {

  // const API_KEY = '853e67a9f845360c9a701efe695d7416'
  // const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;





  return (
    <div className='h-[100vh] w-[100%] items-center justify-center flex bg-white flex-col gap-5 px-4'>
      <h1 className='text-2xl p-3 bg-white shadow-lg rounded-[100px] font-semibold px-10'>Weather App</h1>
      <div className=' flex flex-col h-[] w-[100%] lg:w-[100%] bg-gray-600 rounded-[20px] shadow-lg items-center gap-5 px-4 p-4'>
     <Search/>
     <WeatherShow/>
    </div>
    </div>
  )
}

export default App
