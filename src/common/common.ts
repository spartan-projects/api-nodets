class GenericBody {
  private body: string;

  constructor(body: string) {
    this.body = body;
  }

  get getBody(): string {
    return this.body;
  }
}

class GenericResponseMessage {
  private message: GenericBody;
  private code: number;

  constructor(message: GenericBody, code: number) {
    this.message = message;
    this.code = code;
  }

  get getMessage(): GenericBody {
    return this.message;
  }

  get getCode(): number {
    return this.code;
  }
}

export { GenericBody, GenericResponseMessage };
