lexer grammar CedarLexer;

IF: 'if';
THEN: 'then';
ELSE: 'else';
LIKE: 'like';
IN: 'in';
HAS: 'has';
WHEN: 'when';
UNLESS: 'unless';

PERMIT: 'permit';
FORBID: 'forbid';
QPRINCIPAL: '?principal';
PRINCIPAL: 'principal';
ACTION: 'action';
QRESOURCE: '?resource';
RESOURCE: 'resource';
CONTEXT: 'context';
IS: 'is';

NAMESPACE: '::';

DOUBLEEQUAL: '==';
DOUBLEPIPE: '||';
DOUBLEAMP: '&&';
SEMICOLON: ';';
ASTERIX: '*';
PLUS: '+';
MINUS: '-';
EXCLAMATION: '!';
PERIOD: '.';
ATSYMB: '@';
OPENBRKT: '[';
CLOSEBRKT: ']';
OPENPAREN: '(';
CLOSEPAREN: ')';
OPENBRACE: '{';
CLOSEBRACE: '}';
COMMA: ',';
COLON: ':';

////

RELOP
   : '<'
   | '<='
   | '>='
   | '>'
   | '!='
   | DOUBLEEQUAL
   | IN
   ;

STR
   : '"' (ESC | SAFECODEPOINT)* '"'
   ;

PAT
   : '"' (ESCWITHASTERIX | SAFECODEPOINT)* '"'
   ;

fragment ESC
   : '\\' (["\\/bfnrt] | UNICODE)
   ;

fragment ESCWITHASTERIX
   : '\\' (["\\/bfnrt] | UNICODE)
   ;

fragment UNICODE
   : 'u' HEX HEX HEX HEX
   ;

fragment HEX
   : [0-9a-fA-F]
   ;

fragment SAFECODEPOINT
   : ~ ["\\\u0000-\u001F]
   ;

LITERAL
   : BOOL
   | INT
   | STR
   ;

BOOL
   : 'true'
   | 'false'
   ;

INT
   : '-'? [0-9]+
   ;

IDENT
   : [a-zA-Z_][a-zA-Z0-9_]*
   ;

VAR
   : PRINCIPAL
   | ACTION
   | RESOURCE
   | CONTEXT
   ;

WHITESPC
   : [ \t\n\r] + -> skip
   ;

COMMENT
   : '//' ~[\r\n\u2028\u2029]* -> channel(HIDDEN)
   ;
