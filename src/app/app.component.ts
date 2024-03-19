import { Component, Inject, OnInit, ViewChild, inject } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout"
import { filter, fromEvent, map } from 'rxjs';
import { MenuItem } from './shared/models/menuItem';
import { menuItems } from './shared/models/menu';
import { NavigationEnd, Router } from '@angular/router';


export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 60;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isSmallScreem = false;
  public popText = false;
  public applyShadow = false;
  public items_menu: MenuItem[] = menuItems;
  public menuName = "";

  constructor(private breakPointObservable: BreakpointObserver,
              private route: Router
           ){}

  ngOnInit(): void {
    const container = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(container, 'scroll')
    .pipe(map(() => container.scrollTop))
    .subscribe({next: (value: number) => this.determineHeader(value)})

    this.route.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => event as NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let moduleName = event.url.split('/')[1]

      this.menuName = this.items_menu.filter(
        (item: MenuItem) => item.link == `/${moduleName}`
      )[0].label;
    })

  }

  determineHeader(top:number){
    this.popText = top >= TEXT_LIMIT;
    this.applyShadow = top >= SHADOW_LIMIT;
  }

  ngAfterContentInit(): void {
    this.breakPointObservable.observe(['(max-width: 800px)'])
    .subscribe( (res) => this.isSmallScreem = res.matches);
  }



  get sidenavMode(){
    return this.isSmallScreem ? 'over' : 'side';
  }
}

