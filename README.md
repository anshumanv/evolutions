# evolutions

> A cli tool to get pokemon evolution chain.

### Install

`npm install --save evolutions`

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

#### .getEvolutionChain(name: string): array
Get an array containing the evolution chain of the pokemon.


### License
MIT © [Anshuman Verma](https://github.com/anshumanv)