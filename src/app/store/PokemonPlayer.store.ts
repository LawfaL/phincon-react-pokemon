import { PlayerServices } from "@app/services/Player.service";
import { create } from "zustand";
import { IPokemonPlayerStore } from "./PokemonPlayerStore.type";
import Swal from "sweetalert2";
import { IPokemonEntity } from "@app/_types/Pokemon.type";

export const usePokemonPlayerStore = create<IPokemonPlayerStore>(() => ({
  list: [],
  detail: null,
  loading: false,
  error: false,
  hasMore: false,
}));

export const usePokemonPlayerAction = () => {
  const getListPokemon = () => {
    usePokemonPlayerStore.setState(() => ({
      list: [],
      loading: true,
      error: false,
    }));
    PlayerServices.List()
      .then((res) => res.data)
      .then((data) =>
        usePokemonPlayerStore.setState(() => ({
          list: data.data,
          loading: false,
          hasMore: data.next != null,
          error: false,
        }))
      );
  };

  const getPokemonDetail = (detail: IPokemonEntity) => {
    const { id, renameCounter } = detail;
    PlayerServices.find(id)
      .then((res) => res.data.data)
      .then((data) => {
        const { name, image, type } = data;
        Swal.fire({
          title: name,
          imageUrl: image,
          showDenyButton: true,
          showCancelButton: true,
          showConfirmButton: true,
          confirmButtonText: "Ganti Nama",
          denyButtonText: "Lepaskan",
          cancelButtonText: "Cancel",
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
                  getListPokemon();
                  Swal.fire({
                    imageUrl: image,
                    title: `${detail.name} berganti nama menjadi ${result.value} `,
                  });
                }
              })
              .catch((error) =>
                Swal.showValidationMessage(`Request failed: ${error}`)
              );
          } else if (result.isDenied) {
            Swal.fire({
              title: "Lepaskan pokemon ini?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Ya!",
              preConfirm: async () => {
                return await PlayerServices.Delete(id).then((res) => res.data);
              },
            }).then((result) => {
              if (result.isConfirmed && result.value.result == "success") {
                getListPokemon();
              } else {
                Swal.fire({
                  icon: "error",
                  title: result.value.message,
                  text: `Lemparan dadu (${result.value.prime}) bukan bilangan prima`,
                });
              }
            });
          }
        });
      });
  };

  return {
    getPokemonDetail,
    getListPokemon,
  };
};
