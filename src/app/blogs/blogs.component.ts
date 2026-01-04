import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  
  @ViewChild('blogsSidebar') blogsSidebar: ElementRef | undefined;

  public showMoreEnabled = true;
  public isSidebarHidden = false;

  constructor() { }

  ngOnInit(): void {
  }

  private toggleSidebar(): void {
    if (!this.blogsSidebar?.nativeElement) {
      console.warn('Sidebar element not found');
      return;
    }
    
    this.blogsSidebar.nativeElement.classList.toggle('removeSidebar');
    this.isSidebarHidden = this.blogsSidebar.nativeElement.classList.contains('removeSidebar');
    this.showMoreEnabled = this.isSidebarHidden;
  }

  public showTechControlClick(): void {
    this.toggleSidebar();
  }

  public onCloseSidebarClick(): void {
    this.toggleSidebar();
  }

}
