import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-hero';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }
  heroes: Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('student of class C0520K1');
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
