import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  banner = "https://image.chewy.com/catalog/cms/images/1513151_2024-08-IMC_FallDogFood-Mainstream-NonPromo-HHCB-LG._SY296__V1724361555_.jpeg";
  items = [
    {
      image: "https://image.chewy.com/catalog/cms/images/2023-08-P49-Content-Card-RESIZED-Image1_84-original._SY320__V1712351167_.jpeg",
      title: "High quality,low prices",
      description: "Keep your pet happy and healthy with great prices on the best products"
    },
    {
      image: "https://image.chewy.com/catalog/cms/images/2023-08-P49-Content-Card-RESIZED-Image3_85-original._SY320__V1712351168_.jpeg",
      title: "Free delivery over $35",
      description: "Your pet does not have to wait. Get everything delivered right tonyour door"
    },
    {
      image: "https://image.chewy.com/catalog/cms/images/2023-08-P49-Content-Card-RESIZED-Image4_86-original._SY320__V1712351173_.jpeg",
      title: "Hassle-free returns",
      description: "If an item does not work out , just let us know .We will take care of it ."
    },
    {
      image: "https://image.chewy.com/catalog/cms/images/2023-08-P49-Content-Card-RESIZED-Image2_87-original._SY320__V1712351173_.jpeg",
      title: "24/7 support",
      description: "Got questions? We got you 24/7. Our pet experts are just a call, e-mail or chat anyway."
    },
  ];
  showBanner:boolean = false;
  constructor(
    private router: Router
  ){}
  ngOnInit(): void {
    this.showBanner = true;
  }
  showAlert(item: any){
    this.router.navigate(['details'])
  }
  test(){
    this.router.navigate(['prices'])
  }
}
