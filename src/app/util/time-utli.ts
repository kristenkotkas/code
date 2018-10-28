import {LogTime} from '../components/common/entity/log-time';

export class TimeUtli {

  private static regularTimestampRegex = new RegExp('([0-9]{2}):([0-9]{2}):([0-9]{2})[,|.]([0-9]{3})');

  // 13:15:33[,|.]057
  public static getMomentFromRegularTimestamp(timestamp: RegExpExecArray): LogTime {
    return new LogTime(Number(timestamp[1]), Number(timestamp[2]), Number(timestamp[3]), Number(timestamp[4]));
  }

  public static parseMomentFromCodeLine(codeline: string): LogTime {
    if (this.regularTimestampRegex.test(codeline)) {
      return this.getMomentFromRegularTimestamp(this.regularTimestampRegex.exec(codeline));
    }
  }

}
