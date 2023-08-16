import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { getRandomDimension } from './utils/random'
import axios from 'axios'
import LocationForm from './components/LocationForm'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'

function App() {

  const [currentLocation, setCurrentLocation] = useState(null) 

  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.newLocation.value 
    fetchDimension(newLocation)
  }


  useEffect(() => {
    const randomDimension = getRandomDimension(126)
    fetchDimension(randomDimension)
  }, [])


  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    axios
      .get(url)
      .then(({data}) => setCurrentLocation(data))
      .catch((err) => console.log(err))
  }



  return (
    <main className='bg-[url("/public/img/backgroundheader.png")] min-h-screen text-white'>
      <header className='flex  justify-center px-3 '>
        <div className='bg-cover bg-no-repeat bg-bottom bg-[url("/public/img/DecorativeHeader.png")]'><img className='mb-[4rem] ' src="public/img/nombre1.png" alt="" /></div>
      </header>
    <LocationForm handleSubmit={handleSubmit} />
    <LocationInfo currentLocation={currentLocation} />
    <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation}/>
    </main>
  )
}

export default App
