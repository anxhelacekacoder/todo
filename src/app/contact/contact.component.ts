import { Component } from '@angular/core';
import { FormsModule , ReactiveFormsModule, FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
        firstname: [""],
        lastname: [""],
        email: [""],
        phone: [""],
        address: [""],
    })
  }



  submit(){
    const value = this.form.value;
    console.log( value)
    if (value.email.includes('@')) {
      console.log(value);
    
  
    } 
    else{
      alert("emaili  nuk eshte valid");
    }
    
  }

  
  
}
//data.email permand @ esht valid nqs nuk permban nxirr alert  this.data nuk ndryshon