import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

interface Item {
  name: string;
}

@Component({
  selector: 'app-my-component',
  template: `
    <div *ngFor="let item of items | async">
      {{ item.name }}
    </div>
  `
})
export class MyComponent implements OnInit {
  items: Observable<Item[]> | undefined;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.items = this.db.list('items').valueChanges();
  }
}
