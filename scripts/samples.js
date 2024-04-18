/* global SLang : true */

(function () {

"use strict";


var samples = [

/* 0 */   "",
/* 1 */   [ "New prim. op. + infix syntax",
            "(fn (n,p,q) => (((~(n)+20)-p) / (q % 3)) 10 2 11)",
            '["Num",4]' ],
/* 2 */   [ "Boolean ops", "(1 === ( (100 / 4) % 3))",
            '["Bool",true]' ],
/* 3 */   [ "Boolean ops", "not( ((11 / 4) > (30 - (25 % 13))) )",
            '["Bool",true]'],
/* 4 */   [ "Lists", "[]", '["List",[]]' ],
/* 5 */   [ "Lists", "[1]", '["List",[1]]' ],
/* 6 */   [ "Lists", "[1,2,3,4,5]", '["List",[1,2,3,4,5]]' ],
/* 7 */   [ "Lists", "hd([1,2])", '["Num",1]' ],
/* 8 */   [ "Lists", "tl([1,2])", '["List",[2]]' ],
/* 9 */   [ "Lists", "tl([1])", '["List",[]]' ],
/* 10 */  [ "Lists", "(1 :: [])", '["List",[1]]' ],
/* 11 */  [ "Lists", "(1 :: [2,3])", '["List",[1,2,3]]' ],
/* 12 */  [ "Lists", "isNull( [] )", '["Bool",true]' ],
/* 13 */  [ "Lists", "isNull( [1,2,3] )", '["Bool",false]' ],
/* 14 */  [ "filter", "(fn(x) => (x>0) -> [ ])", '["List",[]]' ],
/* 15 */  [ "filter", "(fn(x) => (x>2) -> [1,2,3,5,6])", '["List",[3,5,6]]' ],
/* 16 */  [ "filter", "(fn(x) => (x<0) -> [1,2,3,5,6])", 
            '["List",[]]' ],
/* 17 */  [ "filter", "(fn(x) => (x === 2) -> (1 :: (2 :: (3:: []))))", 
            '["List",[2]]' ],
/* 18 */  [ "filter", "((fn(x) => fn (y) => (x > y) 5) -> [1,2,3,5,6])", 
            '["List",[1,2,3]]' ],
/* 19 */  [ "filter", "(fn(x) => (x < y) -> tl([8,7,6,5,4,3,2,1]))", 
            '["List",[5,4,3,2,1]]' ],
/* 20 */  [ "filter", "(fn (f,list) => (f -> list) fn (x) => add1(x) [1,2,3])", 
            'No output [Runtime error]' ],
/* 21 */  [ "filter", "(fn(x) => (x === 1) -> 1)", 
            'No output [Runtime error]' ]
];

 window.SLang.samples = samples;
    console.log("done loading samples");
})();
