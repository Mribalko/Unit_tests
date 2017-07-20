
class Pokemon {
  constructor(name, level){
    this.pokemon = {};
    this.pokemon.name = name;
    this.pokemon.level = level;
  };

  show(){
      return this.pokemon;
  }

};

class PokemonList {

    constructor() {
        this.PokList = [];
    }

    add(name, level){
        this.PokList.push(new Pokemon(name, level));
    };

    getItem(item) {
        return this.PokList[item];
    };

    show(){
        return {
            count: this.PokList.length,
            data: this.PokList
        };
    };

    max(){
        this.PokList.sort(function (a, b) {
            return a.level - b.level;
        });
        return this.PokList[this.PokList.length - 1];
    };
};

module.exports = {PokemonList,Pokemon};