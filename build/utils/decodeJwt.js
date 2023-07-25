"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeJwtResponse = void 0;
const decodeJwtResponse = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(atob(base64)
        .split("")
        .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    })
        .join(""));
    return JSON.parse(jsonPayload);
};
exports.decodeJwtResponse = decodeJwtResponse;
