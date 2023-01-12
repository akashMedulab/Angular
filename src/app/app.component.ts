import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="important event in angular"
  // name="akash m"
  displayval="";
  displayVal="";
  getData(val:string){
    console.log(val)
    this.displayVal=val
  }
  getDaTa(val:string){
    console.log(val)
    this.displayval=val
  }
  
}
