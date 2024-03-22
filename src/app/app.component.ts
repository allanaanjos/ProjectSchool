import { Component, Inject, OnInit, ViewChild, inject } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout"
import { filter, fromEvent, map } from 'rxjs';
import { MenuItem } from './shared/models/menuItem';
import { menuItems } from './shared/models/menu';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


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
  private BreakpointObserver = inject(BreakpointObserver);
  private Route = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  public menuName = "";

  constructor(){}

  ngOnInit(): void {
    const container = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(container, 'scroll')
    .pipe(map(() => container.scrollTop))
    .subscribe({next: (value: number) => this.determineHeader(value)})

    this.Route.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
        this.menuName = this.activatedRoute.firstChild?.snapshot.routeConfig?.path ?? '';
    })

  }

  determineHeader(top:number){
    this.popText = top >= TEXT_LIMIT;
    this.applyShadow = top >= SHADOW_LIMIT;
  }

  ngAfterContentInit(): void {
    this. BreakpointObserver.observe(['(max-width: 800px)'])
    .subscribe( (res) => this.isSmallScreem = res.matches);
  }



  get sidenavMode(){
    return this.isSmallScreem ? 'over' : 'side';
  }
}

