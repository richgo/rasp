import {Component, ViewEncapsulation, ViewChild} from '@angular/core';
import {MdSidenav} from '@angular/material';
import {Router} from '@angular/router';
import { QuestionConfig } from '../../questionconfig';


const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SideNavComponent {
  constructor(public questionConfig: QuestionConfig,
              private _router: Router) {}

  @ViewChild(MdSidenav) sidenav: MdSidenav;

  ngOnInit() {
    this._router.events.subscribe(() => {
      // if (this.isScreenSmall()) {
         this.sidenav.open();
      // }
    });
  }

  toggle(){
 
  }

  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }
}
