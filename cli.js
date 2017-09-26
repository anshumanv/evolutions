#!/usr/bin/env node
'use strict';

const meow = require('meow');
const pokemons = require('./');

const cli = meow({
	help: [
		`
		$ pokemon-evolution		// get random pokemon evolution
		munchlax snorlax

		$ pokemon-evolution 1 4	// get evolutions by pokemon ID
		bulbasaur ivysaur venusaur
		charmander charmeleon charizard
		
		$ pokemon-evolution eevee 	// get evolutions by name
		vaporeon jolteon flareon espeon umbreon leafeon glaceon sylveon
		`
	]
});

const printEvolutionChain = chain => {
	const stages = [];
	chain.forEach(stage => {
		if (Array.isArray(stage)) {
			stages.push(...stage);
		} else {
			stages.push(stage);
		}
	});
	console.log(...stages);
};

if (cli.input.length === 0) {
	printEvolutionChain(pokemons.getEvolutionChain(pokemons.random()));
} else {
	cli.input.forEach(pokemon => {
		if (Number.isInteger(pokemon)) {
			pokemon = pokemons.getName(pokemon);
		}
		pokemon = pokemon.toLowerCase();
		if (pokemons.exists(pokemon)) {
			printEvolutionChain(pokemons.getEvolutionChain(pokemon));
		}
	});
}
