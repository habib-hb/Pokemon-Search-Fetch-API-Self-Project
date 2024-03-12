 const searchInput = document.getElementById('search-input');
 const searchBtn = document.getElementById('search-button');
 const parentEl = document.getElementById('parent-element');
 const imgDiv = document.getElementById('img-div')
 const pokemonName = document.getElementById('pokemon-name');
//  const typeDiv = document.getElementById('type')
 const pokemonId = document.getElementById('pokemon-id');
 const weight = document.getElementById('weight');
 const height = document.getElementById('height');
 const types = document.getElementById('types');
 const hp = document.getElementById('hp');
 const attack = document.getElementById('attack');
 const defense = document.getElementById('defense');
 const specialAttack = document.getElementById('special-attack');
 const specialDefense = document.getElementById('special-defense');
 const speed = document.getElementById('speed');
 
 //created element-----
  const imgEl = document.createElement('img');
  let nameSpan= document.createElement('span');
  let idSpan= document.createElement('span');
  let weightSpan= document.createElement('span');
  let heightSpan= document.createElement('span');
  let hpSpan= document.createElement('span');
  let attackSpan= document.createElement('span');
  let defenseSpan= document.createElement('span')
  let specialAttackSpan= document.createElement('span');
  let specialDefenseSpan= document.createElement('span');
  let speedSpan= document.createElement('span');
  let typeSpan = document.createElement('span');


 const fetchPokemon = async(name)=>{
    try{
 const pokemonList = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${name}`);
   
 const parsedPokemon = await pokemonList.json();
  console.log(parsedPokemon)  

  //clearing types element----
  types.innerHTML=""; 
   pokemonName.textContent = parsedPokemon.name.toUpperCase();
   
   nameSpan.innerHTML ="<hr>Name: ";
   parentEl.insertBefore(nameSpan , pokemonName)
   pokemonId.textContent = `#${parsedPokemon.id}`;
   
   idSpan.innerHTML ="<hr>Id: ";
   parentEl.insertBefore(idSpan , pokemonId)
   weight.textContent = `${parsedPokemon.weight}`;

    
   weightSpan.innerHTML ="<hr>Weight: ";
   parentEl.insertBefore(weightSpan , weight)

   height.textContent = `${parsedPokemon.height}`;
   
   heightSpan.innerHTML ="<hr>Height: ";
   parentEl.insertBefore(heightSpan , height)

   //types element is managed below------

   hp.textContent = parsedPokemon.stats[0].base_stat;
   
   hpSpan.innerHTML ="<hr>Hp: ";
   parentEl.insertBefore(hpSpan , hp)

   attack.textContent = parsedPokemon.stats[1].base_stat;
   
   attackSpan.innerHTML ="<hr>Attack: ";
   parentEl.insertBefore(attackSpan , attack)

   defense.textContent = parsedPokemon.stats[2].base_stat;
    
   defenseSpan.innerHTML ="<hr>Defense: ";
   parentEl.insertBefore(defenseSpan , defense)

   specialAttack.textContent = parsedPokemon.stats[3].base_stat;
   
   specialAttackSpan.innerHTML ="<hr>Special-Attack: ";
   parentEl.insertBefore(specialAttackSpan , specialAttack)

   specialDefense.textContent = parsedPokemon.stats[4].base_stat;
   
   specialDefenseSpan.innerHTML ="<hr>Special-Defense: ";
   parentEl.insertBefore(specialDefenseSpan , specialDefense)

   speed.textContent = parsedPokemon.stats[5].base_stat;
   
   speedSpan.innerHTML ="<hr>Speed: ";
   parentEl.insertBefore(speedSpan , speed)

   //creating new img element-----
  
   imgEl.id= "sprite";
   imgEl.src = `${parsedPokemon.sprites.front_default}`;
   imgDiv.appendChild(imgEl);


//managing types element------
 parsedPokemon.types.forEach((slot)=>{
         types.innerHTML+=`<p>${slot.type.name.toUpperCase()}</p>`
      })
   
      typeSpan.innerHTML= "<hr>Types: "; 
      parentEl.insertBefore(typeSpan , types);

   //       if(searchInput.value.toLowerCase() === "pikachu"){
   //       typeDiv.innerHTML="<p>ELECTRIC</p>";
         
   //       typeSpan.innerHTML= "<hr>Types: "; 
   //       parentEl.insertBefore(typeSpan , typeDiv);
   // }else if(searchInput.value.toLowerCase() === "94"){
   //     typeDiv.innerHTML="<p>GHOST</p><p>POISON</p>";
         
   //       typeSpan.innerHTML= "<hr>Types: ";
   // }else{
   //    typeDiv.innerHTML="";
         
   //       typeSpan.innerHTML= "";
   // }

    }
    catch(err){
       console.log("Error Fetching :" , err);
       alert("Pokémon not found");
    }
   
 }

//  fetchPokemon("pikachu"); 

searchBtn.addEventListener('click' , ()=>{ 
   fetchPokemon(searchInput.value.toLowerCase());
 
})
window.addEventListener('keypress' , (e)=>{ 
   if( e.key === "Enter"){
 fetchPokemon(searchInput.value.toLowerCase());
   }
  
})
