import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [HeroService]
})
export class AppComponent implements OnInit{

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

	// resolve warning: LF will be replaced by CRLF
}
