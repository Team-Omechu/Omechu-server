export class NoEmailOrPasswd extends Error {
  errorCode = "C001";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class InCorrectPasswd extends Error {
  errorCode = "C002";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class SessionNotFoundError extends Error {
  errorCode = "S001";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class SessionDestroyError extends Error {
  errorCode = "S001";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class SessionRegenerateError extends Error {
  errorCode = "S001";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}