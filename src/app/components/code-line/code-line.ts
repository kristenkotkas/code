import {TimeUtli} from '../../util/time-utli';
import {TypeUtils} from '../../util/type-utils';
import {LogTime} from '../common/entity/log-time';
import {LineType} from './line-type';

export class CodeLine {

  lineText: string = undefined;
  lineNumber: number = undefined;
  lineType: LineType = undefined;
  lineTime?: LogTime = undefined;

  constructor(lineText: string, lineNumber: number) {
    this.lineText = lineText;
    this.lineNumber = lineNumber;
    this.setLineType();
    this.setLineTime();
  }

  private setLineType(): void {
    this.lineType = TypeUtils.getType(this.lineText);
  }

  private setLineTime(): void {
    this.lineTime = TimeUtli.parseMomentFromCodeLine(this.lineText);
  }
}
