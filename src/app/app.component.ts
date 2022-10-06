import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';

  currentStyles: Record<string, string> = {};

  canSave = true;
  isUnchanged = true;
  isSpecial = true;

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }



  first='';
  second () {
    this.first='sameer'
  }






  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  
  setUppercaseName(name: string) {
    this.name = name.toUpperCase();
  }
  
  name: string = '';
  setValue() { this.name = 'Nancy';}







  users = [{name:"sameer",  shift1 : [{a:'7708225217'},{b:'19UCA036'}], age:21, gender:"m"},
  {name:"nishanth", shift:2, age:20, gender:"m"},
  {name:"hari",  shift:3, age:22, gender:"m"},
  {name:"samantha",  shift:1, age:30, gender:"f"},
  {name:"trisha",  shift:4, age:34, gender:"f"},
  {name:"shriya",  shift:1, age:35, gender:"f"}
  ];


// isFirstName = true;

isFirstName = false;

constructor() {}

ngOnInit(){

}

  title2  = 'Angular Basic Pipes';
  today = Date();
  capString( item:string)
  {
    return item.toUpperCase()
  }





  name2 = "Angular Pipes";
  day = new Date();
  num = 23543.54;

}

