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


export class LoginRequiredError extends Error {
  errorCode = "C003";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class NoReviewData extends Error {
  errorCode = "C003";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}


export class UserUpdateFailedError extends Error {
  errorCode = "C003";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class NoUserData extends Error {
  errorCode = "C003";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class NoRestData extends Error {
  errorCode = "C004";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}
export class NoImageUrl extends Error {
  errorCode = "C004";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class FailToAddReview extends Error {
  errorCode = "C004";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }

}

export class NoParams extends Error {
  errorCode = "C005";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

