import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { TitleComponent } from '../title/title.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, CommonModule,TitleComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  id = 0;
  items:any[] = []
  completedItems:any[] = []
  profileForm = new FormGroup({
  description: new FormControl(null),
   });
  date = new Date()
   minus(a:any, b?:any) {
    if (b === undefined) return -a;
    else return a - b;
    }
    power (base:any, exponent = 2) {
      let result = 1;
      for (let count = 0; count < exponent; count++) {
      result *= base;
      }
      return result;
      }

list1=[2,3,4,4,4,];
 
project(a:any , b:any){
  if(a==b) 
    return true
  else {
    return "shprehje e gabuar"
  }
}
listOfNumbers = [2, 3, 5, 7, 11];
string = JSON.stringify({squirrel: false,
  events: ["weekend"]});

  ngOnInit(): void {
console.log(this.list1);
console.log(this.list1[4]);
console.log(this.list1.push(8));

console.log(this.project(2,3))
      console.log(this.listOfNumbers[2]);
        console.log("coconuts".slice(4, 7));
        console.log("coconut".indexOf("u"));
        console.log("LA".repeat(3));
          console.log(this.string);
          console.log(JSON.parse(this.string).events);
          let journal = [];
          let doh = "Doh";
          console.log(typeof doh.toUpperCase);
          console.log(doh.toUpperCase());
       let deo=[1,2,3];
       console.log(deo.pop());
       deo.push(6);
       console.log(deo);
       console.log(deo.length);
       let objectA = {a: 1, b: 2};
       console.log(objectA);
       Object.assign(objectA, {b: 3, c: 4});
       console.log(objectA);
     let objectS={ c:3, d:4};
      let objectT={e:5,d:8,k:0};
      console.log(Object.assign(objectS,objectT,objectA))
      let object1 = {value: 10};
      let object2 = object1;
      let object3 = {value: 10};
      console.log(object2);
      console.log(object1==object3)
    const data = localStorage.getItem('data');
    
    const data1 = localStorage.getItem('data1');
   if(data) {
    this.items = JSON.parse(data)
 }
 if(data1) {
  this.completedItems = JSON.parse(data1)
}
  }
  add() {
    console.log(this.profileForm.value.description)
    if (!this.profileForm.value.description){
      alert("description eshte bosh")
    } 
    else {
      this.id++;
      this.items.push({
        desc: this.profileForm.value.description,
        checked: false,
        id: this.id,
        date: new Date()
       })
      this.profileForm.get('description')?.setValue(null)
      localStorage.setItem('data', JSON.stringify(this.items))
    }
  }
  delete(item:any){
    this.items = this.items.filter(i=>i !==item)
    localStorage.setItem('data', JSON.stringify(this.items))

    this.completedItems = this.completedItems.filter(i=>i !==item)
    localStorage.setItem('data1', JSON.stringify(this.completedItems))
}
   onInputChange(event: Event, item:any): void {
  if(item.checked) {
    this.delete(item);
    this.completedItems.push(item);
}
localStorage.setItem('data', JSON.stringify(this.items))
localStorage.setItem('data1', JSON.stringify(this.completedItems))
}
selectedAll = false;
selectAllItems() {
  for (let i = 0; i < this.items.length; i++) {
    const item = this.items[i];
    item.checked = true;
    this.onInputChange({} as any, item)
  }
  localStorage.setItem('data', JSON.stringify(this.items))
}
}

