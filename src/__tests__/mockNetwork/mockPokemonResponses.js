const responses = {
  bulbasaurBasicInfo: {
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
  },

  bulbasaurSpeciesInfo: {
    capture_rate: 45,
    evolves_from_species: null,
    gender_rate: 1,
    growth_rate: {
      name: "medium-slow",
    },
    id: 1,
    is_legendary: false,
    is_mythical: false,
    name: "bulbasaur",
  },

  ivysaurBasicInfo: {
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
  },

  ivysaurSpeciesInfo: {
    capture_rate: 45,
    evolves_from_species: { name: "bulbasaur" },
    gender_rate: 1,
    growth_rate: {
      name: "medium-slow",
    },
    id: 2,
    is_legendary: false,
    is_mythical: false,
    name: "ivysaur",
  },

  mewtwoBasicInfo: {
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    },
  },

  mewtwoSpeciesInfo: {
    capture_rate: 3,
    evolves_from_species: null,
    gender_rate: -1,
    growth_rate: {
      name: "slow",
    },
    id: 150,
    is_legendary: true,
    is_mythical: false,
    name: "mewtwo",
  },

  mewBasicInfo: {
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    },
  },

  mewSpeciesInfo: {
    capture_rate: 45,
    evolves_from_species: null,
    gender_rate: -1,
    growth_rate: {
      name: "medium-slow",
    },
    id: 151,
    is_legendary: false,
    is_mythical: true,
    name: "mew",
  },
};

export default responses;
