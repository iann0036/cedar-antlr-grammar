import CedarParserListener from "./.antlr/CedarParserListener.js";

export default class Listener extends CedarParserListener {

    constructor() {
        super();
    }

    exitPolicyset(ctx) {
        this.Ctx = ctx;
	}
}
