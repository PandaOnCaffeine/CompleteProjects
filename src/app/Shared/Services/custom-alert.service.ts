import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CustomAlertService {
  constructor(private snack: MatSnackBar) { }

  public openSnackBar(text: string) {
    this.snack.open(text, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
