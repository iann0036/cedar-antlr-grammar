// Generated from /Users/ian/cedar-antlr-grammar/.antlr/grammars/CedarParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CedarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		IF=1, THEN=2, ELSE=3, LIKE=4, IN=5, HAS=6, WHEN=7, UNLESS=8, PERMIT=9, 
		FORBID=10, QPRINCIPAL=11, PRINCIPAL=12, ACTION=13, QRESOURCE=14, RESOURCE=15, 
		CONTEXT=16, IS=17, NAMESPACE=18, DOUBLEEQUAL=19, DOUBLEPIPE=20, DOUBLEAMP=21, 
		SEMICOLON=22, ASTERIX=23, PLUS=24, MINUS=25, EXCLAMATION=26, PERIOD=27, 
		ATSYMB=28, OPENBRKT=29, CLOSEBRKT=30, OPENPAREN=31, CLOSEPAREN=32, OPENBRACE=33, 
		CLOSEBRACE=34, COMMA=35, COLON=36, RELOP=37, STR=38, PAT=39, LITERAL=40, 
		BOOL=41, INT=42, IDENT=43, VAR=44, WHITESPC=45, COMMENT=46;
	public static final int
		RULE_policyset = 0, RULE_policy = 1, RULE_effect = 2, RULE_scope = 3, 
		RULE_principal = 4, RULE_action = 5, RULE_resource = 6, RULE_condition = 7, 
		RULE_expr = 8, RULE_or = 9, RULE_and = 10, RULE_relation = 11, RULE_add = 12, 
		RULE_mult = 13, RULE_unary = 14, RULE_member = 15, RULE_annotation = 16, 
		RULE_access = 17, RULE_primary = 18, RULE_path = 19, RULE_entity = 20, 
		RULE_entList = 21, RULE_exprList = 22, RULE_extFun = 23, RULE_recInits = 24;
	private static String[] makeRuleNames() {
		return new String[] {
			"policyset", "policy", "effect", "scope", "principal", "action", "resource", 
			"condition", "expr", "or", "and", "relation", "add", "mult", "unary", 
			"member", "annotation", "access", "primary", "path", "entity", "entList", 
			"exprList", "extFun", "recInits"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'if'", "'then'", "'else'", "'like'", "'in'", "'has'", "'when'", 
			"'unless'", "'permit'", "'forbid'", "'?principal'", "'principal'", "'action'", 
			"'?resource'", "'resource'", "'context'", "'is'", "'::'", "'=='", "'||'", 
			"'&&'", "';'", "'*'", "'+'", "'-'", "'!'", "'.'", "'@'", "'['", "']'", 
			"'('", "')'", "'{'", "'}'", "','", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "IF", "THEN", "ELSE", "LIKE", "IN", "HAS", "WHEN", "UNLESS", "PERMIT", 
			"FORBID", "QPRINCIPAL", "PRINCIPAL", "ACTION", "QRESOURCE", "RESOURCE", 
			"CONTEXT", "IS", "NAMESPACE", "DOUBLEEQUAL", "DOUBLEPIPE", "DOUBLEAMP", 
			"SEMICOLON", "ASTERIX", "PLUS", "MINUS", "EXCLAMATION", "PERIOD", "ATSYMB", 
			"OPENBRKT", "CLOSEBRKT", "OPENPAREN", "CLOSEPAREN", "OPENBRACE", "CLOSEBRACE", 
			"COMMA", "COLON", "RELOP", "STR", "PAT", "LITERAL", "BOOL", "INT", "IDENT", 
			"VAR", "WHITESPC", "COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "CedarParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CedarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PolicysetContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(CedarParser.EOF, 0); }
		public List<PolicyContext> policy() {
			return getRuleContexts(PolicyContext.class);
		}
		public PolicyContext policy(int i) {
			return getRuleContext(PolicyContext.class,i);
		}
		public PolicysetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_policyset; }
	}

	public final PolicysetContext policyset() throws RecognitionException {
		PolicysetContext _localctx = new PolicysetContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_policyset);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(50);
				policy();
				}
				}
				setState(53); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 268436992L) != 0) );
			setState(55);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PolicyContext extends ParserRuleContext {
		public EffectContext effect() {
			return getRuleContext(EffectContext.class,0);
		}
		public TerminalNode OPENPAREN() { return getToken(CedarParser.OPENPAREN, 0); }
		public ScopeContext scope() {
			return getRuleContext(ScopeContext.class,0);
		}
		public TerminalNode CLOSEPAREN() { return getToken(CedarParser.CLOSEPAREN, 0); }
		public TerminalNode SEMICOLON() { return getToken(CedarParser.SEMICOLON, 0); }
		public List<AnnotationContext> annotation() {
			return getRuleContexts(AnnotationContext.class);
		}
		public AnnotationContext annotation(int i) {
			return getRuleContext(AnnotationContext.class,i);
		}
		public List<ConditionContext> condition() {
			return getRuleContexts(ConditionContext.class);
		}
		public ConditionContext condition(int i) {
			return getRuleContext(ConditionContext.class,i);
		}
		public PolicyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_policy; }
	}

	public final PolicyContext policy() throws RecognitionException {
		PolicyContext _localctx = new PolicyContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_policy);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ATSYMB) {
				{
				{
				setState(57);
				annotation();
				}
				}
				setState(62);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(63);
			effect();
			setState(64);
			match(OPENPAREN);
			setState(65);
			scope();
			setState(66);
			match(CLOSEPAREN);
			setState(70);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WHEN || _la==UNLESS) {
				{
				{
				setState(67);
				condition();
				}
				}
				setState(72);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(73);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EffectContext extends ParserRuleContext {
		public TerminalNode PERMIT() { return getToken(CedarParser.PERMIT, 0); }
		public TerminalNode FORBID() { return getToken(CedarParser.FORBID, 0); }
		public EffectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_effect; }
	}

	public final EffectContext effect() throws RecognitionException {
		EffectContext _localctx = new EffectContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_effect);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			_la = _input.LA(1);
			if ( !(_la==PERMIT || _la==FORBID) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ScopeContext extends ParserRuleContext {
		public PrincipalContext principal() {
			return getRuleContext(PrincipalContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(CedarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CedarParser.COMMA, i);
		}
		public ActionContext action() {
			return getRuleContext(ActionContext.class,0);
		}
		public ResourceContext resource() {
			return getRuleContext(ResourceContext.class,0);
		}
		public ScopeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scope; }
	}

	public final ScopeContext scope() throws RecognitionException {
		ScopeContext _localctx = new ScopeContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_scope);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			principal();
			setState(78);
			match(COMMA);
			setState(79);
			action();
			setState(80);
			match(COMMA);
			setState(81);
			resource();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrincipalContext extends ParserRuleContext {
		public TerminalNode PRINCIPAL() { return getToken(CedarParser.PRINCIPAL, 0); }
		public TerminalNode DOUBLEEQUAL() { return getToken(CedarParser.DOUBLEEQUAL, 0); }
		public EntityContext entity() {
			return getRuleContext(EntityContext.class,0);
		}
		public TerminalNode QPRINCIPAL() { return getToken(CedarParser.QPRINCIPAL, 0); }
		public TerminalNode IS() { return getToken(CedarParser.IS, 0); }
		public PathContext path() {
			return getRuleContext(PathContext.class,0);
		}
		public TerminalNode IN() { return getToken(CedarParser.IN, 0); }
		public PrincipalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_principal; }
	}

	public final PrincipalContext principal() throws RecognitionException {
		PrincipalContext _localctx = new PrincipalContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_principal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			match(PRINCIPAL);
			setState(100);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IN:
			case IS:
			case COMMA:
				{
				{
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IS) {
					{
					setState(84);
					match(IS);
					setState(85);
					path();
					}
				}

				setState(93);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IN) {
					{
					setState(88);
					match(IN);
					setState(91);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case IDENT:
						{
						setState(89);
						entity();
						}
						break;
					case QPRINCIPAL:
						{
						setState(90);
						match(QPRINCIPAL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}

				}
				}
				break;
			case DOUBLEEQUAL:
				{
				{
				setState(95);
				match(DOUBLEEQUAL);
				setState(98);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case IDENT:
					{
					setState(96);
					entity();
					}
					break;
				case QPRINCIPAL:
					{
					setState(97);
					match(QPRINCIPAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ActionContext extends ParserRuleContext {
		public TerminalNode ACTION() { return getToken(CedarParser.ACTION, 0); }
		public TerminalNode DOUBLEEQUAL() { return getToken(CedarParser.DOUBLEEQUAL, 0); }
		public EntityContext entity() {
			return getRuleContext(EntityContext.class,0);
		}
		public TerminalNode IN() { return getToken(CedarParser.IN, 0); }
		public TerminalNode OPENBRKT() { return getToken(CedarParser.OPENBRKT, 0); }
		public EntListContext entList() {
			return getRuleContext(EntListContext.class,0);
		}
		public TerminalNode CLOSEBRKT() { return getToken(CedarParser.CLOSEBRKT, 0); }
		public ActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_action; }
	}

	public final ActionContext action() throws RecognitionException {
		ActionContext _localctx = new ActionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_action);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(102);
			match(ACTION);
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IN || _la==DOUBLEEQUAL) {
				{
				setState(113);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case DOUBLEEQUAL:
					{
					setState(103);
					match(DOUBLEEQUAL);
					setState(104);
					entity();
					}
					break;
				case IN:
					{
					setState(105);
					match(IN);
					setState(111);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case OPENBRKT:
						{
						setState(106);
						match(OPENBRKT);
						setState(107);
						entList();
						setState(108);
						match(CLOSEBRKT);
						}
						break;
					case IDENT:
						{
						setState(110);
						entity();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ResourceContext extends ParserRuleContext {
		public TerminalNode RESOURCE() { return getToken(CedarParser.RESOURCE, 0); }
		public TerminalNode DOUBLEEQUAL() { return getToken(CedarParser.DOUBLEEQUAL, 0); }
		public EntityContext entity() {
			return getRuleContext(EntityContext.class,0);
		}
		public TerminalNode QRESOURCE() { return getToken(CedarParser.QRESOURCE, 0); }
		public TerminalNode IS() { return getToken(CedarParser.IS, 0); }
		public PathContext path() {
			return getRuleContext(PathContext.class,0);
		}
		public TerminalNode IN() { return getToken(CedarParser.IN, 0); }
		public ResourceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resource; }
	}

	public final ResourceContext resource() throws RecognitionException {
		ResourceContext _localctx = new ResourceContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_resource);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			match(RESOURCE);
			setState(134);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IN:
			case IS:
			case CLOSEPAREN:
				{
				{
				setState(120);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IS) {
					{
					setState(118);
					match(IS);
					setState(119);
					path();
					}
				}

				setState(127);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IN) {
					{
					setState(122);
					match(IN);
					setState(125);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case IDENT:
						{
						setState(123);
						entity();
						}
						break;
					case QRESOURCE:
						{
						setState(124);
						match(QRESOURCE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}

				}
				}
				break;
			case DOUBLEEQUAL:
				{
				{
				setState(129);
				match(DOUBLEEQUAL);
				setState(132);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case IDENT:
					{
					setState(130);
					entity();
					}
					break;
				case QRESOURCE:
					{
					setState(131);
					match(QRESOURCE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConditionContext extends ParserRuleContext {
		public TerminalNode OPENBRACE() { return getToken(CedarParser.OPENBRACE, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode CLOSEBRACE() { return getToken(CedarParser.CLOSEBRACE, 0); }
		public TerminalNode WHEN() { return getToken(CedarParser.WHEN, 0); }
		public TerminalNode UNLESS() { return getToken(CedarParser.UNLESS, 0); }
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_condition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			_la = _input.LA(1);
			if ( !(_la==WHEN || _la==UNLESS) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(137);
			match(OPENBRACE);
			setState(138);
			expr();
			setState(139);
			match(CLOSEBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public OrContext or() {
			return getRuleContext(OrContext.class,0);
		}
		public TerminalNode IF() { return getToken(CedarParser.IF, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode THEN() { return getToken(CedarParser.THEN, 0); }
		public TerminalNode ELSE() { return getToken(CedarParser.ELSE, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_expr);
		try {
			setState(149);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MINUS:
			case EXCLAMATION:
			case OPENBRKT:
			case OPENPAREN:
			case OPENBRACE:
			case LITERAL:
			case IDENT:
			case VAR:
				enterOuterAlt(_localctx, 1);
				{
				setState(141);
				or();
				}
				break;
			case IF:
				enterOuterAlt(_localctx, 2);
				{
				setState(142);
				match(IF);
				setState(143);
				expr();
				setState(144);
				match(THEN);
				setState(145);
				expr();
				setState(146);
				match(ELSE);
				setState(147);
				expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OrContext extends ParserRuleContext {
		public List<AndContext> and() {
			return getRuleContexts(AndContext.class);
		}
		public AndContext and(int i) {
			return getRuleContext(AndContext.class,i);
		}
		public List<TerminalNode> DOUBLEPIPE() { return getTokens(CedarParser.DOUBLEPIPE); }
		public TerminalNode DOUBLEPIPE(int i) {
			return getToken(CedarParser.DOUBLEPIPE, i);
		}
		public OrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_or; }
	}

	public final OrContext or() throws RecognitionException {
		OrContext _localctx = new OrContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_or);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			and();
			setState(156);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DOUBLEPIPE) {
				{
				{
				setState(152);
				match(DOUBLEPIPE);
				setState(153);
				and();
				}
				}
				setState(158);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AndContext extends ParserRuleContext {
		public List<RelationContext> relation() {
			return getRuleContexts(RelationContext.class);
		}
		public RelationContext relation(int i) {
			return getRuleContext(RelationContext.class,i);
		}
		public List<TerminalNode> DOUBLEAMP() { return getTokens(CedarParser.DOUBLEAMP); }
		public TerminalNode DOUBLEAMP(int i) {
			return getToken(CedarParser.DOUBLEAMP, i);
		}
		public AndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_and; }
	}

	public final AndContext and() throws RecognitionException {
		AndContext _localctx = new AndContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_and);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			relation();
			setState(164);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DOUBLEAMP) {
				{
				{
				setState(160);
				match(DOUBLEAMP);
				setState(161);
				relation();
				}
				}
				setState(166);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RelationContext extends ParserRuleContext {
		public List<AddContext> add() {
			return getRuleContexts(AddContext.class);
		}
		public AddContext add(int i) {
			return getRuleContext(AddContext.class,i);
		}
		public TerminalNode RELOP() { return getToken(CedarParser.RELOP, 0); }
		public TerminalNode HAS() { return getToken(CedarParser.HAS, 0); }
		public TerminalNode IDENT() { return getToken(CedarParser.IDENT, 0); }
		public TerminalNode STR() { return getToken(CedarParser.STR, 0); }
		public TerminalNode LIKE() { return getToken(CedarParser.LIKE, 0); }
		public TerminalNode PAT() { return getToken(CedarParser.PAT, 0); }
		public TerminalNode IS() { return getToken(CedarParser.IS, 0); }
		public PathContext path() {
			return getRuleContext(PathContext.class,0);
		}
		public TerminalNode IN() { return getToken(CedarParser.IN, 0); }
		public RelationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relation; }
	}

	public final RelationContext relation() throws RecognitionException {
		RelationContext _localctx = new RelationContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_relation);
		int _la;
		try {
			setState(187);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(167);
				add();
				setState(170);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==RELOP) {
					{
					setState(168);
					match(RELOP);
					setState(169);
					add();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(172);
				add();
				setState(173);
				match(HAS);
				setState(174);
				_la = _input.LA(1);
				if ( !(_la==STR || _la==IDENT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(176);
				add();
				setState(177);
				match(LIKE);
				setState(178);
				match(PAT);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(180);
				add();
				setState(181);
				match(IS);
				setState(182);
				path();
				setState(185);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IN) {
					{
					setState(183);
					match(IN);
					setState(184);
					add();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AddContext extends ParserRuleContext {
		public List<MultContext> mult() {
			return getRuleContexts(MultContext.class);
		}
		public MultContext mult(int i) {
			return getRuleContext(MultContext.class,i);
		}
		public List<TerminalNode> PLUS() { return getTokens(CedarParser.PLUS); }
		public TerminalNode PLUS(int i) {
			return getToken(CedarParser.PLUS, i);
		}
		public List<TerminalNode> MINUS() { return getTokens(CedarParser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(CedarParser.MINUS, i);
		}
		public AddContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_add; }
	}

	public final AddContext add() throws RecognitionException {
		AddContext _localctx = new AddContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_add);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(189);
			mult();
			setState(194);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PLUS || _la==MINUS) {
				{
				{
				setState(190);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(191);
				mult();
				}
				}
				setState(196);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MultContext extends ParserRuleContext {
		public List<UnaryContext> unary() {
			return getRuleContexts(UnaryContext.class);
		}
		public UnaryContext unary(int i) {
			return getRuleContext(UnaryContext.class,i);
		}
		public List<TerminalNode> ASTERIX() { return getTokens(CedarParser.ASTERIX); }
		public TerminalNode ASTERIX(int i) {
			return getToken(CedarParser.ASTERIX, i);
		}
		public MultContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mult; }
	}

	public final MultContext mult() throws RecognitionException {
		MultContext _localctx = new MultContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_mult);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			unary();
			setState(202);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ASTERIX) {
				{
				{
				setState(198);
				match(ASTERIX);
				setState(199);
				unary();
				}
				}
				setState(204);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UnaryContext extends ParserRuleContext {
		public MemberContext member() {
			return getRuleContext(MemberContext.class,0);
		}
		public List<TerminalNode> EXCLAMATION() { return getTokens(CedarParser.EXCLAMATION); }
		public TerminalNode EXCLAMATION(int i) {
			return getToken(CedarParser.EXCLAMATION, i);
		}
		public List<TerminalNode> MINUS() { return getTokens(CedarParser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(CedarParser.MINUS, i);
		}
		public UnaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unary; }
	}

	public final UnaryContext unary() throws RecognitionException {
		UnaryContext _localctx = new UnaryContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_unary);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				{
				setState(205);
				_la = _input.LA(1);
				if ( !(_la==MINUS || _la==EXCLAMATION) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			}
			setState(209);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				{
				setState(208);
				_la = _input.LA(1);
				if ( !(_la==MINUS || _la==EXCLAMATION) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			}
			setState(212);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				{
				setState(211);
				_la = _input.LA(1);
				if ( !(_la==MINUS || _la==EXCLAMATION) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			}
			setState(215);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MINUS || _la==EXCLAMATION) {
				{
				setState(214);
				_la = _input.LA(1);
				if ( !(_la==MINUS || _la==EXCLAMATION) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(217);
			member();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MemberContext extends ParserRuleContext {
		public PrimaryContext primary() {
			return getRuleContext(PrimaryContext.class,0);
		}
		public List<AccessContext> access() {
			return getRuleContexts(AccessContext.class);
		}
		public AccessContext access(int i) {
			return getRuleContext(AccessContext.class,i);
		}
		public MemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_member; }
	}

	public final MemberContext member() throws RecognitionException {
		MemberContext _localctx = new MemberContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_member);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			primary();
			setState(223);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PERIOD || _la==OPENBRKT) {
				{
				{
				setState(220);
				access();
				}
				}
				setState(225);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AnnotationContext extends ParserRuleContext {
		public TerminalNode ATSYMB() { return getToken(CedarParser.ATSYMB, 0); }
		public TerminalNode IDENT() { return getToken(CedarParser.IDENT, 0); }
		public TerminalNode OPENPAREN() { return getToken(CedarParser.OPENPAREN, 0); }
		public TerminalNode STR() { return getToken(CedarParser.STR, 0); }
		public TerminalNode CLOSEPAREN() { return getToken(CedarParser.CLOSEPAREN, 0); }
		public AnnotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation; }
	}

	public final AnnotationContext annotation() throws RecognitionException {
		AnnotationContext _localctx = new AnnotationContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_annotation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(226);
			match(ATSYMB);
			setState(227);
			match(IDENT);
			setState(228);
			match(OPENPAREN);
			setState(229);
			match(STR);
			setState(230);
			match(CLOSEPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AccessContext extends ParserRuleContext {
		public TerminalNode PERIOD() { return getToken(CedarParser.PERIOD, 0); }
		public TerminalNode IDENT() { return getToken(CedarParser.IDENT, 0); }
		public TerminalNode OPENPAREN() { return getToken(CedarParser.OPENPAREN, 0); }
		public TerminalNode CLOSEPAREN() { return getToken(CedarParser.CLOSEPAREN, 0); }
		public ExprListContext exprList() {
			return getRuleContext(ExprListContext.class,0);
		}
		public TerminalNode OPENBRKT() { return getToken(CedarParser.OPENBRKT, 0); }
		public TerminalNode STR() { return getToken(CedarParser.STR, 0); }
		public TerminalNode CLOSEBRKT() { return getToken(CedarParser.CLOSEBRKT, 0); }
		public AccessContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_access; }
	}

	public final AccessContext access() throws RecognitionException {
		AccessContext _localctx = new AccessContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_access);
		int _la;
		try {
			setState(244);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PERIOD:
				enterOuterAlt(_localctx, 1);
				{
				setState(232);
				match(PERIOD);
				setState(233);
				match(IDENT);
				setState(239);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OPENPAREN) {
					{
					setState(234);
					match(OPENPAREN);
					setState(236);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 27499165646850L) != 0)) {
						{
						setState(235);
						exprList();
						}
					}

					setState(238);
					match(CLOSEPAREN);
					}
				}

				}
				break;
			case OPENBRKT:
				enterOuterAlt(_localctx, 2);
				{
				setState(241);
				match(OPENBRKT);
				setState(242);
				match(STR);
				setState(243);
				match(CLOSEBRKT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrimaryContext extends ParserRuleContext {
		public TerminalNode LITERAL() { return getToken(CedarParser.LITERAL, 0); }
		public TerminalNode VAR() { return getToken(CedarParser.VAR, 0); }
		public EntityContext entity() {
			return getRuleContext(EntityContext.class,0);
		}
		public ExtFunContext extFun() {
			return getRuleContext(ExtFunContext.class,0);
		}
		public TerminalNode OPENPAREN() { return getToken(CedarParser.OPENPAREN, 0); }
		public TerminalNode CLOSEPAREN() { return getToken(CedarParser.CLOSEPAREN, 0); }
		public ExprListContext exprList() {
			return getRuleContext(ExprListContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode OPENBRKT() { return getToken(CedarParser.OPENBRKT, 0); }
		public TerminalNode CLOSEBRKT() { return getToken(CedarParser.CLOSEBRKT, 0); }
		public TerminalNode OPENBRACE() { return getToken(CedarParser.OPENBRACE, 0); }
		public TerminalNode CLOSEBRACE() { return getToken(CedarParser.CLOSEBRACE, 0); }
		public RecInitsContext recInits() {
			return getRuleContext(RecInitsContext.class,0);
		}
		public PrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primary; }
	}

	public final PrimaryContext primary() throws RecognitionException {
		PrimaryContext _localctx = new PrimaryContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_primary);
		int _la;
		try {
			setState(270);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(246);
				match(LITERAL);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(247);
				match(VAR);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(248);
				entity();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(249);
				extFun();
				setState(250);
				match(OPENPAREN);
				setState(252);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 27499165646850L) != 0)) {
					{
					setState(251);
					exprList();
					}
				}

				setState(254);
				match(CLOSEPAREN);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(256);
				match(OPENPAREN);
				setState(257);
				expr();
				setState(258);
				match(CLOSEPAREN);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(260);
				match(OPENBRKT);
				setState(262);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 27499165646850L) != 0)) {
					{
					setState(261);
					exprList();
					}
				}

				setState(264);
				match(CLOSEBRKT);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(265);
				match(OPENBRACE);
				setState(267);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==STR || _la==IDENT) {
					{
					setState(266);
					recInits();
					}
				}

				setState(269);
				match(CLOSEBRACE);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PathContext extends ParserRuleContext {
		public List<TerminalNode> IDENT() { return getTokens(CedarParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(CedarParser.IDENT, i);
		}
		public List<TerminalNode> NAMESPACE() { return getTokens(CedarParser.NAMESPACE); }
		public TerminalNode NAMESPACE(int i) {
			return getToken(CedarParser.NAMESPACE, i);
		}
		public PathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_path; }
	}

	public final PathContext path() throws RecognitionException {
		PathContext _localctx = new PathContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_path);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
			match(IDENT);
			setState(277);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,36,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(273);
					match(NAMESPACE);
					setState(274);
					match(IDENT);
					}
					} 
				}
				setState(279);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,36,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EntityContext extends ParserRuleContext {
		public PathContext path() {
			return getRuleContext(PathContext.class,0);
		}
		public TerminalNode NAMESPACE() { return getToken(CedarParser.NAMESPACE, 0); }
		public TerminalNode STR() { return getToken(CedarParser.STR, 0); }
		public EntityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_entity; }
	}

	public final EntityContext entity() throws RecognitionException {
		EntityContext _localctx = new EntityContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_entity);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(280);
			path();
			setState(281);
			match(NAMESPACE);
			setState(282);
			match(STR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EntListContext extends ParserRuleContext {
		public List<EntityContext> entity() {
			return getRuleContexts(EntityContext.class);
		}
		public EntityContext entity(int i) {
			return getRuleContext(EntityContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CedarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CedarParser.COMMA, i);
		}
		public EntListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_entList; }
	}

	public final EntListContext entList() throws RecognitionException {
		EntListContext _localctx = new EntListContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_entList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(284);
			entity();
			setState(289);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(285);
				match(COMMA);
				setState(286);
				entity();
				}
				}
				setState(291);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprListContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CedarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CedarParser.COMMA, i);
		}
		public ExprListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exprList; }
	}

	public final ExprListContext exprList() throws RecognitionException {
		ExprListContext _localctx = new ExprListContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_exprList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(292);
			expr();
			setState(297);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(293);
				match(COMMA);
				setState(294);
				expr();
				}
				}
				setState(299);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExtFunContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(CedarParser.IDENT, 0); }
		public PathContext path() {
			return getRuleContext(PathContext.class,0);
		}
		public TerminalNode NAMESPACE() { return getToken(CedarParser.NAMESPACE, 0); }
		public ExtFunContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_extFun; }
	}

	public final ExtFunContext extFun() throws RecognitionException {
		ExtFunContext _localctx = new ExtFunContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_extFun);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				{
				setState(300);
				path();
				setState(301);
				match(NAMESPACE);
				}
				break;
			}
			setState(305);
			match(IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RecInitsContext extends ParserRuleContext {
		public List<TerminalNode> COLON() { return getTokens(CedarParser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(CedarParser.COLON, i);
		}
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> IDENT() { return getTokens(CedarParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(CedarParser.IDENT, i);
		}
		public List<TerminalNode> STR() { return getTokens(CedarParser.STR); }
		public TerminalNode STR(int i) {
			return getToken(CedarParser.STR, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CedarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CedarParser.COMMA, i);
		}
		public RecInitsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_recInits; }
	}

	public final RecInitsContext recInits() throws RecognitionException {
		RecInitsContext _localctx = new RecInitsContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_recInits);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(307);
			_la = _input.LA(1);
			if ( !(_la==STR || _la==IDENT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(308);
			match(COLON);
			setState(309);
			expr();
			setState(316);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(310);
				match(COMMA);
				setState(311);
				_la = _input.LA(1);
				if ( !(_la==STR || _la==IDENT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(312);
				match(COLON);
				setState(313);
				expr();
				}
				}
				setState(318);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001.\u0140\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0001\u0000\u0004\u00004\b\u0000\u000b\u0000\f\u00005\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0005\u0001;\b\u0001\n\u0001\f\u0001>\t\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001E\b"+
		"\u0001\n\u0001\f\u0001H\t\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004W\b\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0003\u0004\\\b\u0004\u0003\u0004^\b\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004c\b\u0004\u0003\u0004"+
		"e\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005p\b\u0005"+
		"\u0003\u0005r\b\u0005\u0003\u0005t\b\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0003\u0006y\b\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003"+
		"\u0006~\b\u0006\u0003\u0006\u0080\b\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0003\u0006\u0085\b\u0006\u0003\u0006\u0087\b\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0003\b\u0096\b\b\u0001\t\u0001"+
		"\t\u0001\t\u0005\t\u009b\b\t\n\t\f\t\u009e\t\t\u0001\n\u0001\n\u0001\n"+
		"\u0005\n\u00a3\b\n\n\n\f\n\u00a6\t\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0003\u000b\u00ab\b\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u00ba\b\u000b\u0003\u000b"+
		"\u00bc\b\u000b\u0001\f\u0001\f\u0001\f\u0005\f\u00c1\b\f\n\f\f\f\u00c4"+
		"\t\f\u0001\r\u0001\r\u0001\r\u0005\r\u00c9\b\r\n\r\f\r\u00cc\t\r\u0001"+
		"\u000e\u0003\u000e\u00cf\b\u000e\u0001\u000e\u0003\u000e\u00d2\b\u000e"+
		"\u0001\u000e\u0003\u000e\u00d5\b\u000e\u0001\u000e\u0003\u000e\u00d8\b"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0005\u000f\u00de"+
		"\b\u000f\n\u000f\f\u000f\u00e1\t\u000f\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0003\u0011\u00ed\b\u0011\u0001\u0011\u0003\u0011\u00f0\b"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0003\u0011\u00f5\b\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0003"+
		"\u0012\u00fd\b\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u0107\b\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u010c\b\u0012\u0001\u0012\u0003"+
		"\u0012\u010f\b\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0005\u0013\u0114"+
		"\b\u0013\n\u0013\f\u0013\u0117\t\u0013\u0001\u0014\u0001\u0014\u0001\u0014"+
		"\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0005\u0015\u0120\b\u0015"+
		"\n\u0015\f\u0015\u0123\t\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0005"+
		"\u0016\u0128\b\u0016\n\u0016\f\u0016\u012b\t\u0016\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0003\u0017\u0130\b\u0017\u0001\u0017\u0001\u0017\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018"+
		"\u0005\u0018\u013b\b\u0018\n\u0018\f\u0018\u013e\t\u0018\u0001\u0018\u0000"+
		"\u0000\u0019\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016"+
		"\u0018\u001a\u001c\u001e \"$&(*,.0\u0000\u0005\u0001\u0000\t\n\u0001\u0000"+
		"\u0007\b\u0002\u0000&&++\u0001\u0000\u0018\u0019\u0001\u0000\u0019\u001a"+
		"\u0156\u00003\u0001\u0000\u0000\u0000\u0002<\u0001\u0000\u0000\u0000\u0004"+
		"K\u0001\u0000\u0000\u0000\u0006M\u0001\u0000\u0000\u0000\bS\u0001\u0000"+
		"\u0000\u0000\nf\u0001\u0000\u0000\u0000\fu\u0001\u0000\u0000\u0000\u000e"+
		"\u0088\u0001\u0000\u0000\u0000\u0010\u0095\u0001\u0000\u0000\u0000\u0012"+
		"\u0097\u0001\u0000\u0000\u0000\u0014\u009f\u0001\u0000\u0000\u0000\u0016"+
		"\u00bb\u0001\u0000\u0000\u0000\u0018\u00bd\u0001\u0000\u0000\u0000\u001a"+
		"\u00c5\u0001\u0000\u0000\u0000\u001c\u00ce\u0001\u0000\u0000\u0000\u001e"+
		"\u00db\u0001\u0000\u0000\u0000 \u00e2\u0001\u0000\u0000\u0000\"\u00f4"+
		"\u0001\u0000\u0000\u0000$\u010e\u0001\u0000\u0000\u0000&\u0110\u0001\u0000"+
		"\u0000\u0000(\u0118\u0001\u0000\u0000\u0000*\u011c\u0001\u0000\u0000\u0000"+
		",\u0124\u0001\u0000\u0000\u0000.\u012f\u0001\u0000\u0000\u00000\u0133"+
		"\u0001\u0000\u0000\u000024\u0003\u0002\u0001\u000032\u0001\u0000\u0000"+
		"\u000045\u0001\u0000\u0000\u000053\u0001\u0000\u0000\u000056\u0001\u0000"+
		"\u0000\u000067\u0001\u0000\u0000\u000078\u0005\u0000\u0000\u00018\u0001"+
		"\u0001\u0000\u0000\u00009;\u0003 \u0010\u0000:9\u0001\u0000\u0000\u0000"+
		";>\u0001\u0000\u0000\u0000<:\u0001\u0000\u0000\u0000<=\u0001\u0000\u0000"+
		"\u0000=?\u0001\u0000\u0000\u0000><\u0001\u0000\u0000\u0000?@\u0003\u0004"+
		"\u0002\u0000@A\u0005\u001f\u0000\u0000AB\u0003\u0006\u0003\u0000BF\u0005"+
		" \u0000\u0000CE\u0003\u000e\u0007\u0000DC\u0001\u0000\u0000\u0000EH\u0001"+
		"\u0000\u0000\u0000FD\u0001\u0000\u0000\u0000FG\u0001\u0000\u0000\u0000"+
		"GI\u0001\u0000\u0000\u0000HF\u0001\u0000\u0000\u0000IJ\u0005\u0016\u0000"+
		"\u0000J\u0003\u0001\u0000\u0000\u0000KL\u0007\u0000\u0000\u0000L\u0005"+
		"\u0001\u0000\u0000\u0000MN\u0003\b\u0004\u0000NO\u0005#\u0000\u0000OP"+
		"\u0003\n\u0005\u0000PQ\u0005#\u0000\u0000QR\u0003\f\u0006\u0000R\u0007"+
		"\u0001\u0000\u0000\u0000Sd\u0005\f\u0000\u0000TU\u0005\u0011\u0000\u0000"+
		"UW\u0003&\u0013\u0000VT\u0001\u0000\u0000\u0000VW\u0001\u0000\u0000\u0000"+
		"W]\u0001\u0000\u0000\u0000X[\u0005\u0005\u0000\u0000Y\\\u0003(\u0014\u0000"+
		"Z\\\u0005\u000b\u0000\u0000[Y\u0001\u0000\u0000\u0000[Z\u0001\u0000\u0000"+
		"\u0000\\^\u0001\u0000\u0000\u0000]X\u0001\u0000\u0000\u0000]^\u0001\u0000"+
		"\u0000\u0000^e\u0001\u0000\u0000\u0000_b\u0005\u0013\u0000\u0000`c\u0003"+
		"(\u0014\u0000ac\u0005\u000b\u0000\u0000b`\u0001\u0000\u0000\u0000ba\u0001"+
		"\u0000\u0000\u0000ce\u0001\u0000\u0000\u0000dV\u0001\u0000\u0000\u0000"+
		"d_\u0001\u0000\u0000\u0000e\t\u0001\u0000\u0000\u0000fs\u0005\r\u0000"+
		"\u0000gh\u0005\u0013\u0000\u0000hr\u0003(\u0014\u0000io\u0005\u0005\u0000"+
		"\u0000jk\u0005\u001d\u0000\u0000kl\u0003*\u0015\u0000lm\u0005\u001e\u0000"+
		"\u0000mp\u0001\u0000\u0000\u0000np\u0003(\u0014\u0000oj\u0001\u0000\u0000"+
		"\u0000on\u0001\u0000\u0000\u0000pr\u0001\u0000\u0000\u0000qg\u0001\u0000"+
		"\u0000\u0000qi\u0001\u0000\u0000\u0000rt\u0001\u0000\u0000\u0000sq\u0001"+
		"\u0000\u0000\u0000st\u0001\u0000\u0000\u0000t\u000b\u0001\u0000\u0000"+
		"\u0000u\u0086\u0005\u000f\u0000\u0000vw\u0005\u0011\u0000\u0000wy\u0003"+
		"&\u0013\u0000xv\u0001\u0000\u0000\u0000xy\u0001\u0000\u0000\u0000y\u007f"+
		"\u0001\u0000\u0000\u0000z}\u0005\u0005\u0000\u0000{~\u0003(\u0014\u0000"+
		"|~\u0005\u000e\u0000\u0000}{\u0001\u0000\u0000\u0000}|\u0001\u0000\u0000"+
		"\u0000~\u0080\u0001\u0000\u0000\u0000\u007fz\u0001\u0000\u0000\u0000\u007f"+
		"\u0080\u0001\u0000\u0000\u0000\u0080\u0087\u0001\u0000\u0000\u0000\u0081"+
		"\u0084\u0005\u0013\u0000\u0000\u0082\u0085\u0003(\u0014\u0000\u0083\u0085"+
		"\u0005\u000e\u0000\u0000\u0084\u0082\u0001\u0000\u0000\u0000\u0084\u0083"+
		"\u0001\u0000\u0000\u0000\u0085\u0087\u0001\u0000\u0000\u0000\u0086x\u0001"+
		"\u0000\u0000\u0000\u0086\u0081\u0001\u0000\u0000\u0000\u0087\r\u0001\u0000"+
		"\u0000\u0000\u0088\u0089\u0007\u0001\u0000\u0000\u0089\u008a\u0005!\u0000"+
		"\u0000\u008a\u008b\u0003\u0010\b\u0000\u008b\u008c\u0005\"\u0000\u0000"+
		"\u008c\u000f\u0001\u0000\u0000\u0000\u008d\u0096\u0003\u0012\t\u0000\u008e"+
		"\u008f\u0005\u0001\u0000\u0000\u008f\u0090\u0003\u0010\b\u0000\u0090\u0091"+
		"\u0005\u0002\u0000\u0000\u0091\u0092\u0003\u0010\b\u0000\u0092\u0093\u0005"+
		"\u0003\u0000\u0000\u0093\u0094\u0003\u0010\b\u0000\u0094\u0096\u0001\u0000"+
		"\u0000\u0000\u0095\u008d\u0001\u0000\u0000\u0000\u0095\u008e\u0001\u0000"+
		"\u0000\u0000\u0096\u0011\u0001\u0000\u0000\u0000\u0097\u009c\u0003\u0014"+
		"\n\u0000\u0098\u0099\u0005\u0014\u0000\u0000\u0099\u009b\u0003\u0014\n"+
		"\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u009b\u009e\u0001\u0000\u0000"+
		"\u0000\u009c\u009a\u0001\u0000\u0000\u0000\u009c\u009d\u0001\u0000\u0000"+
		"\u0000\u009d\u0013\u0001\u0000\u0000\u0000\u009e\u009c\u0001\u0000\u0000"+
		"\u0000\u009f\u00a4\u0003\u0016\u000b\u0000\u00a0\u00a1\u0005\u0015\u0000"+
		"\u0000\u00a1\u00a3\u0003\u0016\u000b\u0000\u00a2\u00a0\u0001\u0000\u0000"+
		"\u0000\u00a3\u00a6\u0001\u0000\u0000\u0000\u00a4\u00a2\u0001\u0000\u0000"+
		"\u0000\u00a4\u00a5\u0001\u0000\u0000\u0000\u00a5\u0015\u0001\u0000\u0000"+
		"\u0000\u00a6\u00a4\u0001\u0000\u0000\u0000\u00a7\u00aa\u0003\u0018\f\u0000"+
		"\u00a8\u00a9\u0005%\u0000\u0000\u00a9\u00ab\u0003\u0018\f\u0000\u00aa"+
		"\u00a8\u0001\u0000\u0000\u0000\u00aa\u00ab\u0001\u0000\u0000\u0000\u00ab"+
		"\u00bc\u0001\u0000\u0000\u0000\u00ac\u00ad\u0003\u0018\f\u0000\u00ad\u00ae"+
		"\u0005\u0006\u0000\u0000\u00ae\u00af\u0007\u0002\u0000\u0000\u00af\u00bc"+
		"\u0001\u0000\u0000\u0000\u00b0\u00b1\u0003\u0018\f\u0000\u00b1\u00b2\u0005"+
		"\u0004\u0000\u0000\u00b2\u00b3\u0005\'\u0000\u0000\u00b3\u00bc\u0001\u0000"+
		"\u0000\u0000\u00b4\u00b5\u0003\u0018\f\u0000\u00b5\u00b6\u0005\u0011\u0000"+
		"\u0000\u00b6\u00b9\u0003&\u0013\u0000\u00b7\u00b8\u0005\u0005\u0000\u0000"+
		"\u00b8\u00ba\u0003\u0018\f\u0000\u00b9\u00b7\u0001\u0000\u0000\u0000\u00b9"+
		"\u00ba\u0001\u0000\u0000\u0000\u00ba\u00bc\u0001\u0000\u0000\u0000\u00bb"+
		"\u00a7\u0001\u0000\u0000\u0000\u00bb\u00ac\u0001\u0000\u0000\u0000\u00bb"+
		"\u00b0\u0001\u0000\u0000\u0000\u00bb\u00b4\u0001\u0000\u0000\u0000\u00bc"+
		"\u0017\u0001\u0000\u0000\u0000\u00bd\u00c2\u0003\u001a\r\u0000\u00be\u00bf"+
		"\u0007\u0003\u0000\u0000\u00bf\u00c1\u0003\u001a\r\u0000\u00c0\u00be\u0001"+
		"\u0000\u0000\u0000\u00c1\u00c4\u0001\u0000\u0000\u0000\u00c2\u00c0\u0001"+
		"\u0000\u0000\u0000\u00c2\u00c3\u0001\u0000\u0000\u0000\u00c3\u0019\u0001"+
		"\u0000\u0000\u0000\u00c4\u00c2\u0001\u0000\u0000\u0000\u00c5\u00ca\u0003"+
		"\u001c\u000e\u0000\u00c6\u00c7\u0005\u0017\u0000\u0000\u00c7\u00c9\u0003"+
		"\u001c\u000e\u0000\u00c8\u00c6\u0001\u0000\u0000\u0000\u00c9\u00cc\u0001"+
		"\u0000\u0000\u0000\u00ca\u00c8\u0001\u0000\u0000\u0000\u00ca\u00cb\u0001"+
		"\u0000\u0000\u0000\u00cb\u001b\u0001\u0000\u0000\u0000\u00cc\u00ca\u0001"+
		"\u0000\u0000\u0000\u00cd\u00cf\u0007\u0004\u0000\u0000\u00ce\u00cd\u0001"+
		"\u0000\u0000\u0000\u00ce\u00cf\u0001\u0000\u0000\u0000\u00cf\u00d1\u0001"+
		"\u0000\u0000\u0000\u00d0\u00d2\u0007\u0004\u0000\u0000\u00d1\u00d0\u0001"+
		"\u0000\u0000\u0000\u00d1\u00d2\u0001\u0000\u0000\u0000\u00d2\u00d4\u0001"+
		"\u0000\u0000\u0000\u00d3\u00d5\u0007\u0004\u0000\u0000\u00d4\u00d3\u0001"+
		"\u0000\u0000\u0000\u00d4\u00d5\u0001\u0000\u0000\u0000\u00d5\u00d7\u0001"+
		"\u0000\u0000\u0000\u00d6\u00d8\u0007\u0004\u0000\u0000\u00d7\u00d6\u0001"+
		"\u0000\u0000\u0000\u00d7\u00d8\u0001\u0000\u0000\u0000\u00d8\u00d9\u0001"+
		"\u0000\u0000\u0000\u00d9\u00da\u0003\u001e\u000f\u0000\u00da\u001d\u0001"+
		"\u0000\u0000\u0000\u00db\u00df\u0003$\u0012\u0000\u00dc\u00de\u0003\""+
		"\u0011\u0000\u00dd\u00dc\u0001\u0000\u0000\u0000\u00de\u00e1\u0001\u0000"+
		"\u0000\u0000\u00df\u00dd\u0001\u0000\u0000\u0000\u00df\u00e0\u0001\u0000"+
		"\u0000\u0000\u00e0\u001f\u0001\u0000\u0000\u0000\u00e1\u00df\u0001\u0000"+
		"\u0000\u0000\u00e2\u00e3\u0005\u001c\u0000\u0000\u00e3\u00e4\u0005+\u0000"+
		"\u0000\u00e4\u00e5\u0005\u001f\u0000\u0000\u00e5\u00e6\u0005&\u0000\u0000"+
		"\u00e6\u00e7\u0005 \u0000\u0000\u00e7!\u0001\u0000\u0000\u0000\u00e8\u00e9"+
		"\u0005\u001b\u0000\u0000\u00e9\u00ef\u0005+\u0000\u0000\u00ea\u00ec\u0005"+
		"\u001f\u0000\u0000\u00eb\u00ed\u0003,\u0016\u0000\u00ec\u00eb\u0001\u0000"+
		"\u0000\u0000\u00ec\u00ed\u0001\u0000\u0000\u0000\u00ed\u00ee\u0001\u0000"+
		"\u0000\u0000\u00ee\u00f0\u0005 \u0000\u0000\u00ef\u00ea\u0001\u0000\u0000"+
		"\u0000\u00ef\u00f0\u0001\u0000\u0000\u0000\u00f0\u00f5\u0001\u0000\u0000"+
		"\u0000\u00f1\u00f2\u0005\u001d\u0000\u0000\u00f2\u00f3\u0005&\u0000\u0000"+
		"\u00f3\u00f5\u0005\u001e\u0000\u0000\u00f4\u00e8\u0001\u0000\u0000\u0000"+
		"\u00f4\u00f1\u0001\u0000\u0000\u0000\u00f5#\u0001\u0000\u0000\u0000\u00f6"+
		"\u010f\u0005(\u0000\u0000\u00f7\u010f\u0005,\u0000\u0000\u00f8\u010f\u0003"+
		"(\u0014\u0000\u00f9\u00fa\u0003.\u0017\u0000\u00fa\u00fc\u0005\u001f\u0000"+
		"\u0000\u00fb\u00fd\u0003,\u0016\u0000\u00fc\u00fb\u0001\u0000\u0000\u0000"+
		"\u00fc\u00fd\u0001\u0000\u0000\u0000\u00fd\u00fe\u0001\u0000\u0000\u0000"+
		"\u00fe\u00ff\u0005 \u0000\u0000\u00ff\u010f\u0001\u0000\u0000\u0000\u0100"+
		"\u0101\u0005\u001f\u0000\u0000\u0101\u0102\u0003\u0010\b\u0000\u0102\u0103"+
		"\u0005 \u0000\u0000\u0103\u010f\u0001\u0000\u0000\u0000\u0104\u0106\u0005"+
		"\u001d\u0000\u0000\u0105\u0107\u0003,\u0016\u0000\u0106\u0105\u0001\u0000"+
		"\u0000\u0000\u0106\u0107\u0001\u0000\u0000\u0000\u0107\u0108\u0001\u0000"+
		"\u0000\u0000\u0108\u010f\u0005\u001e\u0000\u0000\u0109\u010b\u0005!\u0000"+
		"\u0000\u010a\u010c\u00030\u0018\u0000\u010b\u010a\u0001\u0000\u0000\u0000"+
		"\u010b\u010c\u0001\u0000\u0000\u0000\u010c\u010d\u0001\u0000\u0000\u0000"+
		"\u010d\u010f\u0005\"\u0000\u0000\u010e\u00f6\u0001\u0000\u0000\u0000\u010e"+
		"\u00f7\u0001\u0000\u0000\u0000\u010e\u00f8\u0001\u0000\u0000\u0000\u010e"+
		"\u00f9\u0001\u0000\u0000\u0000\u010e\u0100\u0001\u0000\u0000\u0000\u010e"+
		"\u0104\u0001\u0000\u0000\u0000\u010e\u0109\u0001\u0000\u0000\u0000\u010f"+
		"%\u0001\u0000\u0000\u0000\u0110\u0115\u0005+\u0000\u0000\u0111\u0112\u0005"+
		"\u0012\u0000\u0000\u0112\u0114\u0005+\u0000\u0000\u0113\u0111\u0001\u0000"+
		"\u0000\u0000\u0114\u0117\u0001\u0000\u0000\u0000\u0115\u0113\u0001\u0000"+
		"\u0000\u0000\u0115\u0116\u0001\u0000\u0000\u0000\u0116\'\u0001\u0000\u0000"+
		"\u0000\u0117\u0115\u0001\u0000\u0000\u0000\u0118\u0119\u0003&\u0013\u0000"+
		"\u0119\u011a\u0005\u0012\u0000\u0000\u011a\u011b\u0005&\u0000\u0000\u011b"+
		")\u0001\u0000\u0000\u0000\u011c\u0121\u0003(\u0014\u0000\u011d\u011e\u0005"+
		"#\u0000\u0000\u011e\u0120\u0003(\u0014\u0000\u011f\u011d\u0001\u0000\u0000"+
		"\u0000\u0120\u0123\u0001\u0000\u0000\u0000\u0121\u011f\u0001\u0000\u0000"+
		"\u0000\u0121\u0122\u0001\u0000\u0000\u0000\u0122+\u0001\u0000\u0000\u0000"+
		"\u0123\u0121\u0001\u0000\u0000\u0000\u0124\u0129\u0003\u0010\b\u0000\u0125"+
		"\u0126\u0005#\u0000\u0000\u0126\u0128\u0003\u0010\b\u0000\u0127\u0125"+
		"\u0001\u0000\u0000\u0000\u0128\u012b\u0001\u0000\u0000\u0000\u0129\u0127"+
		"\u0001\u0000\u0000\u0000\u0129\u012a\u0001\u0000\u0000\u0000\u012a-\u0001"+
		"\u0000\u0000\u0000\u012b\u0129\u0001\u0000\u0000\u0000\u012c\u012d\u0003"+
		"&\u0013\u0000\u012d\u012e\u0005\u0012\u0000\u0000\u012e\u0130\u0001\u0000"+
		"\u0000\u0000\u012f\u012c\u0001\u0000\u0000\u0000\u012f\u0130\u0001\u0000"+
		"\u0000\u0000\u0130\u0131\u0001\u0000\u0000\u0000\u0131\u0132\u0005+\u0000"+
		"\u0000\u0132/\u0001\u0000\u0000\u0000\u0133\u0134\u0007\u0002\u0000\u0000"+
		"\u0134\u0135\u0005$\u0000\u0000\u0135\u013c\u0003\u0010\b\u0000\u0136"+
		"\u0137\u0005#\u0000\u0000\u0137\u0138\u0007\u0002\u0000\u0000\u0138\u0139"+
		"\u0005$\u0000\u0000\u0139\u013b\u0003\u0010\b\u0000\u013a\u0136\u0001"+
		"\u0000\u0000\u0000\u013b\u013e\u0001\u0000\u0000\u0000\u013c\u013a\u0001"+
		"\u0000\u0000\u0000\u013c\u013d\u0001\u0000\u0000\u0000\u013d1\u0001\u0000"+
		"\u0000\u0000\u013e\u013c\u0001\u0000\u0000\u0000)5<FV[]bdoqsx}\u007f\u0084"+
		"\u0086\u0095\u009c\u00a4\u00aa\u00b9\u00bb\u00c2\u00ca\u00ce\u00d1\u00d4"+
		"\u00d7\u00df\u00ec\u00ef\u00f4\u00fc\u0106\u010b\u010e\u0115\u0121\u0129"+
		"\u012f\u013c";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}