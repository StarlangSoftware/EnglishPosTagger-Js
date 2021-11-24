(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-dictionary/dist/Dictionary/Word"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PosTaggedWord = void 0;
    const Word_1 = require("nlptoolkit-dictionary/dist/Dictionary/Word");
    class PosTaggedWord extends Word_1.Word {
        /**
         * A constructor of {@link PosTaggedWord} which takes name and tag as input and sets the corresponding attributes
         * @param name Name of the word
         * @param tag Tag of the word
         */
        constructor(name, tag) {
            super(name);
            this.tag = tag;
        }
        /**
         * Accessor method for tag attribute.
         *
         * @return Tag of the word.
         */
        getTag() {
            return this.tag;
        }
    }
    exports.PosTaggedWord = PosTaggedWord;
});
//# sourceMappingURL=PosTaggedWord.js.map