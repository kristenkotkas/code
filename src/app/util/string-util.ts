export class StringUtil {

  public static replaceAll(text: string, origString: string, newString: string): string {
    return text.split(origString).join(newString);
  }

  public static escapeHTMLChars(text: string): string {
    return text.split('<').join('&lt').split('>').join('&gt').split(' ').join('&nbsp');
  }

}
