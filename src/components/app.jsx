import React, { useState, useEffect, useRef } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'

import SearchBar from './search_bar';
import CityList from './city_list';

const App = () => {
  const queryClient = new QueryClient()
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(CLOUDS({
        el: myRef.current,
        THREE: THREE
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div className="App-container" ref={myRef}>
      <QueryClientProvider client={queryClient}>
        < SearchBar />
        < CityList query={''}/>
      </QueryClientProvider>
    </div>
  )
}

export default App;
