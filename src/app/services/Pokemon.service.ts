import { axiosInterceptorInstance } from "@app/utils/axiosInterceptor";

export class PokemonServices {
  static List(offset: number) {
    return axiosInterceptorInstance.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
  } 

  static Detail(pokemonName: string) {
    return axiosInterceptorInstance.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  } 
}