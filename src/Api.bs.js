// Generated by BUCKLESCRIPT VERSION 4.0.11, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Fetch = require("bs-fetch/src/Fetch.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function sendQuery(q) {
  return fetch("https://pokeql.com/v1", Fetch.RequestInit[/* make */0](/* Post */2, /* array */[/* tuple */[
                        "content-type",
                        "application/json"
                      ]], Caml_option.some(JSON.stringify(Js_dict.fromList(/* :: */[
                                  /* tuple */[
                                    "query",
                                    q.query
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "variables",
                                      q.variables
                                    ],
                                    /* [] */0
                                  ]
                                ]))), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (resp) {
                if (resp.ok) {
                  return resp.json().then((function (data) {
                                var match = Js_json.decodeObject(data);
                                if (match !== undefined) {
                                  var parse = q.parse;
                                  return Promise.resolve(/* Ok */Block.__(0, [Curry._1(parse, Caml_option.valFromOption(match)["data"])]));
                                } else {
                                  return Promise.resolve(/* Error */Block.__(1, ["Response is not an object"]));
                                }
                              }));
                } else {
                  return Promise.resolve(/* Error */Block.__(1, ["Request failed: " + resp.statusText]));
                }
              }));
}

exports.sendQuery = sendQuery;
/* No side effect */
