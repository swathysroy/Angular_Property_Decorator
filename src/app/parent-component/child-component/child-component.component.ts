import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() {}

  @Input('parentData') public nameChild;
  @Output() public EventEmitter = new EventEmitter();

  public message = "This is from Child class";

  ngOnInit() : void{
  }

  public fireEvent(){
    console.log("On Button click");
    this.EventEmitter.emit(this.message);
  }
}