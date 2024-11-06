import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getVideos(){
    return this.httpClient.get('https://api.restful-api.dev/objects')
//     const array:any[] = [
//       {
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2u2WtDYLxDlQkrxjNC65av4qbYmRmfBo2Q&s",
//       description: "How to Start Coding | Programming for Beginners",
// },
//       {
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4FNAzmGTzBX2AUX5ct3c7TeRfD6hOHS3ZQ&s",
//       description: " 7 Most In-Demand Programming Languages ",
//       },
//       {
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNWoIz64LUHufgPj4eJN90V0SKzQFxNrNeg&s",
//       description: "Build Your First Angular Website",
//       },
//        {
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2GolWzK2p0IUvsyN5bUkoELTNqu5Q-HBhg&s",
//       description: " What is a software Developer?",
//        },
//        {
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjZLWSSQbu4ZFR7fQAJdZPLbTGApmjIf6hw&s",
//       description: "Learn Angular!",
//        },
//        {
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTot9RQjrlbnteAYXv3yQe9_UfvLZfryR3QdA&s",
//       description: " Your first project",
//        },
//       {
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8vOydEeNfYAHkXO4IpB-iGSEtm5lwmNo-A&s",
//       description: " How to Start Coding | Programming for Beginners ",
//       },
//       {
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbH0tCkc4_kK7Yx3lhI9xYmiNvIUgvCjnR9Q&s",
//       description: " 7 Most In-Demand Programming Languages",
//       },
//       {
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8vOydEeNfYAHkXO4IpB-iGSEtm5lwmNo-A&s",
//       description: "  Build Your First Angular Website",
//       },
//     ];
//     return array;
  }
}
