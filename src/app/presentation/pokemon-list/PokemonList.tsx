import { memo } from "react"

const PokemonListMemo = () => {
    return (
        <h1>Ini Pokemon List Page</h1>
    )
}   

export const PokemonListPage = memo(PokemonListMemo)