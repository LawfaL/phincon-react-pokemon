import { memo } from "react"

const PokemonDetailMemo = () => {
    return (
        <h1>Ini page detail pokemon</h1>
    )
}

export const PokemonDetailPage = memo(PokemonDetailMemo)