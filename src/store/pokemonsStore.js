import { createContext, useState } from 'react'

const PokemonStore = createContext({})

export const PokemonStoreProvider = ({ children })=>{
    console.log('pokemon store provider')
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 15);

    return <PokemonStore.Provider value={{
        count,
        increment,
    }}>
        { children }
    </PokemonStore.Provider>
}

export default PokemonStore