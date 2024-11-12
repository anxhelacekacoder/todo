import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  items: any[]=[]

  constructor(
    private router: Router
  ){}
  ngOnInit(): void {
    const localstorageUsers = localStorage.getItem('users')
    if(localstorageUsers) {
      this.items = JSON.parse(localstorageUsers)
    }
}
edit(id: number){
  this.router.navigate(['userlist/' + id])
}
}
