import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service'

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css'],
	providers: [HeroService]
})
export class HeroesComponent implements OnInit {

	ngOnInit (): void {
		this.getHeroes();
	}

	constructor(private heroService: HeroService) { }

	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

}
