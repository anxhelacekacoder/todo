import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EMPTY_SUBSCRIPTION } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {

banner= "https://image.chewy.com/catalog/cms/images/1532975-2024-07-CatShop-ISP-HB-D-LG._SY296__V1723145446_.jpeg"

items=[{
  emri:"poppy",
  lloji:"luna",
  ngjyra:"kafe",
  mosha:"13",
  viti:"2011",
},
{
  emri:"grey",
  lloji:"ella",
  ngjyra:"gri",
  mosha:"14",
  viti:"2010",
},
{
  emri:"daisy",
  lloji:"luna",
  ngjyra:"bardhe",
  mosha:"6",
  viti:"2018",
},
{
  emri:"bella",
  lloji:"rossa",
  ngjyra:"kuqe",
  mosha:"4",
  viti:"2020",
},
]

constructor (private router:Router ){
}

changes(){
 this.items.fill(
  {
    emri:"ana",
    lloji:"luna",
    ngjyra:"kuqe",
    mosha:"4",
    viti:"2020",
  },
 )
}

}
