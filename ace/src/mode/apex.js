/* caption: Apex; extensions: apex,cls,trigger,tgr */

"use strict";

var oop = require("../lib/oop");
var TextMode = require("../mode/text").Mode;
var ApexHighlightRules = require("./apex_highlight_rules").ApexHighlightRules;
var FoldMode = require("../mode/folding/cstyle").FoldMode;

function ApexMode() {
    TextMode.call(this);

    this.HighlightRules = ApexHighlightRules;
    this.foldingRules = new FoldMode();
    this.$behaviour = this.$defaultBehaviour;
}

oop.inherits(ApexMode, TextMode);

ApexMode.prototype.lineCommentStart = "//";

ApexMode.prototype.blockComment = {
    start: "/*",
    end: "*/"
};

exports.Mode = ApexMode;
