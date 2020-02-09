"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EasyCrudClass = /** @class */ (function () {
    function EasyCrudClass(config) {
        this.httpHandler = config.httpHandler;
        this.dbConnectionInstance = config.dbConnectionInstance;
    }
    return EasyCrudClass;
}());
exports.EasyCrudClass = EasyCrudClass;
