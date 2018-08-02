$(function () {
  var pokemonSearch;
  var defaultPokemon = '1'
  var defaultPokemonData;

  var pokeApi = function () {
    defaultPokemonData = $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + defaultPokemon,
      method: "GET",
    });
});
 