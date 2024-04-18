/* description: Grammar for SLang 1 */

/* lexical grammar */
%lex

DIGIT                 [0-9]
LETTER                [a-zA-Z]

%%

\s+                                   { /* skip whitespace */ }
"fn"                                  { return 'FN'; }
"("                                   { return 'LPAREN'; }
")"                                   { return 'RPAREN'; }
"+"                                   { return 'PLUS'; }
"*"                                   { return 'TIMES'; }
"-"                                   { return 'MINUS'; }
"/"                                   { return 'DIVIDE'; }
"%"                                   { return 'REMAINDER'; }
"add1"                                { return 'ADD1'; }
"~"                                   { return 'NEG'; }
","                                   { return 'COMMA'; }
"=>"                                  { return 'THATRETURNS'; }
<<EOF>>                               { return 'EOF'; }
{LETTER}({LETTER}|{DIGIT}|_)*         { return 'VAR'; }
{DIGIT}+                              { return 'INT'; }
.                                     { return 'INVALID'; }

/lex

%start program

%% /* language grammar */

program
    : exp EOF
        { return SLang.absyn.createProgram($1); }
    ;

exp
    : var_exp       { $$ = $1; }
    | intlit_exp    { $$ = $1; }
    | fn_exp        { $$ = $1; }
    | app_exp       { $$ = $1; }    
    | prim_app_exp  { $$ = $1; }
    ;

var_exp
    : VAR  { $$ = SLang.absyn.createVarExp( $1 ); }
    ;

intlit_exp
    : INT  { $$ =SLang.absyn.createIntExp( $1 ); }
    ;

fn_exp
    : FN LPAREN formals RPAREN THATRETURNS exp
           { $$ = SLang.absyn.createFnExp($3,$6); }
    ;

formals
    : /* empty */ { $$ = [ ]; }
    | VAR moreformals 
        { var result;
          if ($2 === [ ])
             result = [ $1 ];
          else {
             $2.unshift($1);
             result = $2;
          }
          $$ = result;
        }
    ;

moreformals
    : /* empty */ { $$ = [ ] }
    | COMMA VAR moreformals 
       { $3.unshift($2); 
         $$ = $3; }
    ;

app_exp
    : LPAREN exp args RPAREN
       {  $3.unshift("args");
          $$ = SLang.absyn.createAppExp($2,$3); }
    ;

prim_app_exp
    : unary_prim_op LPAREN prim_arg RPAREN
       { $$ = SLang.absyn.createPrimAppExp1($1,$3); }
    | LPAREN prim_arg binary_prim_op prim_arg RPAREN
       { $$ = SLang.absyn.createPrimAppExp2($3,$2,$4); }
    ;

unary_prim_op
    :  NEG     { $$ = $1; }
    |  ADD1     { $$ = $1; }
    ;

binary_prim_op
    :  PLUS     { $$ = $1; }
    |  TIMES     { $$ = $1; }
    |  MINUS     { $$ = $1; }
    |  DIVIDE     { $$ = $1; }
    |  REMAINDER  { $$ = $1; }
    ;

args
    : /* empty */ { $$ = [ ]; }
    | exp args
        { var result;
          if ($2 === [ ])
             result = [ $1 ];
          else {
             $2.unshift($1);
             result = $2;
          }
          $$ = result;
        }
    ;

prim_arg
    :  /* empty */ { $$ = [ ]; }
    |  exp    { $$ = $1; }
    ;


%%
