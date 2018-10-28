import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faAngleDown, faAngleUp, faCircle} from '@fortawesome/free-solid-svg-icons';
import {Sort} from './sort';
import {SortType} from './sortType';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  private sorts: Sort[];
  private sortIndex: number = 0;
  activeSort: Sort;
  @Output() activeSortEmitter: EventEmitter<Sort> = new EventEmitter<Sort>();

  constructor() {
  }

  ngOnInit() {
    this.sorts = [
      new Sort(SortType.ASC, faAngleUp, 1),
      new Sort(SortType.NON, faCircle, 0),
      new Sort(SortType.DESC, faAngleDown, -1)
    ];
    this.updateSortType();
  }

  updateSortType() {
    this.sortIndex = (this.sortIndex + 1) % this.sorts.length;
    this.activeSort = this.sorts[this.sortIndex];
    this.activeSortEmitter.emit(this.activeSort);
  }

}

