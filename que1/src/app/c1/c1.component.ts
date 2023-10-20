import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
  var1:number=270702;
  var2:String="hey, sakshi!";
  var3: Date=new Date(Date.now());

  array1:string[]=['node','asp.net','se','ot'];
  

  // form:FormGroup;
  // constructor(private fb: FormBuilder){
  //   this.form=this.fb.group({
  //     Selection:['SelectOption'],
  //     content:[''],
  //   });
  // }

  array2:string[]=['select any','textbox','textarea'];
  selection:string='select any';//by default selected
  textbox1:string="";
  textarea1:string="";
  OnChange(){};
}
