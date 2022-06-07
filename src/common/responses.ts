class GenericBody {
  private message: any;
  private internalCode: number;

  constructor(message: any, internalCode: number) {
    this.message = message;
    this.internalCode = internalCode;
  }

  get getMessage(): any {
    return this.message;
  }

  get getInternalCode(): number {
    return this.internalCode;
  }
}

class GenericResponse {
  private response: GenericBody;
  private component: string;

  constructor(response: GenericBody, component: string) {
    this.response = response;
    this.component = component;
  }

  get getResponse(): GenericBody {
    return this.response;
  }

  get getComponent(): string {
    return this.component;
  }
}

export { GenericBody, GenericResponse };
