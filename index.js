#!/usr/bin/env node

import antlr4 from 'antlr4';

import CedarLexer from './.antlr/CedarLexer.js'
import CedarParser from './.antlr/CedarParser.js';
import CustomListener from './CustomListener.js';

function treeWalker(tree, depth) {
    console.log(" ".repeat(depth*2) + tree.constructor.name + " - " + tree.getText().substr(0, 50));
    if (tree.children) {
        for (let child of tree.children) {
            treeWalker(child, depth+1);
        }
    }
}

const input = `
// Policy 0: Any User can create a list and see what lists they own
permit (
    principal,
    action in [Action::"CreateList", Action::"GetLists"],
    resource == Application::"TinyTodo"
);

// Policy 1: A User can perform any action on a List they own
permit (principal, action, resource)
when { resource is List && resource.owner == principal };

// Policy 2: A User can see a List if they are either a reader or editor
permit (
    principal,
    action == Action::"GetList",
    resource
)
when { principal in resource.readers || principal in resource.editors };

// Policy 3: A User can update a List and its tasks if they are an editor
permit (
    principal,
    action in
        [Action::"UpdateList",
         Action::"CreateTask",
         Action::"UpdateTask",
         Action::"DeleteTask"],
    resource
)
when { principal in resource.editors };

// Policy 4: Admins can perform any action on any resource
// @id("admin-omnipotence")
// permit (
//    principal in Team::"admin",
//    action,
//    resource in Application::"TinyTodo"
// );
// 
// Policy 5: Interns may not create new task lists
// forbid (
//     principal in Team::"interns",
//     action == Action::"CreateList",
//     resource == Application::"TinyTodo"
// );
`;

let chars = new antlr4.InputStream(input);
let lexer = new CedarLexer(chars);
lexer.removeErrorListeners();
lexer.strictMode = false;

let tokens = new antlr4.CommonTokenStream(lexer);
let parser = new CedarParser(tokens);
parser.removeErrorListeners();
parser.buildParseTrees = true;

let tree = parser.policyset();

treeWalker(tree, 0);

let listener = new CustomListener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

//console.log(listener);
