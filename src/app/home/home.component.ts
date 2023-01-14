import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  componentId = 10;
  componentStatus = 'Initial Status';
  addNewComp = false;
  componentCreationStatus = 'noCompCreated';
  components:string[] = ['firstComp', 'secondComp'];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.addNewComp = true;
    }, 4000);
  }

  getStatus():string{
    return this.componentStatus;
  }

  onClick(){
    this.componentCreationStatus = 'Component was created';
  }

  onUpdateCompName(args: Event){
    this.componentCreationStatus =  (<HTMLInputElement>args.target).value;

  }

}
