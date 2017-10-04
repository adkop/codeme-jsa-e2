import * as ws from "./ws/04102017";

Object.keys(ws).map(fnName => "function" === typeof ws[fnName] ? ws[fnName]("imie", "Marcin") : "");