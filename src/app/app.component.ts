import {Component, OnInit} from '@angular/core';
import {Stringutil} from './util/stringutil';
import {CodeLine} from './components/code-line/code-line';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  codeLines: CodeLine[] = [];
  searchText: string;

  constructor() {

  }

  updateText(event: any): void {
    this.codeLines = event.target.value.split('\n').map((line: string, i: number) => {
      return new CodeLine(Stringutil.escapeAngleBrackets(line), i);
    });
  }

  updateSearch(event: any): void {
    this.searchText = Stringutil.escapeAngleBrackets(event.target.value);
  }

  ngOnInit(): void {
  }

}
