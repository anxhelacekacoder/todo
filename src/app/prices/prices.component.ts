import { Component } from '@angular/core';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss'
})

export class PricesComponent {
  fdft(){
    this.items.push(  {
      emri:"ana",
      mbiemri:"ceka",
      numri:"68",
      adresa:"vore",
      vendbanimi:"tirane",
    },)
  }
  showAlert(){
this.items.pop()
  }

 
  items=[{
    emri:"ana",
    mbiemri:"ceka1",
    numri:"68",
    adresa:"vore",
    vendbanimi:"tirane",
  },
  {
    emri:"ana",
    mbiemri:"ceka",
    numri:"68",
    adresa:"vore",
    vendbanimi:"tirane",
  },
  {
    emri:"ana",
    mbiemri:"ceka",
    numri:"68",
    adresa:"vore",
    vendbanimi:"tirane",
  },
  {
    emri:"ana",
    mbiemri:"ceka",
    numri:"68",
    adresa:"vore",
    vendbanimi:"tirane",
  },
  {
    emri:"ana",
    mbiemri:"ceka",
    numri:"68",
    adresa:"vore",
    vendbanimi:"tirane",
  },
  {
    emri:"ana",
    mbiemri:"ceka",
    numri:"68",
    adresa:"vore",
    vendbanimi:"tirane",
  }
]

deleteItem(item:any){
  
  this.items = this.items.filter(i=>i !== item)

}


}

