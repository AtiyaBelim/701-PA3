import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-productinsert',
  templateUrl: './productinsert.component.html',
  styleUrls: ['./productinsert.component.css']
})
export class ProductinsertComponent {
  category: any[] = [];
  
  prdData={
   pname:'',
   cname:'',
   pprice:'',
   pqty:'',
   pdesc:'',
   pimg:'',
 };
 selectedFile: File | undefined;
 selectedFileName: string | undefined;
 onFileSelect(event: any): void {
   this.selectedFile = event.target.files[0];
   // Extract and store only the filename
   if (this.selectedFile) {
     // Remove the "C:\\fakepath\\" prefix to get only the filename
     this.selectedFileName = this.selectedFile.name;
   } else {
     this.selectedFileName = undefined;
   }
 }

 constructor(private http: HttpClient) { }
 

 ngOnInit() {
   this.http.get('http://localhost:8080/productinsert').subscribe((response: any) => {
     this.category = response;
     console.log(response)
   });
 }
 onSubmit()
 {
   this.prdData.pimg=this.selectedFile ? this.selectedFile.name : '';
   // console.log(this.selectedFileName)
   this.http.post('http://localhost:8080/insert',this.prdData).subscribe((response)=>{
   })
   console.log(this.prdData)
 }

}
