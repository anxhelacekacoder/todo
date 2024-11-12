import { Component,Input,OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule ],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent  {
  @Input() userId!: number;

  inputForm = new FormGroup({
    firstname: new FormControl(null),
    lastname: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
  });
  users: any[] = [];
  id = 1;
  constructor(
    private router: Router
  ){}
  ngOnInit(): void {
    const localstorageUsers = localStorage.getItem('users')
    if (localstorageUsers){
      this.users=JSON.parse(localstorageUsers)
      if(this.userId) {
         const user =  this.users.find(user=>user.id == this.userId);
         this.inputForm.patchValue(
          {
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            password:user.password,
          }
        )
      }
    }
}
  submit(){
    const formvalue:any = this.inputForm.value;
    if(!this.userId) {
      formvalue['id'] = this.users.length + 1 //per te rritur nr e id ne cdo row
      this.users.push(formvalue)
    } else {
      formvalue['id'] = this.userId; 
      const index =  this.users.findIndex(item=>item.id == this.userId);
      this.users[index] = formvalue;
    }
      localStorage.setItem('users', JSON.stringify(this.users))
      this.router.navigate(['users'])  
  }
} 

