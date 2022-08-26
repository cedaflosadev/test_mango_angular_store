import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.component';
import { PokemonModal } from '../../models/pokemon.type';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.scss']
})
export class DetailsPokemonComponent {
  panelOpenState = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: PokemonModal, private dialogRef: MatDialog) { }


  closeModal() {
    this.dialogRef.closeAll();

  }

}
