import type { NextPage } from "next";
import { DataTable, Header } from "@pokedex/components";
import { DispatchAction, ReduxStore, wrapper } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPockeList,
  isLoadingPokemon,
  selectPagination,
  selectPokemonCount,
  selectPokemonListData,
  setPagination,
} from "../store/pokeList";
import { useRouter } from "next/router";
import {columns} from './../utility/constants';

const Home: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch() as DispatchAction;
  const pokemonList = useSelector(selectPokemonListData);
  const count = useSelector(selectPokemonCount);
  const isLoading = useSelector(isLoadingPokemon);
  const paginationModel = useSelector(selectPagination);

  /**
   * Handles the pagination change event,
   *
   * @param {number} value.page - The new page number selected by the user .
   * @param {number} value.pageSize - The new page size selected by the user.
   * @returns {Promise<void>} - A Promise that resolves after the data for the new page is fetched and displayed.
   */
  const handlePaginationChange = async (value: {
    page: number;
    pageSize: number;
  }) => {
    dispatch(fetchPockeList(value.page + 1, value.pageSize));
    dispatch(setPagination({ page: value.page, pageSize: value.pageSize }));
  };
  return (
    
      <DataTable
        rows={pokemonList}
        column={columns}
        onRowClick={({ row }) => router.push(`/${row.name}`)}
        getRowId={(e) => e.name}
        rowCount={count}
        isLoading={isLoading}
        pageSizeOptions={[]}
        paginationModel={paginationModel}
        paginationModelChange={handlePaginationChange}
      />
    
  );
};

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(
  (store: ReduxStore) => async () => {
    const paginationModel = store.getState().pokemon.pagination;
    await store.dispatch(
      fetchPockeList(
        paginationModel.page > 0 ? paginationModel.page : 1,
        paginationModel.pageSize
      )
    );
    return {
      props: {},
    };
  }
);
