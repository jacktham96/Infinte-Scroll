import { useState , useEffect } from 'react'
import './index.css'

function App() {

  let offset = 0

  const [pokemon , setPokemon] = useState([])

  const  handleScroll = (event) => {
    if (
      window.innerHeight + event.target.documentElement.scrollTop +1 >=
      event.target.documentElement.scrollHeight) {
      console.log('end of page');
      fetchData();
    }
  }

  const fetchData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
      .then(res => res.json())
      .then(data => {
        const newPokemon = []
        data.results.forEach(pokemon => {
          newPokemon.push(pokemon)
        })
        setPokemon(oldPokemon => [...oldPokemon , ...newPokemon])
      })
      offset += 10
  }


  useEffect(() => {
      fetchData();
      window.addEventListener('scroll', handleScroll)
    },[])

  return (
    <div className="App">
      {
        pokemon.map((pokemon,i) => (
          <div key={i} className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold border w-60 h-60 flex items-center'>{i + 1}. {pokemon.name}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default App
