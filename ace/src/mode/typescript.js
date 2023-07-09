/*
  THIS FILE WAS AUTOGENERATED BY mode.tmpl.js
*/

"use strict";

var oop = require("../lib/oop");
var jsMode = require("./javascript").Mode;
var TypeScriptHighlightRules = require("./typescript_highlight_rules").TypeScriptHighlightRules;
var CStyleFoldMode = require("./folding/cstyle").FoldMode;
var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;

var Mode = function() {
    this.HighlightRules = TypeScriptHighlightRules;
    
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = this.$defaultBehaviour;
    this.foldingRules = new CStyleFoldMode();
};
oop.inherits(Mode, jsMode);

(function() {
    this.createWorker = function(session) {
        return null;
    };
    this.$id = "ace/mode/typescript";
}).call(Mode.prototype);

exports.Mode = Mode;
