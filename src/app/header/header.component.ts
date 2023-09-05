import { Component, OnInit, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { CookieService } from '../services/cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navbarExpanded') navbarContainer: ElementRef;
  constructor(private cookieService: CookieService) { }

  public showClose: boolean = false;
  public showCloseButton(): boolean {
    console.log('showCloseButton Called');
    if (this.navbarContainer && this.navbarContainer.nativeElement.classList.contains('show')) {
      alert('has class');
      return true;
    }
    else {
      return false;
    }
  }

  public btnCloseClick() {
    this.showClose = false;
  }

  public toggleBtnCliock() {
    this.showClose = true;
  }

  public routerLinkClicked() {
    this.showClose = false;
  }

  ngOnInit(): void {
  }

  public onResize(args) {
    this.showClose = false;
    console.log(this.navbarContainer.nativeElement);
    if (this.navbarContainer.nativeElement.classList.contains('show')) {
      this.navbarContainer.nativeElement.classList.remove('show');
    }
  }

  public logout(){
    this.cookieService.logout();
    document.getElementById("modal-btn-header").click();
  }

  get userName() { return this.cookieService.getUserName(); }

}
