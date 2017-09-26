const uniqueRandomArray = require('unique-random-array');
const pokemanager = require('pokemanager');

const pokemons = require('./data/en');

exports.random = uniqueRandomArray(pokemons);

exports.getName = id => {
	const name = pokemons[id - 1];

	if (!name) {
		throw new Error(`Pokemon with ID '${id}' doesn't exist`);
	}

	return name;
};

exports.getId = name => {
	const index = pokemons.indexOf(name);

	if (index === -1) {
		throw new Error(`Pokemon with name '${name}' doesn't exist`);
	}
};

exports.exists = name => {
	const id = pokemons.indexOf(name);
	if (id === -1) {
		throw new Error(`Pokemon with name '${name}' doesn't exist`);
	}
	return true;
};

exports.getEvolutionChain = name => {
	const poke = new pokemanager.pokemon(name);

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
