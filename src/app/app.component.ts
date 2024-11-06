import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftsideComponent } from './leftside/leftside.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NavbarComponent,LeftsideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "My app1";

  

  // photo()
  // {
  //   this.router.navigate(['prices'])
  // }

  // items = [
  //   {
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2u2WtDYLxDlQkrxjNC65av4qbYmRmfBo2Q&s",
  //     description: "Keep your pet happy and healthy with great prices on the best products"
  //   },
  //   {
  //     image: "https://image.chewy.com/catalog/cms/images/2023-08-P49-Content-Card-RESIZED-Image3_85-original._SY320__V1712351168_.jpeg",
  //     description: "Your pet does not have to wait. Get everything delivered right tonyour door"
  //   },
  //   {
  //     image: "https://image.chewy.com/catalog/cms/images/2023-08-P49-Content-Card-RESIZED-Image4_86-original._SY320__V1712351173_.jpeg",
  //     description: "If an item does not work out , just let us know .We will take care of it ."
  //   },
  // ] 
}
