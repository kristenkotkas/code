import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SortType} from './sortType';

export class Sort {
  sortType: SortType = undefined;
  icon: FontAwesomeModule = undefined;
  sortMultiplier: number = undefined;

  constructor(sortType: SortType, icon: FontAwesomeModule, sortMultiplier) {
    this.sortType = sortType;
    this.icon = icon;
    this.sortMultiplier = sortMultiplier;
  }
}
