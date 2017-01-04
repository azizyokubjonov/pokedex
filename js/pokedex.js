function sortByName(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}

$(function() {
  let pokemonRequest = prompt('What pokemon do you want to learn about?');
  
  // Step 0: Set your assigned pokemon to the "pokemon" variable! I have put in Bulbasaur for an example
  var pokemon = window[pokemonRequest.toLowerCase()];

  // STEP 1: Uncomment the next line and make sure that the pokemon object prints to the console!
  console.log(pokemon)

  // STEP 2: Use jQuery to add information to the empty fields. The first few have been done for you.
  // Note that some of these fields may not exist for your pokemon. 
  
  $(".pokemon-name").append(pokemon.name);
  $(".pokemon-evolves").append(pokemon.evolutions[0].to);
  $(".pokemon-ev-level").append(pokemon.evolutions[0].level);
  $(".pokemon-spd").append(pokemon.speed);
  $(".pokemon-attack").append(pokemon.attack);
  $(".pokemon-defense").append(pokemon.defense);
  
  // TODO: Add ability names here to the <ul> with class .ability-names
  pokemon.abilities.forEach((val, index) => {
    let listItem = $('<li/>').text(val.name);
    $('.ability-names').append(listItem);
  });
  // TODO: Add egg group names here to a <ul> that you created
  pokemon.egg_groups.forEach((val, index) => {
    let listItem = $('<li/>').text(val.name);
    $('.egg-groups').append(listItem);
  });
  pokemon.moves = pokemon.moves.sort(sortByName);
  pokemon.moves.forEach((val, index) => {
    let listItem = $('<li/>').text(val.name);
    $('.moves-list').append(listItem);
  });
  // TODO: Add ONLY level up move names to the <ul> you created
  pokemon.moves.filter(x => x.learn_type === 'level up').forEach((val, index) => {
    let listItem = $('<li/>').text(val.name);
    $('.moves-list-level-up').append(listItem);
  });
  // Now... take a deep breath and go back to your move lists.
  // TODO: Find a way to use variables to make your code more readable!

  // (extra credit) TODO:  either...
  //   1. Change up your code so that visitors can select which pokemon (squirtle, charmander, bulbasaur, etc.)
  //   they want to see, and then show that pokemon's stats and picture, or...
  //   2. Use the Pokeapi to let your users access all of the pokemon! Don't worry about the picture.

  // (extra credit) TODO: Add a list of all avaiable learn_types with no repeats!
  
  
  // You don't have to touch anything below here, but if you're curious, this code
  // automatically changes the pokedex image to match your current Pokemon.
  var getProperImageURL = function(pokemon) {
    var pokemonNumber = pokemon.pkdx_id;
    var urlNum = returnThreeDigits(pokemonNumber);
    return "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/" + urlNum + ".png";
  };
  
  var returnThreeDigits = function(num) {
    if (num < 10) {
      return "00" + num;
    } else if (num < 100) {
      return "0" + num;
    } else {
      return num;
    }
  };

  var tag = $("<img>").attr("src", getProperImageURL(pokemon)).attr("alt", "Oh no! Is pokemon defined?");
  $(".image-container").html(tag);
});
