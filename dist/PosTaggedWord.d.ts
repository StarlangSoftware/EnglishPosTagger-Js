import { Word } from "nlptoolkit-dictionary/dist/Dictionary/Word";
export declare class PosTaggedWord extends Word {
    private tag;
    /**
     * A constructor of {@link PosTaggedWord} which takes name and tag as input and sets the corresponding attributes
     * @param name Name of the word
     * @param tag Tag of the word
     */
    constructor(name: string, tag: string);
    /**
     * Accessor method for tag attribute.
     *
     * @return Tag of the word.
     */
    getTag(): string;
}
