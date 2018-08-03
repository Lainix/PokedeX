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
      $('.p3').html("Habilidad: " + data.abilities["0"].ability.name)      
      $('.p4').html("Base exp: " + data.base_experience)
      $('.p5').html("Tipo: " + data.types["0"].type.name + " , " + data.types["1"].type.name)
      console.log(data)
    });

    request.fail(function (jqXHR, textStatus, error) {
      alert("Request failed: " + textStatus + ' ' + error);
    });
  })
});



$(function () {
  var pokeapi = "https://pokeapi.co/api/v2/generation/1";
  var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";

  $.getJSON(pokeapi).done(function(data) {
    console.log(data); 
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = capitalize(pokemon.name);

      var boldName = $("<strong>").text(name);
      var link = $("<a>")
          .attr("id", pokemon.name)
          .attr("href", "#")
          .append(boldName)

      var paragraph = $("<p>")
          .html(pokemon)
          .append(link)
      paragraph.appendTo("#pokedex");

      link.click(function() {
        showPokemon(pokemon.name);
      });
    });
  }).fail(function() {
    console.log("Call to PokéAPI failed.");
  }).always(function() {
     console.log("Pokémon")
  });

  var detailsDiv = $("#pokemon-details");

  function showPokemon(name) {
    $.getJSON(pokemonByName + name).done(function(details) {
      console.log(details); 

      var image = $("<img>").attr("src", details.sprites.front_default);
      var weight = $('.p').html("Peso: " + details.weight)
      var num = $('.p2').html("No. " + details.id)           
      var exp = $('.p4').html("Base exp: " + details.base_experience)
      detailsDiv.empty()
          .append("<h2>" + capitalize(name) + "</h2>")
          .append(image)
          .append(weight)
          .append(num)
          .append(exp)

    }).fail(function(error) {
      console.log("Could not retrieve details for " + name);
    });
  }
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}