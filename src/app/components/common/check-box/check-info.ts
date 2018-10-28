export class CheckInfo {

  isChecked: boolean = undefined;
  label: string = undefined;
  info: any = undefined;

  constructor(label: string, info?: any) {
    this.isChecked = true;
    this.label = label;
    if (info) {
      this.info = info;
    }
  }
}
