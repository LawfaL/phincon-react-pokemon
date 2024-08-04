import { axiosInterceptorInstance } from "@app/utils/axiosInterceptor";

export class PokemonServices {
  static List(params: any) {
    return axiosInterceptorInstance.get('https://pokeapi.co/api/v2/pokemon')
  } 

  static Detail(pokemonName: string) {
    return axiosInterceptorInstance.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  } 
}