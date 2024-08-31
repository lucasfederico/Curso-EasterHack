let btnChange = document.getElementById("btnChange");
let imgPokemon = document.getElementById("imgPokemon");

let imgFlag = false;
btnChange.addEventListener("click", ()=>{
    if (!imgFlag) {
        imgPokemon.src = "https://w7.pngwing.com/pngs/400/980/png-transparent-pokemon-firered-and-leafgreen-pokemon-red-and-blue-charizard-sprite-pokemon-universe-sprite-fictional-character-pokemon-art.png";
        imgFlag = true;
    }
    else{
        imgPokemon.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8af6b255-ee2f-4ad4-aa3d-61367e0beefa/dhaz01t-aba716cc-84ea-4f2f-978f-cdc942a0832b.png/v1/fill/w_489,h_510/charmander_pokemon_sprite_by_pokemonspritesforyou_dhaz01t-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEwIiwicGF0aCI6IlwvZlwvOGFmNmIyNTUtZWUyZi00YWQ0LWFhM2QtNjEzNjdlMGJlZWZhXC9kaGF6MDF0LWFiYTcxNmNjLTg0ZWEtNGYyZi05NzhmLWNkYzk0MmEwODMyYi5wbmciLCJ3aWR0aCI6Ijw9NDg5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.sHs7DP6Uwv3epdgvn2hgr3YzKjhoH6y72sMaVTG37vg";
        imgFlag = false;
    }
})