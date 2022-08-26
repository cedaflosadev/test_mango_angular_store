import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, tap } from "rxjs";
import { Pokemon, PokemonDetail, Pokemonres } from "../models/pokemon.type";

@Injectable({
    providedIn: "root"
})
export class PokemonService {
    private BASE_URL = "https://pokeapi.co/api/v2";
    private _refreshrequired = new Subject<void>();
    public dataPokemon!: Array<Pokemon>
    constructor(private http: HttpClient) { }
    get Refreshrequired() {
        return this._refreshrequired;
    }


    getDataPokemonAll() {
        return this.http.get<Pokemonres>(`${this.BASE_URL}/pokemon?limit=151&offset=0`).pipe(
            tap(() => {
                this.Refreshrequired.next()
            })
        )
    }


    getPokemonDetailsByUrl(url: string) {
        return this.http.get<PokemonDetail>(url).pipe(
            tap(() => {
                this.Refreshrequired.next()
            })
        )
    }
}