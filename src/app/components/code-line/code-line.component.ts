import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LineType} from './line-type';
import {Stringutil} from '../../util/stringutil';
import {CodeLine} from './code-line';

@Component({
  selector: 'app-code-line',
  templateUrl: './code-line.component.html',
  styleUrls: ['./code-line.component.css']
})
export class CodeLineComponent implements OnInit, OnChanges {

  @Input() codeLine: CodeLine;
  @Input() searchText: string;

  displayText: string;

  lineType: LineType;

  constructor() {
  }

  ngOnInit() {
    this.displayText = this.codeLine.lineText;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const searchText = changes['searchText'].currentValue;
    this.displayText = searchText !== '' ?
      Stringutil.replaceAll(this.codeLine.lineText, searchText, `<span class="active">${searchText}</span>`) :
      this.codeLine.lineText;
  }

}
