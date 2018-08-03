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

  $('.btn').on('click', function () {

    pokemonSearch = $('.pokedex input[type="text"]').val()

    var request = $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch,
      method: "GET",
    });

    request.done(function (data) {
      $('.pokedex h3').text(data.name.toUpperCase())
      $('.poke-img img').attr('src', data.sprites.front_default)
      $('.p').html("Peso: " + data.weight)
      $('.p2').html("No. " + data.id)      
      $('.p3').html("Abilidad: " + data.abilities["0"].ability.name)      
      $('.p4').html("Base exp: " + data.base_experience)
      $('.p5').html("Tipo: " + data.types["0"].type.name + " , " + data.types["1"].type.name)
      console.log(data)
    });

    request.fail(function (jqXHR, textStatus, error) {
      alert("Request failed: " + textStatus + ' ' + error);
    });
  })
});
 