import { Component, OnInit } from '@angular/core';
import { ListItem } from './list-item';
import { ShoppingGridComponent } from './shopping-grid/shopping-grid.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'shopping-list';

  public shoppingList: ListItem[];

  constructor() {
  }

  ngOnInit() {
    // this.shoppingList = [
    //   { "id": 1, "title": "Milk" },
    //   { "id": 2, "title": "Eggs" },
    //   { "id": 3, "title": "Juice" }
    // ];
  }

  public add(title: string): void {
    this.shoppingList.push(new ListItem(title));
  }

  public move(idx: number, step: number) : void {
    var tmp = this.shoppingList[idx];
    this.shoppingList[idx] = this.shoppingList[idx - step];
    this.shoppingList[idx - step] = tmp;
  }

  public remove(idx: number) : void {
    this.shoppingList.splice(idx, 1);
  }
}
