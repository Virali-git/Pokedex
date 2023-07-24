export const mockStoreData = {
    pokemon: {
      allData: [],
      data: [
        {
          name: "charmander",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
        },
        { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      ],
      count: 0,
      pagination: {
        page: 0,
        pageSize: 10,
      },
    },
    pokemonDetail: {
      name: "Blastoise",
      height: "500",
      weight: "650",
      location_area_encounters: "https://pokeapi.co/api/v2/pokemon/3/encounters",
    },
  };