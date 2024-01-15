#!/bin/bash

java -Xmx500M -cp '/usr/local/lib/antlr-4.13.1-complete.jar:$CLASSPATH' org.antlr.v4.Tool -Dlanguage=JavaScript -lib . -o .antlr -visitor -Xexact-output-dir CedarLexer.g4
java -Xmx500M -cp '/usr/local/lib/antlr-4.13.1-complete.jar:$CLASSPATH' org.antlr.v4.Tool -Dlanguage=JavaScript -lib . -o .antlr -visitor -Xexact-output-dir CedarParser.g4
