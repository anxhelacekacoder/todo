import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  
  items=[{
    image:"https://www.designveloper.com/wp-content/uploads/2022/06/the-6-computer-programmer-skills-that-you-should-focus-on.png",
    description:"10 Best Computer Programmer Skills That You Should Focus On ",
  },
{
  image:"https://th.bing.com/th/id/OIP.v3JgRR2zX5h3c3ou3LGoTQHaE8?w=252&h=180&c=7&r=0&o=5&pid=1.7",
    description:" Welcome to IT CareerCast programming languages to get inspired to start coding. ", 
},
{
  image:"https://th.bing.com/th/id/OIP.d2xipfdkCCTpf8mT-SikTQHaE7?w=257&h=180&c=7&r=0&o=5&pid=1.7",
    description:" What is Computer Programming? programming languages to get inspired to start coding. ", 
},
{
  image:"https://th.bing.com/th?id=OIF.cBY5yA%2f%2fyoC6Xyci0xrbNQ&w=214&h=181&c=7&r=0&o=5&pid=1.7",
    description:" Simple Examples  programming languages to get inspired to start coding.", 
},
{
  image:"https://th.bing.com/th/id/OIF.0OqApdoV4NsLubeGy6N3Pg?w=280&h=180&c=7&r=0&o=5&pid=1.7",
    description:"Introduction of programming  programming languages to get inspired to start coding. ", 
},
{
  image:"https://th.bing.com/th?q=Computer+Science+and+Programming&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=AL&setlang=en&adlt=strict&t=1&mw=247",
    description:" Computer Science <br> programming languages to get inspired to start coding.", 
},
{
  image:"https://th.bing.com/th/id/OIP.2C-J7Zo4wWFh4Sv_O_-NmQHaEK?w=322&h=181&c=7&r=0&o=5&pid=1.7",
    description:"  Programming Language  programming languages to get inspired to start coding.", 
},
]

addItem(){
  this.items.unshift ( {
    image:"https://th.bing.com/th/id/OIP.d2xipfdkCCTpf8mT-SikTQHaE7?w=257&h=180&c=7&r=0&o=5&pid=1.7",
    description:"  Programming Language  programming languages to get inspired to start coding.", 
},) 
}

  
  deleteItem(item:any){
this.items = this.items.filter(el=>el.image !== item.image )

    // for (let i = 0; i < this.items.length; i++) {
      
    //   if(item.image === this.items[i].image) {
    //     this.items.splice(i,1)
    //   }
      
    // }
  // this.items.reduce({
  //   image:"",
  //   description:"",
  // },)
  
  }

  }

