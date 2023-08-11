
function adaptador1(obj) {
    return {};
}
function adaptador2(obj) {
    return [{}];
}

function getPokemon(adapt) { 
    const urlBase = 'https://pokeapi.co/api/v2';//externo con config

    //de aca sale Promise
    async function exec(pokemonName) {
        const pathParticular = `/pokemon/${pokemonName}`;
        //adapte la respuesta
        const pokemon = `${urlBase}${pathParticular}`;

        //api fetch permite hacer consultas a recursos externos (endpoint)
        const resp = await fetch(pokemon);

        console.log(resp);
        
        const obj = await resp.json();

        console.log(pokemon, obj);

        //adapto la respuesta
        return adapt(pokemon);
    }
    return exec;
}

async function buscarPokemon(name) {
    const aux = getPokemon(adaptador1);
    const resp = await aux(name);
    mostrarPokemon(resp);
}
function mostrarPokemon(pokemon) {
    document.getElementById('pokemon').innerHTML = JSON.stringify(pokemon);
}