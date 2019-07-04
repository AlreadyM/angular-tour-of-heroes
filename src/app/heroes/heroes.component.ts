import { Component, OnInit } from '@angular/core';
import { HEROES} from '../mock-heroes';
import { from } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
  // selectedHero:Hero;
  // onSelect(hero:Hero):void {
  //   this.selectedHero = hero;
  // }
  constructor(private heroService: HeroService) {
    
  }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
    // this.heroes = this.heroService.getHeroes();
  }
}
