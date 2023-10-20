import { Component } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {
  data={
    fname:'',
    lname:'',
    address:'',
    gender:'',
    hobby:{
      singing:false,
      travelling:false,
      dancing:false,
      reading:false
    },
    city:'Select',
  }
  submit=false
  onSubmit(){
    this.submit=true;
  }
}
