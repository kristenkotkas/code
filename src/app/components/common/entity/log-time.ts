export class LogTime {
  hour: number = undefined;
  minute: number = undefined;
  second: number = undefined;
  millisec: number = undefined;
  logTimestamp: number = undefined;

  constructor(hour: number, minute: number, second: number, millisec: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
    this.millisec = millisec;
    this.setLogTimestamp();
  }

  private setLogTimestamp() {
    this.logTimestamp = 1000 * (60 * (this.hour * 60 + this.minute) + this.second) + this.millisec;
  }
}
