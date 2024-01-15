// Generated from .antlr/grammars/CedarParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CedarParserListener from './CedarParserListener.js';
import CedarParserVisitor from './CedarParserVisitor.js';

const serializedATN = [4,1,46,320,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,1,0,4,0,52,8,0,11,0,12,0,
53,1,0,1,0,1,1,5,1,59,8,1,10,1,12,1,62,9,1,1,1,1,1,1,1,1,1,1,1,5,1,69,8,
1,10,1,12,1,72,9,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,3,
4,87,8,4,1,4,1,4,1,4,3,4,92,8,4,3,4,94,8,4,1,4,1,4,1,4,3,4,99,8,4,3,4,101,
8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,112,8,5,3,5,114,8,5,3,5,116,
8,5,1,6,1,6,1,6,3,6,121,8,6,1,6,1,6,1,6,3,6,126,8,6,3,6,128,8,6,1,6,1,6,
1,6,3,6,133,8,6,3,6,135,8,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,3,8,150,8,8,1,9,1,9,1,9,5,9,155,8,9,10,9,12,9,158,9,9,1,10,1,10,
1,10,5,10,163,8,10,10,10,12,10,166,9,10,1,11,1,11,1,11,3,11,171,8,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,186,8,11,
3,11,188,8,11,1,12,1,12,1,12,5,12,193,8,12,10,12,12,12,196,9,12,1,13,1,13,
1,13,5,13,201,8,13,10,13,12,13,204,9,13,1,14,3,14,207,8,14,1,14,3,14,210,
8,14,1,14,3,14,213,8,14,1,14,3,14,216,8,14,1,14,1,14,1,15,1,15,5,15,222,
8,15,10,15,12,15,225,9,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,
17,3,17,237,8,17,1,17,3,17,240,8,17,1,17,1,17,1,17,3,17,245,8,17,1,18,1,
18,1,18,1,18,1,18,1,18,3,18,253,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,3,18,263,8,18,1,18,1,18,1,18,3,18,268,8,18,1,18,3,18,271,8,18,1,19,
1,19,1,19,5,19,276,8,19,10,19,12,19,279,9,19,1,20,1,20,1,20,1,20,1,21,1,
21,1,21,5,21,288,8,21,10,21,12,21,291,9,21,1,22,1,22,1,22,5,22,296,8,22,
10,22,12,22,299,9,22,1,23,1,23,1,23,3,23,304,8,23,1,23,1,23,1,24,1,24,1,
24,1,24,1,24,1,24,1,24,5,24,315,8,24,10,24,12,24,318,9,24,1,24,0,0,25,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,0,5,
1,0,9,10,1,0,7,8,2,0,38,38,43,43,1,0,24,25,1,0,25,26,342,0,51,1,0,0,0,2,
60,1,0,0,0,4,75,1,0,0,0,6,77,1,0,0,0,8,83,1,0,0,0,10,102,1,0,0,0,12,117,
1,0,0,0,14,136,1,0,0,0,16,149,1,0,0,0,18,151,1,0,0,0,20,159,1,0,0,0,22,187,
1,0,0,0,24,189,1,0,0,0,26,197,1,0,0,0,28,206,1,0,0,0,30,219,1,0,0,0,32,226,
1,0,0,0,34,244,1,0,0,0,36,270,1,0,0,0,38,272,1,0,0,0,40,280,1,0,0,0,42,284,
1,0,0,0,44,292,1,0,0,0,46,303,1,0,0,0,48,307,1,0,0,0,50,52,3,2,1,0,51,50,
1,0,0,0,52,53,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,55,1,0,0,0,55,56,5,
0,0,1,56,1,1,0,0,0,57,59,3,32,16,0,58,57,1,0,0,0,59,62,1,0,0,0,60,58,1,0,
0,0,60,61,1,0,0,0,61,63,1,0,0,0,62,60,1,0,0,0,63,64,3,4,2,0,64,65,5,31,0,
0,65,66,3,6,3,0,66,70,5,32,0,0,67,69,3,14,7,0,68,67,1,0,0,0,69,72,1,0,0,
0,70,68,1,0,0,0,70,71,1,0,0,0,71,73,1,0,0,0,72,70,1,0,0,0,73,74,5,22,0,0,
74,3,1,0,0,0,75,76,7,0,0,0,76,5,1,0,0,0,77,78,3,8,4,0,78,79,5,35,0,0,79,
80,3,10,5,0,80,81,5,35,0,0,81,82,3,12,6,0,82,7,1,0,0,0,83,100,5,12,0,0,84,
85,5,17,0,0,85,87,3,38,19,0,86,84,1,0,0,0,86,87,1,0,0,0,87,93,1,0,0,0,88,
91,5,5,0,0,89,92,3,40,20,0,90,92,5,11,0,0,91,89,1,0,0,0,91,90,1,0,0,0,92,
94,1,0,0,0,93,88,1,0,0,0,93,94,1,0,0,0,94,101,1,0,0,0,95,98,5,19,0,0,96,
99,3,40,20,0,97,99,5,11,0,0,98,96,1,0,0,0,98,97,1,0,0,0,99,101,1,0,0,0,100,
86,1,0,0,0,100,95,1,0,0,0,101,9,1,0,0,0,102,115,5,13,0,0,103,104,5,19,0,
0,104,114,3,40,20,0,105,111,5,5,0,0,106,107,5,29,0,0,107,108,3,42,21,0,108,
109,5,30,0,0,109,112,1,0,0,0,110,112,3,40,20,0,111,106,1,0,0,0,111,110,1,
0,0,0,112,114,1,0,0,0,113,103,1,0,0,0,113,105,1,0,0,0,114,116,1,0,0,0,115,
113,1,0,0,0,115,116,1,0,0,0,116,11,1,0,0,0,117,134,5,15,0,0,118,119,5,17,
0,0,119,121,3,38,19,0,120,118,1,0,0,0,120,121,1,0,0,0,121,127,1,0,0,0,122,
125,5,5,0,0,123,126,3,40,20,0,124,126,5,14,0,0,125,123,1,0,0,0,125,124,1,
0,0,0,126,128,1,0,0,0,127,122,1,0,0,0,127,128,1,0,0,0,128,135,1,0,0,0,129,
132,5,19,0,0,130,133,3,40,20,0,131,133,5,14,0,0,132,130,1,0,0,0,132,131,
1,0,0,0,133,135,1,0,0,0,134,120,1,0,0,0,134,129,1,0,0,0,135,13,1,0,0,0,136,
137,7,1,0,0,137,138,5,33,0,0,138,139,3,16,8,0,139,140,5,34,0,0,140,15,1,
0,0,0,141,150,3,18,9,0,142,143,5,1,0,0,143,144,3,16,8,0,144,145,5,2,0,0,
145,146,3,16,8,0,146,147,5,3,0,0,147,148,3,16,8,0,148,150,1,0,0,0,149,141,
1,0,0,0,149,142,1,0,0,0,150,17,1,0,0,0,151,156,3,20,10,0,152,153,5,20,0,
0,153,155,3,20,10,0,154,152,1,0,0,0,155,158,1,0,0,0,156,154,1,0,0,0,156,
157,1,0,0,0,157,19,1,0,0,0,158,156,1,0,0,0,159,164,3,22,11,0,160,161,5,21,
0,0,161,163,3,22,11,0,162,160,1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,
165,1,0,0,0,165,21,1,0,0,0,166,164,1,0,0,0,167,170,3,24,12,0,168,169,5,37,
0,0,169,171,3,24,12,0,170,168,1,0,0,0,170,171,1,0,0,0,171,188,1,0,0,0,172,
173,3,24,12,0,173,174,5,6,0,0,174,175,7,2,0,0,175,188,1,0,0,0,176,177,3,
24,12,0,177,178,5,4,0,0,178,179,5,39,0,0,179,188,1,0,0,0,180,181,3,24,12,
0,181,182,5,17,0,0,182,185,3,38,19,0,183,184,5,5,0,0,184,186,3,24,12,0,185,
183,1,0,0,0,185,186,1,0,0,0,186,188,1,0,0,0,187,167,1,0,0,0,187,172,1,0,
0,0,187,176,1,0,0,0,187,180,1,0,0,0,188,23,1,0,0,0,189,194,3,26,13,0,190,
191,7,3,0,0,191,193,3,26,13,0,192,190,1,0,0,0,193,196,1,0,0,0,194,192,1,
0,0,0,194,195,1,0,0,0,195,25,1,0,0,0,196,194,1,0,0,0,197,202,3,28,14,0,198,
199,5,23,0,0,199,201,3,28,14,0,200,198,1,0,0,0,201,204,1,0,0,0,202,200,1,
0,0,0,202,203,1,0,0,0,203,27,1,0,0,0,204,202,1,0,0,0,205,207,7,4,0,0,206,
205,1,0,0,0,206,207,1,0,0,0,207,209,1,0,0,0,208,210,7,4,0,0,209,208,1,0,
0,0,209,210,1,0,0,0,210,212,1,0,0,0,211,213,7,4,0,0,212,211,1,0,0,0,212,
213,1,0,0,0,213,215,1,0,0,0,214,216,7,4,0,0,215,214,1,0,0,0,215,216,1,0,
0,0,216,217,1,0,0,0,217,218,3,30,15,0,218,29,1,0,0,0,219,223,3,36,18,0,220,
222,3,34,17,0,221,220,1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,224,1,
0,0,0,224,31,1,0,0,0,225,223,1,0,0,0,226,227,5,28,0,0,227,228,5,43,0,0,228,
229,5,31,0,0,229,230,5,38,0,0,230,231,5,32,0,0,231,33,1,0,0,0,232,233,5,
27,0,0,233,239,5,43,0,0,234,236,5,31,0,0,235,237,3,44,22,0,236,235,1,0,0,
0,236,237,1,0,0,0,237,238,1,0,0,0,238,240,5,32,0,0,239,234,1,0,0,0,239,240,
1,0,0,0,240,245,1,0,0,0,241,242,5,29,0,0,242,243,5,38,0,0,243,245,5,30,0,
0,244,232,1,0,0,0,244,241,1,0,0,0,245,35,1,0,0,0,246,271,5,40,0,0,247,271,
5,44,0,0,248,271,3,40,20,0,249,250,3,46,23,0,250,252,5,31,0,0,251,253,3,
44,22,0,252,251,1,0,0,0,252,253,1,0,0,0,253,254,1,0,0,0,254,255,5,32,0,0,
255,271,1,0,0,0,256,257,5,31,0,0,257,258,3,16,8,0,258,259,5,32,0,0,259,271,
1,0,0,0,260,262,5,29,0,0,261,263,3,44,22,0,262,261,1,0,0,0,262,263,1,0,0,
0,263,264,1,0,0,0,264,271,5,30,0,0,265,267,5,33,0,0,266,268,3,48,24,0,267,
266,1,0,0,0,267,268,1,0,0,0,268,269,1,0,0,0,269,271,5,34,0,0,270,246,1,0,
0,0,270,247,1,0,0,0,270,248,1,0,0,0,270,249,1,0,0,0,270,256,1,0,0,0,270,
260,1,0,0,0,270,265,1,0,0,0,271,37,1,0,0,0,272,277,5,43,0,0,273,274,5,18,
0,0,274,276,5,43,0,0,275,273,1,0,0,0,276,279,1,0,0,0,277,275,1,0,0,0,277,
278,1,0,0,0,278,39,1,0,0,0,279,277,1,0,0,0,280,281,3,38,19,0,281,282,5,18,
0,0,282,283,5,38,0,0,283,41,1,0,0,0,284,289,3,40,20,0,285,286,5,35,0,0,286,
288,3,40,20,0,287,285,1,0,0,0,288,291,1,0,0,0,289,287,1,0,0,0,289,290,1,
0,0,0,290,43,1,0,0,0,291,289,1,0,0,0,292,297,3,16,8,0,293,294,5,35,0,0,294,
296,3,16,8,0,295,293,1,0,0,0,296,299,1,0,0,0,297,295,1,0,0,0,297,298,1,0,
0,0,298,45,1,0,0,0,299,297,1,0,0,0,300,301,3,38,19,0,301,302,5,18,0,0,302,
304,1,0,0,0,303,300,1,0,0,0,303,304,1,0,0,0,304,305,1,0,0,0,305,306,5,43,
0,0,306,47,1,0,0,0,307,308,7,2,0,0,308,309,5,36,0,0,309,316,3,16,8,0,310,
311,5,35,0,0,311,312,7,2,0,0,312,313,5,36,0,0,313,315,3,16,8,0,314,310,1,
0,0,0,315,318,1,0,0,0,316,314,1,0,0,0,316,317,1,0,0,0,317,49,1,0,0,0,318,
316,1,0,0,0,41,53,60,70,86,91,93,98,100,111,113,115,120,125,127,132,134,
149,156,164,170,185,187,194,202,206,209,212,215,223,236,239,244,252,262,
267,270,277,289,297,303,316];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CedarParser extends antlr4.Parser {

    static grammarFileName = "CedarParser.g4";
    static literalNames = [ null, "'if'", "'then'", "'else'", "'like'", 
                            "'in'", "'has'", "'when'", "'unless'", "'permit'", 
                            "'forbid'", "'?principal'", "'principal'", "'action'", 
                            "'?resource'", "'resource'", "'context'", "'is'", 
                            "'::'", "'=='", "'||'", "'&&'", "';'", "'*'", 
                            "'+'", "'-'", "'!'", "'.'", "'@'", "'['", "']'", 
                            "'('", "')'", "'{'", "'}'", "','", "':'" ];
    static symbolicNames = [ null, "IF", "THEN", "ELSE", "LIKE", "IN", "HAS", 
                             "WHEN", "UNLESS", "PERMIT", "FORBID", "QPRINCIPAL", 
                             "PRINCIPAL", "ACTION", "QRESOURCE", "RESOURCE", 
                             "CONTEXT", "IS", "NAMESPACE", "DOUBLEEQUAL", 
                             "DOUBLEPIPE", "DOUBLEAMP", "SEMICOLON", "ASTERIX", 
                             "PLUS", "MINUS", "EXCLAMATION", "PERIOD", "ATSYMB", 
                             "OPENBRKT", "CLOSEBRKT", "OPENPAREN", "CLOSEPAREN", 
                             "OPENBRACE", "CLOSEBRACE", "COMMA", "COLON", 
                             "RELOP", "STR", "PAT", "LITERAL", "BOOL", "INT", 
                             "IDENT", "VAR", "WHITESPC", "COMMENT" ];
    static ruleNames = [ "policyset", "policy", "effect", "scope", "principal", 
                         "action", "resource", "condition", "expr", "or", 
                         "and", "relation", "add", "mult", "unary", "member", 
                         "annotation", "access", "primary", "path", "entity", 
                         "entList", "exprList", "extFun", "recInits" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CedarParser.ruleNames;
        this.literalNames = CedarParser.literalNames;
        this.symbolicNames = CedarParser.symbolicNames;
    }



	policyset() {
	    let localctx = new PolicysetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CedarParser.RULE_policyset);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 50;
	            this.policy();
	            this.state = 53; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 268436992) !== 0));
	        this.state = 55;
	        this.match(CedarParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	policy() {
	    let localctx = new PolicyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CedarParser.RULE_policy);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 57;
	            this.annotation();
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 63;
	        this.effect();
	        this.state = 64;
	        this.match(CedarParser.OPENPAREN);
	        this.state = 65;
	        this.scope();
	        this.state = 66;
	        this.match(CedarParser.CLOSEPAREN);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7 || _la===8) {
	            this.state = 67;
	            this.condition();
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 73;
	        this.match(CedarParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	effect() {
	    let localctx = new EffectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CedarParser.RULE_effect);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===10)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scope() {
	    let localctx = new ScopeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CedarParser.RULE_scope);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.principal();
	        this.state = 78;
	        this.match(CedarParser.COMMA);
	        this.state = 79;
	        this.action();
	        this.state = 80;
	        this.match(CedarParser.COMMA);
	        this.state = 81;
	        this.resource();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	principal() {
	    let localctx = new PrincipalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CedarParser.RULE_principal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(CedarParser.PRINCIPAL);
	        this.state = 100;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 17:
	        case 35:
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 84;
	                this.match(CedarParser.IS);
	                this.state = 85;
	                this.path();
	            }

	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 88;
	                this.match(CedarParser.IN);
	                this.state = 91;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 43:
	                    this.state = 89;
	                    this.entity();
	                    break;
	                case 11:
	                    this.state = 90;
	                    this.match(CedarParser.QPRINCIPAL);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	            }

	            break;
	        case 19:
	            this.state = 95;
	            this.match(CedarParser.DOUBLEEQUAL);
	            this.state = 98;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 43:
	                this.state = 96;
	                this.entity();
	                break;
	            case 11:
	                this.state = 97;
	                this.match(CedarParser.QPRINCIPAL);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	action() {
	    let localctx = new ActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CedarParser.RULE_action);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(CedarParser.ACTION);
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===19) {
	            this.state = 113;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 19:
	                this.state = 103;
	                this.match(CedarParser.DOUBLEEQUAL);
	                this.state = 104;
	                this.entity();
	                break;
	            case 5:
	                this.state = 105;
	                this.match(CedarParser.IN);
	                this.state = 111;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 29:
	                    this.state = 106;
	                    this.match(CedarParser.OPENBRKT);
	                    this.state = 107;
	                    this.entList();
	                    this.state = 108;
	                    this.match(CedarParser.CLOSEBRKT);
	                    break;
	                case 43:
	                    this.state = 110;
	                    this.entity();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	resource() {
	    let localctx = new ResourceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CedarParser.RULE_resource);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(CedarParser.RESOURCE);
	        this.state = 134;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 17:
	        case 32:
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 118;
	                this.match(CedarParser.IS);
	                this.state = 119;
	                this.path();
	            }

	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 122;
	                this.match(CedarParser.IN);
	                this.state = 125;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 43:
	                    this.state = 123;
	                    this.entity();
	                    break;
	                case 14:
	                    this.state = 124;
	                    this.match(CedarParser.QRESOURCE);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	            }

	            break;
	        case 19:
	            this.state = 129;
	            this.match(CedarParser.DOUBLEEQUAL);
	            this.state = 132;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 43:
	                this.state = 130;
	                this.entity();
	                break;
	            case 14:
	                this.state = 131;
	                this.match(CedarParser.QRESOURCE);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CedarParser.RULE_condition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 137;
	        this.match(CedarParser.OPENBRACE);
	        this.state = 138;
	        this.expr();
	        this.state = 139;
	        this.match(CedarParser.CLOSEBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CedarParser.RULE_expr);
	    try {
	        this.state = 149;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	        case 26:
	        case 29:
	        case 31:
	        case 33:
	        case 40:
	        case 43:
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 141;
	            this.or();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 142;
	            this.match(CedarParser.IF);
	            this.state = 143;
	            this.expr();
	            this.state = 144;
	            this.match(CedarParser.THEN);
	            this.state = 145;
	            this.expr();
	            this.state = 146;
	            this.match(CedarParser.ELSE);
	            this.state = 147;
	            this.expr();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	or() {
	    let localctx = new OrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CedarParser.RULE_or);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.and();
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 152;
	            this.match(CedarParser.DOUBLEPIPE);
	            this.state = 153;
	            this.and();
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	and() {
	    let localctx = new AndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CedarParser.RULE_and);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this.relation();
	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
	            this.state = 160;
	            this.match(CedarParser.DOUBLEAMP);
	            this.state = 161;
	            this.relation();
	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	relation() {
	    let localctx = new RelationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CedarParser.RULE_relation);
	    var _la = 0;
	    try {
	        this.state = 187;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 167;
	            this.add();
	            this.state = 170;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===37) {
	                this.state = 168;
	                this.match(CedarParser.RELOP);
	                this.state = 169;
	                this.add();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 172;
	            this.add();
	            this.state = 173;
	            this.match(CedarParser.HAS);
	            this.state = 174;
	            _la = this._input.LA(1);
	            if(!(_la===38 || _la===43)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 176;
	            this.add();
	            this.state = 177;
	            this.match(CedarParser.LIKE);
	            this.state = 178;
	            this.match(CedarParser.PAT);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 180;
	            this.add();
	            this.state = 181;
	            this.match(CedarParser.IS);
	            this.state = 182;
	            this.path();
	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 183;
	                this.match(CedarParser.IN);
	                this.state = 184;
	                this.add();
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	add() {
	    let localctx = new AddContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CedarParser.RULE_add);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.mult();
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===24 || _la===25) {
	            this.state = 190;
	            _la = this._input.LA(1);
	            if(!(_la===24 || _la===25)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 191;
	            this.mult();
	            this.state = 196;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mult() {
	    let localctx = new MultContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, CedarParser.RULE_mult);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.unary();
	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 198;
	            this.match(CedarParser.ASTERIX);
	            this.state = 199;
	            this.unary();
	            this.state = 204;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unary() {
	    let localctx = new UnaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, CedarParser.RULE_unary);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        if(la_===1) {
	            this.state = 205;
	            _la = this._input.LA(1);
	            if(!(_la===25 || _la===26)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }

	        }
	        this.state = 209;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        if(la_===1) {
	            this.state = 208;
	            _la = this._input.LA(1);
	            if(!(_la===25 || _la===26)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }

	        }
	        this.state = 212;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        if(la_===1) {
	            this.state = 211;
	            _la = this._input.LA(1);
	            if(!(_la===25 || _la===26)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }

	        }
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25 || _la===26) {
	            this.state = 214;
	            _la = this._input.LA(1);
	            if(!(_la===25 || _la===26)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 217;
	        this.member();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	member() {
	    let localctx = new MemberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, CedarParser.RULE_member);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this.primary();
	        this.state = 223;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27 || _la===29) {
	            this.state = 220;
	            this.access();
	            this.state = 225;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	annotation() {
	    let localctx = new AnnotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, CedarParser.RULE_annotation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(CedarParser.ATSYMB);
	        this.state = 227;
	        this.match(CedarParser.IDENT);
	        this.state = 228;
	        this.match(CedarParser.OPENPAREN);
	        this.state = 229;
	        this.match(CedarParser.STR);
	        this.state = 230;
	        this.match(CedarParser.CLOSEPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	access() {
	    let localctx = new AccessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, CedarParser.RULE_access);
	    var _la = 0;
	    try {
	        this.state = 244;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 232;
	            this.match(CedarParser.PERIOD);
	            this.state = 233;
	            this.match(CedarParser.IDENT);
	            this.state = 239;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 234;
	                this.match(CedarParser.OPENPAREN);
	                this.state = 236;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2785017858) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 3201) !== 0)) {
	                    this.state = 235;
	                    this.exprList();
	                }

	                this.state = 238;
	                this.match(CedarParser.CLOSEPAREN);
	            }

	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 241;
	            this.match(CedarParser.OPENBRKT);
	            this.state = 242;
	            this.match(CedarParser.STR);
	            this.state = 243;
	            this.match(CedarParser.CLOSEBRKT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, CedarParser.RULE_primary);
	    var _la = 0;
	    try {
	        this.state = 270;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 246;
	            this.match(CedarParser.LITERAL);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 247;
	            this.match(CedarParser.VAR);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 248;
	            this.entity();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 249;
	            this.extFun();
	            this.state = 250;
	            this.match(CedarParser.OPENPAREN);
	            this.state = 252;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2785017858) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 3201) !== 0)) {
	                this.state = 251;
	                this.exprList();
	            }

	            this.state = 254;
	            this.match(CedarParser.CLOSEPAREN);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 256;
	            this.match(CedarParser.OPENPAREN);
	            this.state = 257;
	            this.expr();
	            this.state = 258;
	            this.match(CedarParser.CLOSEPAREN);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 260;
	            this.match(CedarParser.OPENBRKT);
	            this.state = 262;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2785017858) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 3201) !== 0)) {
	                this.state = 261;
	                this.exprList();
	            }

	            this.state = 264;
	            this.match(CedarParser.CLOSEBRKT);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 265;
	            this.match(CedarParser.OPENBRACE);
	            this.state = 267;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===38 || _la===43) {
	                this.state = 266;
	                this.recInits();
	            }

	            this.state = 269;
	            this.match(CedarParser.CLOSEBRACE);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	path() {
	    let localctx = new PathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, CedarParser.RULE_path);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.match(CedarParser.IDENT);
	        this.state = 277;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 273;
	                this.match(CedarParser.NAMESPACE);
	                this.state = 274;
	                this.match(CedarParser.IDENT); 
	            }
	            this.state = 279;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	entity() {
	    let localctx = new EntityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, CedarParser.RULE_entity);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.path();
	        this.state = 281;
	        this.match(CedarParser.NAMESPACE);
	        this.state = 282;
	        this.match(CedarParser.STR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	entList() {
	    let localctx = new EntListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, CedarParser.RULE_entList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this.entity();
	        this.state = 289;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35) {
	            this.state = 285;
	            this.match(CedarParser.COMMA);
	            this.state = 286;
	            this.entity();
	            this.state = 291;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprList() {
	    let localctx = new ExprListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, CedarParser.RULE_exprList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this.expr();
	        this.state = 297;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35) {
	            this.state = 293;
	            this.match(CedarParser.COMMA);
	            this.state = 294;
	            this.expr();
	            this.state = 299;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	extFun() {
	    let localctx = new ExtFunContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, CedarParser.RULE_extFun);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        if(la_===1) {
	            this.state = 300;
	            this.path();
	            this.state = 301;
	            this.match(CedarParser.NAMESPACE);

	        }
	        this.state = 305;
	        this.match(CedarParser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	recInits() {
	    let localctx = new RecInitsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, CedarParser.RULE_recInits);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        _la = this._input.LA(1);
	        if(!(_la===38 || _la===43)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 308;
	        this.match(CedarParser.COLON);
	        this.state = 309;
	        this.expr();
	        this.state = 316;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35) {
	            this.state = 310;
	            this.match(CedarParser.COMMA);
	            this.state = 311;
	            _la = this._input.LA(1);
	            if(!(_la===38 || _la===43)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 312;
	            this.match(CedarParser.COLON);
	            this.state = 313;
	            this.expr();
	            this.state = 318;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CedarParser.EOF = antlr4.Token.EOF;
CedarParser.IF = 1;
CedarParser.THEN = 2;
CedarParser.ELSE = 3;
CedarParser.LIKE = 4;
CedarParser.IN = 5;
CedarParser.HAS = 6;
CedarParser.WHEN = 7;
CedarParser.UNLESS = 8;
CedarParser.PERMIT = 9;
CedarParser.FORBID = 10;
CedarParser.QPRINCIPAL = 11;
CedarParser.PRINCIPAL = 12;
CedarParser.ACTION = 13;
CedarParser.QRESOURCE = 14;
CedarParser.RESOURCE = 15;
CedarParser.CONTEXT = 16;
CedarParser.IS = 17;
CedarParser.NAMESPACE = 18;
CedarParser.DOUBLEEQUAL = 19;
CedarParser.DOUBLEPIPE = 20;
CedarParser.DOUBLEAMP = 21;
CedarParser.SEMICOLON = 22;
CedarParser.ASTERIX = 23;
CedarParser.PLUS = 24;
CedarParser.MINUS = 25;
CedarParser.EXCLAMATION = 26;
CedarParser.PERIOD = 27;
CedarParser.ATSYMB = 28;
CedarParser.OPENBRKT = 29;
CedarParser.CLOSEBRKT = 30;
CedarParser.OPENPAREN = 31;
CedarParser.CLOSEPAREN = 32;
CedarParser.OPENBRACE = 33;
CedarParser.CLOSEBRACE = 34;
CedarParser.COMMA = 35;
CedarParser.COLON = 36;
CedarParser.RELOP = 37;
CedarParser.STR = 38;
CedarParser.PAT = 39;
CedarParser.LITERAL = 40;
CedarParser.BOOL = 41;
CedarParser.INT = 42;
CedarParser.IDENT = 43;
CedarParser.VAR = 44;
CedarParser.WHITESPC = 45;
CedarParser.COMMENT = 46;

CedarParser.RULE_policyset = 0;
CedarParser.RULE_policy = 1;
CedarParser.RULE_effect = 2;
CedarParser.RULE_scope = 3;
CedarParser.RULE_principal = 4;
CedarParser.RULE_action = 5;
CedarParser.RULE_resource = 6;
CedarParser.RULE_condition = 7;
CedarParser.RULE_expr = 8;
CedarParser.RULE_or = 9;
CedarParser.RULE_and = 10;
CedarParser.RULE_relation = 11;
CedarParser.RULE_add = 12;
CedarParser.RULE_mult = 13;
CedarParser.RULE_unary = 14;
CedarParser.RULE_member = 15;
CedarParser.RULE_annotation = 16;
CedarParser.RULE_access = 17;
CedarParser.RULE_primary = 18;
CedarParser.RULE_path = 19;
CedarParser.RULE_entity = 20;
CedarParser.RULE_entList = 21;
CedarParser.RULE_exprList = 22;
CedarParser.RULE_extFun = 23;
CedarParser.RULE_recInits = 24;

class PolicysetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_policyset;
    }

	EOF() {
	    return this.getToken(CedarParser.EOF, 0);
	};

	policy = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PolicyContext);
	    } else {
	        return this.getTypedRuleContext(PolicyContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterPolicyset(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitPolicyset(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitPolicyset(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PolicyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_policy;
    }

	effect() {
	    return this.getTypedRuleContext(EffectContext,0);
	};

	OPENPAREN() {
	    return this.getToken(CedarParser.OPENPAREN, 0);
	};

	scope() {
	    return this.getTypedRuleContext(ScopeContext,0);
	};

	CLOSEPAREN() {
	    return this.getToken(CedarParser.CLOSEPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(CedarParser.SEMICOLON, 0);
	};

	annotation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AnnotationContext);
	    } else {
	        return this.getTypedRuleContext(AnnotationContext,i);
	    }
	};

	condition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterPolicy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitPolicy(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitPolicy(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EffectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_effect;
    }

	PERMIT() {
	    return this.getToken(CedarParser.PERMIT, 0);
	};

	FORBID() {
	    return this.getToken(CedarParser.FORBID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterEffect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitEffect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitEffect(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScopeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_scope;
    }

	principal() {
	    return this.getTypedRuleContext(PrincipalContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.COMMA);
	    } else {
	        return this.getToken(CedarParser.COMMA, i);
	    }
	};


	action() {
	    return this.getTypedRuleContext(ActionContext,0);
	};

	resource() {
	    return this.getTypedRuleContext(ResourceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterScope(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitScope(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitScope(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrincipalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_principal;
    }

	PRINCIPAL() {
	    return this.getToken(CedarParser.PRINCIPAL, 0);
	};

	DOUBLEEQUAL() {
	    return this.getToken(CedarParser.DOUBLEEQUAL, 0);
	};

	entity() {
	    return this.getTypedRuleContext(EntityContext,0);
	};

	QPRINCIPAL() {
	    return this.getToken(CedarParser.QPRINCIPAL, 0);
	};

	IS() {
	    return this.getToken(CedarParser.IS, 0);
	};

	path() {
	    return this.getTypedRuleContext(PathContext,0);
	};

	IN() {
	    return this.getToken(CedarParser.IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterPrincipal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitPrincipal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitPrincipal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_action;
    }

	ACTION() {
	    return this.getToken(CedarParser.ACTION, 0);
	};

	DOUBLEEQUAL() {
	    return this.getToken(CedarParser.DOUBLEEQUAL, 0);
	};

	entity() {
	    return this.getTypedRuleContext(EntityContext,0);
	};

	IN() {
	    return this.getToken(CedarParser.IN, 0);
	};

	OPENBRKT() {
	    return this.getToken(CedarParser.OPENBRKT, 0);
	};

	entList() {
	    return this.getTypedRuleContext(EntListContext,0);
	};

	CLOSEBRKT() {
	    return this.getToken(CedarParser.CLOSEBRKT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ResourceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_resource;
    }

	RESOURCE() {
	    return this.getToken(CedarParser.RESOURCE, 0);
	};

	DOUBLEEQUAL() {
	    return this.getToken(CedarParser.DOUBLEEQUAL, 0);
	};

	entity() {
	    return this.getTypedRuleContext(EntityContext,0);
	};

	QRESOURCE() {
	    return this.getToken(CedarParser.QRESOURCE, 0);
	};

	IS() {
	    return this.getToken(CedarParser.IS, 0);
	};

	path() {
	    return this.getTypedRuleContext(PathContext,0);
	};

	IN() {
	    return this.getToken(CedarParser.IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterResource(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitResource(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitResource(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_condition;
    }

	OPENBRACE() {
	    return this.getToken(CedarParser.OPENBRACE, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CLOSEBRACE() {
	    return this.getToken(CedarParser.CLOSEBRACE, 0);
	};

	WHEN() {
	    return this.getToken(CedarParser.WHEN, 0);
	};

	UNLESS() {
	    return this.getToken(CedarParser.UNLESS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_expr;
    }

	or() {
	    return this.getTypedRuleContext(OrContext,0);
	};

	IF() {
	    return this.getToken(CedarParser.IF, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	THEN() {
	    return this.getToken(CedarParser.THEN, 0);
	};

	ELSE() {
	    return this.getToken(CedarParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_or;
    }

	and = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AndContext);
	    } else {
	        return this.getTypedRuleContext(AndContext,i);
	    }
	};

	DOUBLEPIPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.DOUBLEPIPE);
	    } else {
	        return this.getToken(CedarParser.DOUBLEPIPE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitOr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_and;
    }

	relation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationContext);
	    } else {
	        return this.getTypedRuleContext(RelationContext,i);
	    }
	};

	DOUBLEAMP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.DOUBLEAMP);
	    } else {
	        return this.getToken(CedarParser.DOUBLEAMP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitAnd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RelationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_relation;
    }

	add = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddContext);
	    } else {
	        return this.getTypedRuleContext(AddContext,i);
	    }
	};

	RELOP() {
	    return this.getToken(CedarParser.RELOP, 0);
	};

	HAS() {
	    return this.getToken(CedarParser.HAS, 0);
	};

	IDENT() {
	    return this.getToken(CedarParser.IDENT, 0);
	};

	STR() {
	    return this.getToken(CedarParser.STR, 0);
	};

	LIKE() {
	    return this.getToken(CedarParser.LIKE, 0);
	};

	PAT() {
	    return this.getToken(CedarParser.PAT, 0);
	};

	IS() {
	    return this.getToken(CedarParser.IS, 0);
	};

	path() {
	    return this.getTypedRuleContext(PathContext,0);
	};

	IN() {
	    return this.getToken(CedarParser.IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterRelation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitRelation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitRelation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AddContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_add;
    }

	mult = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultContext);
	    } else {
	        return this.getTypedRuleContext(MultContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.PLUS);
	    } else {
	        return this.getToken(CedarParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.MINUS);
	    } else {
	        return this.getToken(CedarParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterAdd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitAdd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitAdd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_mult;
    }

	unary = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnaryContext);
	    } else {
	        return this.getTypedRuleContext(UnaryContext,i);
	    }
	};

	ASTERIX = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.ASTERIX);
	    } else {
	        return this.getToken(CedarParser.ASTERIX, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterMult(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitMult(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitMult(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_unary;
    }

	member() {
	    return this.getTypedRuleContext(MemberContext,0);
	};

	EXCLAMATION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.EXCLAMATION);
	    } else {
	        return this.getToken(CedarParser.EXCLAMATION, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.MINUS);
	    } else {
	        return this.getToken(CedarParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterUnary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitUnary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitUnary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_member;
    }

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	access = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccessContext);
	    } else {
	        return this.getTypedRuleContext(AccessContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterMember(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitMember(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitMember(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AnnotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_annotation;
    }

	ATSYMB() {
	    return this.getToken(CedarParser.ATSYMB, 0);
	};

	IDENT() {
	    return this.getToken(CedarParser.IDENT, 0);
	};

	OPENPAREN() {
	    return this.getToken(CedarParser.OPENPAREN, 0);
	};

	STR() {
	    return this.getToken(CedarParser.STR, 0);
	};

	CLOSEPAREN() {
	    return this.getToken(CedarParser.CLOSEPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterAnnotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitAnnotation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitAnnotation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_access;
    }

	PERIOD() {
	    return this.getToken(CedarParser.PERIOD, 0);
	};

	IDENT() {
	    return this.getToken(CedarParser.IDENT, 0);
	};

	OPENPAREN() {
	    return this.getToken(CedarParser.OPENPAREN, 0);
	};

	CLOSEPAREN() {
	    return this.getToken(CedarParser.CLOSEPAREN, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	OPENBRKT() {
	    return this.getToken(CedarParser.OPENBRKT, 0);
	};

	STR() {
	    return this.getToken(CedarParser.STR, 0);
	};

	CLOSEBRKT() {
	    return this.getToken(CedarParser.CLOSEBRKT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitAccess(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitAccess(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_primary;
    }

	LITERAL() {
	    return this.getToken(CedarParser.LITERAL, 0);
	};

	VAR() {
	    return this.getToken(CedarParser.VAR, 0);
	};

	entity() {
	    return this.getTypedRuleContext(EntityContext,0);
	};

	extFun() {
	    return this.getTypedRuleContext(ExtFunContext,0);
	};

	OPENPAREN() {
	    return this.getToken(CedarParser.OPENPAREN, 0);
	};

	CLOSEPAREN() {
	    return this.getToken(CedarParser.CLOSEPAREN, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	OPENBRKT() {
	    return this.getToken(CedarParser.OPENBRKT, 0);
	};

	CLOSEBRKT() {
	    return this.getToken(CedarParser.CLOSEBRKT, 0);
	};

	OPENBRACE() {
	    return this.getToken(CedarParser.OPENBRACE, 0);
	};

	CLOSEBRACE() {
	    return this.getToken(CedarParser.CLOSEBRACE, 0);
	};

	recInits() {
	    return this.getTypedRuleContext(RecInitsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_path;
    }

	IDENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.IDENT);
	    } else {
	        return this.getToken(CedarParser.IDENT, i);
	    }
	};


	NAMESPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.NAMESPACE);
	    } else {
	        return this.getToken(CedarParser.NAMESPACE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterPath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitPath(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitPath(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EntityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_entity;
    }

	path() {
	    return this.getTypedRuleContext(PathContext,0);
	};

	NAMESPACE() {
	    return this.getToken(CedarParser.NAMESPACE, 0);
	};

	STR() {
	    return this.getToken(CedarParser.STR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterEntity(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitEntity(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitEntity(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EntListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_entList;
    }

	entity = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EntityContext);
	    } else {
	        return this.getTypedRuleContext(EntityContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.COMMA);
	    } else {
	        return this.getToken(CedarParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterEntList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitEntList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitEntList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_exprList;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.COMMA);
	    } else {
	        return this.getToken(CedarParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterExprList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitExprList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitExprList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExtFunContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_extFun;
    }

	IDENT() {
	    return this.getToken(CedarParser.IDENT, 0);
	};

	path() {
	    return this.getTypedRuleContext(PathContext,0);
	};

	NAMESPACE() {
	    return this.getToken(CedarParser.NAMESPACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterExtFun(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitExtFun(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitExtFun(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RecInitsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CedarParser.RULE_recInits;
    }

	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.COLON);
	    } else {
	        return this.getToken(CedarParser.COLON, i);
	    }
	};


	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	IDENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.IDENT);
	    } else {
	        return this.getToken(CedarParser.IDENT, i);
	    }
	};


	STR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.STR);
	    } else {
	        return this.getToken(CedarParser.STR, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CedarParser.COMMA);
	    } else {
	        return this.getToken(CedarParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.enterRecInits(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CedarParserListener ) {
	        listener.exitRecInits(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CedarParserVisitor ) {
	        return visitor.visitRecInits(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CedarParser.PolicysetContext = PolicysetContext; 
CedarParser.PolicyContext = PolicyContext; 
CedarParser.EffectContext = EffectContext; 
CedarParser.ScopeContext = ScopeContext; 
CedarParser.PrincipalContext = PrincipalContext; 
CedarParser.ActionContext = ActionContext; 
CedarParser.ResourceContext = ResourceContext; 
CedarParser.ConditionContext = ConditionContext; 
CedarParser.ExprContext = ExprContext; 
CedarParser.OrContext = OrContext; 
CedarParser.AndContext = AndContext; 
CedarParser.RelationContext = RelationContext; 
CedarParser.AddContext = AddContext; 
CedarParser.MultContext = MultContext; 
CedarParser.UnaryContext = UnaryContext; 
CedarParser.MemberContext = MemberContext; 
CedarParser.AnnotationContext = AnnotationContext; 
CedarParser.AccessContext = AccessContext; 
CedarParser.PrimaryContext = PrimaryContext; 
CedarParser.PathContext = PathContext; 
CedarParser.EntityContext = EntityContext; 
CedarParser.EntListContext = EntListContext; 
CedarParser.ExprListContext = ExprListContext; 
CedarParser.ExtFunContext = ExtFunContext; 
CedarParser.RecInitsContext = RecInitsContext; 
