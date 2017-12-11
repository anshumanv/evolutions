const uniqueRandomArray = require('unique-random-array');
const Pokemon = require('pokemanager').pokemon;

const pokemons = require('./data/en');

exports.random = uniqueRandomArray(pokemons);

// A helper function that converts to lowercase and trims whitespaces.
function lower(str) {
	return str.toString().toLowerCase().match(/[^_\s\W]+/g).join('');
}

exports.getName = id => {
	const name = pokemons[id - 1];

	if (!name) {
		throw new Error(`Pokemon with ID '${id}' doesn't exist`);
	}

	return name;
};

exports.getId = name => {
	name = lower(name);
	const index = pokemons.indexOf(name);

	if (index === -1) {
		throw new Error(`Pokemon with name '${name}' doesn't exist`);
	}
	return index + 1;
};

exports.exists = name => {
	name = lower(name);
	const id = pokemons.indexOf(name);
	if (id === -1) {
		return false;
	}
	return true;
};

exports.getEvolutionChain = name => {
	name = lower(name);
	const poke = new Pokemon(name);

	// Eevee is so special ;)
	if (name === 'eevee') {
		return poke.evos;
	}

	const evol = [];

	// Checking for pre-evolutions
	if (poke.getPrevos()) {
		evol.push(...poke.getPrevos());
	}

	// Adding the pokemon being searched for
	evol.push(name);

	// Check for post-evolutions
	if (poke.getEvos()) {
		evol.push(...poke.getEvos());
	}

	return evol;
};
