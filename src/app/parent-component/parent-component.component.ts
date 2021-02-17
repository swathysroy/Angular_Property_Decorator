import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  constructor() { }
  
  public name ="John";
  public message;

  ngOnInit() :void{
    console.log("Inside parent component");
  }

}