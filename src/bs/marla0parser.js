/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,6],$V2=[5,6],$V3=[1,16],$V4=[1,15],$V5=[1,23],$V6=[1,22],$V7=[1,27],$V8=[1,30],$V9=[1,28],$Va=[1,29],$Vb=[1,31],$Vc=[1,32],$Vd=[11,28,31],$Ve=[1,42],$Vf=[5,11,13,23,28,31,39,42,43],$Vg=[1,45],$Vh=[1,46],$Vi=[5,11,13,23,28,31,39,42,43,44,45,49],$Vj=[28,31],$Vk=[23,31],$Vl=[1,88],$Vm=[1,87],$Vn=[1,108];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"module":3,"module_item_list":4,"LF":5,"EOF":6,"module_item":7,"type_decl":8,"module_binding":9,"IDENTIFIER":10,"=":11,"expr":12,":":13,"typeref":14,"params":15,"TYPE":16,"NOTIMPL":17,"INDENT":18,"type_members":19,"OUTDENT":20,"<":21,"type_params":22,">":23,"type_member":24,"|":25,"(":26,"type_case_data_list":27,")":28,"param":29,"param_list":30,",":31,"primary_typeref":32,"type_case_data":33,"type_param":34,"SQ":35,"fun_typeref":36,"type_args":37,"{":38,"}":39,"tuple_type_args":40,"[":41,"]":42,"\\":43,"?":44,".":45,"member_ref":46,"tuple_type_arg":47,"type_arg":48,"ARROW":49,"INT":50,"$accept":0,"$end":1},
terminals_: {2:"error",5:"LF",6:"EOF",10:"IDENTIFIER",11:"=",13:":",16:"TYPE",17:"NOTIMPL",18:"INDENT",20:"OUTDENT",21:"<",23:">",25:"|",26:"(",28:")",31:",",35:"SQ",38:"{",39:"}",41:"[",42:"]",43:"\\",44:"?",45:".",49:"ARROW",50:"INT"},
productions_: [0,[3,3],[3,2],[7,1],[7,1],[4,1],[4,3],[9,3],[9,5],[9,4],[8,4],[8,9],[8,12],[19,1],[19,3],[24,2],[24,5],[24,4],[24,3],[24,5],[24,3],[24,4],[15,1],[15,3],[15,2],[30,1],[30,3],[29,1],[29,3],[27,1],[27,3],[33,3],[34,2],[22,1],[22,3],[14,1],[32,1],[32,4],[32,2],[32,5],[32,3],[32,3],[32,3],[32,3],[32,2],[32,2],[32,3],[46,1],[40,1],[40,3],[47,1],[37,1],[37,3],[48,1],[36,1],[36,3],[12,1],[12,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-2];
break;
case 2:
return $$[$0-1];
break;
case 3: case 4: case 50: case 53: case 54:
this.$=$$[$0];
break;
case 5: case 13: case 25: case 29: case 33: case 48: case 51:
this.$=[$$[$0]];
break;
case 6: case 14: case 30: case 34: case 49: case 52:
$$[$0-2].push($$[$0]);this.$=$$[$0-2];
break;
case 10:
this.$=new ast.TypeDecl($$[$0-2],[],[]);
break;
case 11:
this.$=new ast.TypeDecl($$[$0-7],[],$$[$0-2]);
break;
case 12:
this.$=new ast.TypeDecl($$[$0-10],$$[$0-8],$$[$0-2]);
break;
case 15:
this.$=new ast.CaseTypeDeclMember($$[$0], []);
break;
case 16:
this.$=new ast.CaseTypeDeclMember($$[$0-3], $$[$0-1]);
break;
case 17:
this.$=new ast.CaseTypeDeclMember($$[$0-2], []);
break;
case 18: case 31:
this.$=new ast.DataTypeDeclMember($$[$0-2],$$[$0],null);
break;
case 19:
this.$=new ast.DataTypeDeclMember($$[$0-4],$$[$0-2],$$[$0]);
break;
case 20:
this.$=new ast.DataTypeDeclMember($$[$0-2],null,$$[$0]);
break;
case 21:
this.$=new ast.MethodTypeDeclMember($$[$0-3],$$[$0-2],$$[$0]);
break;
case 26:
$$[$0-2].push($$[$0-1]);this.$=$$[$0-2];
break;
case 32:
this.$="'"+$$[$0];
break;
case 36:
this.$=new ast.NamedTyperef($$[$0],[]);
break;
case 37:
this.$=new ast.NamedTyperef($$[$0-3],$$[$0-1]);
break;
case 38:
this.$=new ast.NamedTyperef("'"+$$[$0],[]);
break;
case 39:
this.$=new ast.NamedTyperef("Map", [$$[$0-3],$$[$0-1]]);
break;
case 40:
this.$=new ast.NamedTyperef("Tuple", $$[$0-1]);
break;
case 41:
this.$=new ast.NamedTyperef("Array", [$$[$0-1]]);
break;
case 42:
this.$=new ast.NamedTyperef("Set", [$$[$0-1]]);
break;
case 43:
this.$=new ast.NamedTyperef("Seq", [$$[$0-1]]);
break;
case 44:
this.$=new ast.UnitTyperef();
break;
case 45:
this.$=new ast.NamedTyperef("Option", [$$[$0-1]]);
break;
case 46:
this.$=new ast.MemberTyperef($$[$0-2], [$$[$0]]);
break;
case 55:
this.$=new ast.NamedTyperef("Fun", [$$[$0-2],$$[$0]]);
break;
}
},
table: [{3:1,4:2,7:3,8:4,9:5,10:$V0,16:$V1},{1:[3]},{5:[1,8],6:[1,9]},o($V2,[2,5]),o($V2,[2,3]),o($V2,[2,4]),{10:[1,10]},{10:$V3,11:[1,11],13:[1,12],15:13,26:$V4,29:14},{6:[1,17],7:18,8:4,9:5,10:$V0,16:$V1},{1:[2,2]},{11:[1,19],21:[1,20]},{10:$V5,12:21,50:$V6},{10:$V7,14:24,26:$V8,32:26,35:$V9,36:25,38:$Va,41:$Vb,43:$Vc},{11:[1,33]},{11:[2,22]},{10:$V3,28:[1,35],29:36,30:34},o($Vd,[2,27],{13:[1,37]}),{1:[2,1]},o($V2,[2,6]),{5:[1,39],17:[1,38]},{22:40,34:41,35:$Ve},o($V2,[2,7]),o($V2,[2,56]),o($V2,[2,57]),{11:[1,43]},o($Vf,[2,35]),o($Vf,[2,54],{44:$Vg,45:$Vh,49:[1,44]}),o($Vi,[2,36],{21:[1,47]}),{10:[1,48]},{10:$V7,14:49,26:$V8,32:26,35:$V9,36:25,38:$Va,41:$Vb,43:$Vc},{10:$V7,14:53,26:$V8,28:[1,51],32:26,35:$V9,36:25,38:$Va,40:50,41:$Vb,43:$Vc,47:52},{10:$V7,14:54,26:$V8,32:26,35:$V9,36:25,38:$Va,41:$Vb,43:$Vc},{10:$V7,14:55,26:$V8,32:26,35:$V9,36:25,38:$Va,41:$Vb,43:$Vc},{10:$V5,12:56,50:$V6},{28:[1,57],31:[1,58]},{11:[2,24]},o($Vj,[2,25]),{10:$V7,26:$V8,32:59,35:$V9,38:$Va,41:$Vb,43:$Vc},o($V2,[2,10]),{18:[1,60]},{23:[1,61],31:[1,62]},o($Vk,[2,33]),{10:[1,63]},{10:$V5,12:64,50:$V6},{10:$V7,26:$V8,32:65,35:$V9,38:$Va,41:$Vb,43:$Vc},o($Vi,[2,45]),{10:[1,67],46:66},{10:$V7,14:70,26:$V8,32:26,35:$V9,36:25,37:68,38:$Va,41:$Vb,43:$Vc,48:69},o($Vi,[2,38]),{13:[1,71],39:[1,72]},{28:[1,73],31:[1,74]},o($Vi,[2,44]),o($Vj,[2,48]),o($Vj,[2,50]),{42:[1,75]},{43:[1,76]},o($V2,[2,9]),{11:[2,23]},{10:$V3,29:77},o($Vd,[2,28],{44:$Vg,45:$Vh}),{5:[1,78]},{11:[1,79]},{34:80,35:$Ve},o($Vk,[2,32]),o($V2,[2,8]),o($Vf,[2,55],{44:$Vg,45:$Vh}),o($Vi,[2,46]),o($Vi,[2,47]),{23:[1,81],31:[1,82]},o($Vk,[2,51]),o($Vk,[2,53]),{10:$V7,14:83,26:$V8,32:26,35:$V9,36:25,38:$Va,41:$Vb,43:$Vc},o($Vi,[2,42]),o($Vi,[2,40]),{10:$V7,14:53,26:$V8,32:26,35:$V9,36:25,38:$Va,41:$Vb,43:$Vc,47:84},o($Vi,[2,41]),o($Vi,[2,43]),o($Vj,[2,26]),{10:$Vl,19:85,24:86,25:$Vm},{5:[1,89]},o($Vk,[2,34]),o($Vi,[2,37]),{10:$V7,14:70,26:$V8,32:26,35:$V9,36:25,38:$Va,41:$Vb,43:$Vc,48:90},{39:[1,91]},o($Vj,[2,49]),{5:[1,92]},{5:[2,13]},{10:[1,93]},{10:$V3,11:[1,95],13:[1,94],15:96,26:$V4,29:14},{18:[1,97]},o($Vk,[2,52]),o($Vi,[2,39]),{10:$Vl,20:[1,98],24:99,25:$Vm},{5:[2,15],26:[1,100]},{10:$V7,14:101,26:$V8,32:26,35:$V9,36:25,38:$Va,41:$Vb,43:$Vc},{10:$V5,12:102,50:$V6},{11:[1,103]},{5:[1,104]},o($V2,[2,11]),{5:[2,14]},{10:$Vn,27:105,28:[1,106],33:107},{5:[2,18],11:[1,109]},{5:[2,20]},{10:$V5,12:110,50:$V6},{10:$Vl,19:111,24:86,25:$Vm},{28:[1,112],31:[1,113]},{5:[2,17]},o($Vj,[2,29]),{13:[1,114]},{10:$V5,12:115,50:$V6},{5:[2,21]},{5:[1,116]},{5:[2,16]},{10:$Vn,33:117},{10:$V7,26:$V8,32:118,35:$V9,38:$Va,41:$Vb,43:$Vc},{5:[2,19]},{10:$Vl,20:[1,119],24:99,25:$Vm},o($Vj,[2,30]),o($Vj,[2,31],{44:$Vg,45:$Vh}),o($V2,[2,12])],
defaultActions: {9:[2,2],14:[2,22],17:[2,1],35:[2,24],57:[2,23],86:[2,13],99:[2,14],102:[2,20],106:[2,17],110:[2,21],112:[2,16],115:[2,19]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

var ast = require("../marla/ast");
//console.log("LEX " + parser.terminals_[r]);
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip line comment */
break;
case 1:/* skip line whitespace */
break;
case 2:return 5
break;
case 3:return 18
break;
case 4:return 20
break;
case 5:return 17
break;
case 6:return 16
break;
case 7:return 'IF'
break;
case 8:return 'ELSE'
break;
case 9:return 'WHERE'
break;
case 10:return 49
break;
case 11:return 50
break;
case 12:return 'FLOAT'
break;
case 13:return 'STRING'
break;
case 14:return 10
break;
case 15:return 45
break;
case 16:return '*'
break;
case 17:return '/'
break;
case 18:return '-'
break;
case 19:return '+'
break;
case 20:return '^'
break;
case 21:return 11
break;
case 22:return 26
break;
case 23:return 28
break;
case 24:return 21
break;
case 25:return 23
break;
case 26:return 38
break;
case 27:return 39
break;
case 28:return 41
break;
case 29:return 42
break;
case 30:return '\\'
break;
case 31:return 13
break;
case 32:return 25
break;
case 33:return 31
break;
case 34:return 44
break;
case 35:return 35
break;
case 36:return 6
break;
case 37:return 'INVALID'
break;
}
},
rules: [/^(?:(\/\/.*?)((\r?\n)))/,/^(?:[\t ])/,/^(?:(\r?\n))/,/^(?:»)/,/^(?:«)/,/^(?:\.\.\.)/,/^(?:type\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:where\b)/,/^(?:->)/,/^(?:[0-9]+\b)/,/^(?:[0-9]+(\.[0-9]+)\b)/,/^(?:"(\\.|[^"])*")/,/^(?:[a-zA-Z_]\w*)/,/^(?:\.)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:=)/,/^(?:\()/,/^(?:\))/,/^(?:<)/,/^(?:>)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\\)/,/^(?::)/,/^(?:\|)/,/^(?:,)/,/^(?:\?)/,/^(?:')/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}