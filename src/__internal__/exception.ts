export class Exception {
  public message: string
  public name: string = 'RequireParameterException'

  constructor (message: string) {
    this.message = message
  }
}

export class RequireParameterException extends Exception {}
