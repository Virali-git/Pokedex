import { PokemonCard, PrimaryButton } from "@pokedex/components";
import React from "react";
import { useSelector } from "react-redux";
import { ReduxStore, wrapper } from "../store/store";
import { fetchPockenDetail, selectPokemonDetail } from "../store/pokeDetail";
import { useRouter } from "next/router";
import { PokemonType } from "../types/index.types";
import { GetServerSideProps } from "next";
import Box from "@mui/material/Box";


const PokemonDetails = () => {
  const details: PokemonType | null = useSelector(selectPokemonDetail);
  const router = useRouter();
  const getImageUrl = (id?: number) =>
    `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;

  /**
   * Handles the action to go back to the previous page using the router.
   * @function
   */
  const goBackHandler = () => {
    router.back();
  };
  return (
    <>
      <Box sx={{ paddingTop: "80px" }} className="back-container">
        <PrimaryButton
          className="back-container"
          onClickFunction={goBackHandler}
          buttonText="Go back to pokes"
        />
      </Box>
      <Box className="card-container">
        <PokemonCard
          name={details?.name ?? ""}
          height={details?.height}
          weight={details?.weight}
          location={details?.location_area_encounters}
          abilities={details?.abilities ?? []}
          image={getImageUrl(details?.id)}
        />
      </Box>
    </>
  );
};
export default PokemonDetails;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store: ReduxStore) => async (context) => {
    const { params } = context;
    const name: string | undefined = Array.isArray(params?.name)
      ? params?.name[0]
      : params?.name;
    if (name) {
      await store.dispatch(fetchPockenDetail(name));
    }

    return {
      props: {},
    };
  });
