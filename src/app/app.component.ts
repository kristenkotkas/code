import {Component, OnInit} from '@angular/core';
import {CodeLine} from './components/code-line/code-line';
import {CheckInfo} from './components/common/check-box/check-info';
import {Sort} from './components/common/sort/sort';
import {SortType} from './components/common/sort/sortType';
import {StringUtil} from './util/string-util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  origCodeLines: CodeLine[] = [];
  codeLines: CodeLine[] = [];
  checks: CheckInfo[];
  activeChecks: string[];
  searchText: string;
  private activeSort: Sort;

  constructor() {

  }

  ngOnInit(): void {
    this.checks = [
      new CheckInfo('debug', 'DEBUG'),
      new CheckInfo('info', 'INFO'),
      new CheckInfo('warning', 'WARN'),
      new CheckInfo('error', 'ERROR'),
      new CheckInfo('trace', 'TRACE'),
      new CheckInfo('other', 'NON_TYPE')
    ];
    this.activeChecks = this.checks.map((check: CheckInfo) => {
      return check.info;
    });
  }

  updateText(event: any): void {
    if (event.target.value !== '') {
      this.origCodeLines = event.target.value.split('\n').map((line: string, i: number) => {
        return new CodeLine(StringUtil.escapeHTMLChars(line), i);
      });
    } else {
      this.origCodeLines = [];
    }
    this.fillCodeLines();
  }

  updateSearch(event: any): void {
    this.searchText = StringUtil.escapeHTMLChars(event.target.value);
  }

  checkOnChange() {
    this.activeChecks = this.checks.filter((check: CheckInfo) => {
      return check.isChecked;
    }).map((check: CheckInfo) => {
      return check.info;
    });
    this.fillCodeLines();
  }

  private fillCodeLines(): void {
    this.codeLines = this.origCodeLines
      .filter((codeLine: CodeLine) => {
      return this.activeChecks.includes(codeLine.lineType.toString());
    });
    if (this.activeSort.sortType !== SortType.NON) {
      this.codeLines = this.codeLines.sort((a: CodeLine, b: CodeLine) => {
        if (a.lineTime && b.lineTime) {
          if (a.lineTime.logTimestamp > b.lineTime.logTimestamp) {
            return this.activeSort.sortMultiplier;
          }
          if (a.lineTime.logTimestamp < b.lineTime.logTimestamp) {
            return -this.activeSort.sortMultiplier;
          }
        }
        return 0;
      });
    }
  }

  changeActiveSort($event: Sort) {
    this.activeSort = $event;
    this.fillCodeLines();
  }
}
