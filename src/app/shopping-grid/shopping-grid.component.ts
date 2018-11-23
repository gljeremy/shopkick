import { Component, OnInit } from '@angular/core';
import { ListItem } from '../list-item';

@Component({
  selector: 'app-shopping-grid',
  templateUrl: './shopping-grid.component.html',
  styleUrls: ['./shopping-grid.component.scss']
})
export class ShoppingGridComponent implements OnInit {

  private columnDefs;
  private defaultColDef;

  private gridApi;
  private gridColumnApi;

  private rowData: ListItem[];

  constructor() {
    this.columnDefs = [
      {
        field: "isDone",
        rowDrag: true
      },
      {
        field: "category",
        width: 175
      },
      {
        field: "title",
        width: 175
      }
    ];
    this.defaultColDef = { width: 150 };
  }

  ngOnInit() {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.rowData = [
      { "id": 1, "isDone": false, "category": "dry goods", "title": "Cereal" },
      { "id": 2, "isDone": false, "category": "dry goods", "title": "Kids vitamins" },
      { "id": 3, "isDone": false, "category": "dry goods", "title": "Tuna cans" },
      { "id": 4, "isDone": false, "category": "dry goods", "title": "Toilet paper" },
      { "id": 4, "isDone": false, "category": "dry goods", "title": "AA batteries" },
      { "id": 4, "isDone": false, "category": "dry goods", "title": "Paper towels" },
      { "id": 4, "isDone": false, "category": "dry goods", "title": "Flowers" },
      { "id": 4, "isDone": false, "category": "dry goods", "title": "Salsa" },
      { "id": 4, "isDone": false, "category": "dry goods", "title": "Juice" },
      { "id": 4, "isDone": false, "category": "dry goods", "title": "Fruit cups" },
      { "id": 4, "isDone": false, "category": "dry goods", "title": "Rice rolls" },
      { "id": 4, "isDone": false, "category": "fridge / freezer", "title": "Cheese" },
      { "id": 4, "isDone": false, "category": "fridge / freezer", "title": "Cream" },
      { "id": 4, "isDone": false, "category": "fridge / freezer", "title": "Almond milk" },
      { "id": 4, "isDone": false, "category": "fridge / freezer", "title": "Frozen peas" },
      { "id": 4, "isDone": false, "category": "fridge / freezer", "title": "String beans" },
      { "id": 4, "isDone": false, "category": "fridge / freezer", "title": "Smoked ham" },
      { "id": 4, "isDone": false, "category": "fridge / freezer", "title": "Kombucha" },
      { "id": 4, "isDone": false, "category": "fridge / freezer", "title": "Yogurt" },
      { "id": 4, "isDone": false, "category": "fridge / freezer", "title": "Salmon" },
      { "id": 4, "isDone": false, "category": "fridge / freezer", "title": "Cheddar cheese" },
      { "id": 4, "isDone": false, "category": "fridge / freezer", "title": "Broccoli soup" },
      { "id": 4, "isDone": false, "category": "fridge / freezer", "title": "Milk" },
      { "id": 4, "isDone": false, "category": "produce", "title": "Sweet potatoes" },
      { "id": 4, "isDone": false, "category": "produce", "title": "Carrots" },
      { "id": 4, "isDone": false, "category": "produce", "title": "Grapes" },
      { "id": 4, "isDone": false, "category": "produce", "title": "Apples" },
      { "id": 4, "isDone": false, "category": "produce", "title": "Pears" },
      { "id": 4, "isDone": false, "category": "produce", "title": "Cucumbers" },
      { "id": 4, "isDone": false, "category": "meat", "title": "Stew beef" },
      { "id": 4, "isDone": false, "category": "meat", "title": "Pork" },
      { "id": 4, "isDone": false, "category": "meat", "title": "Chicken breast" },
      { "id": 4, "isDone": false, "category": "meat", "title": "Ground beef" },
      { "id": 4, "isDone": false, "category": "bakery", "title": "Bread" }
    ];
  }
}
