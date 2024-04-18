/* global SLang : true */

(function (){

"use strict";

var exports = {};

function createProgram(e) {
    return ["Program", e]; 
}
function isProgram(e) { 
    return e[0] === "Program"; 
}
function getProgramExp(e) { 
    if (isProgram(e)) {
        return e[1];
    } else {
        throw new Error("Interpreter error: "  +
                        "The argument of getProgramExp is not a program.");
    }
}                                      
function createVarExp(v) { 
    return ["VarExp", v]; 
}
function isVarExp(e) { 
    return e[0] === "VarExp"; 
}
function getVarExpId(e) { 
    if (isVarExp(e)) {
        return e[1];
    } else {
        throw new Error("Interpreter error: "  +
                        "The argument of getVarExpId is not a VarExp.");
    }
}
function createIntExp(n) {
    return ["IntExp", parseInt(n)];
}
function isIntExp(e) { 
    return e[0] === "IntExp"; 
}
function getIntExpValue(e) { 
    if (isIntExp(e)) {
        return e[1];
    } else {
        throw new Error("Interpreter error: "  +
                        "The argument of getIntExpValue is not an IntExp.");
    }
}
function createFnExp(params,body) {
    return ["FnExp",params,body];
}
function isFnExp(e) { 
    return e[0] === "FnExp"; 
}
function getFnExpParams(e) { 
    if (isFnExp(e)) {
        return e[1];
    } else {
        throw new Error("Interpreter error: "  +
                        "The argument of getFnExpParams is not an FnExp.");
    }
}
function getFnExpBody(e) { 
    if (isFnExp(e)) {
        return e[2];
    } else {
        throw new Error("Interpreter error: "  +
                        "The argument of getFnExpBody is not an FnExp.");
    }
}
function createAppExp(fn,args) {
    return ["AppExp",fn,args];
}
function isAppExp(e) { 
    return e[0] === "AppExp"; 
}
function getAppExpFn(e) { 
    if (isAppExp(e)) {
        return e[1];
    } else {
        throw new Error("Interpreter error: "  +
                        "The argument of getAppExpFn is not an AppExp.");
    }
}
function getAppExpArgs(e) { 
    if (isAppExp(e)) {
        return e[2].slice(1); // eliminate the first element (i.e., "args")
    } else {
        throw new Error("Interpreter error: "  +
                        "The argument of getAppExpArgs is not an AppExp.");
    }
}
function createPrimAppExp(prim,args) {
    return ["PrimAppExp",prim,args];
}
function isPrimAppExp(e) { 
    return e[0] === "PrimAppExp"; 
}
function getPrimAppExpPrim(e) { 
    if (isPrimAppExp(e)) {
        return e[1];
    } else {
        throw new Error("Interpreter error: The "  +
                        "argument of getPrimAppExpPrim is not a PrimAppExp.");
    }
}
function getPrimAppExpArgs(e) { 
    if (isPrimAppExp(e)) {
        return e[2];
    } else {
        throw new Error("Interpreter error: The "  +
                        "argument of getPrimAppExpArgs is not a PrimAppExp.");
    }
}

function createPrimAppExp1(prim,arg) {
    return ["Prim1AppExp",prim,arg];
}
function isPrimAppExp1(e) { 
    return e[0] === "Prim1AppExp"; 
}
function getPrimAppExpPrim1(e) { 
    if (isPrimAppExp1(e)) {
        return e[1];
    } else {
        throw new Error("Interpreter error: The "  +
                        "argument of getPrimAppExpPrim1 is not a PrimAppExp1.");
    }
}
function getPrimAppExpArgs1(e) { 
    if (isPrimAppExp1(e)) {
        return [e[2]];
    } else {
        throw new Error("Interpreter error: The "  +
                        "argument of getPrimAppExpArgs1 is not a PrimAppExp1.");
    }
}

function createPrimAppExp2(prim,arg1,arg2) {
    return ["Prim2AppExp",prim,arg1,arg2];
}
function isPrimAppExp2(e) { 
    return e[0] === "Prim2AppExp"; 
}
function getPrimAppExpPrim2(e) { 
    if (isPrimAppExp2(e)) {
        return e[1];
    } else {
        throw new Error("Interpreter error: The "  +
                        "argument of getPrimAppExpPrim2 is not a PrimAppExp2.");
    }
}
function getPrimAppExpArgs2(e) { 
    if (isPrimAppExp2(e)) {
        return [e[2], e[3]];
    } else {
        throw new Error("Interpreter error: The "  +
                        "argument of getPrimAppExpArgs2 is not a PrimAppExp2.");
    }
}

function createListExp(list) {
    return ["List",list];
}
function isListExp(e) { 
    return e[0] === "List"; 
}
function getListValue(e) { 
    if (isListExp(e)) {
        return e[1];
    } else {
        throw new Error("Interpreter error: The "  +
                        "argument of isListExp is not a ListExp.");
    }
}






exports.createProgram = createProgram;
exports.isProgram = isProgram;
exports.getProgramExp = getProgramExp;
exports.createVarExp = createVarExp;
exports.isVarExp = isVarExp;
exports.getVarExpId = getVarExpId;
exports.createIntExp = createIntExp;
exports.isIntExp = isIntExp;
exports.getIntExpValue = getIntExpValue;
exports.createFnExp = createFnExp;
exports.isFnExp = isFnExp;
exports.getFnExpParams = getFnExpParams;
exports.getFnExpBody = getFnExpBody;
exports.createAppExp = createAppExp;
exports.isAppExp = isAppExp;
exports.getAppExpFn = getAppExpFn;
exports.getAppExpArgs = getAppExpArgs;
exports.createPrimAppExp = createPrimAppExp;
exports.isPrimAppExp = isPrimAppExp;
exports.getPrimAppExpPrim = getPrimAppExpPrim;
exports.getPrimAppExpArgs = getPrimAppExpArgs;
exports.createPrimAppExp1 = createPrimAppExp1;
exports.isPrimAppExp1 = isPrimAppExp1;
exports.getPrimAppExpPrim1 = getPrimAppExpPrim1;
exports.getPrimAppExpArgs1 = getPrimAppExpArgs1;
exports.createPrimAppExp2 = createPrimAppExp2;
exports.isPrimAppExp2 = isPrimAppExp2;
exports.getPrimAppExpPrim2 = getPrimAppExpPrim2;
exports.getPrimAppExpArgs2 = getPrimAppExpArgs2;
exports.createListExp =  createListExp;
exports.isListExp =  isListExp;
exports.getListValue =  getListValue;

window.SLang.absyn = exports;
}());
