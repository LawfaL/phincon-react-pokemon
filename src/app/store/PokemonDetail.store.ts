import { PokemonServices } from "@app/services/Pokemon.service";
import { usePokemonDetailTransformer } from "@app/transformer/PokemonDetail.transformer";
import { create } from "zustand";
import { IPokemonDetailStore } from "./PokemonDetailStore.type";
import { PlayerServices } from "@app/services/Player.service";
import { PokemonDetailTransformer } from "@app/transformer/PokemonDetailTransformer.type";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const usePokemonDetailStore = create<IPokemonDetailStore>(() => ({
  loading: false,
  error: null,
  data: null,
}));

export const usePokemonDetailAction = () => {
  const navigate = useNavigate()

  const getPokemonDetail = (pokemonName: string) => {
    usePokemonDetailStore.setState(() => ({ loading: true, detail: null }));
    PokemonServices.Detail(pokemonName)
      .then((res) => usePokemonDetailTransformer(res.data))
      .then((data) =>
        usePokemonDetailStore.setState(() => ({ loading: false, detail: data }))
      );
  };

  const catchPokemonAction = (payload: PokemonDetailTransformer) => {
    const sanitize = {
      abilities: payload.abilities,
      att: (payload.stats.find((q) => q.name == "attack") as any).point,
      crit: Math.floor(Math.random() * 11),
      def: (payload.stats.find((q) => q.name == "defense") as any).point,
      hp: (payload.stats.find((q) => q.name == "hp") as any).point,
      str: Math.floor(Math.random() * 11),
      spd: Math.floor(Math.random() * 11),
      image: payload.image,
      moves: payload.moves,
      name: payload.name,
      type: payload.types,
    };

    PlayerServices.Create(sanitize)
      .then((res) => {
        const { name, id, renameCounter, image } = res.data.data;
        Swal.fire({
          title: `Berhasil Menangkap ${name}!`,
          text: "Apa kamu ingin menamainya?",
          icon: "success",
          confirmButtonText: "Ya",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Masukan nama pokemon",
              input: "text",
              inputAttributes: {
                autocapitalize: "off",
              },
              showCancelButton: true,
              confirmButtonText: "Ganti Nama",
              showLoaderOnConfirm: true,
              preConfirm: async (rename) => {
                await PlayerServices.Update({
                  name: rename,
                  id,
                  renameCounter,
                });
              },
              allowOutsideClick: () => !Swal.isLoading(),
            })
              .then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    imageUrl: image,
                    title: `${result.value} siap menemani petualanganmu`,
                  }).then(() => navigate('/player'));
                  

                }
              })
              .catch((error) =>
                Swal.showValidationMessage(`Request failed: ${error}`)
              );
          }
        });
      })
      .catch((e) => {
        Swal.fire({
          title: `Gagal Menangkap ${sanitize.name}!`,
          icon: "error",
          confirmButtonText: "Ya",
        });
      });
  };

  return { getPokemonDetail, catchPokemonAction };
};
