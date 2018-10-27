export class Stringutil {

  public static replaceAll(text: string, origString: string, newString: string): string {
    return text.split(origString).join(newString);
  }

  public static escapeAngleBrackets(text: string): string {
    return text.split('<').join('&lt').split('>').join('&gt');
  }

}
