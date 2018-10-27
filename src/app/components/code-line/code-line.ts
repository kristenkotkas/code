import {LineType} from './line-type';
import {TypeUtils} from '../../util/type-utils';

export class CodeLine {

  lineText: string = undefined;
  lineNumber: number = undefined;
  lineType: LineType = undefined;

  constructor(lineText: string, lineNumber: number) {
    this.lineText = lineText;
    this.lineNumber = lineNumber;
    this.setLineType();
  }

  private setLineType(): void {
    this.lineType = TypeUtils.getType(this.lineText);
  }
}
