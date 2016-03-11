export class RollbarAppender {
    constructor() {
        // @TODO: Maybe do something here to check for Rollbar?
    }

    error(logger, ...errors) {
    let rollbar = this.getRollbar();

    if (typeof rollbar !== 'undefined') {
    for (let error of errors) {
    rollbar.error(error);
}
}
}

info(logger, ...rest) {
}

warn(logger, ...warnings){
    let rollbar = this.getRollbar();

    if (typeof rollbar !== 'undefined') {
        for (let warning of warnings) {
            rollbar.warning(warning);
        }
    }
}

debug(){
}

getRollbar() {
    return window.Rollbar;
}
}