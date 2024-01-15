parser grammar CedarParser;

options {
   tokenVocab=CedarLexer;
}

policyset
   : policy+ EOF
   ;

policy
   : annotation* effect OPENPAREN scope CLOSEPAREN condition* SEMICOLON
   ;

effect
   : PERMIT
   | FORBID
   ;

scope
   : principal COMMA action COMMA resource
   ;

principal
   : PRINCIPAL (((IS path)? (IN (entity | QPRINCIPAL))?) | (DOUBLEEQUAL (entity | QPRINCIPAL)))
   ;

action
   : ACTION ((DOUBLEEQUAL entity | IN (OPENBRKT entList CLOSEBRKT | entity)))?
   ;

resource
   : RESOURCE (((IS path)? (IN (entity | QRESOURCE))?) | (DOUBLEEQUAL (entity | QRESOURCE)))
   ;

condition
   : (WHEN | UNLESS) OPENBRACE expr CLOSEBRACE
   ;

expr
   : or
   | IF expr THEN expr ELSE expr
   ;

or
   : and (DOUBLEPIPE and)*
   ;

and
   : relation (DOUBLEAMP relation)*
   ;

relation
   : add (RELOP add)?
   | add HAS (IDENT | STR)
   | add LIKE PAT
   | add IS path (IN add)?
   ;

add
   : mult ((PLUS | MINUS) mult)*
   ;

mult
   : unary (ASTERIX unary)*
   ;

unary
   : (EXCLAMATION | MINUS)? (EXCLAMATION | MINUS)? (EXCLAMATION | MINUS)? (EXCLAMATION | MINUS)? member
   ;

member
   : primary access*
   ;

annotation
   : ATSYMB IDENT OPENPAREN STR CLOSEPAREN
   ;

access
   : PERIOD IDENT (OPENPAREN (exprList)? CLOSEPAREN)? | OPENBRKT STR CLOSEBRKT
   ;

primary
   : LITERAL 
   | VAR 
   | entity 
   | extFun OPENPAREN (exprList)? CLOSEPAREN
   | OPENPAREN expr CLOSEPAREN
   | OPENBRKT (exprList)? CLOSEBRKT
   | OPENBRACE (recInits)? CLOSEBRACE
   ;

path
   : IDENT (NAMESPACE IDENT)*
   ;

entity
   : path NAMESPACE STR
   ;

entList
   : entity (COMMA entity)*
   ;

exprList
   : expr (COMMA expr)*
   ;

extFun
   : (path NAMESPACE)? IDENT
   ;

recInits
   : (IDENT | STR) COLON expr (COMMA (IDENT | STR) COLON expr)*
   ;
