﻿"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__init = exports.BUS = void 0;
const PostInit_event_1 = require("../events/PostInit.event");
const PreInit_event_1 = require("../events/PreInit.event");
const Init_event_1 = require("../events/Init.event");
const orbit = __importStar(require("@tokio-js/orbit"));
exports.BUS = new orbit.Bus();
function __init() {
    PostInit_event_1.PostInitEvent.link(exports.BUS);
    PreInit_event_1.PreInitEvent.link(exports.BUS);
    Init_event_1.InitEvent.link(exports.BUS);
    const { _ } = require("./preinit");
    _();
    exports.BUS.post(new PreInit_event_1.PreInitEvent());
}
exports.__init = __init;
