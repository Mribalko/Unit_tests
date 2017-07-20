const pokemon = require('../Pokemons').Pokemon;
const pokemonList = require('../Pokemons').PokemonList;
const assert = require('assert');

describe('Pokemon', function () {

    it('Метод show должен возвращать информацию о покемоне', () => {

        const pokemonTest = new pokemon('name', 5);

        assert.deepEqual(pokemonTest.show(), {name: 'name', level: 5});
    });
});

describe('PokemonList', function () {

    let list;
    before(()=>{
        list = new pokemonList();
        list.add('name1', 15);
        list.add('name2', 20);
    });

    it('Метод show должен отображать информацию о покемонах и их количество', () => {

        assert.deepEqual(list.show(), {
            count: 2,
            data: [
                {pokemon: {name: 'name1', level: 15}},
                {pokemon: {name: 'name2', level: 20}}
            ]
        });
    });


    it('Метод max должен отображать покемона максимального уровня', () => {

        assert.deepEqual(list.max(), {pokemon: {name: 'name2', level: 20}});
    });


    it('Метод add должен добавлять информацию о покемоне', () => {

        list.add('name', 5);
        assert.deepEqual(list.getItem(2), {pokemon: {name: 'name', level: 5}});
    });

});