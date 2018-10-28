import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StringUtil} from '../../util/string-util';
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

  constructor() {
  }

  ngOnInit() {
    this.displayText = this.codeLine.lineText;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const searchText = changes['searchText'].currentValue;
    this.displayText = searchText !== '' ?
      this.getReplaceHTML(searchText) :
      this.codeLine.lineText;
  }

  getReplaceHTML(searchText: string): string {
    return StringUtil.replaceAll(this.codeLine.lineText, searchText, `<span class="active">${searchText}</span>`);
  }

  getLogTime(): number {
    if (this.codeLine.lineTime) {
      return this.codeLine.lineTime.logTimestamp;
    }
  }
}
