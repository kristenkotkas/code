import {LineType} from '../components/code-line/line-type';

export class TypeUtils {

  private static regex: RegExp = new RegExp('(INFO|DEBUG|WARN|ERROR|TRACE)');

  private static types: {} = {
    'DEBUG': LineType.DEBUG,
    'INFO': LineType.INFO,
    'WARN': LineType.WARN,
    'ERROR': LineType.ERROR,
    'TRACE': LineType.TRACE,
    'NON_TYPE': LineType.NON_TYPE
  };

  public static getType(lineText: string): LineType {
    return this.regex.test(lineText) ? this.types[this.regex.exec(lineText)[0]] : LineType.NON_TYPE;
  }
}
