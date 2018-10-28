import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {CheckInfo} from './check-info';


@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {

  @Input() checkInfo: CheckInfo;
  @Output() checkEvent = new EventEmitter<CheckInfo>();
  faCheck = faCheck;

  constructor() {
  }

  ngOnInit() {
  }

  checkOnClick() {
    this.checkInfo.isChecked = !this.checkInfo.isChecked;
    this.checkEvent.emit(this.checkInfo);
  }

}
