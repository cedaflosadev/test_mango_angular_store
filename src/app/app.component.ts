import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Pokemon } from './shared/models/pokemon.type';
import { PokemonService } from './shared/services/pokemon.service';
import { MatDialog } from '@angular/material/dialog';
import * as PokemonActions from './store/actions/pokemon.actions'
import { Post } from './shared/models/post.model'
import { DetailsPokemonComponent } from './shared/components/details-pokemon/details-pokemon.component';


export interface AppState {
  post: Post
  pokemon: Pokemon
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  pokemon$: Observable<any>
  pokemon!: Observable<Pokemon>
  name!: string
  url!: string
  pokemonSubscription!: Subscription
  displayedColumns = ['name', 'ver'];
  dataSource: MatTableDataSource<Pokemon> = new MatTableDataSource();
  cardTable: boolean = true
  constructor(private pokemonService: PokemonService, private store: Store<AppState>, public dialog: MatDialog) {

    this.pokemon$ = this.store.select('pokemon')
  }


  ngOnInit(): void {
    this.getPokemons()
    this.pokemon$.forEach((element) => {
      if (element.pokemonSelected) this.verDetalle(element.pokemonSelected, false)
    })


  }
  ngOnDestroy(): void {
    if (this.pokemonSubscription) this.pokemonSubscription.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  getPokemons() {
    this.pokemonSubscription = this.pokemonService.getDataPokemonAll().subscribe(res => {
      if (res) {
        this.dataSource.data = res.results
      }
    })
  }

  applyFilter(event: Event) {
    if ((event.target as HTMLInputElement).value) {
      const filterValue = (event.target as HTMLInputElement).value;

      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }


  async verDetalle(element: Pokemon, isInit: boolean) {
    if (isInit) this.store.dispatch(new PokemonActions.PokemonSelected(element))
    this.pokemonService.getPokemonDetailsByUrl(element.url).subscribe((res) => {
      if (res) {
        const { abilities, forms, moves, name, height, weight, types, stats, sprites } = res
        const dialogRef = this.dialog.open(DetailsPokemonComponent, {
          width: '600px',
          data: { abilities, forms, moves, name, height, weight, types, stats, sprites }
        });
        dialogRef.afterClosed().subscribe(() => {
          this.store.dispatch(new PokemonActions.PokemonSelected({} as Pokemon))
        })
      }
    }

    )

  }
}
