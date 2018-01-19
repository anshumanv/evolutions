# evolutions [![Build Status](https://travis-ci.org/anshumanv/evolutions.svg?branch=master)](https://travis-ci.org/anshumanv/evolutions) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![npm](https://img.shields.io/npm/dt/evolutions.svg)](https://www.npmjs.com/package/evolutions) [![npm](https://img.shields.io/npm/v/evolutions.svg)](https://www.npmjs.com/package/evolutions)

> A cli tool to get Pokémon evolution chain.

**NOTE -** Only supports Pokémons upto 6th generation as of now. 

### Install

To test, install globally:  

```sh
$ npm install -g evolutions

$ evolutions
torchic combusken blaziken

$ evolutions 1 4
bulbasaur ivysaur venusaur
charmander charmeleon charizard

$ evolutions eevee mudkip
vaporeon jolteon flareon espeon umbreon leafeon glaceon sylveon
mudkip marshtomp swampert
```

To use in another module:  

`$ npm install --save evolutions`

### Usage

```js
const evolutions = require('evolutions');

evolutions.random();
//=> 'Snorlax'

evolutions.getName(147);
//=> 'Dratini'

evolutions.getId('Dratini');
//=> 147

evolutions.exists('Moltres');
//=> true

evolution.getEvolutionChain('chimchar');
//=> chimchar monferno infernape
```

### API

#### .random(): string
Returns a random pokemon name.

#### .getName(id: number): string
Get pokemon name form ID.

#### .getId(name: string): number
Get pokemon ID form name.

#### .exists(name: string) boolean
Check if the pokemon with a given name exists (not case sensitive).

#### .getEvolutionChain(name: string): array
Get an array containing the evolution chain of a pokemon.


## Related
[evolutions-webapp](https://github.com/anshumanv/evolutions-webapp) - Webapp to view Pokémon evolution chain.

### License
MIT © [Anshuman Verma](https://github.com/anshumanv)