import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public showMoreEnabled = true;

  public showTechControlClick(){
    document.querySelector('.blogs-sidebar').classList.toggle('removeSidebar');
    if(document.querySelector('.blogs-sidebar').classList.contains('removeSidebar')){
      this.showMoreEnabled = true;
    }
    else{
      this.showMoreEnabled = false;
    }
  }

  public onCloseSidebarClick() {
    document.querySelector('.blogs-sidebar').classList.toggle('removeSidebar');
    if(document.querySelector('.blogs-sidebar').classList.contains('removeSidebar')){
      this.showMoreEnabled = true;
    }
    else{
      this.showMoreEnabled = false;
    }
  }

}
