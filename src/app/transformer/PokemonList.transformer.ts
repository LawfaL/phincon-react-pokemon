export const usePokemonListTransformer = (data: any) => ({
    name: data.name,
    image: data.sprites.front_default,
})