import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Character } from 'src/app/core/models/character.model';
import { CharacterService } from 'src/app/characters/characters.service';
import { MatDrawer } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss', '../../../app.component.scss']
})
export class CharacterComponent implements OnInit {
  characterIds = [
    1009610, // Spider-Man
    1009368, // Iron Man
    1009189, // Black Widow
    1009187, // Black Panther 
    1010744, // Rocket 
    // 1009407, // Loki
    1009652, // Thanos 
  ];
  featuredCharacters: Character[] = [];
  characters: Observable<Character[]>;
  isVisible = false;
  selectedCharacter: Character;
  showProgress = false;
  disableSearchResults = true;
  selectedTabIndex = 0;

  @ViewChild(MatDrawer, { static: false }) drawer: MatDrawer;

  private searchTerms = new Subject<string>();

  term = new FormControl();
  searchForm: FormGroup = this.formBuilder.group({
    term: this.term
  });

  constructor(
    private _characterService: CharacterService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    // TODO: Tie in with local storage to initiate recent result suggestions, suggested results 
    console.log('init');
    this.getCharacters();

    this.populateFeaturedCharacters();
  }

  populateFeaturedCharacters() {
    this.characterIds.forEach(element => {
      this._characterService
      .getCharacter(element)
      .subscribe((character: Character[]) => {
          this.featuredCharacters.push(character[0]);
        });
    });
  }

  getCharacters() {

    console.log('get characters');
    
    const obsNoCharacters = of<Character[]>([]);

    this.characters = this.term.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        console.log('switch map - get characters');
        if (term) {
          this.showProgress = true;
          this.disableSearchResults = true;
          this.selectedTabIndex = 0;
          return this._characterService.getCharacters(term);
        } else {
          return obsNoCharacters;
        }
      }),
      switchMap(heroes => {
        this.showProgress = false;
          this.disableSearchResults = !heroes || heroes.length < 1;
          this.selectedTabIndex = heroes && heroes.length > 0 ? 1 : 0;
          return of(heroes);
      }),
      catchError(() => {
        this.showProgress = false;
          this.disableSearchResults = true;
          this.selectedTabIndex = 0;
          return obsNoCharacters;
      })
    );
  }

  openSnackBar() {
    this._snackBar.open("Now searching DC", "action", {
      duration: 2000,
    });
  }

  selectCharacter(character: Character) {
    this.selectedCharacter = character;
    this.drawer.toggle();
  }

  trackByCharacters(index: number, character: Character) { return character.id; }

  search(category: string) {

    // TODO: Add local storage option, for successful searches <?>
    // TODO: Compenentize the home.component.html  
    // TODO: Route to new component-view 
    switch (category) {
      case 'character':
        break;
      case 'creator':
        break;
      case 'publication':
        break;
      default:
        break;
    }
  }

  searchTopResults(term: string) {
    // TODO: Make call to character service > get characters 
    // TODO: Show available characters, comics associated, google-map location 

    // console.log('Search top results initiated');
    this.searchTerms.next(term);
  }
}
