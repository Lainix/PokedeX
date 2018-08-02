$(function () {
  var pokemonSearch;
  var defaultPokemon = '1'
  var defaultPokemonData;

  var pokeApi = function () {
    defaultPokemonData = $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + defaultPokemon,
      method: "GET",
    });
    defaultPokemonData.done(function (data) {
      defaultPokemonData = data;
      $('.pokedex h3').text(defaultPokemonData.name.toUpperCase())
      $('.poke-img img').attr('src', defaultPokemonData.sprites.front_default)
      console.log(data)
    });

    defaultPokemonData.fail(function (jqXHR, textStatus, error) {
      alert("Request failed: " + textStatus + ' ' + error);
    });
  }

  pokeApi()

  
});
 