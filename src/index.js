export class RollbarAppender {
  constructor() {
    // @TODO: Maybe do something here to check for Rollbar?
  }

  error(logger, error) {
    let rollbar = this.getRollbar();

    if (typeof rollbar !== 'undefined') {
      rollbar.error(error);
    }
  }

  info(logger, info) {
    let rollbar = this.getRollbar();

    if (typeof rollbar !== 'undefined') {
      rollbar.info(info);
    }
  }

  warn(logger, warning) {
    let rollbar = this.getRollbar();

    if (typeof rollbar !== 'undefined') {
      rollbar.warning(warning);
    }
  }

  debug(logger, debug) {
    let rollbar = this.getRollbar();

    if (typeof rollbar !== 'undefined') {
      rollbar.debug(debug);
    }
  }

  getRollbar() {
    return window.Rollbar;
  }
}