var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as dt, t as Pe, s as _r, u as Gr, w as Jt, c as wt, o as St, a as W, n as ko, b as ee, e as Ye, f as Kt, P as $o, g as Yr, B as k, _ as Mo, p as Er, h as yr, i as Zt, r as Lo, j as It, k as re, R as _e, S as Ne, l as Ce, m as Wr, q as Xr, v as ct, x as Ct, y as Fo, z as Do, A as Bo, C as Uo, D as Vo, E as jo, F as $e, V as ye, Q as Go, G as Hr, H as Yo, I as pr, J as Wo, K as Xo, L as lt, M as Ho, N as zo, O as Jo, T as qo, U as Ko, W as Zo, X as Qo, Y as en, Z as tn, $ as rn, a0 as on, a1 as nn, a2 as sn, a3 as an, a4 as un, a5 as ln, a6 as cn, a7 as dn, a8 as pn, a9 as hn, aa as fn, ab as mn, ac as gn, ad as Dr, ae as Ot, af as _n, ag as Br, ah as En, ai as yn, aj as vn, ak as bn, al as Tn, am as Rn, an as Ur, ao as Nn } from "../../assets/index-By4o6enr.js";
const On = (d) => (Er("data-v-6828c464"), d = d(), yr(), d), Pn = { class: "programming_top_bar_wrapper" }, Cn = { class: "left" }, wn = On(() => W("img", { class: "icon-back", src: Mo, style: { width: "9px", height: "17px" } }, null, -1)), Sn = [wn], In = { class: "title" }, xn = { class: "right" }, An = dt({ __name: "TopBar", props: { name: { default: Pe("Blockly.programming") } }, emits: ["back"], setup(d, { emit: l }) {
  const { topLeft: y } = _r(Gr()), b = () => {
    Yr("backToApp", ""), l("back"), k.DropDownDiv.clearContent(), k.DropDownDiv.hide();
  }, C = () => {
    const S = document.getElementsByClassName("blocklyTreeRowContentContainer");
    for (let $ = 0; $ < S.length; $++) {
      const f = S[$];
      f.style.paddingLeft = "".concat(y, "px");
    }
  };
  return Jt(() => y.value, () => {
    C();
  }, { immediate: true }), (S, $) => (St(), wt("div", Pn, [W("div", { class: "top_bar_cont", style: ko({ paddingLeft: "".concat(Math.max(ee(y), 0), "px") }) }, [W("div", Cn, [W("div", { class: "btn-back", onClick: b }, Sn), W("span", In, Ye(S.name), 1)]), W("div", xn, [Kt($o)])], 4)]));
} }), kn = Zt(An, [["__scopeId", "data-v-6828c464"]]);
var zr = { exports: {} }, hr = { exports: {} }, Vr;
function $n() {
  return Vr || (Vr = 1, function(d, l) {
    (function(y, b) {
      d.exports = b(Lo());
    })(It, function(y) {
      var b = y.__namespace__, C = function(o, s) {
        return [s.quote_(o.getFieldValue("COLOUR")), E.ATOMIC];
      }, S = function(o, s) {
        return s.definitions_.import_random = "import random", ["'#%06x' % random.randint(0, 2**24 - 1)", E.FUNCTION_CALL];
      }, $ = function(o, s) {
        const _ = s.provideFunction_("colour_rgb", "\ndef ".concat(s.FUNCTION_NAME_PLACEHOLDER_, "(r, g, b):\n  r = round(min(100, max(0, r)) * 2.55)\n  g = round(min(100, max(0, g)) * 2.55)\n  b = round(min(100, max(0, b)) * 2.55)\n  return '#%02x%02x%02x' % (r, g, b)\n")), T = s.valueToCode(o, "RED", E.NONE) || 0, w = s.valueToCode(o, "GREEN", E.NONE) || 0;
        return o = s.valueToCode(o, "BLUE", E.NONE) || 0, [_ + "(" + T + ", " + w + ", " + o + ")", E.FUNCTION_CALL];
      }, f = function(o, s) {
        const _ = s.provideFunction_("colour_blend", "\ndef ".concat(s.FUNCTION_NAME_PLACEHOLDER_, "(colour1, colour2, ratio):\n  r1, r2 = int(colour1[1:3], 16), int(colour2[1:3], 16)\n  g1, g2 = int(colour1[3:5], 16), int(colour2[3:5], 16)\n  b1, b2 = int(colour1[5:7], 16), int(colour2[5:7], 16)\n  ratio = min(1, max(0, ratio))\n  r = round(r1 * (1 - ratio) + r2 * ratio)\n  g = round(g1 * (1 - ratio) + g2 * ratio)\n  b = round(b1 * (1 - ratio) + b2 * ratio)\n  return '#%02x%02x%02x' % (r, g, b)\n")), T = s.valueToCode(o, "COLOUR1", E.NONE) || "'#000000'", w = s.valueToCode(o, "COLOUR2", E.NONE) || "'#000000'";
        return o = s.valueToCode(o, "RATIO", E.NONE) || 0, [_ + "(" + T + ", " + w + ", " + o + ")", E.FUNCTION_CALL];
      }, A = function(o, s) {
        return ["[]", E.ATOMIC];
      }, r = function(o, s) {
        const _ = Array(o.itemCount_);
        for (let T = 0; T < o.itemCount_; T++) _[T] = s.valueToCode(o, "ADD" + T, E.NONE) || "None";
        return ["[" + _.join(", ") + "]", E.ATOMIC];
      }, t = function(o, s) {
        const _ = s.valueToCode(o, "ITEM", E.NONE) || "None";
        return o = s.valueToCode(o, "NUM", E.MULTIPLICATIVE) || "0", ["[" + _ + "] * " + o, E.MULTIPLICATIVE];
      }, e = function(o, s) {
        return ["len(" + (s.valueToCode(o, "VALUE", E.NONE) || "[]") + ")", E.FUNCTION_CALL];
      }, n = function(o, s) {
        return ["not len(" + (s.valueToCode(o, "VALUE", E.NONE) || "[]") + ")", E.LOGICAL_NOT];
      }, a = function(o, s) {
        const _ = s.valueToCode(o, "FIND", E.NONE) || "[]", T = s.valueToCode(o, "VALUE", E.NONE) || "''";
        let w = " -1", D = "", Oe = " - 1";
        return o.workspace.options.oneBasedIndex && (w = " 0", D = " + 1", Oe = ""), [(o.getFieldValue("END") === "FIRST" ? s.provideFunction_("first_index", "\ndef ".concat(s.FUNCTION_NAME_PLACEHOLDER_, "(my_list, elem):\n  try: index = my_list.index(elem)").concat(D, "\n  except: index =").concat(w, "\n  return index\n")) : s.provideFunction_("last_index", "\ndef ".concat(s.FUNCTION_NAME_PLACEHOLDER_, "(my_list, elem):\n  try: index = len(my_list) - my_list[::-1].index(elem)").concat(Oe, "\n  except: index =").concat(w, "\n  return index\n"))) + "(" + T + ", " + _ + ")", E.FUNCTION_CALL];
      }, u = function(o, s) {
        const _ = o.getFieldValue("MODE") || "GET", T = o.getFieldValue("WHERE") || "FROM_START";
        var w = s.valueToCode(o, "VALUE", T === "RANDOM" ? E.NONE : E.MEMBER) || "[]";
        switch (T) {
          case "FIRST":
            if (_ === "GET") return [w + "[0]", E.MEMBER];
            if (_ === "GET_REMOVE") return [w + ".pop(0)", E.FUNCTION_CALL];
            if (_ === "REMOVE") return w + ".pop(0)\n";
            break;
          case "LAST":
            if (_ === "GET") return [w + "[-1]", E.MEMBER];
            if (_ === "GET_REMOVE") return [w + ".pop()", E.FUNCTION_CALL];
            if (_ === "REMOVE") return w + ".pop()\n";
            break;
          case "FROM_START":
            if (o = s.getAdjustedInt(o, "AT"), _ === "GET") return [w + "[" + o + "]", E.MEMBER];
            if (_ === "GET_REMOVE") return [w + ".pop(" + o + ")", E.FUNCTION_CALL];
            if (_ === "REMOVE") return w + ".pop(" + o + ")\n";
            break;
          case "FROM_END":
            if (o = s.getAdjustedInt(o, "AT", 1, true), _ === "GET") return [w + "[" + o + "]", E.MEMBER];
            if (_ === "GET_REMOVE") return [w + ".pop(" + o + ")", E.FUNCTION_CALL];
            if (_ === "REMOVE") return w + ".pop(" + o + ")\n";
            break;
          case "RANDOM":
            if (s.definitions_.import_random = "import random", _ === "GET") return ["random.choice(" + w + ")", E.FUNCTION_CALL];
            if (w = s.provideFunction_("lists_remove_random_item", "\ndef ".concat(s.FUNCTION_NAME_PLACEHOLDER_, "(myList):\n  x = int(random.random() * len(myList))\n  return myList.pop(x)\n")) + "(" + w + ")", _ === "GET_REMOVE") return [w, E.FUNCTION_CALL];
            if (_ === "REMOVE") return w + "\n";
        }
        throw Error("Unhandled combination (lists_getIndex).");
      }, c = function(o, s) {
        let _ = s.valueToCode(o, "LIST", E.MEMBER) || "[]";
        const T = o.getFieldValue("MODE") || "GET";
        var w = o.getFieldValue("WHERE") || "FROM_START";
        const D = s.valueToCode(o, "TO", E.NONE) || "None";
        switch (w) {
          case "FIRST":
            if (T === "SET") return _ + "[0] = " + D + "\n";
            if (T === "INSERT") return _ + ".insert(0, " + D + ")\n";
            break;
          case "LAST":
            if (T === "SET") return _ + "[-1] = " + D + "\n";
            if (T === "INSERT") return _ + ".append(" + D + ")\n";
            break;
          case "FROM_START":
            if (s = s.getAdjustedInt(o, "AT"), T === "SET") return _ + "[" + s + "] = " + D + "\n";
            if (T === "INSERT") return _ + ".insert(" + s + ", " + D + ")\n";
            break;
          case "FROM_END":
            if (s = s.getAdjustedInt(o, "AT", 1, true), T === "SET") return _ + "[" + s + "] = " + D + "\n";
            if (T === "INSERT") return _ + ".insert(" + s + ", " + D + ")\n";
            break;
          case "RANDOM":
            if (s.definitions_.import_random = "import random", _.match(/^\w+$/) ? o = "" : (o = s.nameDB_.getDistinctName("tmp_list", b.NameType$$module$build$src$core$names.VARIABLE), w = o + " = " + _ + "\n", _ = o, o = w), s = s.nameDB_.getDistinctName("tmp_x", b.NameType$$module$build$src$core$names.VARIABLE), o += s + " = int(random.random() * len(" + _ + "))\n", T === "SET") return o + (_ + "[" + s + "] = " + D + "\n");
            if (T === "INSERT") return o + (_ + ".insert(" + s + ", " + D + ")\n");
        }
        throw Error("Unhandled combination (lists_setIndex).");
      }, i = function(o, s) {
        const _ = s.valueToCode(o, "LIST", E.MEMBER) || "[]";
        var T = o.getFieldValue("WHERE1");
        const w = o.getFieldValue("WHERE2");
        switch (T) {
          case "FROM_START":
            T = s.getAdjustedInt(o, "AT1"), T === 0 && (T = "");
            break;
          case "FROM_END":
            T = s.getAdjustedInt(o, "AT1", 1, true);
            break;
          case "FIRST":
            T = "";
            break;
          default:
            throw Error("Unhandled option (lists_getSublist)");
        }
        switch (w) {
          case "FROM_START":
            o = s.getAdjustedInt(o, "AT2", 1);
            break;
          case "FROM_END":
            o = s.getAdjustedInt(o, "AT2", 0, true), b.isNumber$$module$build$src$core$utils$string(String(o)) ? o === 0 && (o = "") : (s.definitions_.import_sys = "import sys", o += " or sys.maxsize");
            break;
          case "LAST":
            o = "";
            break;
          default:
            throw Error("Unhandled option (lists_getSublist)");
        }
        return [_ + "[" + T + " : " + o + "]", E.MEMBER];
      }, m = function(o, s) {
        const _ = s.valueToCode(o, "LIST", E.NONE) || "[]", T = o.getFieldValue("TYPE");
        return o = o.getFieldValue("DIRECTION") === "1" ? "False" : "True", [s.provideFunction_("lists_sort", "\ndef ".concat(s.FUNCTION_NAME_PLACEHOLDER_, '(my_list, type, reverse):\n  def try_float(s):\n    try:\n      return float(s)\n    except:\n      return 0\n  key_funcs = {\n    "NUMERIC": try_float,\n    "TEXT": str,\n    "IGNORE_CASE": lambda s: str(s).lower()\n  }\n  key_func = key_funcs[type]\n  list_cpy = list(my_list)\n  return sorted(list_cpy, key=key_func, reverse=reverse)\n')) + "(" + _ + ', "' + T + '", ' + o + ")", E.FUNCTION_CALL];
      }, O = function(o, s) {
        var _ = o.getFieldValue("MODE");
        if (_ === "SPLIT") _ = s.valueToCode(o, "INPUT", E.MEMBER) || "''", o = s.valueToCode(o, "DELIM", E.NONE), o = _ + ".split(" + o + ")";
        else if (_ === "JOIN") _ = s.valueToCode(o, "INPUT", E.NONE) || "[]", o = (s.valueToCode(o, "DELIM", E.MEMBER) || "''") + ".join(" + _ + ")";
        else throw Error("Unknown mode: " + _);
        return [o, E.FUNCTION_CALL];
      }, x = function(o, s) {
        return ["list(reversed(" + (s.valueToCode(o, "LIST", E.NONE) || "[]") + "))", E.FUNCTION_CALL];
      }, F = function(o, s) {
        let _ = 0, T = "", w, D;
        s.STATEMENT_PREFIX && (T += s.injectId(s.STATEMENT_PREFIX, o));
        do
          D = s.valueToCode(o, "IF" + _, E.NONE) || "False", w = s.statementToCode(o, "DO" + _) || s.PASS, s.STATEMENT_SUFFIX && (w = s.prefixLines(s.injectId(s.STATEMENT_SUFFIX, o), s.INDENT) + w), T += (_ === 0 ? "if " : "elif ") + D + ":\n" + w, _++;
        while (o.getInput("IF" + _));
        return (o.getInput("ELSE") || s.STATEMENT_SUFFIX) && (w = s.statementToCode(o, "ELSE") || s.PASS, s.STATEMENT_SUFFIX && (w = s.prefixLines(s.injectId(s.STATEMENT_SUFFIX, o), s.INDENT) + w), T += "else:\n" + w), T;
      }, M = function(o, s) {
        const _ = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[o.getFieldValue("OP")], T = E.RELATIONAL, w = s.valueToCode(o, "A", T) || "0";
        return o = s.valueToCode(o, "B", T) || "0", [w + " " + _ + " " + o, T];
      }, U = function(o, s) {
        const _ = o.getFieldValue("OP") === "AND" ? "and" : "or", T = _ === "and" ? E.LOGICAL_AND : E.LOGICAL_OR;
        let w = s.valueToCode(o, "A", T);
        return o = s.valueToCode(o, "B", T), w || o ? (s = _ === "and" ? "True" : "False", w || (w = s), o || (o = s)) : o = w = "False", [w + " " + _ + " " + o, T];
      }, V = function(o, s) {
        return ["not " + (s.valueToCode(o, "BOOL", E.LOGICAL_NOT) || "True"), E.LOGICAL_NOT];
      }, B = function(o, s) {
        return [o.getFieldValue("BOOL") === "TRUE" ? "True" : "False", E.ATOMIC];
      }, q = function(o, s) {
        return ["None", E.ATOMIC];
      }, Se = function(o, s) {
        const _ = s.valueToCode(o, "IF", E.CONDITIONAL) || "False", T = s.valueToCode(o, "THEN", E.CONDITIONAL) || "None";
        return o = s.valueToCode(o, "ELSE", E.CONDITIONAL) || "None", [T + " if " + _ + " else " + o, E.CONDITIONAL];
      }, pe = function(o, s) {
        let _;
        _ = o.getField("TIMES") ? String(parseInt(o.getFieldValue("TIMES"), 10)) : s.valueToCode(o, "TIMES", E.NONE) || "0", _ = b.isNumber$$module$build$src$core$utils$string(_) ? parseInt(_, 10) : "int(" + _ + ")";
        let T = s.statementToCode(o, "DO");
        return T = s.addLoopTrap(T, o) || s.PASS, "for " + s.nameDB_.getDistinctName("count", b.NameType$$module$build$src$core$names.VARIABLE) + " in range(" + _ + "):\n" + T;
      }, ve = function(o, s) {
        const _ = o.getFieldValue("MODE") === "UNTIL";
        let T = s.valueToCode(o, "BOOL", _ ? E.LOGICAL_NOT : E.NONE) || "False", w = s.statementToCode(o, "DO");
        return w = s.addLoopTrap(w, o) || s.PASS, _ && (T = "not " + T), "while " + T + ":\n" + w;
      }, we = function(o, s) {
        const _ = s.getVariableName(o.getFieldValue("VAR"));
        var T = s.valueToCode(o, "FROM", E.NONE) || "0", w = s.valueToCode(o, "TO", E.NONE) || "0", D = s.valueToCode(o, "BY", E.NONE) || "1";
        let Oe = s.statementToCode(o, "DO");
        Oe = s.addLoopTrap(Oe, o) || s.PASS;
        let De = "";
        o = function() {
          return s.provideFunction_("upRange", "\ndef ".concat(s.FUNCTION_NAME_PLACEHOLDER_, "(start, stop, step):\n  while start <= stop:\n    yield start\n    start += abs(step)\n"));
        };
        const He = function() {
          return s.provideFunction_("downRange", "\ndef ".concat(s.FUNCTION_NAME_PLACEHOLDER_, "(start, stop, step):\n  while start >= stop:\n    yield start\n    start -= abs(step)\n"));
        };
        if (b.isNumber$$module$build$src$core$utils$string(T) && b.isNumber$$module$build$src$core$utils$string(w) && b.isNumber$$module$build$src$core$utils$string(D)) T = Number(T), w = Number(w), D = Math.abs(Number(D)), T % 1 === 0 && w % 1 === 0 && D % 1 === 0 ? (T <= w ? (w++, o = T === 0 && D === 1 ? w : T + ", " + w, D !== 1 && (o += ", " + D)) : (w--, o = T + ", " + w + ", -" + D), o = "range(" + o + ")") : (o = T < w ? o() : He(), o += "(" + T + ", " + w + ", " + D + ")");
        else {
          const Le = function(Ae, ke) {
            return b.isNumber$$module$build$src$core$utils$string(Ae) ? Ae = String(Number(Ae)) : Ae.match(/^\w+$/) || (ke = s.nameDB_.getDistinctName(_ + ke, b.NameType$$module$build$src$core$names.VARIABLE), De += ke + " = " + Ae + "\n", Ae = ke), Ae;
          };
          T = Le(T, "_start"), w = Le(w, "_end"), D = Le(D, "_inc"), typeof T == "number" && typeof w == "number" ? (o = T < w ? o() : He(), o += "(" + T + ", " + w + ", " + D + ")") : o = "(" + T + " <= " + w + ") and " + o() + "(" + T + ", " + w + ", " + D + ") or " + He() + "(" + T + ", " + w + ", " + D + ")";
        }
        return De += "for " + _ + " in " + o + ":\n" + Oe;
      }, Z = function(o, s) {
        const _ = s.getVariableName(o.getFieldValue("VAR")), T = s.valueToCode(o, "LIST", E.RELATIONAL) || "[]";
        let w = s.statementToCode(o, "DO");
        return w = s.addLoopTrap(w, o) || s.PASS, "for " + _ + " in " + T + ":\n" + w;
      }, de = function(o, s) {
        let _ = "";
        if (s.STATEMENT_PREFIX && (_ += s.injectId(s.STATEMENT_PREFIX, o)), s.STATEMENT_SUFFIX && (_ += s.injectId(s.STATEMENT_SUFFIX, o)), s.STATEMENT_PREFIX) {
          const T = o.getSurroundLoop();
          T && !T.suppressPrefixSuffix && (_ += s.injectId(s.STATEMENT_PREFIX, T));
        }
        switch (o.getFieldValue("FLOW")) {
          case "BREAK":
            return _ + "break\n";
          case "CONTINUE":
            return _ + "continue\n";
        }
        throw Error("Unknown flow statement.");
      }, Y = function(o, s) {
        return o = Number(o.getFieldValue("NUM")), o === 1 / 0 ? ['float("inf")', E.FUNCTION_CALL] : o === -1 / 0 ? ['-float("inf")', E.UNARY_SIGN] : [String(o), 0 > o ? E.UNARY_SIGN : E.ATOMIC];
      }, R = function(o, s) {
        var _ = { ADD: [" + ", E.ADDITIVE], MINUS: [" - ", E.ADDITIVE], MULTIPLY: [" * ", E.MULTIPLICATIVE], DIVIDE: [" / ", E.MULTIPLICATIVE], POWER: [" ** ", E.EXPONENTIATION] }[o.getFieldValue("OP")];
        const T = _[0];
        _ = _[1];
        const w = s.valueToCode(o, "A", _) || "0";
        return o = s.valueToCode(o, "B", _) || "0", [w + T + o, _];
      }, p = function(o, s) {
        const _ = o.getFieldValue("OP");
        let T;
        if (_ === "NEG") return T = s.valueToCode(o, "NUM", E.UNARY_SIGN) || "0", ["-" + T, E.UNARY_SIGN];
        switch (s.definitions_.import_math = "import math", o = _ === "SIN" || _ === "COS" || _ === "TAN" ? s.valueToCode(o, "NUM", E.MULTIPLICATIVE) || "0" : s.valueToCode(o, "NUM", E.NONE) || "0", _) {
          case "ABS":
            T = "math.fabs(" + o + ")";
            break;
          case "ROOT":
            T = "math.sqrt(" + o + ")";
            break;
          case "LN":
            T = "math.log(" + o + ")";
            break;
          case "LOG10":
            T = "math.log10(" + o + ")";
            break;
          case "EXP":
            T = "math.exp(" + o + ")";
            break;
          case "POW10":
            T = "math.pow(10," + o + ")";
            break;
          case "ROUND":
            T = "round(" + o + ")";
            break;
          case "ROUNDUP":
            T = "math.ceil(" + o + ")";
            break;
          case "ROUNDDOWN":
            T = "math.floor(" + o + ")";
            break;
          case "SIN":
            T = "math.sin(" + o + " / 180.0 * math.pi)";
            break;
          case "COS":
            T = "math.cos(" + o + " / 180.0 * math.pi)";
            break;
          case "TAN":
            T = "math.tan(" + o + " / 180.0 * math.pi)";
        }
        if (T) return [T, E.FUNCTION_CALL];
        switch (_) {
          case "ASIN":
            T = "math.asin(" + o + ") / math.pi * 180";
            break;
          case "ACOS":
            T = "math.acos(" + o + ") / math.pi * 180";
            break;
          case "ATAN":
            T = "math.atan(" + o + ") / math.pi * 180";
            break;
          default:
            throw Error("Unknown math operator: " + _);
        }
        return [T, E.MULTIPLICATIVE];
      }, v = function(o, s) {
        const _ = { PI: ["math.pi", E.MEMBER], E: ["math.e", E.MEMBER], GOLDEN_RATIO: ["(1 + math.sqrt(5)) / 2", E.MULTIPLICATIVE], SQRT2: ["math.sqrt(2)", E.MEMBER], SQRT1_2: ["math.sqrt(1.0 / 2)", E.MEMBER], INFINITY: ["float('inf')", E.ATOMIC] };
        return o = o.getFieldValue("CONSTANT"), o !== "INFINITY" && (s.definitions_.import_math = "import math"), _[o];
      }, N = function(o, s) {
        var _ = { EVEN: [" % 2 == 0", E.MULTIPLICATIVE, E.RELATIONAL], ODD: [" % 2 == 1", E.MULTIPLICATIVE, E.RELATIONAL], WHOLE: [" % 1 == 0", E.MULTIPLICATIVE, E.RELATIONAL], POSITIVE: [" > 0", E.RELATIONAL, E.RELATIONAL], NEGATIVE: [" < 0", E.RELATIONAL, E.RELATIONAL], DIVISIBLE_BY: [null, E.MULTIPLICATIVE, E.RELATIONAL], PRIME: [null, E.NONE, E.FUNCTION_CALL] };
        const T = o.getFieldValue("PROPERTY"), [w, D, Oe] = _[T];
        if (_ = s.valueToCode(o, "NUMBER_TO_CHECK", D) || "0", T === "PRIME") s.definitions_.import_math = "import math", s.definitions_.from_numbers_import_Number = "from numbers import Number", o = s.provideFunction_("math_isPrime", "\ndef ".concat(s.FUNCTION_NAME_PLACEHOLDER_, "(n):\n  # https://en.wikipedia.org/wiki/Primality_test#Naive_methods\n  # If n is not a number but a string, try parsing it.\n  if not isinstance(n, Number):\n    try:\n      n = float(n)\n    except:\n      return False\n  if n == 2 or n == 3:\n    return True\n  # False if n is negative, is 1, or not whole, or if n is divisible by 2 or 3.\n  if n <= 1 or n % 1 != 0 or n % 2 == 0 or n % 3 == 0:\n    return False\n  # Check all the numbers of form 6k +/- 1, up to sqrt(n).\n  for x in range(6, int(math.sqrt(n)) + 2, 6):\n    if n % (x - 1) == 0 or n % (x + 1) == 0:\n      return False\n  return True\n")) + "(" + _ + ")";
        else if (T === "DIVISIBLE_BY") {
          if (o = s.valueToCode(o, "DIVISOR", E.MULTIPLICATIVE) || "0", o === "0") return ["False", E.ATOMIC];
          o = _ + " % " + o + " == 0";
        } else o = _ + w;
        return [o, Oe];
      }, L = function(o, s) {
        s.definitions_.from_numbers_import_Number = "from numbers import Number";
        const _ = s.valueToCode(o, "DELTA", E.ADDITIVE) || "0";
        return o = s.getVariableName(o.getFieldValue("VAR")), o + " = (" + o + " if isinstance(" + o + ", Number) else 0) + " + _ + "\n";
      }, Q = function(o, s) {
        const _ = o.getFieldValue("OP");
        switch (o = s.valueToCode(o, "LIST", E.NONE) || "[]", _) {
          case "SUM":
            s = "sum(" + o + ")";
            break;
          case "MIN":
            s = "min(" + o + ")";
            break;
          case "MAX":
            s = "max(" + o + ")";
            break;
          case "AVERAGE":
            s.definitions_.from_numbers_import_Number = "from numbers import Number", s = s.provideFunction_("math_mean", "\ndef ".concat(s.FUNCTION_NAME_PLACEHOLDER_, "(myList):\n  localList = [e for e in myList if isinstance(e, Number)]\n  if not localList: return\n  return float(sum(localList)) / len(localList)\n")) + "(" + o + ")";
            break;
          case "MEDIAN":
            s.definitions_.from_numbers_import_Number = "from numbers import Number", s = s.provideFunction_("math_median", "\ndef ".concat(s.FUNCTION_NAME_PLACEHOLDER_, "(myList):\n  localList = sorted([e for e in myList if isinstance(e, Number)])\n  if not localList: return\n  if len(localList) % 2 == 0:\n    return (localList[len(localList) // 2 - 1] + localList[len(localList) // 2]) / 2.0\n  else:\n    return localList[(len(localList) - 1) // 2]\n")) + "(" + o + ")";
            break;
          case "MODE":
            s = s.provideFunction_("math_modes", "\ndef ".concat(s.FUNCTION_NAME_PLACEHOLDER_, '(some_list):\n  modes = []\n  # Using a lists of [item, count] to keep count rather than dict\n  # to avoid "unhashable" errors when the counted item is itself a list or dict.\n  counts = []\n  maxCount = 1\n  for item in some_list:\n    found = False\n    for count in counts:\n      if count[0] == item:\n        count[1] += 1\n        maxCount = max(maxCount, count[1])\n        found = True\n    if not found:\n      counts.append([item, 1])\n  for counted_item, item_count in counts:\n    if item_count == maxCount:\n      modes.append(counted_item)\n  return modes\n')) + "(" + o + ")";
            break;
          case "STD_DEV":
            s.definitions_.import_math = "import math", s = s.provideFunction_("math_standard_deviation", "\ndef ".concat(s.FUNCTION_NAME_PLACEHOLDER_, "(numbers):\n  n = len(numbers)\n  if n == 0: return\n  mean = float(sum(numbers)) / n\n  variance = sum((x - mean) ** 2 for x in numbers) / n\n  return math.sqrt(variance)\n")) + "(" + o + ")";
            break;
          case "RANDOM":
            s.definitions_.import_random = "import random", s = "random.choice(" + o + ")";
            break;
          default:
            throw Error("Unknown operator: " + _);
        }
        return [s, E.FUNCTION_CALL];
      }, ae = function(o, s) {
        const _ = s.valueToCode(o, "DIVIDEND", E.MULTIPLICATIVE) || "0";
        return o = s.valueToCode(o, "DIVISOR", E.MULTIPLICATIVE) || "0", [_ + " % " + o, E.MULTIPLICATIVE];
      }, be = function(o, s) {
        const _ = s.valueToCode(o, "VALUE", E.NONE) || "0", T = s.valueToCode(o, "LOW", E.NONE) || "0";
        return o = s.valueToCode(o, "HIGH", E.NONE) || "float('inf')", ["min(max(" + _ + ", " + T + "), " + o + ")", E.FUNCTION_CALL];
      }, he = function(o, s) {
        s.definitions_.import_random = "import random";
        const _ = s.valueToCode(o, "FROM", E.NONE) || "0";
        return o = s.valueToCode(o, "TO", E.NONE) || "0", ["random.randint(" + _ + ", " + o + ")", E.FUNCTION_CALL];
      }, Be = function(o, s) {
        return s.definitions_.import_random = "import random", ["random.random()", E.FUNCTION_CALL];
      }, Ue = function(o, s) {
        s.definitions_.import_math = "import math";
        const _ = s.valueToCode(o, "X", E.NONE) || "0";
        return ["math.atan2(" + (s.valueToCode(o, "Y", E.NONE) || "0") + ", " + _ + ") / math.pi * 180", E.MULTIPLICATIVE];
      }, Ve = function(o, s) {
        var _ = [], T = o.workspace, w = b.allUsedVarModels$$module$build$src$core$variables(T) || [];
        for (var D of w) w = D.name, o.getVars().indexOf(w) === -1 && _.push(s.getVariableName(w));
        for (T = b.allDeveloperVariables$$module$build$src$core$variables(T), D = 0; D < T.length; D++) _.push(s.nameDB_.getName(T[D], b.NameType$$module$build$src$core$names.DEVELOPER_VARIABLE));
        T = _.length ? s.INDENT + "global " + _.join(", ") + "\n" : "", _ = s.getProcedureName(o.getFieldValue("NAME")), D = "", s.STATEMENT_PREFIX && (D += s.injectId(s.STATEMENT_PREFIX, o)), s.STATEMENT_SUFFIX && (D += s.injectId(s.STATEMENT_SUFFIX, o)), D && (D = s.prefixLines(D, s.INDENT)), w = "", s.INFINITE_LOOP_TRAP && (w = s.prefixLines(s.injectId(s.INFINITE_LOOP_TRAP, o), s.INDENT));
        let Oe = s.statementToCode(o, "STACK"), De = s.valueToCode(o, "RETURN", E.NONE) || "", He = "";
        Oe && De && (He = D), De ? De = s.INDENT + "return " + De + "\n" : Oe || (Oe = s.PASS);
        const Le = [], Ae = o.getVars();
        for (let ke = 0; ke < Ae.length; ke++) Le[ke] = s.getVariableName(Ae[ke]);
        return T = "def " + _ + "(" + Le.join(", ") + "):\n" + T + D + w + Oe + He + De, T = s.scrub_(o, T), s.definitions_["%" + _] = T, null;
      }, Qe = function(o, s) {
        const _ = s.getProcedureName(o.getFieldValue("NAME")), T = [], w = o.getVars();
        for (let D = 0; D < w.length; D++) T[D] = s.valueToCode(o, "ARG" + D, E.NONE) || "None";
        return [_ + "(" + T.join(", ") + ")", E.FUNCTION_CALL];
      }, pt = function(o, s) {
        return s.forBlock.procedures_callreturn(o, s)[0] + "\n";
      }, ht = function(o, s) {
        let _ = "if " + (s.valueToCode(o, "CONDITION", E.NONE) || "False") + ":\n";
        return s.STATEMENT_SUFFIX && (_ += s.prefixLines(s.injectId(s.STATEMENT_SUFFIX, o), s.INDENT)), o.hasReturnValue_ ? (o = s.valueToCode(o, "VALUE", E.NONE) || "None", _ += s.INDENT + "return " + o + "\n") : _ += s.INDENT + "return\n", _;
      }, j = function(o, s) {
        return [s.quote_(o.getFieldValue("TEXT")), E.ATOMIC];
      }, z = function(o, s) {
        return o = s.multiline_quote_(o.getFieldValue("TEXT")), s = o.indexOf("+") !== -1 ? E.ADDITIVE : E.ATOMIC, [o, s];
      }, te = function(o, s) {
        switch (o.itemCount_) {
          case 0:
            return ["''", E.ATOMIC];
          case 1:
            return o = s.valueToCode(o, "ADD0", E.NONE) || "''", et(o);
          case 2:
            var _ = s.valueToCode(o, "ADD0", E.NONE) || "''";
            return o = s.valueToCode(o, "ADD1", E.NONE) || "''", [et(_)[0] + " + " + et(o)[0], E.ADDITIVE];
          default:
            _ = [];
            for (let T = 0; T < o.itemCount_; T++) _[T] = s.valueToCode(o, "ADD" + T, E.NONE) || "''";
            return o = s.nameDB_.getDistinctName("x", b.NameType$$module$build$src$core$names.VARIABLE), ["''.join([str(" + o + ") for " + o + " in [" + _.join(", ") + "]])", E.FUNCTION_CALL];
        }
      }, fe = function(o, s) {
        const _ = s.getVariableName(o.getFieldValue("VAR"));
        return o = s.valueToCode(o, "TEXT", E.NONE) || "''", _ + " = str(" + _ + ") + " + et(o)[0] + "\n";
      }, je = function(o, s) {
        return ["len(" + (s.valueToCode(o, "VALUE", E.NONE) || "''") + ")", E.FUNCTION_CALL];
      }, xt = function(o, s) {
        return ["not len(" + (s.valueToCode(o, "VALUE", E.NONE) || "''") + ")", E.LOGICAL_NOT];
      }, At = function(o, s) {
        const _ = o.getFieldValue("END") === "FIRST" ? "find" : "rfind", T = s.valueToCode(o, "FIND", E.NONE) || "''";
        return s = (s.valueToCode(o, "VALUE", E.MEMBER) || "''") + "." + _ + "(" + T + ")", o.workspace.options.oneBasedIndex ? [s + " + 1", E.ADDITIVE] : [s, E.FUNCTION_CALL];
      }, ft = function(o, s) {
        const _ = o.getFieldValue("WHERE") || "FROM_START", T = s.valueToCode(o, "VALUE", _ === "RANDOM" ? E.NONE : E.MEMBER) || "''";
        switch (_) {
          case "FIRST":
            return [T + "[0]", E.MEMBER];
          case "LAST":
            return [T + "[-1]", E.MEMBER];
          case "FROM_START":
            return o = s.getAdjustedInt(o, "AT"), [T + "[" + o + "]", E.MEMBER];
          case "FROM_END":
            return o = s.getAdjustedInt(o, "AT", 1, true), [T + "[" + o + "]", E.MEMBER];
          case "RANDOM":
            return s.definitions_.import_random = "import random", [s.provideFunction_("text_random_letter", "\ndef ".concat(s.FUNCTION_NAME_PLACEHOLDER_, "(text):\n  x = int(random.random() * len(text))\n  return text[x]\n")) + "(" + T + ")", E.FUNCTION_CALL];
        }
        throw Error("Unhandled option (text_charAt).");
      }, mt = function(o, s) {
        var _ = o.getFieldValue("WHERE1");
        const T = o.getFieldValue("WHERE2"), w = s.valueToCode(o, "STRING", E.MEMBER) || "''";
        switch (_) {
          case "FROM_START":
            _ = s.getAdjustedInt(o, "AT1"), _ === 0 && (_ = "");
            break;
          case "FROM_END":
            _ = s.getAdjustedInt(o, "AT1", 1, true);
            break;
          case "FIRST":
            _ = "";
            break;
          default:
            throw Error("Unhandled option (text_getSubstring)");
        }
        switch (T) {
          case "FROM_START":
            o = s.getAdjustedInt(o, "AT2", 1);
            break;
          case "FROM_END":
            o = s.getAdjustedInt(o, "AT2", 0, true), b.isNumber$$module$build$src$core$utils$string(String(o)) ? o === 0 && (o = "") : (s.definitions_.import_sys = "import sys", o += " or sys.maxsize");
            break;
          case "LAST":
            o = "";
            break;
          default:
            throw Error("Unhandled option (text_getSubstring)");
        }
        return [w + "[" + _ + " : " + o + "]", E.MEMBER];
      }, kt = function(o, s) {
        const _ = { UPPERCASE: ".upper()", LOWERCASE: ".lower()", TITLECASE: ".title()" }[o.getFieldValue("CASE")];
        return [(s.valueToCode(o, "TEXT", E.MEMBER) || "''") + _, E.FUNCTION_CALL];
      }, $t = function(o, s) {
        const _ = { LEFT: ".lstrip()", RIGHT: ".rstrip()", BOTH: ".strip()" }[o.getFieldValue("MODE")];
        return [(s.valueToCode(o, "TEXT", E.MEMBER) || "''") + _, E.FUNCTION_CALL];
      }, Mt = function(o, s) {
        return "print(" + (s.valueToCode(o, "TEXT", E.NONE) || "''") + ")\n";
      }, gt = function(o, s) {
        var _ = s.provideFunction_("text_prompt", "\ndef ".concat(s.FUNCTION_NAME_PLACEHOLDER_, "(msg):\n  try:\n    return raw_input(msg)\n  except NameError:\n    return input(msg)\n"));
        return s = o.getField("TEXT") ? s.quote_(o.getFieldValue("TEXT")) : s.valueToCode(o, "TEXT", E.NONE) || "''", _ = _ + "(" + s + ")", o.getFieldValue("TYPE") === "NUMBER" && (_ = "float(" + _ + ")"), [_, E.FUNCTION_CALL];
      }, Lt = function(o, s) {
        const _ = s.valueToCode(o, "TEXT", E.MEMBER) || "''";
        return o = s.valueToCode(o, "SUB", E.NONE) || "''", [_ + ".count(" + o + ")", E.FUNCTION_CALL];
      }, Ft = function(o, s) {
        const _ = s.valueToCode(o, "TEXT", E.MEMBER) || "''", T = s.valueToCode(o, "FROM", E.NONE) || "''";
        return o = s.valueToCode(o, "TO", E.NONE) || "''", [_ + ".replace(" + T + ", " + o + ")", E.MEMBER];
      }, ot = function(o, s) {
        return [(s.valueToCode(o, "TEXT", E.MEMBER) || "''") + "[::-1]", E.MEMBER];
      }, Dt = function(o, s) {
        return [s.getVariableName(o.getFieldValue("VAR")), E.ATOMIC];
      }, nt = function(o, s) {
        const _ = s.valueToCode(o, "VALUE", E.NONE) || "0";
        return s.getVariableName(o.getFieldValue("VAR")) + " = " + _ + "\n";
      }, E;
      (function(o) {
        o[o.ATOMIC = 0] = "ATOMIC", o[o.COLLECTION = 1] = "COLLECTION", o[o.STRING_CONVERSION = 1] = "STRING_CONVERSION", o[o.MEMBER = 2.1] = "MEMBER", o[o.FUNCTION_CALL = 2.2] = "FUNCTION_CALL", o[o.EXPONENTIATION = 3] = "EXPONENTIATION", o[o.UNARY_SIGN = 4] = "UNARY_SIGN", o[o.BITWISE_NOT = 4] = "BITWISE_NOT", o[o.MULTIPLICATIVE = 5] = "MULTIPLICATIVE", o[o.ADDITIVE = 6] = "ADDITIVE", o[o.BITWISE_SHIFT = 7] = "BITWISE_SHIFT", o[o.BITWISE_AND = 8] = "BITWISE_AND", o[o.BITWISE_XOR = 9] = "BITWISE_XOR", o[o.BITWISE_OR = 10] = "BITWISE_OR", o[o.RELATIONAL = 11] = "RELATIONAL", o[o.LOGICAL_NOT = 12] = "LOGICAL_NOT", o[o.LOGICAL_AND = 13] = "LOGICAL_AND", o[o.LOGICAL_OR = 14] = "LOGICAL_OR", o[o.CONDITIONAL = 15] = "CONDITIONAL", o[o.LAMBDA = 16] = "LAMBDA", o[o.NONE = 99] = "NONE";
      })(E || (E = {}));
      var We = class extends b.CodeGenerator$$module$build$src$core$generator {
        constructor(o = "Python") {
          super(o), this.ORDER_OVERRIDES = [[E.FUNCTION_CALL, E.MEMBER], [E.FUNCTION_CALL, E.FUNCTION_CALL], [E.MEMBER, E.MEMBER], [E.MEMBER, E.FUNCTION_CALL], [E.LOGICAL_NOT, E.LOGICAL_NOT], [E.LOGICAL_AND, E.LOGICAL_AND], [E.LOGICAL_OR, E.LOGICAL_OR]], this.PASS = "", this.isInitialized = false;
          for (const s in E) o = E[s], typeof o != "string" && (this["ORDER_" + s] = o);
          this.addReservedWords("False,None,True,and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,nonlocal,not,or,pass,print,raise,return,try,while,with,yield,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,ArithmeticError,AssertionError,AttributeError,BaseException,BlockingIOError,BrokenPipeError,BufferError,BytesWarning,ChildProcessError,ConnectionAbortedError,ConnectionError,ConnectionRefusedError,ConnectionResetError,DeprecationWarning,EOFError,Ellipsis,EnvironmentError,Exception,FileExistsError,FileNotFoundError,FloatingPointError,FutureWarning,GeneratorExit,IOError,ImportError,ImportWarning,IndentationError,IndexError,InterruptedError,IsADirectoryError,KeyError,KeyboardInterrupt,LookupError,MemoryError,ModuleNotFoundError,NameError,NotADirectoryError,NotImplemented,NotImplementedError,OSError,OverflowError,PendingDeprecationWarning,PermissionError,ProcessLookupError,RecursionError,ReferenceError,ResourceWarning,RuntimeError,RuntimeWarning,StandardError,StopAsyncIteration,StopIteration,SyntaxError,SyntaxWarning,SystemError,SystemExit,TabError,TimeoutError,TypeError,UnboundLocalError,UnicodeDecodeError,UnicodeEncodeError,UnicodeError,UnicodeTranslateError,UnicodeWarning,UserWarning,ValueError,Warning,ZeroDivisionError,_,__build_class__,__debug__,__doc__,__import__,__loader__,__name__,__package__,__spec__,abs,all,any,apply,ascii,basestring,bin,bool,buffer,bytearray,bytes,callable,chr,classmethod,cmp,coerce,compile,complex,copyright,credits,delattr,dict,dir,divmod,enumerate,eval,exec,execfile,exit,file,filter,float,format,frozenset,getattr,globals,hasattr,hash,help,hex,id,input,int,intern,isinstance,issubclass,iter,len,license,list,locals,long,map,max,memoryview,min,next,object,oct,open,ord,pow,print,property,quit,range,raw_input,reduce,reload,repr,reversed,round,set,setattr,slice,sorted,staticmethod,str,sum,super,tuple,type,unichr,unicode,vars,xrange,zip");
        }
        init(o) {
          super.init(o), this.PASS = this.INDENT + "pass\n", this.nameDB_ ? this.nameDB_.reset() : this.nameDB_ = new b.Names$$module$build$src$core$names(this.RESERVED_WORDS_), this.nameDB_.setVariableMap(o.getVariableMap()), this.nameDB_.populateVariables(o), this.nameDB_.populateProcedures(o);
          const s = [];
          var _ = b.allDeveloperVariables$$module$build$src$core$variables(o);
          for (let T = 0; T < _.length; T++) s.push(this.nameDB_.getName(_[T], b.Names$$module$build$src$core$names.DEVELOPER_VARIABLE_TYPE) + " = None");
          for (o = b.allUsedVarModels$$module$build$src$core$variables(o), _ = 0; _ < o.length; _++) s.push(this.getVariableName(o[_].getId()) + " = None");
          this.definitions_.variables = s.join("\n"), this.isInitialized = true;
        }
        finish(o) {
          const s = [], _ = [];
          for (let T in this.definitions_) {
            const w = this.definitions_[T];
            w.match(/^(from\s+\S+\s+)?import\s+\S+/) ? s.push(w) : _.push(w);
          }
          return o = super.finish(o), this.isInitialized = false, this.nameDB_.reset(), (s.join("\n") + "\n\n" + _.join("\n\n")).replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n\n\n") + o;
        }
        scrubNakedValue(o) {
          return o + "\n";
        }
        quote_(o) {
          o = o.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n");
          let s = "'";
          return o.indexOf("'") !== -1 && (o.indexOf('"') === -1 ? s = '"' : o = o.replace(/'/g, "\\'")), s + o + s;
        }
        multiline_quote_(o) {
          return o.split(/\n/g).map(this.quote_).join(" + '\\n' + \n");
        }
        scrub_(o, s, _ = false) {
          let T = "";
          if (!o.outputConnection || !o.outputConnection.targetConnection) {
            var w = o.getCommentText();
            w && (w = b.wrap$$module$build$src$core$utils$string(w, this.COMMENT_WRAP - 3), T += this.prefixLines(w + "\n", "# "));
            for (let D = 0; D < o.inputList.length; D++) o.inputList[D].type === b.inputTypes$$module$build$src$core$inputs$input_types.VALUE && (w = o.inputList[D].connection.targetBlock()) && (w = this.allNestedComments(w)) && (T += this.prefixLines(w, "# "));
          }
          return o = o.nextConnection && o.nextConnection.targetBlock(), _ = _ ? "" : this.blockToCode(o), T + s + _;
        }
        getAdjustedInt(o, s, _ = 0, T = false) {
          o.workspace.options.oneBasedIndex && _--;
          const w = o.workspace.options.oneBasedIndex ? "1" : "0";
          return o = this.valueToCode(o, s, _ ? E.ADDITIVE : E.NONE) || w, b.isNumber$$module$build$src$core$utils$string(o) ? (o = parseInt(o, 10) + _, T && (o = -o)) : (o = 0 < _ ? "int(" + o + " + " + _ + ")" : 0 > _ ? "int(" + o + " - " + -_ + ")" : "int(" + o + ")", T && (o = "-" + o)), o;
        }
      }, Ie = {};
      Ie.colour_blend = f, Ie.colour_picker = C, Ie.colour_random = S, Ie.colour_rgb = $;
      var ie = {};
      ie.lists_create_empty = A, ie.lists_create_with = r, ie.lists_getIndex = u, ie.lists_getSublist = i, ie.lists_indexOf = a, ie.lists_isEmpty = n, ie.lists_length = e, ie.lists_repeat = t, ie.lists_reverse = x, ie.lists_setIndex = c, ie.lists_sort = m, ie.lists_split = O;
      var le = {};
      le.controls_if = F, le.controls_ifelse = F, le.logic_boolean = B, le.logic_compare = M, le.logic_negate = V, le.logic_null = q, le.logic_operation = U, le.logic_ternary = Se;
      var Te = {};
      Te.controls_flow_statements = de, Te.controls_for = we, Te.controls_forEach = Z, Te.controls_repeat = pe, Te.controls_repeat_ext = pe, Te.controls_whileUntil = ve;
      var oe = {};
      oe.math_arithmetic = R, oe.math_atan2 = Ue, oe.math_change = L, oe.math_constant = v, oe.math_constrain = be, oe.math_modulo = ae, oe.math_number = Y, oe.math_number_property = N, oe.math_on_list = Q, oe.math_random_float = Be, oe.math_random_int = he, oe.math_round = p, oe.math_single = p, oe.math_trig = p;
      var xe = {};
      xe.procedures_callnoreturn = pt, xe.procedures_callreturn = Qe, xe.procedures_defnoreturn = Ve, xe.procedures_defreturn = Ve, xe.procedures_ifreturn = ht;
      var Bt = /^\s*'([^']|\\')*'\s*$/, et = function(o) {
        return Bt.test(o) ? [o, E.ATOMIC] : ["str(" + o + ")", E.FUNCTION_CALL];
      }, ue = {};
      ue.text = j, ue.text_append = fe, ue.text_changeCase = kt, ue.text_charAt = ft, ue.text_count = Lt, ue.text_getSubstring = mt, ue.text_indexOf = At, ue.text_isEmpty = xt, ue.text_join = te, ue.text_length = je, ue.text_multiline = z, ue.text_print = Mt, ue.text_prompt = gt, ue.text_prompt_ext = gt, ue.text_replace = Ft, ue.text_reverse = ot, ue.text_trim = $t;
      var it = {};
      it.variables_get = Dt, it.variables_set = nt;
      var Me = {};
      Me.variables_get_dynamic = Dt, Me.variables_set_dynamic = nt;
      var _t = new We();
      _t.addReservedWords("math,random,Number");
      var Et = Object.assign({}, Ie, ie, le, Te, oe, xe, ue, it, Me);
      for (const o in Et) _t.forBlock[o] = Et[o];
      var Xe = {};
      return Xe.Order = E, Xe.PythonGenerator = We, Xe.pythonGenerator = _t, Xe.__namespace__ = b, Xe;
    });
  }(hr)), hr.exports;
}
(function(d, l) {
  (function(y, b) {
    d.exports = b(re, $n());
  })(It, function(y, b) {
    /**
    * @license
    * Copyright 2020 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
    return b;
  });
})(zr);
var gr = zr.exports;
const Jr = () => [{ type: "light_color", message0: "%1 ".concat(k.Msg.headlight_color, ": %2 %3"), args0: [{ type: "field_image", src: new URL("/imageBlockly/lightbulb-solid.png", import.meta.url).href, width: 12, height: 15 }, { type: "field_colour", name: "lightColor", colour: "#ff0000", colourOptions: ["#ff0000", "#ffff00", "#5555ff", "#00ff00", "#8800ff", "#ffffff"], colourTitles: ["\u7EA2", "\u9EC4", "\u84DD", "\u7EFF", "\u7D2B", "\u767D"], columns: 3 }, { type: "input_dummy" }], colour: "#3C8CE6", previousStatement: null, nextStatement: null, code: function(d) {
  return "setColor('".concat(d.getFieldValue("lightColor"), "');");
} }, { type: "light_close", message0: k.Msg.restore_default_headlight, colour: "#3C8CE6", previousStatement: null, nextStatement: null, code: function() {
  return "setColor('0xffffff');";
} }], Mn = () => {
  const d = Jr().map((l) => ({ kind: "block", type: l.type }));
  return d.push({ kind: "label", text: "-", "web-class": "custom-label-style opacity" }), d;
}, vr = { customBlocksDefinition: Jr, blocks: Mn }, qr = () => [{ type: "pose_command", message0: k.Msg.pose_cmd, message1: k.Msg.pose_cmd1, message2: k.Msg.pose_cmd2, args0: [{ type: "field_image", src: new URL("/imageBlockly/clock-solid-long.png", import.meta.url).href, width: 90, height: 15 }, { type: "field_slider", name: "seconds", min: 0.5, max: 3, precision: 0.5, value: 0.5 }], args1: [{ type: "field_slider", name: "roll", min: -18, max: 18, precision: 1 }, { type: "field_slider", name: "pitch", min: -18, max: 18, precision: 1 }], args2: [{ type: "field_slider", name: "yaw", min: -18, max: 18, precision: 1 }, { type: "field_slider", name: "height", min: -0.1, max: 0.03, value: 0, precision: 0.01 }], inputsInLine: true, previousStatement: null, nextStatement: null, colour: "#675BF4", tooltip: "", helpUrl: "", code: function(d) {
  const l = d.getFieldValue("roll"), y = d.getFieldValue("pitch"), b = d.getFieldValue("yaw"), C = d.getFieldValue("height"), S = d.getFieldValue("seconds"), $ = Math.PI / 180;
  return "pose('".concat(l * $, "', '").concat(y * $, "', '").concat(b * $, "', '").concat(C, "', '").concat(S, "');");
} }, { type: "pose_dynamic_command", message0: k.Msg.pose_dynamic_cmd, message1: k.Msg.pose_dynamic_cmd1, message2: k.Msg.pose_dynamic_cmd2, message3: k.Msg.pose_dynamic_cmd3, message4: k.Msg.pose_dynamic_cmd4, args0: [{ type: "field_image", src: new URL("/imageBlockly/clock-solid-long.png", import.meta.url).href, width: 90, height: 15 }, { type: "field_slider", name: "seconds", min: 0.4, max: 4, precision: 0.2, value: 0.4 }], args1: [{ type: "field_slider", name: "roll", min: -18, max: 18, precision: 1 }, { type: "field_dropdown", name: "roll_method", options: [[k.Msg.pose_dynamic_linear, "linear"], [k.Msg.pose_dynamic_ease, "ease"], [k.Msg.pose_dynamic_easein, "ease-in"], [k.Msg.pose_dynamic_easeout, "ease-out"], [k.Msg.pose_dynamic_step, "step"]] }], args2: [{ type: "field_slider", name: "pitch", min: -18, max: 18, precision: 1 }, { type: "field_dropdown", name: "pitch_method", options: [[k.Msg.pose_dynamic_linear, "linear"], [k.Msg.pose_dynamic_ease, "ease"], [k.Msg.pose_dynamic_easein, "ease-in"], [k.Msg.pose_dynamic_easeout, "ease-out"], [k.Msg.pose_dynamic_step, "step"]] }], args3: [{ type: "field_slider", name: "yaw", min: -18, max: 18, precision: 1 }, { type: "field_dropdown", name: "yaw_method", options: [[k.Msg.pose_dynamic_linear, "linear"], [k.Msg.pose_dynamic_ease, "ease"], [k.Msg.pose_dynamic_easein, "ease-in"], [k.Msg.pose_dynamic_easeout, "ease-out"], [k.Msg.pose_dynamic_step, "step"]] }], args4: [{ type: "field_slider", name: "height", min: -0.1, max: 0.03, value: 0, precision: 0.01 }, { type: "field_dropdown", name: "height_method", options: [[k.Msg.pose_dynamic_linear, "linear"], [k.Msg.pose_dynamic_ease, "ease"], [k.Msg.pose_dynamic_easein, "ease-in"], [k.Msg.pose_dynamic_easeout, "ease-out"], [k.Msg.pose_dynamic_step, "step"]] }], inputsInLine: true, previousStatement: null, nextStatement: null, colour: "#675BF4", tooltip: "", helpUrl: "", code: function(d) {
  const l = d.getFieldValue("roll"), y = d.getFieldValue("roll_method"), b = d.getFieldValue("pitch"), C = d.getFieldValue("pitch_method"), S = d.getFieldValue("yaw"), $ = d.getFieldValue("yaw_method"), f = d.getFieldValue("height"), A = d.getFieldValue("height_method"), r = d.getFieldValue("seconds"), t = Math.PI / 180;
  return "poseDynamic('".concat(l * t, "','").concat(y, "', '").concat(b * t, "', '").concat(C, "', \n      '").concat(S * t, "', '").concat($, "', '").concat(f, "','").concat(A, "', '").concat(r, "');");
} }, { type: "stretch_command", message0: k.Msg.stretch, colour: "#675BF4", previousStatement: null, nextStatement: null, code: function() {
  return "processAction('".concat(_e.SPORT_MOD, "', ").concat(Ne.Stretch, ", '');");
} }, { type: "shakeHands_command", message0: k.Msg.shakeHands, colour: "#675BF4", previousStatement: null, nextStatement: null, code: function() {
  return "processAction('".concat(_e.SPORT_MOD, "', ").concat(Ne.Hello, ", '');");
} }, { type: "jumpForward_command", message0: k.Msg.jumpForward, colour: "#675BF4", previousStatement: null, nextStatement: null, code: function() {
  return "processAction('".concat(_e.SPORT_MOD, "', ").concat(Ne.FrontJump, ", '');");
} }, { type: "dance1_command", message0: k.Msg.dance1, colour: "#675BF4", previousStatement: null, nextStatement: null, code: function() {
  return "processAction('".concat(_e.SPORT_MOD, "', ").concat(Ne.Dance1, ", '');");
} }, { type: "dance2_command", message0: k.Msg.dance2, colour: "#675BF4", previousStatement: null, nextStatement: null, code: function() {
  return "processAction('".concat(_e.SPORT_MOD, "', ").concat(Ne.Dance2, ", '');");
} }, { type: "wallow_command", message0: k.Msg.wallow, colour: "#675BF4", previousStatement: null, nextStatement: null, code: function() {
  return "processAction('".concat(_e.SPORT_MOD, "', ").concat(Ne.Wallow, ", '');");
} }, { type: "frontPounce_command", message0: k.Msg.frontPounce, colour: "#675BF4", previousStatement: null, nextStatement: null, code: function() {
  return "processAction('".concat(_e.SPORT_MOD, "', ").concat(Ne.FrontPounce, ", '');");
} }, { type: "happy_command", message0: k.Msg.showHeart, colour: "#675BF4", previousStatement: null, nextStatement: null, code: function() {
  return "processAction('".concat(_e.SPORT_MOD, "', ").concat(Ne.FingerHeart, ", '');");
} }, { type: "scrape_command", message0: k.Msg.newYear, colour: "#675BF4", previousStatement: null, nextStatement: null, code: function() {
  return "processAction('".concat(_e.SPORT_MOD, "', ").concat(Ne.Scrape, ", '');");
} }], Ln = () => {
  const d = qr().map((y) => ({ kind: "block", type: y.type })), l = { kind: "label", text: "-", "web-class": "custom-label-style opacity" };
  return d.push(l), d.push(l), d;
}, Kr = { customBlocksDefinition: qr, blocks: Ln }, Zr = () => [{ type: "move_command", message0: k.Msg.move_cmd, args0: [{ type: "field_dropdown", name: "direction", options: [[k.Msg.forward, "front"], [k.Msg.back, "back"], [k.Msg.left, "left"], [k.Msg.right, "right"]] }, { type: "field_slider", name: "value", min: 0, max: 3, precision: 0.1 }], inputsInLine: true, previousStatement: null, nextStatement: null, colour: "#F2754D", tooltip: "", helpUrl: "", code: function(d) {
  const l = d.getFieldValue("direction"), y = d.getFieldValue("value");
  console.log(l, y);
  const b = { x: 0, y: 0, yawAngle: 0 };
  return l === "front" ? b.x = y : l === "back" ? b.x = -y : l === "left" ? b.y = y : b.y = -y, "move('".concat(b.x, "', '").concat(b.y, "', '").concat(b.yawAngle, "');");
} }, { type: "move_deg_command", message0: k.Msg.move_cmd2, args0: [{ type: "field_angle", name: "angle", value: 0, mode: "compass" }, { type: "field_slider", name: "value", min: 0, max: 3, precision: 0.1 }], inputsInLine: true, previousStatement: null, nextStatement: null, colour: "#F2754D", tooltip: "", helpUrl: "", code: function(d) {
  const l = d.getFieldValue("angle") * (Math.PI / 180), y = d.getFieldValue("value"), b = { x: y * Math.cos(l), y: -y * Math.sin(l), yawAngle: 0 };
  return "move('".concat(b.x, "', '").concat(b.y, "', '").concat(b.yawAngle, "');");
} }, { type: "rotate_deg_command", message0: k.Msg.rotate_cmd, args0: [{ type: "field_angle", name: "angle", value: 0, mode: "compass" }], inputsInLine: true, previousStatement: null, nextStatement: null, colour: "#F2754D", tooltip: "", helpUrl: "", code: function(d) {
  const l = d.getFieldValue("angle"), y = { x: 0, yawAngle: 0 };
  return y.yawAngle = -l * (Math.PI / 180), "move('".concat(y.x, "', '").concat(y.x, "', '").concat(y.yawAngle, "');");
} }, { type: "step_on_command", message0: k.Msg.step_cmd, colour: "#F2754D", previousStatement: null, nextStatement: null, args0: [{ type: "field_slider", name: "value", min: 0, max: 10, precision: 1 }], code: function(d) {
  return "stepSeconds('".concat(d.getFieldValue("value"), "');");
} }], Fn = () => {
  const d = Zr().map((l) => ({ kind: "block", type: l.type }));
  return d.push({ kind: "label", text: "-", "web-class": "custom-label-style opacity" }), d;
}, br = { customBlocksDefinition: Zr, blocks: Fn }, Qr = () => [{ type: "wait_seconds", message0: k.Msg.waiting, args0: [{ type: "field_slider", name: "SECONDS", min: 0, max: 5, precision: 0.1 }], previousStatement: null, nextStatement: null, colour: "#5ba55b", code: function(d) {
  return "waitForSeconds(" + Number(d.getFieldValue("SECONDS")) + ");\n";
} }], Dn = () => {
  const d = Qr().map((l) => ({ kind: "block", type: l.type }));
  return d.unshift({ kind: "block", type: "controls_repeat_ext", inputs: { TIMES: { shadow: { type: "type_num_slider", fields: { NUM: 1 } } } } }), d.push({ kind: "label", text: "-", "web-class": "custom-label-style opacity" }), d;
}, Tr = { customBlocksDefinition: Qr, blocks: Dn }, eo = () => [{ type: "mode_recover_stand", message0: k.Msg.resume_standing, colour: "#EB5050", previousStatement: null, nextStatement: null, code: function() {
  return "sendCmd('".concat(_e.SPORT_MOD, "', ").concat(Ne.RecoveryStand, ", '');");
} }, { type: "mode_damp_command", message0: k.Msg.damping, colour: "#EB5050", previousStatement: null, nextStatement: null, code: function() {
  return "processMode('".concat(_e.SPORT_MOD, "', ").concat(Ne.Damp, ", '',7);");
} }, { type: "mode_run_command", message0: k.Msg.runMode, colour: "#EB5050", previousStatement: null, nextStatement: null, code: function() {
  return "processMode('".concat(_e.SPORT_MOD, "', ").concat(Ne.SwitchGait, ", '{\"data\":2}',0);");
} }, { type: "mode_walk_command", message0: k.Msg.walkMode, colour: "#EB5050", previousStatement: null, nextStatement: null, code: function() {
  return "processMode('".concat(_e.SPORT_MOD, "', ").concat(Ne.SwitchGait, ", '{\"data\":1}',0);");
} }, { type: "mode_lock_command", message0: k.Msg.lock_joints, colour: "#EB5050", previousStatement: null, nextStatement: null, code: function() {
  return "processMode('".concat(_e.SPORT_MOD, "', ").concat(Ne.StandUp, ", '',6);");
} }, { type: "mode_lock_down", message0: k.Msg.lock_down, colour: "#EB5050", previousStatement: null, nextStatement: null, code: function() {
  return "processMode('".concat(_e.SPORT_MOD, "', ").concat(Ne.StandDown, ", '',6);");
} }, { type: "mode_sit_command", message0: k.Msg.sit_down, colour: "#EB5050", previousStatement: null, nextStatement: null, code: function() {
  return "processMode('".concat(_e.SPORT_MOD, "', ").concat(Ne.Sit, ", '',10);");
} }], Bn = () => {
  const d = eo().map((l) => ({ kind: "block", type: l.type }));
  return d.push({ kind: "label", text: "-", "web-class": "custom-label-style opacity" }), d;
}, to = { customBlocksDefinition: eo, blocks: Bn }, ro = () => [{ type: "photo_command", message0: "%1 ".concat(k.Msg.photo), args0: [{ type: "field_image", src: new URL("/imageBlockly/photo.png", import.meta.url).href, width: 15, height: 15 }], colour: "#3CCD9D", previousStatement: null, nextStatement: null, code: function() {
  return "sendCmd('".concat(_e.FRONT_PHOTO_REQ, "', 1001, '{}');");
} }, { type: "video_command", message0: "%1 ".concat(k.Msg.video, " %2 ").concat(k.Msg.seconds), args0: [{ type: "field_image", src: new URL("/imageBlockly/video.png", import.meta.url).href, width: 15, height: 15 }, { type: "field_slider", name: "value", value: 3, min: 3, max: 15 }], colour: "#3CCD9D", previousStatement: null, nextStatement: null, code: function(d) {
  const l = d.getFieldValue("value");
  return "sendCmd('".concat(_e.FRONT_PHOTO_REQ, "', 9999, '").concat(JSON.stringify({ time: l }), "');");
} }], Un = () => {
  const d = ro().map((l) => ({ kind: "block", type: l.type }));
  return d.push({ kind: "label", text: "-", "web-class": "custom-label-style opacity" }), d;
}, oo = { customBlocksDefinition: ro, blocks: Un };
var no = { exports: {} };
/*! For license information please see index.js.LICENSE.txt */
(function(d, l) {
  (function(y, b) {
    d.exports = b(re);
  })(It, (y) => (() => {
    var b = { 573: (f) => {
      f.exports = y;
    } }, C = {};
    function S(f) {
      var A = C[f];
      if (A !== void 0) return A.exports;
      var r = C[f] = { exports: {} };
      return b[f](r, r.exports, S), r.exports;
    }
    S.d = (f, A) => {
      for (var r in A) S.o(A, r) && !S.o(f, r) && Object.defineProperty(f, r, { enumerable: true, get: A[r] });
    }, S.o = (f, A) => Object.prototype.hasOwnProperty.call(f, A), S.r = (f) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(f, "__esModule", { value: true });
    };
    var $ = {};
    return (() => {
      S.r($), S.d($, { ObservableParameterModel: () => n, ObservableProcedureModel: () => F, ProcedureBase: () => A, ProcedureChangeReturn: () => a, ProcedureCreate: () => u, ProcedureDelete: () => c, ProcedureParameterBase: () => r, ProcedureParameterCreate: () => m, ProcedureParameterDelete: () => O, ProcedureParameterRename: () => t, ProcedureRename: () => x, blocks: () => M, isProcedureBlock: () => Z, registerProcedureSerializer: () => Y, triggerProceduresUpdate: () => e, unregisterProcedureBlocks: () => de });
      var f = S(573);
      class A extends f.Events.Abstract {
        constructor(p, v) {
          super(), this.procedure = v, this.type = A.TYPE, this.isBlank = false, this.workspaceId = p.id;
        }
        toJson() {
          const p = super.toJson();
          return p.procedureId = this.procedure.getId(), p;
        }
      }
      A.TYPE = "procedure_base";
      class r extends A {
        constructor(p, v, N) {
          super(p, v), this.parameter = N, this.type = r.TYPE, this.recordUndo = false;
        }
        static findMatchingParameter(p, v, N) {
          const L = p.getProcedureMap().get(v);
          if (!L) return { procedure: void 0, parameter: void 0 };
          const Q = L.getParameters().find((ae) => ae.getId() === N);
          return Q ? { procedure: L, parameter: Q } : { procedure: L, parameter: void 0 };
        }
        toJson() {
          const p = super.toJson();
          return p.parameterId = this.parameter.getId(), p;
        }
      }
      r.TYPE = "procedure_parameter_base";
      class t extends r {
        constructor(p, v, N, L, Q, ae) {
          super(p, v, N), this.oldName = L, this.type = t.TYPE, this.newName = Q != null ? Q : N.getName(), this.newVarId = ae != null ? ae : N.getVariableModel().getId();
        }
        run(p) {
          const { parameter: v } = r.findMatchingParameter(this.getEventWorkspace_(), this.procedure.getId(), this.parameter.getId());
          if (p) {
            if (v.getName() !== this.oldName) return;
            v.setName(this.newName, this.newVarId);
          } else {
            if (v.getName() !== this.newName) return;
            v.setName(this.oldName);
          }
        }
        toJson() {
          const p = super.toJson();
          return p.newName = this.newName, p.newVarId = this.newVarId, p.oldName = this.oldName, p;
        }
        static fromJson(p, v) {
          const { procedure: N, parameter: L } = r.findMatchingParameter(v, p.procedureId, p.parameterId);
          if (!L) throw new Error("Cannot delete a non existant parameter");
          return new t(v, N, L, p.oldName, p.newName, p.newVarId);
        }
      }
      function e(R) {
        if (!R.isClearing) for (const p of R.getAllBlocks(false)) f.procedures.isProcedureBlock(p) && p.doProcedureUpdate();
      }
      t.TYPE = "procedure_parameter_rename", f.registry.register(f.registry.Type.EVENT, t.TYPE, t);
      class n {
        constructor(p, v, N, L) {
          this.workspace = p, this.shouldFireEvents = false, this.procedureModel = null, this.id = N != null ? N : f.utils.idGenerator.genUid(), this.variable = this.createBackingVariable(v, L);
        }
        setName(p, v) {
          var N;
          if (p === this.variable.name) return this;
          const L = this.variable.name;
          return this.variable = (N = this.workspace.getVariable(p)) !== null && N !== void 0 ? N : this.workspace.createVariable(p, "", v), e(this.workspace), this.shouldFireEvents && f.Events.fire(new t(this.workspace, this.procedureModel, this, L)), this;
        }
        createBackingVariable(p, v) {
          var N;
          return this.variable = (N = this.workspace.getVariable(p)) !== null && N !== void 0 ? N : this.workspace.createVariable(p, "", v), this.variable;
        }
        setTypes(p) {
          throw new Error("The built-in ParameterModel does not support typing. You need to implement your own custom ParameterModel.");
        }
        getName() {
          return this.variable.name;
        }
        getTypes() {
          return [];
        }
        getId() {
          return this.id;
        }
        getVariableModel() {
          return this.variable;
        }
        startPublishing() {
          this.shouldFireEvents = true;
        }
        stopPublishing() {
          this.shouldFireEvents = false;
        }
        setProcedureModel(p) {
          return this.procedureModel = p, this;
        }
      }
      class a extends A {
        constructor(p, v, N) {
          super(p, v), this.oldTypes = N, this.type = a.TYPE, this.newTypes = v.getReturnTypes();
        }
        run(p) {
          const v = this.getEventWorkspace_().getProcedureMap().get(this.procedure.getId());
          if (!v) throw new Error("Cannot change the type of a procedure that does not exist in the procedure map");
          p ? v.setReturnTypes(this.newTypes) : v.setReturnTypes(this.oldTypes);
        }
        toJson() {
          const p = super.toJson();
          return p.oldTypes = this.oldTypes, p;
        }
        static fromJson(p, v) {
          const N = v.getProcedureMap().get(p.procedureId);
          if (!N) throw new Error("Cannot deserialize procedure change return event because the target procedure does not exist");
          return new a(v, N, p.oldTypes);
        }
      }
      a.TYPE = "procedure_change", f.registry.register(f.registry.Type.EVENT, a.TYPE, a);
      class u extends A {
        constructor() {
          super(...arguments), this.type = u.TYPE;
        }
        run(p) {
          const v = this.getEventWorkspace_().getProcedureMap();
          if (p) {
            if (v.get(this.procedure.getId())) return;
            v.add(this.procedure);
          } else {
            if (!v.get(this.procedure.getId())) return;
            v.delete(this.procedure.getId());
          }
        }
        toJson() {
          const p = super.toJson();
          return p.procedure = f.serialization.procedures.saveProcedure(this.procedure), p;
        }
        static fromJson(p, v) {
          return new u(v, f.serialization.procedures.loadProcedure(F, n, p.procedure, v));
        }
      }
      u.TYPE = "procedure_create", f.registry.register(f.registry.Type.EVENT, u.TYPE, u);
      class c extends A {
        constructor() {
          super(...arguments), this.type = c.TYPE;
        }
        run(p) {
          const v = this.getEventWorkspace_().getProcedureMap();
          if (p) {
            if (!v.get(this.procedure.getId())) return;
            v.delete(this.procedure.getId());
          } else {
            if (v.get(this.procedure.getId())) return;
            v.add(this.procedure);
          }
        }
        toJson() {
          return super.toJson();
        }
        static fromJson(p, v) {
          const N = v.getProcedureMap().get(p.procedureId);
          if (!N) throw new Error("Cannot deserialize procedure delete event because the target procedure does not exist");
          return new c(v, N);
        }
      }
      c.TYPE = "procedure_delete", f.registry.register(f.registry.Type.EVENT, c.TYPE, c);
      class i extends A {
        constructor(p, v, N) {
          super(p, v), this.type = i.TYPE, N === void 0 ? (this.oldState = !v.getEnabled(), this.newState = v.getEnabled()) : (this.oldState = !N, this.newState = N);
        }
        run(p) {
          const v = this.getEventWorkspace_().getProcedureMap().get(this.procedure.getId());
          if (!v) throw new Error("Cannot change the enabled state of a procedure that does not exist in the procedure map");
          p ? v.setEnabled(this.newState) : v.setEnabled(this.oldState);
        }
        toJson() {
          const p = super.toJson();
          return p.newState = this.newState, p;
        }
        static fromJson(p, v) {
          const N = v.getProcedureMap().get(p.procedureId);
          if (!N) throw new Error("Cannot deserialize procedure enable event because the target procedure does not exist");
          return new i(v, N, p.newState);
        }
      }
      i.TYPE = "procedure_enable", f.registry.register(f.registry.Type.EVENT, i.TYPE, i);
      class m extends r {
        constructor(p, v, N, L) {
          super(p, v, N), this.index = L, this.type = m.TYPE;
        }
        run(p) {
          const v = this.getEventWorkspace_().getProcedureMap().get(this.procedure.getId());
          if (!v) throw new Error("Cannot add a parameter to a procedure that does not exist in the procedure map");
          p ? v.insertParameter(this.parameter, this.index) : v.deleteParameter(this.index);
        }
        toJson() {
          const p = super.toJson();
          return p.name = this.parameter.getName(), p.id = this.parameter.getId(), p.varId = this.parameter.getVariableModel().getId(), p.index = this.index, p;
        }
        static fromJson(p, v) {
          const N = v.getProcedureMap().get(p.procedureId);
          if (!N) throw new Error("Cannot deserialize parameter create event because the target procedure does not exist");
          return new m(v, N, new n(v, p.name, p.id, p.varId), p.index);
        }
      }
      m.TYPE = "procedure_parameter_create", f.registry.register(f.registry.Type.EVENT, m.TYPE, m);
      class O extends r {
        constructor(p, v, N, L) {
          super(p, v, N), this.index = L, this.type = O.TYPE;
        }
        run(p) {
          const v = this.getEventWorkspace_().getProcedureMap().get(this.procedure.getId());
          if (!v) throw new Error("Cannot add a parameter to a procedure that does not exist in the procedure map");
          p ? v.deleteParameter(this.index) : v.insertParameter(this.parameter, this.index);
        }
        toJson() {
          const p = super.toJson();
          return p.index = this.index, p;
        }
        static fromJson(p, v) {
          const { procedure: N, parameter: L } = r.findMatchingParameter(v, p.procedureId, p.parameterId);
          if (!L) throw new Error("Cannot delete a non existant parameter");
          return new O(v, N, L, p.index);
        }
      }
      O.TYPE = "procedure_parameter_delete", f.registry.register(f.registry.Type.EVENT, O.TYPE, O);
      class x extends A {
        constructor(p, v, N, L) {
          super(p, v), this.oldName = N, this.type = x.TYPE, this.newName = L != null ? L : v.getName();
        }
        run(p) {
          const v = this.getEventWorkspace_().getProcedureMap().get(this.procedure.getId());
          if (!v) throw new Error("Cannot change the type of a procedure that does not exist in the procedure map");
          if (p) {
            if (v.getName() !== this.oldName) return;
            v.setName(this.newName);
          } else {
            if (v.getName() !== this.newName) return;
            v.setName(this.oldName);
          }
        }
        toJson() {
          const p = super.toJson();
          return p.newName = this.newName, p.oldName = this.oldName, p;
        }
        static fromJson(p, v) {
          const N = v.getProcedureMap().get(p.procedureId);
          if (!N) throw new Error("Cannot deserialize procedure rename event because the target procedure does not exist");
          return new x(v, N, p.oldName, p.newName);
        }
      }
      x.TYPE = "procedure_rename", f.registry.register(f.registry.Type.EVENT, x.TYPE, x);
      class F {
        constructor(p, v, N) {
          this.workspace = p, this.parameters = [], this.returnTypes = null, this.enabled = true, this.shouldFireEvents = false, this.shouldTriggerUpdates = true, this.id = N != null ? N : f.utils.idGenerator.genUid(), this.name = v;
        }
        setName(p) {
          if (p === this.name) return this;
          const v = this.name;
          return this.name = p, this.shouldTriggerUpdates && e(this.workspace), this.shouldFireEvents && f.Events.fire(new x(this.workspace, this, v)), this;
        }
        insertParameter(p, v) {
          return this.parameters[v] && this.parameters[v].getId() === p.getId() || (this.parameters.splice(v, 0, p), p.setProcedureModel(this), f.isObservable(p) && (this.shouldFireEvents ? p.startPublishing() : p.stopPublishing()), this.shouldTriggerUpdates && e(this.workspace), this.shouldFireEvents && f.Events.fire(new m(this.workspace, this, p, v))), this;
        }
        deleteParameter(p) {
          if (!this.parameters[p]) return this;
          const v = this.parameters[p];
          return this.parameters.splice(p, 1), this.shouldTriggerUpdates && e(this.workspace), f.isObservable(v) && v.stopPublishing(), this.shouldFireEvents && f.Events.fire(new O(this.workspace, this, v, p)), this;
        }
        setReturnTypes(p) {
          if (p && p.length) throw new Error("The built-in ProcedureModel does not support typing. You need to implement your own custom ProcedureModel.");
          if (!!p == !!this.returnTypes) return this;
          const v = this.returnTypes;
          return this.returnTypes = p, this.shouldTriggerUpdates && e(this.workspace), this.shouldFireEvents && f.Events.fire(new a(this.workspace, this, v)), this;
        }
        setEnabled(p) {
          return p === this.enabled || (this.enabled = p, this.shouldTriggerUpdates && e(this.workspace), this.shouldFireEvents && f.Events.fire(new i(this.workspace, this))), this;
        }
        startBulkUpdate() {
          this.shouldTriggerUpdates = false;
        }
        endBulkUpdate() {
          this.shouldTriggerUpdates = true, e(this.workspace);
        }
        getId() {
          return this.id;
        }
        getName() {
          return this.name;
        }
        getParameter(p) {
          return this.parameters[p];
        }
        getParameters() {
          return [...this.parameters];
        }
        getReturnTypes() {
          return this.returnTypes;
        }
        getEnabled() {
          return this.enabled;
        }
        startPublishing() {
          this.shouldFireEvents = true, f.Events.fire(new u(this.workspace, this));
          for (const p of this.parameters) f.isObservable(p) && p.startPublishing();
        }
        stopPublishing() {
          e(this.workspace), f.Events.fire(new c(this.workspace, this)), this.shouldFireEvents = false;
          for (const p of this.parameters) f.isObservable(p) && p.stopPublishing();
        }
      }
      const M = f.common.createBlockDefinitionsFromJsonArray([{ type: "procedures_defnoreturn", message0: "%{BKY_PROCEDURES_DEFNORETURN_TITLE} %1 %2 %3", message1: "%{BKY_PROCEDURES_DEFNORETURN_DO} %1", args0: [{ type: "field_input", name: "NAME", text: "", spellcheck: false }, { type: "field_label", name: "PARAMS", text: "" }, { type: "input_dummy", name: "TOP" }], args1: [{ type: "input_statement", name: "STACK" }], style: "procedure_blocks", helpUrl: "%{BKY_PROCEDURES_DEFNORETURN_HELPURL}", tooltip: "%{BKY_PROCEDURES_DEFNORETURN_TOOLTIP}", extensions: ["procedure_def_get_def_mixin", "procedure_def_var_mixin", "procedure_def_update_shape_mixin", "procedure_def_context_menu_mixin", "procedure_def_onchange_mixin", "procedure_def_validator_helper", "procedure_defnoreturn_get_caller_block_mixin", "procedure_defnoreturn_set_comment_helper", "procedure_def_set_no_return_helper"], mutator: "procedure_def_mutator" }, { type: "procedures_callnoreturn", message0: "%1 %2", args0: [{ type: "field_label", name: "NAME", text: "%{BKY_UNNAMED_KEY}" }, { type: "input_dummy", name: "TOPROW" }], nextStatement: null, previousStatement: null, style: "procedure_blocks", helpUrl: "%{BKY_PROCEDURES_CALLNORETURN_HELPURL}", extensions: ["procedure_caller_get_def_mixin", "procedure_caller_var_mixin", "procedure_caller_update_shape_mixin", "procedure_caller_context_menu_mixin", "procedure_caller_onchange_mixin", "procedure_callernoreturn_get_def_block_mixin"], mutator: "procedure_caller_mutator" }, { type: "procedures_defreturn", message0: "%{BKY_PROCEDURES_DEFRETURN_TITLE} %1 %2 %3", message1: "%{BKY_PROCEDURES_DEFRETURN_DO} %1", message2: "%{BKY_PROCEDURES_DEFRETURN_RETURN} %1", args0: [{ type: "field_input", name: "NAME", text: "", spellcheck: false }, { type: "field_label", name: "PARAMS", text: "" }, { type: "input_dummy", name: "TOP" }], args1: [{ type: "input_statement", name: "STACK" }], args2: [{ type: "input_value", align: "right", name: "RETURN" }], style: "procedure_blocks", helpUrl: "%{BKY_PROCEDURES_DEFRETURN_HELPURL}", tooltip: "%{BKY_PROCEDURES_DEFRETURN_TOOLTIP}", extensions: ["procedure_def_get_def_mixin", "procedure_def_var_mixin", "procedure_def_update_shape_mixin", "procedure_def_context_menu_mixin", "procedure_def_onchange_mixin", "procedure_def_validator_helper", "procedure_defreturn_get_caller_block_mixin", "procedure_defreturn_set_comment_helper", "procedure_def_set_return_helper"], mutator: "procedure_def_mutator" }, { type: "procedures_callreturn", message0: "%1 %2", args0: [{ type: "field_label", name: "NAME", text: "%{BKY_UNNAMED_KEY}" }, { type: "input_dummy", name: "TOPROW" }], output: null, style: "procedure_blocks", helpUrl: "%{BKY_PROCEDURES_CALLRETURN_HELPURL}", extensions: ["procedure_caller_get_def_mixin", "procedure_caller_var_mixin", "procedure_caller_update_shape_mixin", "procedure_caller_context_menu_mixin", "procedure_caller_onchange_mixin", "procedure_callerreturn_get_def_block_mixin"], mutator: "procedure_caller_mutator" }]);
      f.Extensions.register("procedure_def_get_def_mixin", function() {
        const R = { model_: null, getProcedureModel() {
          return this.model_;
        }, isProcedureDef: () => true, getVars: function() {
          return this.getProcedureModel().getParameters().map((p) => p.getVariableModel().name);
        }, getVarModels: function() {
          return this.getProcedureModel().getParameters().map((p) => p.getVariableModel());
        }, destroy: function() {
          this.workspace.getProcedureMap().delete(this.getProcedureModel().getId());
        } };
        R.model_ = new F(this.workspace, f.Procedures.findLegalName(this.getFieldValue("NAME"), this)), f.Events.disable(), this.workspace.getProcedureMap().add(R.getProcedureModel()), f.Events.enable(), this.mixin(R, true);
      }), f.Extensions.register("procedure_def_var_mixin", function() {
        this.mixin({ renameVarById: function(R, p) {
          const v = this.workspace.getVariableById(R), N = this.getProcedureModel(), L = N.getParameters().findIndex((ae) => ae.getVariableModel() === v);
          if (L === -1) return;
          const Q = this.workspace.getVariableById(p);
          N.getParameter(L).setName(Q.name);
        }, updateVarName: function(R) {
          this.getProcedureModel().getParameters().some((p) => p.getVariableModel() === R) && this.doProcedureUpdate();
        } }, true);
      });
      const U = { doProcedureUpdate: function() {
        this.setFieldValue(this.getProcedureModel().getName(), "NAME"), this.setEnabled(this.getProcedureModel().getEnabled()), this.updateParameters_(), this.updateMutator_();
      }, updateParameters_: function() {
        const R = this.getProcedureModel().getParameters().map((v) => v.getName()), p = R.length ? "".concat(f.Msg.PROCEDURES_BEFORE_PARAMS, " ").concat(R.join(", ")) : "";
        f.Events.disable();
        try {
          this.setFieldValue(p, "PARAMS");
        } finally {
          f.Events.enable();
        }
      }, updateMutator_: function() {
        const R = this.getIcon(f.icons.MutatorIcon.TYPE);
        if (!(R == null ? void 0 : R.bubbleIsVisible())) return;
        const p = this.mutator.getWorkspace();
        for (const v of this.getProcedureModel().getParameters()) {
          const N = p.getBlockById(v.getId());
          N && N.getFieldValue("NAME") !== v.getName() && N.setFieldValue(v.getName(), "NAME");
        }
      }, setStatements_: function(R) {
        var p;
        if (this.hasStatements_ !== R) {
          if (R) this.appendStatementInput("STACK").appendField(f.Msg.PROCEDURES_DEFNORETURN_DO), this.getInput("RETURN") && this.moveInputBefore("STACK", "RETURN"), (p = this.statementConnection_) === null || p === void 0 || p.call(this, this, "STACK"), this.statementConnection_ = null;
          else {
            const v = this.getInput("STACK").connection;
            if (this.statementConnection_ = v.targetConnection, this.statementConnection_) {
              const N = v.targetBlock();
              N.unplug(), N.bumpNeighbours();
            }
            this.removeInput("STACK", true);
          }
          this.hasStatements_ = R;
        }
      } };
      f.Extensions.registerMixin("procedure_def_update_shape_mixin", U), f.Extensions.register("procedure_def_validator_helper", function() {
        const R = this.getField("NAME");
        R.setValue(f.Procedures.findLegalName("", this)), R.setValidator(f.Procedures.rename);
      });
      const V = { hasStatements_: true, mutationToDom: function() {
        const R = f.utils.xml.createElement("mutation"), p = this.getProcedureModel().getParameters();
        for (let v = 0; v < p.length; v++) {
          const N = f.utils.xml.createElement("arg"), L = p[v].getVariableModel();
          N.setAttribute("name", L.name), N.setAttribute("varid", L.getId()), R.appendChild(N);
        }
        return this.hasStatements_ || R.setAttribute("statements", "false"), R;
      }, domToMutation: function(R) {
        for (let p = 0; p < R.childNodes.length; p++) {
          const v = R.childNodes[p];
          if (v.nodeName.toLowerCase() !== "arg") continue;
          const N = v.getAttribute("varid");
          this.getProcedureModel().insertParameter(new n(this.workspace, v.getAttribute("name"), void 0, N), p);
        }
        this.setStatements_(R.getAttribute("statements") !== "false");
      }, saveExtraState: function(R) {
        const p = /* @__PURE__ */ Object.create(null);
        if (p.procedureId = this.getProcedureModel().getId(), R) {
          p.fullSerialization = true;
          const v = this.getProcedureModel().getParameters();
          v.length && (p.params = v.map((N) => ({ name: N.getName(), id: N.getVariableModel().getId(), paramId: N.getId() })));
        }
        return this.hasStatements_ || (p.hasStatements = false), p;
      }, loadExtraState: function(R) {
        var p;
        const v = this.workspace.getProcedureMap(), N = R.procedureId;
        v.has(N) && !R.fullSerialization && (v.has(this.model_.getId()) && v.delete(this.model_.getId()), this.model_ = v.get(N));
        const L = this.getProcedureModel(), Q = (p = R.params) !== null && p !== void 0 ? p : [], ae = new Set(Q.map((he) => he.id)), be = L.getParameters();
        if (R.fullSerialization) for (let he = be.length - 1; he >= 0; he--) ae.has(be[he].getId) || L.deleteParameter(he);
        for (let he = 0; he < Q.length; he++) {
          const { name: Be, id: Ue, paramId: Ve } = R.params[he];
          this.getProcedureModel().insertParameter(new n(this.workspace, Be, Ve, Ue), he);
        }
        this.doProcedureUpdate(), this.setStatements_(R.hasStatements !== false);
      }, decompose: function(R) {
        const p = { type: "procedures_mutatorcontainer", inputs: { STACK: {} } };
        let v = p.inputs.STACK;
        for (const L of this.getProcedureModel().getParameters()) v.block = { type: "procedures_mutatorarg", id: L.getId(), fields: { NAME: L.getName() }, next: {} }, v = v.block.next;
        const N = f.serialization.blocks.append(p, R, { recordUndo: false });
        return this.type === "procedures_defreturn" ? N.setFieldValue(this.hasStatements_, "STATEMENTS") : N.removeInput("STATEMENT_INPUT"), N;
      }, compose: function(R) {
        this.deleteParamsFromModel_(R), this.renameParamsInModel_(R), this.addParamsToModel_(R);
        const p = R.getFieldValue("STATEMENTS");
        p !== null && this.setStatements_(p === "TRUE");
      }, deleteParamsFromModel_: function(R) {
        const p = new Set(R.getDescendants().map((N) => N.id)), v = this.getProcedureModel();
        for (let N = v.getParameters().length - 1; N >= 0; N--) p.has(v.getParameter(N).getId()) || v.deleteParameter(N);
      }, renameParamsInModel_: function(R) {
        const p = this.getProcedureModel();
        let v = 0, N = R.getInputTargetBlock("STACK");
        for (; N && !N.isInsertionMarker(); ) {
          const L = p.getParameter(v);
          L && L.getId() === N.id && L.getName() !== N.getFieldValue("NAME") && L.setName(N.getFieldValue("NAME")), N = N.nextConnection && N.nextConnection.targetBlock(), v++;
        }
      }, addParamsToModel_: function(R) {
        const p = this.getProcedureModel();
        let v = 0, N = R.getInputTargetBlock("STACK");
        for (; N && !N.isInsertionMarker(); ) p.getParameter(v) && p.getParameter(v).getId() === N.id || p.insertParameter(new n(this.workspace, N.getFieldValue("NAME"), N.id), v), N = N.nextConnection && N.nextConnection.targetBlock(), v++;
      } };
      f.Extensions.registerMutator("procedure_def_mutator", V, void 0, ["procedures_mutatorarg"]);
      const B = { customContextMenu: function(R) {
        if (this.isInFlyout) return;
        const p = f.utils.xml.createElement("mutation");
        p.setAttribute("name", this.getFieldValue("NAME"));
        const v = this.getProcedureModel().getParameters();
        for (const L of v) {
          const Q = f.utils.xml.createElement("arg");
          Q.setAttribute("name", L.getName()), p.appendChild(Q);
        }
        const N = f.utils.xml.createElement("block");
        if (N.setAttribute("type", this.callType_), N.appendChild(p), R.push({ enabled: true, text: f.Msg.PROCEDURES_CREATE_DO.replace("%1", this.getFieldValue("NAME")), callback: f.ContextMenu.callbackFactory(this, N) }), !this.isCollapsed()) for (const L of v) {
          const Q = L.getVariableModel(), ae = f.Variables.generateVariableFieldDom(Q), be = f.utils.xml.createElement("block");
          be.setAttribute("type", "variables_get"), be.appendChild(ae), R.push({ enabled: true, text: f.Msg.VARIABLES_SET_CREATE_GET.replace("%1", Q.name), callback: f.ContextMenu.callbackFactory(this, be) });
        }
      } };
      f.Extensions.registerMixin("procedure_def_context_menu_mixin", B);
      const q = { onchange: function(R) {
        R.type === f.Events.BLOCK_CREATE && R.blockId === this.id && f.Events.fire(new u(this.workspace, this.getProcedureModel())), R.type === f.Events.BLOCK_CHANGE && R.blockId === this.id && R.element === "disabled" && this.getProcedureModel().setEnabled(!R.newValue);
      } };
      f.Extensions.registerMixin("procedure_def_onchange_mixin", q), f.Extensions.register("procedure_defnoreturn_set_comment_helper", function() {
        (this.workspace.options.comments || this.workspace.options.parentWorkspace && this.workspace.options.parentWorkspace.options.comments) && f.Msg.PROCEDURES_DEFNORETURN_COMMENT && this.setCommentText(f.Msg.PROCEDURES_DEFNORETURN_COMMENT);
      }), f.Extensions.register("procedure_defreturn_set_comment_helper", function() {
        (this.workspace.options.comments || this.workspace.options.parentWorkspace && this.workspace.options.parentWorkspace.options.comments) && f.Msg.PROCEDURES_DEFRETURN_COMMENT && this.setCommentText(f.Msg.PROCEDURES_DEFRETURN_COMMENT);
      }), f.Extensions.registerMixin("procedure_defnoreturn_get_caller_block_mixin", { callType_: "procedures_callnoreturn" }), f.Extensions.registerMixin("procedure_defreturn_get_caller_block_mixin", { callType_: "procedures_callreturn" }), f.Extensions.register("procedure_def_set_no_return_helper", function() {
        this.getProcedureModel().setReturnTypes(null);
      }), f.Extensions.register("procedure_def_set_return_helper", function() {
        this.getProcedureModel().setReturnTypes([]);
      }), f.Extensions.register("procedure_caller_get_def_mixin", function() {
        const R = { model_: null, prevParams_: [], argsMap_: /* @__PURE__ */ new Map(), getProcedureModel() {
          return this.model_;
        }, findProcedureModel_(p, v = []) {
          const N = this.getTargetWorkspace_().getProcedureMap().getProcedures().find((Q) => Q.getName() === p);
          if (!N) return null;
          const L = N.getReturnTypes();
          return (this.hasReturn_ ? L : !L) && N.getParameters().every((Q, ae) => Q.getName() === v[ae]) ? N : null;
        }, getTargetWorkspace_() {
          return this.workspace.isFlyout ? this.workspace.targetWorkspace : this.workspace;
        }, isProcedureDef: () => false, getVars: function() {
          return this.getProcedureModel().getParameters().map((p) => p.getVariableModel().name);
        }, getVarModels: function() {
          return this.getProcedureModel().getParameters().map((p) => p.getVariableModel());
        } };
        this.mixin(R, true);
      }), f.Extensions.register("procedure_caller_var_mixin", function() {
        this.mixin({ updateVarName: function(R) {
          this.getProcedureModel().getParameters().some((p) => p.getVariableModel() === R) && this.doProcedureUpdate();
        } }, true);
      });
      const Se = { previousEnabledState_: true, paramsFromSerializedState_: [], mutationToDom: function() {
        const R = f.utils.xml.createElement("mutation"), p = this.getProcedureModel();
        if (!p) return R;
        R.setAttribute("name", p.getName());
        for (const v of p.getParameters()) {
          const N = f.utils.xml.createElement("arg");
          N.setAttribute("name", v.getName()), R.appendChild(N);
        }
        return R;
      }, domToMutation: function(R) {
        const p = R.getAttribute("name"), v = [];
        for (const N of R.childNodes) N.nodeName.toLowerCase() === "arg" && v.push(N.getAttribute("name"));
        this.deserialize_(p, v);
      }, saveExtraState: function() {
        const R = /* @__PURE__ */ Object.create(null), p = this.getProcedureModel();
        return p ? (R.name = p.getName(), p.getParameters().length && (R.params = p.getParameters().map((v) => v.getName())), R) : (R.name = this.getFieldValue("NAME"), R.params = this.paramsFromSerializedState_, R);
      }, loadExtraState: function(R) {
        this.deserialize_(R.name, R.params || []);
      }, deserialize_: function(R, p) {
        this.setFieldValue(R, "NAME"), this.model_ || (this.model_ = this.findProcedureModel_(R, p)), this.getProcedureModel() ? this.initBlockWithProcedureModel_() : this.createArgInputs_(p), this.paramsFromSerializedState_ = p;
      } };
      f.Extensions.registerMutator("procedure_caller_mutator", Se);
      const pe = { initBlockWithProcedureModel_() {
        this.prevParams_ = [...this.getProcedureModel().getParameters()], this.doProcedureUpdate();
      }, doProcedureUpdate: function() {
        if (!this.getProcedureModel()) return;
        const R = this.getProcedureModel().getId();
        this.getTargetWorkspace_().getProcedureMap().has(R) ? (this.updateName_(), this.updateEnabled_(), this.updateParameters_()) : this.dispose(true);
      }, updateName_: function() {
        const R = this.getProcedureModel().getName();
        this.setFieldValue(R, "NAME");
        const p = this.outputConnection ? f.Msg.PROCEDURES_CALLRETURN_TOOLTIP : f.Msg.PROCEDURES_CALLNORETURN_TOOLTIP;
        this.setTooltip(p.replace("%1", R));
      }, updateEnabled_: function() {
        this.getProcedureModel().getEnabled() ? this.setEnabled(this.previousEnabledState_) : (this.previousEnabledState_ = this.isEnabled(), this.setEnabled(false));
      }, updateParameters_: function() {
        this.syncArgsMap_(), this.deleteAllArgInputs_(), this.addParametersLabel__(), this.createArgInputs_(), this.reattachBlocks_(), this.prevParams_ = [...this.getProcedureModel().getParameters()];
      }, syncArgsMap_: function() {
        for (const [R, p] of this.prevParams_.entries()) {
          const v = this.getInputTargetBlock("ARG".concat(R));
          v && this.argsMap_.set(p.getId(), v);
        }
      }, updateArgsMap_: function() {
        for (const [R, p] of this.getProcedureModel().getParameters().entries()) {
          const v = this.getInputTargetBlock("ARG".concat(R));
          v ? this.argsMap_.set(p.getId(), v) : this.argsMap_.delete(p.getId());
        }
      }, deleteAllArgInputs_: function() {
        let R = 0;
        for (; this.getInput("ARG".concat(R)); ) this.removeInput("ARG".concat(R)), R++;
      }, addParametersLabel__: function() {
        const R = this.getInput("TOPROW");
        this.getProcedureModel().getParameters().length ? this.getField("WITH") || (R.appendField(f.Msg.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), R.init()) : this.getField("WITH") && R.removeField("WITH");
      }, createArgInputs_: function(R = null) {
        R || (R = this.getProcedureModel().getParameters().map((p) => p.getName()));
        for (const [p, v] of R.entries()) this.appendValueInput("ARG".concat(p)).appendField(new f.FieldLabel(v), "ARGNAME".concat(p)).setAlign(f.Input.Align.RIGHT);
      }, reattachBlocks_: function() {
        const R = this.getProcedureModel().getParameters();
        for (const [p, v] of R.entries()) this.argsMap_.has(v.getId()) && this.getInput("ARG".concat(p)).connection.connect(this.argsMap_.get(v.getId()).outputConnection);
      }, renameProcedure: function(R, p) {
        if (f.Names.equals(R, this.getFieldValue("NAME"))) {
          this.setFieldValue(p, "NAME");
          const v = this.outputConnection ? f.Msg.PROCEDURES_CALLRETURN_TOOLTIP : f.Msg.PROCEDURES_CALLNORETURN_TOOLTIP;
          this.setTooltip(v.replace("%1", p));
        }
      } };
      f.Extensions.registerMixin("procedure_caller_update_shape_mixin", pe);
      const ve = { onchange: function(R) {
        if (this.disposed || this.workspace.isFlyout || (R.type === f.Events.BLOCK_MOVE && this.updateArgsMap_(true), R.type !== f.Events.FINISHED_LOADING && !this.eventIsCreatingThisBlockDuringPaste_(R)) || this.getProcedureModel()) return;
        const p = this.getFieldValue("NAME");
        let v = f.Procedures.getDefinition(p, this.workspace);
        this.defMatches_(v) || (v = null), v || (f.Events.setGroup(R.group), this.model_ = this.createDef_(this.getFieldValue("NAME"), this.paramsFromSerializedState_), f.Events.setGroup(false)), this.getProcedureModel() || (this.model_ = this.findProcedureModel_(this.getFieldValue("NAME"), this.paramsFromSerializedState_)), this.initBlockWithProcedureModel_();
      }, eventIsCreatingThisBlockDuringPaste_(R) {
        return R.type === f.Events.BLOCK_CREATE && (R.blockId === this.id || R.ids.indexOf(this.id) !== -1) && R.recordUndo;
      }, defMatches_(R) {
        return R && R.type === this.defType_ && JSON.stringify(R.getVars()) === JSON.stringify(this.paramsFromSerializedState_);
      }, createDef_(R, p = []) {
        const v = this.getRelativeToSurfaceXY(), N = f.Procedures.findLegalName(R, this);
        this.renameProcedure(R, N);
        const L = { type: this.defType_, x: v.x + f.config.snapRadius * (this.RTL ? -1 : 1), y: v.y + 2 * f.config.snapRadius, extraState: { params: p.map((Q) => ({ name: Q })) }, fields: { NAME: N } };
        return f.serialization.blocks.append(L, this.getTargetWorkspace_(), { recordUndo: true }).getProcedureModel();
      } };
      f.Extensions.registerMixin("procedure_caller_onchange_mixin", ve);
      const we = { customContextMenu: function(R) {
        if (!this.workspace.isMovable()) return;
        const p = this.getFieldValue("NAME"), v = this.workspace;
        R.push({ enabled: true, text: f.Msg.PROCEDURES_HIGHLIGHT_DEF, callback: function() {
          const N = f.Procedures.getDefinition(p, v);
          N && N instanceof f.BlockSvg && (v.centerOnBlock(N.id), N.select());
        } });
      } };
      function Z(R) {
        return R.getProcedureModel !== void 0 && R.doProcedureUpdate !== void 0 && R.isProcedureDef !== void 0;
      }
      function de() {
        delete f.Blocks.procedures_defnoreturn, delete f.Blocks.procedures_callnoreturn, delete f.Blocks.procedures_defreturn, delete f.Blocks.procedures_callreturn;
      }
      function Y() {
        f.serialization.registry.unregister("procedures"), f.serialization.registry.register("procedures", new f.serialization.procedures.ProcedureSerializer(F, n));
      }
      f.Extensions.registerMixin("procedure_caller_context_menu_mixin", we), f.Extensions.registerMixin("procedure_callernoreturn_get_def_block_mixin", { hasReturn_: false, defType_: "procedures_defnoreturn" }), f.Extensions.registerMixin("procedure_callerreturn_get_def_block_mixin", { hasReturn_: true, defType_: "procedures_defreturn" });
    })(), $;
  })());
})(no);
var zt = no.exports;
function Vn(d) {
  const l = function(y) {
    const b = [];
    b.push({ kind: "block", type: "my_procedure_def" });
    for (const S of d.getProcedureMap().getProcedures()) b.push({ kind: "block", type: "my_procedure_call", extraState: { procedureId: S.getId(), name: S.getName() } });
    let C = 0;
    for (; C < 2; ) b.push({ kind: "label", text: "-", "web-class": "custom-label-style opacity" }), C++;
    return b;
  };
  d.registerToolboxCategoryCallback("CUSTOM_PROCEDURE", l);
}
const jn = { registerCustomFlyout: Vn };
re.Blocks.my_procedure_def = { init: function() {
  let d = "function", l = re.getMainWorkspace().getProcedureMap().getProcedures().length;
  for (d = "function".concat(l > 0 ? l : ""); re.getMainWorkspace().getProcedureMap().getProcedures().find((b) => b.getName() == d); ) l++, d = "function".concat(l);
  this.model = new zt.ObservableProcedureModel(this.workspace, d), this.workspace.getProcedureMap().add(this.model), this.jsonInit({ message0: "".concat(re.Msg.defFunction, " %1"), args0: [{ type: "input_field_modal_component", name: "PROCEDURE_NAME", value: d }], message1: "%1", args1: [{ type: "input_statement", name: "DO" }], colour: "#90539D", tooltip: "\u81EA\u5B9A\u4E49\u51FD\u6570\u5757", helpUrl: "" });
}, getProcedureModel() {
  return this.model;
}, doProcedureUpdate() {
  this.setFieldValue(this.model.getName(), "PROCEDURE_NAME");
}, saveExtraState() {
  return { procedureId: this.model.getId(), name: this.model.getName(), parameters: this.model.getParameters().map((d) => ({ name: d.getName(), id: d.getId() })), returnTypes: this.model.getReturnTypes() };
}, loadExtraState(d) {
  const l = d.procedureId, y = this.workspace.getProcedureMap();
  if (l && this.model.getId() != l && y.has(l) && (this.isInsertionMarker() || this.noBlockHasClaimedModel_(l))) {
    this.workspace.getProcedureMap().delete(this.model.getId()), this.model = this.workspace.getProcedureMap().get(d.procedureId), this.doProcedureUpdate();
    return;
  }
  this.model.setName(d.name).setReturnTypes(d.returnTypes);
  for (const [b, C] of d.parameters.entries()) this.model.insertParameter(b, new zt.ObservableParameterModel(this.workspace, C.name, C.id));
}, noBlockHasClaimedModel_(d) {
  const l = this.workspace.getProcedureMap().get(d);
  return this.workspace.getAllBlocks(false).every((y) => !zt.isProcedureBlock(y) || !y.isProcedureDef() || y.getProcedureModel() !== l);
}, destroy: function() {
  this.isInsertionMarker() || this.workspace.getProcedureMap().delete(this.model.getId());
}, onchange(d) {
  d.type === re.Events.BLOCK_CREATE && d.blockId === this.id && re.Events.fire(new zt.ProcedureCreate(this.workspace, this.getProcedureModel())), d.type === re.Events.BLOCK_CHANGE && d.blockId === this.id && (this.getProcedureModel().setName(this.getFieldValue("PROCEDURE_NAME")), d.element === "disabled" && this.getProcedureModel().setEnabled(!d.newValue));
} };
Ce.javascriptGenerator.forBlock.my_procedure_def = function(d) {
  const l = d.getFieldValue("PROCEDURE_NAME"), y = Ce.javascriptGenerator.statementToCode(d, "DO");
  return "function fn_".concat(l, "() {\n").concat(y, "\n}");
};
re.Blocks.my_procedure_call = { init: function() {
  this.jsonInit({ type: "custom_function", message0: "".concat(re.Msg.function, " %1"), args0: [{ type: "field_label", name: "NAME", text: "%{BKY_UNNAMED_KEY}" }], colour: "#90539D", helpUrl: "", previousStatement: null, nextStatement: null });
}, getProcedureModel() {
  return this.model;
}, isProcedureDef() {
  return false;
}, getVarModels() {
  return [];
}, getTargetWorkspace_() {
  return this.workspace.isFlyout ? this.workspace.targetWorkspace : this.workspace;
}, findProcedureModel_(d) {
  const l = this.getTargetWorkspace_();
  let y = l.getProcedureMap().getProcedures().find((S) => S.getId() === d);
  if (!y) {
    const S = this.getFieldValue("NAME");
    y = l.getProcedureMap().getProcedures().find(($) => $.getName() === S);
  }
  if (!y) return null;
  const b = y.getReturnTypes();
  return (this.hasReturn_ ? b : !b) ? y : null;
}, saveExtraState() {
  const d = /* @__PURE__ */ Object.create(null);
  let l = this.getProcedureModel();
  if (!l) {
    const y = this.getFieldValue("NAME"), b = re.getMainWorkspace().getProcedureMap().getProcedures().find((C) => C.getName() === y);
    if (!b) return;
    l = b;
  }
  return d.name = l.getName(), d.procedureId = l.getId(), l.getParameters().length && (d.params = l.getParameters().map((y) => y.getName())), d;
}, loadExtraState(d) {
  const l = d.name, y = d.procedureId;
  this.setFieldValue(l, "NAME"), this.model || (this.model = this.findProcedureModel_(y)), this.doProcedureUpdate();
}, doProcedureUpdate() {
  if (!this.getProcedureModel()) return;
  const d = this.getProcedureModel().getId();
  if (!this.getTargetWorkspace_().getProcedureMap().has(d)) {
    console.log("\u5220\u9664\u4E86", this.id), this.dispose();
    return;
  }
  this.updateName_();
}, updateName_: function() {
  if (this.disposed) return;
  const d = this.getProcedureModel().getName();
  this.setFieldValue(d, "NAME");
}, onchange(d) {
  d.type === re.Events.BLOCK_CREATE && d.blockId === this.id && (this.model || this.dispose());
} };
Ce.javascriptGenerator.forBlock.my_procedure_call = function(d) {
  var _a, _b;
  const l = d.getFieldValue("NAME");
  return ((_b = (_a = re.getMainWorkspace().getProcedureMap().getProcedures().filter((S) => S.getName() === l)) == null ? void 0 : _a[0]) == null ? void 0 : _b.getEnabled()) ? "fn_".concat(l, "();\n") : "";
};
const Gn = ["highlightBlock", "waitForSeconds", "move", "stepSeconds", "setColor", "tickDifference", "log_data"];
Gn.forEach((d) => {
  Ce.javascriptGenerator.addReservedWords(d);
});
Ce.javascriptGenerator.STATEMENT_PREFIX = "highlightBlock(%1);\n";
Ce.javascriptGenerator.forBlock.start_program = function(d) {
  return "{\n" + Ce.javascriptGenerator.statementToCode(d, "ACTION") + "}";
};
gr.pythonGenerator.forBlock.start_program = function(d) {
  return '\nfrom utils import *\n\ndef main():\n    processAction("rt/api/sport/request", 1016, "")\n    '.concat(gr.pythonGenerator.statementToCode(d, "ACTION"), '\n\nif __name__=="__main__":\n    main()\n');
};
Ce.javascriptGenerator.forBlock.type_num_slider = function(d) {
  return [d.getFieldValue("value"), Ce.Order.MEMBER];
};
gr.pythonGenerator.forBlock.type_num_slider = function(d) {
  return [d.getFieldValue("value"), Ce.Order.MEMBER];
};
[...br.customBlocksDefinition(), ...to.customBlocksDefinition(), ...Kr.customBlocksDefinition(), ...Tr.customBlocksDefinition(), ...oo.customBlocksDefinition(), ...vr.customBlocksDefinition()].forEach((d) => {
  Ce.javascriptGenerator.forBlock[d.type] = d.code || function() {
  };
});
k.registry.hasItem("theme", "defaultTheme") && k.registry.unregister("theme", "defaultTheme");
const Yn = k.Theme.defineTheme("defaultTheme", { name: "defaultTheme", base: k.Themes.Classic, startHats: true, componentStyles: { workspaceBackgroundColour: "#2E2E3D", toolboxBackgroundColour: "#4A4A5B", toolboxForegroundColour: "#C9C9C9", flyoutBackgroundColour: "#1F1F29", flyoutForegroundColour: "#fff", scrollbarOpacity: 1e-3 } }), io = (d) => (Er("data-v-357fd1e1"), d = d(), yr(), d), Wn = { class: "blockly_field_wrapper" }, Xn = io(() => W("div", { class: "modal_title" }, "\u9009\u62E9\u5F55\u97F3\u6587\u4EF6", -1)), Hn = io(() => W("div", { class: "modal_content" }, null, -1)), zn = dt({ name: "ModalFields" }), Jn = dt({ ...zn, props: { defaultValue: {}, ok: { type: Function }, cancel: { type: Function } }, setup(d) {
  const l = d, y = () => {
    l.ok && l.ok(), l.cancel && l.cancel();
  }, b = () => {
    l.cancel && l.cancel();
  };
  return (C, S) => (St(), wt("div", Wn, [W("div", { class: "modal_body" }, [Xn, Hn, W("div", { class: "modal_footer" }, [W("div", { class: "footer_opera_item", onClick: b }, "\u53D6\u6D88"), W("div", { class: "footer_opera_item", onClick: y }, "\u786E\u5B9A")])])]));
} }), qn = Zt(Jn, [["__scopeId", "data-v-357fd1e1"]]);
let Kn = class extends k.Field {
  constructor(l, y) {
    super(l, y);
    __publicField(this, "SERIALIZABLE", true);
    this.SERIALIZABLE = true;
  }
  static fromJson(l) {
    const y = k.utils.parsing.replaceMessageReferences(l.value);
    return new this(y);
  }
  showEditor_() {
    const l = Wr(this.render(Math.random().toString())), y = document.getElementById("custom_field_modal_wrapper");
    y && Xr(l, y);
  }
  doClassValidation_(l) {
    return typeof l != "string" ? null : l;
  }
  modalOk() {
    this.setValue("\u6539\u53D8");
  }
  modalCancel() {
    const l = document.getElementById("custom_field_modal_wrapper");
    l && Array.from(l.children).forEach((y) => {
      y.className.includes("blockly_field_wrapper") && y.remove();
    });
  }
  render(l) {
    return Kt(qn, { key: l, ok: this.modalOk.bind(this), cancel: this.modalCancel, defaultValue: this.value_ }, null);
  }
};
k.fieldRegistry.register("field_modal_component", Kn);
const Zn = { class: "blockly_field_wrapper" }, Qn = { class: "modal_body" }, ei = { class: "modal_title" }, ti = { class: "modal_content" }, ri = { key: 0, class: "modal_content_tip" }, oi = { class: "modal_footer" }, ni = dt({ name: "ModalFields" }), ii = dt({ ...ni, props: { defaultValue: {}, ok: { type: Function }, cancel: { type: Function }, allProcedure: {} }, setup(d) {
  const l = d, [y, b] = ct(false), C = Ct(Pe("Blockly.modal_1")), S = Ct(l.defaultValue || ""), $ = () => Pe("Blockly.modal_1"), f = () => Pe("sure"), A = () => Pe("cancel"), r = () => {
    if (!S.value) {
      b(true), C.value = Pe("Blockly.modal_1");
      return;
    }
    if (!n(S.value)) {
      b(true), C.value = Pe("Blockly.tip_1");
      return;
    }
    if (l.allProcedure.has(S.value)) {
      b(true), C.value = Pe("Blockly.tip_2");
      return;
    }
    l.ok && l.ok(S.value), l.cancel && l.cancel();
  }, t = () => {
    y && b(false);
  }, e = () => {
    l.cancel && l.cancel();
  };
  function n(a) {
    return /^[a-zA-Z0-9_]*$/.test(a);
  }
  return (a, u) => (St(), wt("div", Zn, [W("div", Qn, [W("div", ei, Ye($ == null ? void 0 : $()), 1), W("div", ti, [Fo(W("input", { "onUpdate:modelValue": u[0] || (u[0] = (c) => Uo(S) ? S.value = c : null), placeholder: "\u51FD\u6570\u540D\u79F0", class: "input_style", type: "text", onInput: t }, null, 544), [[Bo, ee(S)]]), ee(y) ? (St(), wt("span", ri, Ye(ee(C)), 1)) : Do("", true)]), W("div", oi, [W("div", { class: "footer_opera_item", onClick: e }, Ye(A == null ? void 0 : A()), 1), W("div", { class: "footer_opera_item", onClick: r }, Ye(f == null ? void 0 : f()), 1)])])]));
} }), si = Zt(ii, [["__scopeId", "data-v-cb2afe87"]]);
class ai extends k.Field {
  constructor(l, y) {
    super(l, y);
    __publicField(this, "SERIALIZABLE", true);
    this.SERIALIZABLE = true;
  }
  static fromJson(l) {
    const y = k.utils.parsing.replaceMessageReferences(l.value);
    return new this(y);
  }
  showEditor_() {
    const l = Wr(this.render(Math.random().toString())), y = document.getElementById("custom_field_modal_wrapper");
    y && Xr(l, y);
  }
  doClassValidation_(l) {
    return typeof l != "string" ? null : l;
  }
  modalOk(l) {
    this.setValue(l, true), this.isDirty_ = true;
  }
  modalCancel() {
    const l = document.getElementById("custom_field_modal_wrapper");
    l && Array.from(l.children).forEach((y) => {
      y.className.includes("blockly_field_wrapper") && y.remove();
    });
  }
  render(l) {
    const y = this.getValue(), b = /* @__PURE__ */ new Set();
    return k.getMainWorkspace().getProcedureMap().forEach((C) => {
      y !== C.getName() && b.add(C.getName());
    }), Kt(si, { key: l, ok: this.modalOk.bind(this), cancel: this.modalCancel, defaultValue: this.value_, allProcedure: b }, null);
  }
}
k.fieldRegistry.register("input_field_modal_component", ai);
class ui extends re.ToolboxCategory {
  constructor(l, y, b) {
    super(l, y, b);
  }
  addColourBorder_() {
    this.rowDiv_ && (this.rowDiv_.style.backgroundColor = "transparent");
  }
  setSelected(l) {
    this.rowDiv_ && (l ? this.rowDiv_.style.backgroundColor = "#242430" : this.rowDiv_.style.backgroundColor = "transparent", this.htmlDiv_ && re.utils.aria.setState(this.htmlDiv_, re.utils.aria.State.SELECTED, l));
  }
  createIconDom_() {
    const l = document.createElement("div");
    return l.innerHTML = '<svg aria-hidden="true" style="width: 100%; height: 100%"><use xlink:href="#icon/programming-category/'.concat(this.cssConfig_.icon, '" fill="currentColor"  /></svg>'), l.style.width = "26px", l.style.height = "26px", l;
  }
}
re.registry.register(re.registry.Type.TOOLBOX_ITEM, re.ToolboxCategory.registrationName, ui, true);
class li extends re.blockRendering.ConstantProvider {
  constructor() {
    super(), this.NOTCH_WIDTH = 20, this.NOTCH_HEIGHT = 5, this.STATEMENT_INPUT_PADDING_LEFT = 10, this.START_HAT_HEIGHT = 10, this.TAB_HEIGHT = 10, this.TOP_ROW_MIN_HEIGHT = 0, this.BOTTOM_ROW_MIN_HEIGHT = 0, this.CORNER_RADIUS = 4;
  }
}
class ci extends re.blockRendering.Renderer {
  constructor() {
    super("custom_renderer");
  }
  makeConstants_() {
    return new li();
  }
}
re.blockRendering.register("custom_renderer", ci);
var di = { exports: {} };
/*! For license information please see index.js.LICENSE.txt */
(function(d, l) {
  (function(y, b) {
    d.exports = b(re);
  })(It, (y) => (() => {
    var b = { 573: (f) => {
      f.exports = y;
    } }, C = {};
    function S(f) {
      var A = C[f];
      if (A !== void 0) return A.exports;
      var r = C[f] = { exports: {} };
      return b[f](r, r.exports, S), r.exports;
    }
    S.d = (f, A) => {
      for (var r in A) S.o(A, r) && !S.o(f, r) && Object.defineProperty(f, r, { enumerable: true, get: A[r] });
    }, S.o = (f, A) => Object.prototype.hasOwnProperty.call(f, A), S.r = (f) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(f, "__esModule", { value: true });
    };
    var $ = {};
    return (() => {
      S.r($), S.d($, { FieldSlider: () => A });
      var f = S(573);
      class A extends f.FieldNumber {
        constructor(t, e, n, a, u, c) {
          super(t, e, n, a, u, c), this.boundEvents = [], this.sliderInput = null;
        }
        static fromJson(t) {
          return new this(t.value, void 0, void 0, void 0, void 0, t);
        }
        showEditor_(t, e) {
          super.showEditor_(t, true);
          const n = this.dropdownCreate_();
          f.DropDownDiv.getContentDiv().appendChild(n);
          const a = this.getSourceBlock();
          if (a instanceof f.BlockSvg) {
            const u = a.getColour() || "", c = a.getColourTertiary() || "";
            f.DropDownDiv.setColour(u, c);
          }
          f.DropDownDiv.showPositionedByField(this, this.dropdownDispose_.bind(this)), e || n.firstChild.focus({ preventScroll: true });
        }
        render_() {
          super.render_(), this.updateSlider_();
        }
        dropdownCreate_() {
          const t = document.createElement("div");
          t.className = "fieldSliderContainer";
          const e = document.createElement("input");
          return e.setAttribute("type", "range"), e.setAttribute("min", "".concat(this.min_)), e.setAttribute("max", "".concat(this.max_)), e.setAttribute("step", "".concat(this.precision_)), e.setAttribute("value", "".concat(this.getValue())), e.setAttribute("tabindex", "0"), e.className = "fieldSlider", t.appendChild(e), this.sliderInput = e, this.boundEvents.push(f.browserEvents.conditionalBind(e, "input", this, this.onSliderChange_)), t;
        }
        dropdownDispose_() {
          for (const t of this.boundEvents) f.browserEvents.unbind(t);
          this.boundEvents.length = 0, this.sliderInput = null;
        }
        onSliderChange_() {
          var t;
          const e = this.value_;
          this.setEditorValue_((t = this.sliderInput) === null || t === void 0 ? void 0 : t.value, false), this.getSourceBlock() && f.Events.fire(new (f.Events.get(f.Events.BLOCK_FIELD_INTERMEDIATE_CHANGE))(this.sourceBlock_, this.name || null, e, this.value_)), this.resizeEditor_();
        }
        updateSlider_() {
          this.sliderInput && this.sliderInput.setAttribute("value", "".concat(this.getValue()));
        }
      }
      f.fieldRegistry.register("field_slider", A), f.Css.register("\n.fieldSliderContainer {\n  align-items: center;\n  display: flex;\n  height: 32px;\n  justify-content: center;\n  width: 150px;\n}\n.fieldSlider {\n  -webkit-appearance: none;\n  background: transparent; /* override white in chrome */\n  margin: 4px;\n  padding: 0;\n  width: 100%;\n}\n.fieldSlider:focus {\n  outline: none;\n}\n/* Webkit */\n.fieldSlider::-webkit-slider-runnable-track {\n  background: #ddd;\n  border-radius: 5px;\n  height: 10px;\n}\n.fieldSlider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 0 4px rgba(255,255,255,.15);\n  cursor: pointer;\n  height: 24px;\n  margin-top: -7px;\n  width: 24px;\n}\n/* Firefox */\n.fieldSlider::-moz-range-track {\n  background: #ddd;\n  border-radius: 5px;\n  height: 10px;\n}\n.fieldSlider::-moz-range-thumb {\n  background: #fff;\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0 0 0 4px rgba(255,255,255,.15);\n  cursor: pointer;\n  height: 24px;\n  width: 24px;\n}\n.fieldSlider::-moz-focus-outer {\n  /* override the focus border style */\n  border: 0;\n}\n/* IE */\n.fieldSlider::-ms-track {\n  /* IE wont let the thumb overflow the track, so fake it */\n  background: transparent;\n  border-color: transparent;\n  border-width: 15px 0;\n  /* remove default tick marks */\n  color: transparent;\n  height: 10px;\n  width: 100%;\n  margin: -4px 0;\n}\n.fieldSlider::-ms-fill-lower  {\n  background: #ddd;\n  border-radius: 5px;\n}\n.fieldSlider::-ms-fill-upper  {\n  background: #ddd;\n  border-radius: 5px;\n}\n.fieldSlider::-ms-thumb {\n  background: #fff;\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0 0 0 4px rgba(255,255,255,.15);\n  cursor: pointer;\n  height: 24px;\n  width: 24px;\n}\n");
    })(), $;
  })());
})(di);
const pi = () => {
  re.defineBlocksWithJsonArray([{ type: "start_program", message0: "".concat(re.Msg.startProgram, " %1 %2"), args0: [{ type: "input_dummy" }, { type: "input_statement", name: "ACTION" }], colour: 230, tooltip: "", helpUrl: "", deletable: true }, { type: "type_num_slider", message0: "%1", args0: [{ type: "field_slider", name: "value", min: 1, max: 30, value: 1 }], output: "Number", colour: 160 }, ...Kr.customBlocksDefinition(), ...br.customBlocksDefinition(), ...to.customBlocksDefinition(), ...Tr.customBlocksDefinition(), ...oo.customBlocksDefinition(), ...vr.customBlocksDefinition()]);
}, hi = (d) => (pi(), jn.registerCustomFlyout(d), { kind: "categoryToolbox", contents: [{ kind: "category", name: k.Msg.soldier_menu_1, colour: "#F2754D", cssConfig: { icon: "blockly_category_icon_1" }, contents: br.blocks() }, { kind: "category", name: k.Msg.soldier_menu_5, colour: "#408FE7", cssConfig: { icon: "blockly_category_icon_4" }, contents: vr.blocks() }, { kind: "category", name: k.Msg.soldier_menu_6, colour: "#F55E5E", cssConfig: { icon: "blockly_category_icon_5" }, contents: Tr.blocks() }, { kind: "category", name: k.Msg.soldier_menu_7, colour: "#90539D", cssConfig: { icon: "blockly_category_icon_8" }, custom: "CUSTOM_PROCEDURE" }] });
var so = { exports: {} };
(function(d, l) {
  (function(b, C) {
    d.exports = C();
  })(It, () => (() => {
    var y = { "./original-repo/interpreter.js": function($, f, A) {
      /**
      * @license
      * Copyright 2013 Google LLC
      * SPDX-License-Identifier: Apache-2.0
      */
      var r = function(t, e) {
        typeof t == "string" && (t = this.parse_(t, "code"));
        var n = t.constructor;
        this.newNode = function() {
          return new n({ options: {} });
        };
        var a = this.newNode();
        for (var u in t) a[u] = u === "body" ? t[u].slice() : t[u];
        this.ast = a, this.tasks = [], this.initFunc_ = e, this.paused_ = false, this.polyfills_ = [], this.functionCounter_ = 0, this.stepFunctions_ = /* @__PURE__ */ Object.create(null);
        var c = /^step([A-Z]\w*)$/, i;
        for (var m in this) typeof this[m] == "function" && (i = m.match(c)) && (this.stepFunctions_[i[1]] = this[m].bind(this));
        this.globalScope = this.createScope(this.ast, null), this.globalObject = this.globalScope.object, this.ast = this.parse_(this.polyfills_.join("\n"), "polyfills"), this.polyfills_ = void 0, r.stripLocations_(this.ast, void 0, void 0);
        var O = new r.State(this.ast, this.globalScope);
        O.done = false, this.stateStack = [O], this.run(), this.value = void 0, this.ast = a, O = new r.State(this.ast, this.globalScope), O.done = false, this.stateStack.length = 0, this.stateStack[0] = O;
      };
      r.Completion = { NORMAL: 0, BREAK: 1, CONTINUE: 2, RETURN: 3, THROW: 4 }, r.PARSE_OPTIONS = { locations: true, ecmaVersion: 5 }, r.READONLY_DESCRIPTOR = { configurable: true, enumerable: true, writable: false }, r.NONENUMERABLE_DESCRIPTOR = { configurable: true, enumerable: false, writable: true }, r.READONLY_NONENUMERABLE_DESCRIPTOR = { configurable: true, enumerable: false, writable: false }, r.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR = { configurable: false, enumerable: false, writable: false }, r.VARIABLE_DESCRIPTOR = { configurable: false, enumerable: true, writable: true }, r.STEP_ERROR = { STEP_ERROR: true }, r.SCOPE_REFERENCE = { SCOPE_REFERENCE: true }, r.VALUE_IN_DESCRIPTOR = { VALUE_IN_DESCRIPTOR: true }, r.REGEXP_TIMEOUT = { REGEXP_TIMEOUT: true }, r.toStringCycles_ = [], r.vm = null, r.currentInterpreter_ = null, r.nativeGlobal = typeof globalThis > "u" ? this : globalThis, r.WORKER_CODE = ["onmessage = function(e) {", "var result;", "var data = e.data;", "switch (data[0]) {", "case 'split':", "result = data[1].split(data[2], data[3]);", "break;", "case 'match':", "result = data[1].match(data[2]);", "break;", "case 'search':", "result = data[1].search(data[2]);", "break;", "case 'replace':", "result = data[1].replace(data[2], data[3]);", "break;", "case 'exec':", "var regexp = data[1];", "regexp.lastIndex = data[2];", "result = [regexp.exec(data[3]), data[1].lastIndex];", "break;", "default:", "throw Error('Unknown RegExp operation: ' + data[0]);", "}", "postMessage(result);", "close();", "};"], r.legalArrayLength = function(t) {
        var e = t >>> 0;
        return e === Number(t) ? e : NaN;
      }, r.legalArrayIndex = function(t) {
        var e = t >>> 0;
        return String(e) === String(t) && e !== 4294967295 ? e : NaN;
      }, r.stripLocations_ = function(t, e, n) {
        e ? t.start = e : delete t.start, n ? t.end = n : delete t.end;
        for (var a in t) if (a !== "loc" && t.hasOwnProperty(a)) {
          var u = t[a];
          u && typeof u == "object" && r.stripLocations_(u, e, n);
        }
      }, r.prototype.REGEXP_MODE = 2, r.prototype.REGEXP_THREAD_TIMEOUT = 1e3, r.prototype.POLYFILL_TIMEOUT = 1e3, r.prototype.getterStep_ = false, r.prototype.setterStep_ = false, r.prototype.appendCodeNumber_ = 0, r.prototype.taskCodeNumber_ = 0, r.prototype.parse_ = function(t, e) {
        var n = {};
        for (var a in r.PARSE_OPTIONS) n[a] = r.PARSE_OPTIONS[a];
        return n.sourceFile = e, r.nativeGlobal.acorn.parse(t, n);
      }, r.prototype.appendCode = function(t) {
        var e = this.stateStack[0];
        if (!e || e.node.type !== "Program") throw Error("Expecting original AST to start with a Program node");
        if (typeof t == "string" && (t = this.parse_(t, "appendCode" + this.appendCodeNumber_++)), !t || t.type !== "Program") throw Error("Expecting new AST to start with a Program node");
        this.populateScope_(t, e.scope), Array.prototype.push.apply(e.node.body, t.body), e.node.body.variableCache_ = null, e.done = false;
      }, r.prototype.step = function() {
        var t = this.stateStack, e;
        do {
          var n = t[t.length - 1];
          if (this.paused_) return true;
          if (!n || n.node.type === "Program" && n.done) {
            if (!this.tasks.length) return false;
            if (n = this.nextTask_(), !n) return true;
          }
          var a = n.node, u = r.currentInterpreter_;
          r.currentInterpreter_ = this;
          try {
            var c = this.stepFunctions_[a.type](t, n, a);
          } catch (i) {
            if (i !== r.STEP_ERROR) throw this.value !== i && (this.value = void 0), i;
          } finally {
            r.currentInterpreter_ = u;
          }
          if (c && t.push(c), this.getterStep_) throw this.value = void 0, Error("Getter not supported in this context");
          if (this.setterStep_) throw this.value = void 0, Error("Setter not supported in this context");
          !e && !a.end && (e = Date.now() + this.POLYFILL_TIMEOUT);
        } while (!a.end && e > Date.now());
        return true;
      }, r.prototype.run = function() {
        for (; !this.paused_ && this.step(); ) ;
        return this.paused_;
      }, r.prototype.initGlobal = function(t) {
        this.setProperty(t, "NaN", NaN, r.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(t, "Infinity", 1 / 0, r.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(t, "undefined", void 0, r.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(t, "window", t, r.READONLY_DESCRIPTOR), this.setProperty(t, "this", t, r.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(t, "self", t), this.OBJECT_PROTO = new r.Object(null), this.FUNCTION_PROTO = new r.Object(this.OBJECT_PROTO), this.initFunction(t), this.initObject(t), t.proto = this.OBJECT_PROTO, this.setProperty(t, "constructor", this.OBJECT, r.NONENUMERABLE_DESCRIPTOR), this.initArray(t), this.initString(t), this.initBoolean(t), this.initNumber(t), this.initDate(t), this.initRegExp(t), this.initError(t), this.initMath(t), this.initJSON(t);
        var e = this, n, a = this.createNativeFunction(function(i) {
          throw EvalError("Can't happen");
        }, false);
        a.eval = true, this.setProperty(t, "eval", a, r.NONENUMERABLE_DESCRIPTOR), this.setProperty(t, "parseInt", this.createNativeFunction(parseInt, false), r.NONENUMERABLE_DESCRIPTOR), this.setProperty(t, "parseFloat", this.createNativeFunction(parseFloat, false), r.NONENUMERABLE_DESCRIPTOR), this.setProperty(t, "isNaN", this.createNativeFunction(isNaN, false), r.NONENUMERABLE_DESCRIPTOR), this.setProperty(t, "isFinite", this.createNativeFunction(isFinite, false), r.NONENUMERABLE_DESCRIPTOR);
        for (var u = [[escape, "escape"], [unescape, "unescape"], [decodeURI, "decodeURI"], [decodeURIComponent, "decodeURIComponent"], [encodeURI, "encodeURI"], [encodeURIComponent, "encodeURIComponent"]], c = 0; c < u.length; c++) n = /* @__PURE__ */ function(i) {
          return function(m) {
            try {
              return i(m);
            } catch (O) {
              e.throwException(e.URI_ERROR, O.message);
            }
          };
        }(u[c][0]), this.setProperty(t, u[c][1], this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR);
        n = function(m) {
          return e.createTask_(false, arguments);
        }, this.setProperty(t, "setTimeout", this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR), n = function(m) {
          return e.createTask_(true, arguments);
        }, this.setProperty(t, "setInterval", this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR), n = function(m) {
          e.deleteTask_(m);
        }, this.setProperty(t, "clearTimeout", this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR), n = function(m) {
          e.deleteTask_(m);
        }, this.setProperty(t, "clearInterval", this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR), this.OBJECT = this.OBJECT, this.OBJECT_PROTO = this.OBJECT_PROTO, this.FUNCTION = this.FUNCTION, this.FUNCTION_PROTO = this.FUNCTION_PROTO, this.ARRAY = this.ARRAY, this.ARRAY_PROTO = this.ARRAY_PROTO, this.REGEXP = this.REGEXP, this.REGEXP_PROTO = this.REGEXP_PROTO, this.DATE = this.DATE, this.DATE_PROTO = this.DATE_PROTO, this.initFunc_ && this.initFunc_(this, t);
      }, r.prototype.functionCodeNumber_ = 0, r.prototype.initFunction = function(t) {
        var e = this, n, a = /^[A-Za-z_$][\w$]*$/;
        n = function(c) {
          if (arguments.length) var i = String(arguments[arguments.length - 1]);
          else var i = "";
          var m = Array.prototype.slice.call(arguments, 0, -1).join(",").trim();
          if (m) {
            for (var O = m.split(/\s*,\s*/), x = 0; x < O.length; x++) {
              var F = O[x];
              a.test(F) || e.throwException(e.SYNTAX_ERROR, "Invalid function argument: " + F);
            }
            m = O.join(", ");
          }
          try {
            var M = e.parse_("(function(" + m + ") {" + i + "})", "function" + e.functionCodeNumber_++);
          } catch (V) {
            e.throwException(e.SYNTAX_ERROR, "Invalid code: " + V.message);
          }
          M.body.length !== 1 && e.throwException(e.SYNTAX_ERROR, "Invalid code in function body");
          var U = M.body[0].expression;
          return e.createFunction(U, e.globalScope, "anonymous");
        }, this.FUNCTION = this.createNativeFunction(n, true), this.setProperty(t, "Function", this.FUNCTION, r.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.FUNCTION, "prototype", this.FUNCTION_PROTO, r.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.FUNCTION_PROTO, "constructor", this.FUNCTION, r.NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.nativeFunc = function() {
        }, this.FUNCTION_PROTO.nativeFunc.id = this.functionCounter_++, this.FUNCTION_PROTO.illegalConstructor = true, this.setProperty(this.FUNCTION_PROTO, "length", 0, r.READONLY_NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.class = "Function", n = function(c, i) {
          var m = e.stateStack[e.stateStack.length - 1];
          m.func_ = this, m.funcThis_ = c, m.arguments_ = [], i != null && (i instanceof r.Object ? m.arguments_ = e.arrayPseudoToNative(i) : e.throwException(e.TYPE_ERROR, "CreateListFromArrayLike called on non-object")), m.doneExec_ = false;
        }, this.setNativeFunctionPrototype(this.FUNCTION, "apply", n), n = function(c) {
          var i = e.stateStack[e.stateStack.length - 1];
          i.func_ = this, i.funcThis_ = c, i.arguments_ = [];
          for (var m = 1; m < arguments.length; m++) i.arguments_.push(arguments[m]);
          i.doneExec_ = false;
        }, this.setNativeFunctionPrototype(this.FUNCTION, "call", n), this.polyfills_.push("Object.defineProperty(Function.prototype, 'bind',", "{configurable: true, writable: true, value:", "function bind(oThis) {", "if (typeof this !== 'function') {", "throw TypeError('What is trying to be bound is not callable');", "}", "var aArgs   = Array.prototype.slice.call(arguments, 1),", "fToBind = this,", "fNOP    = function() {},", "fBound  = function() {", "return fToBind.apply(this instanceof fNOP", "? this", ": oThis,", "aArgs.concat(Array.prototype.slice.call(arguments)));", "};", "if (this.prototype) {", "fNOP.prototype = this.prototype;", "}", "fBound.prototype = new fNOP();", "return fBound;", "}", "});", ""), n = function() {
          return String(this);
        }, this.setNativeFunctionPrototype(this.FUNCTION, "toString", n), this.setProperty(this.FUNCTION, "toString", this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR), n = function() {
          return this.valueOf();
        }, this.setNativeFunctionPrototype(this.FUNCTION, "valueOf", n), this.setProperty(this.FUNCTION, "valueOf", this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR);
      }, r.prototype.initObject = function(t) {
        var e = this, n;
        n = function(c) {
          if (c == null) return e.calledWithNew() ? this : e.createObjectProto(e.OBJECT_PROTO);
          if (!(c instanceof r.Object)) {
            var i = e.createObjectProto(e.getPrototype(c));
            return i.data = c, i;
          }
          return c;
        }, this.OBJECT = this.createNativeFunction(n, true), this.setProperty(this.OBJECT, "prototype", this.OBJECT_PROTO, r.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.OBJECT_PROTO, "constructor", this.OBJECT, r.NONENUMERABLE_DESCRIPTOR), this.setProperty(t, "Object", this.OBJECT, r.NONENUMERABLE_DESCRIPTOR);
        var a = function(u) {
          u == null && e.throwException(e.TYPE_ERROR, "Cannot convert '" + u + "' to object");
        };
        n = function(c) {
          a(c);
          var i = c instanceof r.Object ? c.properties : c;
          return e.arrayNativeToPseudo(Object.getOwnPropertyNames(i));
        }, this.setProperty(this.OBJECT, "getOwnPropertyNames", this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR), n = function(c) {
          return a(c), c instanceof r.Object && (c = c.properties), e.arrayNativeToPseudo(Object.keys(c));
        }, this.setProperty(this.OBJECT, "keys", this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR), n = function(c) {
          return c === null ? e.createObjectProto(null) : (c instanceof r.Object || e.throwException(e.TYPE_ERROR, "Object prototype may only be an Object or null, not " + c), e.createObjectProto(c));
        }, this.setProperty(this.OBJECT, "create", this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push("(function() {", "var create_ = Object.create;", "Object.create = function create(proto, props) {", "var obj = create_(proto);", "props && Object.defineProperties(obj, props);", "return obj;", "};", "})();", ""), n = function(c, i, m) {
          return i = String(i), c instanceof r.Object || e.throwException(e.TYPE_ERROR, "Object.defineProperty called on non-object: " + c), m instanceof r.Object || e.throwException(e.TYPE_ERROR, "Property description must be an object"), c.preventExtensions && !(i in c.properties) && e.throwException(e.TYPE_ERROR, "Can't define property '" + i + "', object is not extensible"), e.setProperty(c, i, r.VALUE_IN_DESCRIPTOR, m.properties), c;
        }, this.setProperty(this.OBJECT, "defineProperty", this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push("(function() {", "var defineProperty_ = Object.defineProperty;", "Object.defineProperty = function defineProperty(obj, prop, d1) {", "var d2 = {};", "if ('configurable' in d1) d2.configurable = d1.configurable;", "if ('enumerable' in d1) d2.enumerable = d1.enumerable;", "if ('writable' in d1) d2.writable = d1.writable;", "if ('value' in d1) d2.value = d1.value;", "if ('get' in d1) d2.get = d1.get;", "if ('set' in d1) d2.set = d1.set;", "return defineProperty_(obj, prop, d2);", "};", "})();", "Object.defineProperty(Object, 'defineProperties',", "{configurable: true, writable: true, value:", "function defineProperties(obj, props) {", "var keys = Object.keys(props);", "for (var i = 0; i < keys.length; i++) {", "Object.defineProperty(obj, keys[i], props[keys[i]]);", "}", "return obj;", "}", "});", ""), n = function(c, i) {
          if (c instanceof r.Object || e.throwException(e.TYPE_ERROR, "Object.getOwnPropertyDescriptor called on non-object: " + c), i = String(i), i in c.properties) {
            var m = Object.getOwnPropertyDescriptor(c.properties, i), O = c.getter[i], x = c.setter[i], F = e.createObjectProto(e.OBJECT_PROTO);
            return O || x ? (e.setProperty(F, "get", O), e.setProperty(F, "set", x)) : (e.setProperty(F, "value", m.value), e.setProperty(F, "writable", m.writable)), e.setProperty(F, "configurable", m.configurable), e.setProperty(F, "enumerable", m.enumerable), F;
          }
        }, this.setProperty(this.OBJECT, "getOwnPropertyDescriptor", this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR), n = function(c) {
          return a(c), e.getPrototype(c);
        }, this.setProperty(this.OBJECT, "getPrototypeOf", this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR), n = function(c) {
          return !!c && !c.preventExtensions;
        }, this.setProperty(this.OBJECT, "isExtensible", this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR), n = function(c) {
          return c instanceof r.Object && (c.preventExtensions = true), c;
        }, this.setProperty(this.OBJECT, "preventExtensions", this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR), this.setNativeFunctionPrototype(this.OBJECT, "toString", r.Object.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, "toLocaleString", r.Object.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, "valueOf", r.Object.prototype.valueOf), n = function(c) {
          return a(this), this instanceof r.Object ? String(c) in this.properties : this.hasOwnProperty(c);
        }, this.setNativeFunctionPrototype(this.OBJECT, "hasOwnProperty", n), n = function(c) {
          return a(this), this instanceof r.Object ? Object.prototype.propertyIsEnumerable.call(this.properties, c) : this.propertyIsEnumerable(c);
        }, this.setNativeFunctionPrototype(this.OBJECT, "propertyIsEnumerable", n), n = function(c) {
          for (; ; ) {
            if (c = e.getPrototype(c), !c) return false;
            if (c === this) return true;
          }
        }, this.setNativeFunctionPrototype(this.OBJECT, "isPrototypeOf", n);
      }, r.prototype.initArray = function(t) {
        var e = this, n;
        n = function(u) {
          if (e.calledWithNew()) var c = this;
          else var c = e.createArray();
          var i = arguments[0];
          if (arguments.length === 1 && typeof i == "number") isNaN(r.legalArrayLength(i)) && e.throwException(e.RANGE_ERROR, "Invalid array length: " + i), c.properties.length = i;
          else {
            for (var m = 0; m < arguments.length; m++) c.properties[m] = arguments[m];
            c.properties.length = m;
          }
          return c;
        }, this.ARRAY = this.createNativeFunction(n, true), this.ARRAY_PROTO = this.ARRAY.properties.prototype, this.setProperty(t, "Array", this.ARRAY, r.NONENUMERABLE_DESCRIPTOR), n = function(u) {
          return u && u.class === "Array";
        }, this.setProperty(this.ARRAY, "isArray", this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ARRAY_PROTO, "length", 0, { configurable: false, enumerable: false, writable: true }), this.ARRAY_PROTO.class = "Array", this.polyfills_.push("(function() {", "function createArrayMethod_(f) {", "Object.defineProperty(Array.prototype, f.name,", "{configurable: true, writable: true, value: f});", "}", "createArrayMethod_(", "function pop() {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "if (!len || len < 0) {", "o.length = 0;", "return undefined;", "}", "len--;", "var x = o[len];", "delete o[len];", "o.length = len;", "return x;", "}", ");", "createArrayMethod_(", "function push(var_args) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "for (var i = 0; i < arguments.length; i++) {", "o[len] = arguments[i];", "len++;", "}", "o.length = len;", "return len;", "}", ");", "createArrayMethod_(", "function shift() {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "if (!len || len < 0) {", "o.length = 0;", "return undefined;", "}", "var value = o[0];", "for (var i = 0; i < len - 1; i++) {", "if ((i + 1) in o) {", "o[i] = o[i + 1];", "} else {", "delete o[i];", "}", "}", "delete o[i];", "o.length = len - 1;", "return value;", "}", ");", "createArrayMethod_(", "function unshift(var_args) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "if (!len || len < 0) {", "len = 0;", "}", "for (var i = len - 1; i >= 0; i--) {", "if (i in o) {", "o[i + arguments.length] = o[i];", "} else {", "delete o[i + arguments.length];", "}", "}", "for (var i = 0; i < arguments.length; i++) {", "o[i] = arguments[i];", "}", "return (o.length = len + arguments.length);", "}", ");", "createArrayMethod_(", "function reverse() {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "if (!len || len < 2) {", "return o;", "}", "for (var i = 0; i < len / 2 - 0.5; i++) {", "var x = o[i];", "var hasX = i in o;", "if ((len - i - 1) in o) {", "o[i] = o[len - i - 1];", "} else {", "delete o[i];", "}", "if (hasX) {", "o[len - i - 1] = x;", "} else {", "delete o[len - i - 1];", "}", "}", "return o;", "}", ");", "createArrayMethod_(", "function indexOf(searchElement, fromIndex) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var n = fromIndex | 0;", "if (!len || n >= len) {", "return -1;", "}", "var i = Math.max(n >= 0 ? n : len - Math.abs(n), 0);", "while (i < len) {", "if (i in o && o[i] === searchElement) {", "return i;", "}", "i++;", "}", "return -1;", "}", ");", "createArrayMethod_(", "function lastIndexOf(searchElement, fromIndex) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "if (!len) {", "return -1;", "}", "var n = len - 1;", "if (arguments.length > 1) {", "n = fromIndex | 0;", "if (n) {", "n = (n > 0 || -1) * Math.floor(Math.abs(n));", "}", "}", "var i = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);", "while (i >= 0) {", "if (i in o && o[i] === searchElement) {", "return i;", "}", "i--;", "}", "return -1;", "}", ");", "createArrayMethod_(", "function slice(start, end) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "start |= 0;", "start = (start >= 0) ? start : Math.max(0, len + start);", "if (typeof end !== 'undefined') {", "if (end !== Infinity) {", "end |= 0;", "}", "if (end < 0) {", "end = len + end;", "} else {", "end = Math.min(end, len);", "}", "} else {", "end = len;", "}", "var size = end - start;", "var cloned = new Array(size);", "for (var i = 0; i < size; i++) {", "if ((start + i) in o) {", "cloned[i] = o[start + i];", "}", "}", "return cloned;", "}", ");", "createArrayMethod_(", "function splice(start, deleteCount, var_args) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "start |= 0;", "if (start < 0) {", "start = Math.max(len + start, 0);", "} else {", "start = Math.min(start, len);", "}", "if (arguments.length < 1) {", "deleteCount = len - start;", "} else {", "deleteCount |= 0;", "deleteCount = Math.max(0, Math.min(deleteCount, len - start));", "}", "var removed = [];", "for (var i = start; i < start + deleteCount; i++) {", "if (i in o) {", "removed.push(o[i]);", "} else {", "removed.length++;", "}", "if ((i + deleteCount) in o) {", "o[i] = o[i + deleteCount];", "} else {", "delete o[i];", "}", "}", "for (var i = start + deleteCount; i < len - deleteCount; i++) {", "if ((i + deleteCount) in o) {", "o[i] = o[i + deleteCount];", "} else {", "delete o[i];", "}", "}", "for (var i = len - deleteCount; i < len; i++) {", "delete o[i];", "}", "len -= deleteCount;", "var arl = arguments.length - 2;", "for (var i = len - 1; i >= start; i--) {", "if (i in o) {", "o[i + arl] = o[i];", "} else {", "delete o[i + arl];", "}", "}", "len += arl;", "for (var i = 2; i < arguments.length; i++) {", "o[start + i - 2] = arguments[i];", "}", "o.length = len;", "return removed;", "}", ");", "createArrayMethod_(", "function concat(var_args) {", "if (!this) throw TypeError();", "var o = Object(this);", "var cloned = [];", "for (var i = -1; i < arguments.length; i++) {", "var value = (i === -1) ? o : arguments[i];", "if (Array.isArray(value)) {", "for (var j = 0, l = value.length; j < l; j++) {", "if (j in value) {", "cloned.push(value[j]);", "} else {", "cloned.length++;", "}", "}", "} else {", "cloned.push(value);", "}", "}", "return cloned;", "}", ");", "createArrayMethod_(", "function join(opt_separator) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var sep = typeof opt_separator === 'undefined' ?", "',' : ('' + opt_separator);", "var str = '';", "for (var i = 0; i < len; i++) {", "if (i && sep) str += sep;", "str += (o[i] === null || o[i] === undefined) ? '' : o[i];", "}", "return str;", "}", ");", "createArrayMethod_(", "function every(callbackfn, thisArg) {", "if (!this || typeof callbackfn !== 'function') throw TypeError();", "var t, k = 0;", "var o = Object(this), len = o.length >>> 0;", "if (arguments.length > 1) t = thisArg;", "while (k < len) {", "if (k in o && !callbackfn.call(t, o[k], k, o)) return false;", "k++;", "}", "return true;", "}", ");", "createArrayMethod_(", "function filter(fun, var_args) {", "if (this === void 0 || this === null || typeof fun !== 'function') throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var res = [];", "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;", "for (var i = 0; i < len; i++) {", "if (i in o) {", "var val = o[i];", "if (fun.call(thisArg, val, i, o)) res.push(val);", "}", "}", "return res;", "}", ");", "createArrayMethod_(", "function forEach(callback, thisArg) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var t, k = 0;", "var o = Object(this), len = o.length >>> 0;", "if (arguments.length > 1) t = thisArg;", "while (k < len) {", "if (k in o) callback.call(t, o[k], k, o);", "k++;", "}", "}", ");", "createArrayMethod_(", "function map(callback, thisArg) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var t, k = 0;", "var o = Object(this), len = o.length >>> 0;", "if (arguments.length > 1) t = thisArg;", "var a = new Array(len);", "while (k < len) {", "if (k in o) a[k] = callback.call(t, o[k], k, o);", "k++;", "}", "return a;", "}", ");", "createArrayMethod_(", "function reduce(callback /*, initialValue*/) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var k = 0, value;", "if (arguments.length === 2) {", "value = arguments[1];", "} else {", "while (k < len && !(k in o)) k++;", "if (k >= len) {", "throw TypeError('Reduce of empty array with no initial value');", "}", "value = o[k++];", "}", "for (; k < len; k++) {", "if (k in o) value = callback(value, o[k], k, o);", "}", "return value;", "}", ");", "createArrayMethod_(", "function reduceRight(callback /*, initialValue*/) {", "if (null === this || 'undefined' === typeof this || 'function' !== typeof callback) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var k = len - 1, value;", "if (arguments.length >= 2) {", "value = arguments[1];", "} else {", "while (k >= 0 && !(k in o)) k--;", "if (k < 0) {", "throw TypeError('Reduce of empty array with no initial value');", "}", "value = o[k--];", "}", "for (; k >= 0; k--) {", "if (k in o) value = callback(value, o[k], k, o);", "}", "return value;", "}", ");", "createArrayMethod_(", "function some(fun/*, thisArg*/) {", "if (!this || typeof fun !== 'function') throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;", "for (var i = 0; i < len; i++) {", "if (i in o && fun.call(thisArg, o[i], i, o)) return true;", "}", "return false;", "}", ");", "createArrayMethod_(", "function sort(opt_comp) {", "if (!this) throw TypeError();", "if (typeof opt_comp !== 'function') {", "opt_comp = undefined;", "}", "for (var i = 0; i < this.length; i++) {", "var changes = 0;", "for (var j = 0; j < this.length - i - 1; j++) {", "if (opt_comp ? (opt_comp(this[j], this[j + 1]) > 0) :", "(String(this[j]) > String(this[j + 1]))) {", "var swap = this[j];", "var hasSwap = j in this;", "if ((j + 1) in this) {", "this[j] = this[j + 1];", "} else {", "delete this[j];", "}", "if (hasSwap) {", "this[j + 1] = swap;", "} else {", "delete this[j + 1];", "}", "changes++;", "}", "}", "if (!changes) break;", "}", "return this;", "}", ");", "createArrayMethod_(", "function toLocaleString() {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var out = [];", "for (var i = 0; i < len; i++) {", "out[i] = (o[i] === null || o[i] === undefined) ? '' : o[i].toLocaleString();", "}", "return out.join(',');", "}", ");", "})();", "");
      }, r.prototype.initString = function(t) {
        var e = this, n;
        n = function(i) {
          return i = arguments.length ? r.nativeGlobal.String(i) : "", e.calledWithNew() ? (this.data = i, this) : i;
        }, this.STRING = this.createNativeFunction(n, true), this.setProperty(t, "String", this.STRING, r.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.STRING, "fromCharCode", this.createNativeFunction(String.fromCharCode, false), r.NONENUMERABLE_DESCRIPTOR);
        for (var a = ["charAt", "charCodeAt", "concat", "indexOf", "lastIndexOf", "slice", "substr", "substring", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "trim"], u = 0; u < a.length; u++) this.setNativeFunctionPrototype(this.STRING, a[u], String.prototype[a[u]]);
        n = function(i, m, O) {
          m = e.pseudoToNative(m), O = e.pseudoToNative(O);
          try {
            return String(this).localeCompare(i, m, O);
          } catch (x) {
            e.throwException(e.ERROR, "localeCompare: " + x.message);
          }
        }, this.setNativeFunctionPrototype(this.STRING, "localeCompare", n), n = function(i, m, O) {
          var x = String(this);
          if (m = m ? Number(m) : void 0, e.isa(i, e.REGEXP) && (i = i.data, e.maybeThrowRegExp(i, O), e.REGEXP_MODE === 2)) {
            if (r.vm) {
              var F = { string: x, separator: i, limit: m }, M = "string.split(separator, limit)", B = e.vmCall(M, F, i, O);
              B !== r.REGEXP_TIMEOUT && O(e.arrayNativeToPseudo(B));
            } else {
              var U = e.createWorker(), V = e.regExpTimeout(i, U, O);
              U.onmessage = function(q) {
                clearTimeout(V), O(e.arrayNativeToPseudo(q.data));
              }, U.postMessage(["split", x, i, m]);
            }
            return;
          }
          var B = x.split(i, m);
          O(e.arrayNativeToPseudo(B));
        }, this.setAsyncFunctionPrototype(this.STRING, "split", n), n = function(i, m) {
          var O = String(this);
          if (i = e.isa(i, e.REGEXP) ? i.data : new RegExp(i), e.maybeThrowRegExp(i, m), e.REGEXP_MODE === 2) {
            if (r.vm) {
              var x = { string: O, regexp: i }, F = "string.match(regexp)", V = e.vmCall(F, x, i, m);
              V !== r.REGEXP_TIMEOUT && m(V && e.arrayNativeToPseudo(V));
            } else {
              var M = e.createWorker(), U = e.regExpTimeout(i, M, m);
              M.onmessage = function(B) {
                clearTimeout(U), m(B.data && e.arrayNativeToPseudo(B.data));
              }, M.postMessage(["match", O, i]);
            }
            return;
          }
          var V = O.match(i);
          m(V && e.arrayNativeToPseudo(V));
        }, this.setAsyncFunctionPrototype(this.STRING, "match", n), n = function(i, m) {
          var O = String(this);
          if (e.isa(i, e.REGEXP) ? i = i.data : i = new RegExp(i), e.maybeThrowRegExp(i, m), e.REGEXP_MODE === 2) {
            if (r.vm) {
              var x = { string: O, regexp: i }, F = "string.search(regexp)", M = e.vmCall(F, x, i, m);
              M !== r.REGEXP_TIMEOUT && m(M);
            } else {
              var U = e.createWorker(), V = e.regExpTimeout(i, U, m);
              U.onmessage = function(B) {
                clearTimeout(V), m(B.data);
              }, U.postMessage(["search", O, i]);
            }
            return;
          }
          m(O.search(i));
        }, this.setAsyncFunctionPrototype(this.STRING, "search", n), n = function(i, m, O) {
          var x = String(this);
          if (m = String(m), e.isa(i, e.REGEXP) && (i = i.data, e.maybeThrowRegExp(i, O), e.REGEXP_MODE === 2)) {
            if (r.vm) {
              var F = { string: x, substr: i, newSubstr: m }, M = "string.replace(substr, newSubstr)", U = e.vmCall(M, F, i, O);
              U !== r.REGEXP_TIMEOUT && O(U);
            } else {
              var V = e.createWorker(), B = e.regExpTimeout(i, V, O);
              V.onmessage = function(q) {
                clearTimeout(B), O(q.data);
              }, V.postMessage(["replace", x, i, m]);
            }
            return;
          }
          O(x.replace(i, m));
        }, this.setAsyncFunctionPrototype(this.STRING, "replace", n), this.polyfills_.push("(function() {", "var replace_ = String.prototype.replace;", "String.prototype.replace = function replace(substr, newSubstr) {", "if (typeof newSubstr !== 'function') {", "return replace_.call(this, substr, newSubstr);", "}", "var str = this;", "if (substr instanceof RegExp) {", "var subs = [];", "var m = substr.exec(str);", "while (m) {", "m.push(m.index, str);", "var inject = newSubstr.apply(null, m);", "subs.push([m.index, m[0].length, inject]);", "m = substr.global ? substr.exec(str) : null;", "}", "for (var i = subs.length - 1; i >= 0; i--) {", "str = str.substring(0, subs[i][0]) + subs[i][2] + str.substring(subs[i][0] + subs[i][1]);", "}", "} else {", "var i = str.indexOf(substr);", "if (i !== -1) {", "var inject = newSubstr(str.substr(i, substr.length), i, str);", "str = str.substring(0, i) + inject + str.substring(i + substr.length);", "}", "}", "return str;", "};", "})();", "");
      }, r.prototype.initBoolean = function(t) {
        var e = this, n;
        n = function(u) {
          return u = r.nativeGlobal.Boolean(u), e.calledWithNew() ? (this.data = u, this) : u;
        }, this.BOOLEAN = this.createNativeFunction(n, true), this.setProperty(t, "Boolean", this.BOOLEAN, r.NONENUMERABLE_DESCRIPTOR);
      }, r.prototype.initNumber = function(t) {
        var e = this, n;
        n = function(i) {
          return i = arguments.length ? r.nativeGlobal.Number(i) : 0, e.calledWithNew() ? (this.data = i, this) : i;
        }, this.NUMBER = this.createNativeFunction(n, true), this.setProperty(t, "Number", this.NUMBER, r.NONENUMERABLE_DESCRIPTOR);
        for (var a = ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"], u = 0; u < a.length; u++) this.setProperty(this.NUMBER, a[u], Number[a[u]], r.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR);
        n = function(i) {
          try {
            return Number(this).toExponential(i);
          } catch (m) {
            e.throwException(e.ERROR, m.message);
          }
        }, this.setNativeFunctionPrototype(this.NUMBER, "toExponential", n), n = function(i) {
          try {
            return Number(this).toFixed(i);
          } catch (m) {
            e.throwException(e.ERROR, m.message);
          }
        }, this.setNativeFunctionPrototype(this.NUMBER, "toFixed", n), n = function(i) {
          try {
            return Number(this).toPrecision(i);
          } catch (m) {
            e.throwException(e.ERROR, m.message);
          }
        }, this.setNativeFunctionPrototype(this.NUMBER, "toPrecision", n), n = function(i) {
          try {
            return Number(this).toString(i);
          } catch (m) {
            e.throwException(e.ERROR, m.message);
          }
        }, this.setNativeFunctionPrototype(this.NUMBER, "toString", n), n = function(i, m) {
          i = i ? e.pseudoToNative(i) : void 0, m = m ? e.pseudoToNative(m) : void 0;
          try {
            return Number(this).toLocaleString(i, m);
          } catch (O) {
            e.throwException(e.ERROR, "toLocaleString: " + O.message);
          }
        }, this.setNativeFunctionPrototype(this.NUMBER, "toLocaleString", n);
      }, r.prototype.initDate = function(t) {
        var e = this, n;
        n = function(i, m) {
          if (!e.calledWithNew()) return r.nativeGlobal.Date();
          var O = [null].concat(Array.from(arguments));
          return this.data = new (Function.prototype.bind.apply(r.nativeGlobal.Date, O))(), this;
        }, this.DATE = this.createNativeFunction(n, true), this.DATE_PROTO = this.DATE.properties.prototype, this.setProperty(t, "Date", this.DATE, r.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, "now", this.createNativeFunction(Date.now, false), r.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, "parse", this.createNativeFunction(Date.parse, false), r.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, "UTC", this.createNativeFunction(Date.UTC, false), r.NONENUMERABLE_DESCRIPTOR);
        for (var a = ["getDate", "getDay", "getFullYear", "getHours", "getMilliseconds", "getMinutes", "getMonth", "getSeconds", "getTime", "getTimezoneOffset", "getUTCDate", "getUTCDay", "getUTCFullYear", "getUTCHours", "getUTCMilliseconds", "getUTCMinutes", "getUTCMonth", "getUTCSeconds", "getYear", "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds", "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear", "toDateString", "toISOString", "toJSON", "toGMTString", "toLocaleDateString", "toLocaleString", "toLocaleTimeString", "toTimeString", "toUTCString"], u = 0; u < a.length; u++) n = /* @__PURE__ */ function(c) {
          return function(i) {
            var m = this.data;
            m instanceof Date || e.throwException(e.TYPE_ERROR, c + " not called on a Date");
            for (var O = [], x = 0; x < arguments.length; x++) O[x] = e.pseudoToNative(arguments[x]);
            return m[c].apply(m, O);
          };
        }(a[u]), this.setNativeFunctionPrototype(this.DATE, a[u], n);
      }, r.prototype.initRegExp = function(t) {
        var e = this, n;
        n = function(u, c) {
          if (e.calledWithNew()) var i = this;
          else {
            if (c === void 0 && e.isa(u, e.REGEXP)) return u;
            var i = e.createObjectProto(e.REGEXP_PROTO);
          }
          u = u === void 0 ? "" : String(u), c = c ? String(c) : "", /^[gmi]*$/.test(c) || e.throwException(e.SYNTAX_ERROR, "Invalid regexp flag: " + c);
          try {
            var m = new r.nativeGlobal.RegExp(u, c);
          } catch (O) {
            e.throwException(e.SYNTAX_ERROR, O.message);
          }
          return e.populateRegExp(i, m), i;
        }, this.REGEXP = this.createNativeFunction(n, true), this.REGEXP_PROTO = this.REGEXP.properties.prototype, this.setProperty(t, "RegExp", this.REGEXP, r.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, "global", void 0, r.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, "ignoreCase", void 0, r.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, "multiline", void 0, r.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, "source", "(?:)", r.READONLY_NONENUMERABLE_DESCRIPTOR), this.polyfills_.push("Object.defineProperty(RegExp.prototype, 'test',", "{configurable: true, writable: true, value:", "function test(str) {", "return !!this.exec(str);", "}", "});"), n = function(u, c) {
          var i = this.data;
          if (u = String(u), i.lastIndex = Number(e.getProperty(this, "lastIndex")), e.maybeThrowRegExp(i, c), e.REGEXP_MODE === 2) {
            if (r.vm) {
              var m = { string: u, regexp: i }, O = "regexp.exec(string)", U = e.vmCall(O, m, i, c);
              U !== r.REGEXP_TIMEOUT && (e.setProperty(this, "lastIndex", i.lastIndex), c(V(U)));
            } else {
              var x = e.createWorker(), F = e.regExpTimeout(i, x, c), M = this;
              x.onmessage = function(B) {
                clearTimeout(F), e.setProperty(M, "lastIndex", B.data[1]), c(V(B.data[0]));
              }, x.postMessage(["exec", i, i.lastIndex, u]);
            }
            return;
          }
          var U = i.exec(u);
          e.setProperty(this, "lastIndex", i.lastIndex), c(V(U));
          function V(B) {
            if (B) {
              var q = e.arrayNativeToPseudo(B);
              return e.setProperty(q, "index", B.index), e.setProperty(q, "input", B.input), q;
            }
            return null;
          }
        }, this.setAsyncFunctionPrototype(this.REGEXP, "exec", n);
      }, r.prototype.initError = function(t) {
        var e = this;
        this.ERROR = this.createNativeFunction(function(u) {
          if (e.calledWithNew()) var c = this;
          else var c = e.createObject(e.ERROR);
          return e.populateError(c, u), c;
        }, true), this.setProperty(t, "Error", this.ERROR, r.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, "message", "", r.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, "name", "Error", r.NONENUMERABLE_DESCRIPTOR);
        var n = function(a) {
          var u = e.createNativeFunction(function(c) {
            if (e.calledWithNew()) var i = this;
            else var i = e.createObject(u);
            return e.populateError(i, c), i;
          }, true);
          return e.setProperty(u, "prototype", e.createObject(e.ERROR), r.NONENUMERABLE_DESCRIPTOR), e.setProperty(u.properties.prototype, "name", a, r.NONENUMERABLE_DESCRIPTOR), e.setProperty(t, a, u, r.NONENUMERABLE_DESCRIPTOR), u;
        };
        this.EVAL_ERROR = n("EvalError"), this.RANGE_ERROR = n("RangeError"), this.REFERENCE_ERROR = n("ReferenceError"), this.SYNTAX_ERROR = n("SyntaxError"), this.TYPE_ERROR = n("TypeError"), this.URI_ERROR = n("URIError");
      }, r.prototype.initMath = function(t) {
        var e = this.createObjectProto(this.OBJECT_PROTO);
        this.setProperty(t, "Math", e, r.NONENUMERABLE_DESCRIPTOR);
        for (var n = ["E", "LN2", "LN10", "LOG2E", "LOG10E", "PI", "SQRT1_2", "SQRT2"], a = 0; a < n.length; a++) this.setProperty(e, n[a], Math[n[a]], r.READONLY_NONENUMERABLE_DESCRIPTOR);
        for (var u = ["abs", "acos", "asin", "atan", "atan2", "ceil", "cos", "exp", "floor", "log", "max", "min", "pow", "random", "round", "sin", "sqrt", "tan"], a = 0; a < u.length; a++) this.setProperty(e, u[a], this.createNativeFunction(Math[u[a]], false), r.NONENUMERABLE_DESCRIPTOR);
      }, r.prototype.initJSON = function(t) {
        var e, n = this, a = n.createObjectProto(this.OBJECT_PROTO);
        this.setProperty(t, "JSON", a, r.NONENUMERABLE_DESCRIPTOR), e = function(c) {
          try {
            var i = JSON.parse(String(c));
          } catch (m) {
            n.throwException(n.SYNTAX_ERROR, m.message);
          }
          return n.nativeToPseudo(i);
        }, this.setProperty(a, "parse", this.createNativeFunction(e, false)), e = function(c, i, m) {
          i && i.class === "Function" ? n.throwException(n.TYPE_ERROR, "Function replacer on JSON.stringify not supported") : i && i.class === "Array" ? (i = n.arrayPseudoToNative(i), i = i.filter(function(F) {
            return typeof F == "string" || typeof F == "number";
          })) : i = null, typeof m != "string" && typeof m != "number" && (m = void 0);
          var O = n.pseudoToNative(c);
          try {
            var x = JSON.stringify(O, i, m);
          } catch (F) {
            n.throwException(n.TYPE_ERROR, F.message);
          }
          return x;
        }, this.setProperty(a, "stringify", this.createNativeFunction(e, false));
      }, r.prototype.isa = function(t, e) {
        if (t == null || !e) return false;
        var n = e.properties.prototype;
        if (t === n) return true;
        for (t = this.getPrototype(t); t; ) {
          if (t === n) return true;
          t = t.proto;
        }
        return false;
      }, r.prototype.populateRegExp = function(t, e) {
        t.data = new RegExp(e.source, e.flags), this.setProperty(t, "lastIndex", e.lastIndex, r.NONENUMERABLE_DESCRIPTOR), this.setProperty(t, "source", e.source, r.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(t, "global", e.global, r.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(t, "ignoreCase", e.ignoreCase, r.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(t, "multiline", e.multiline, r.READONLY_NONENUMERABLE_DESCRIPTOR);
      }, r.prototype.populateError = function(t, e) {
        e && this.setProperty(t, "message", String(e), r.NONENUMERABLE_DESCRIPTOR);
        for (var n = [], a = this.stateStack.length - 1; a >= 0; a--) {
          var u = this.stateStack[a], c = u.node;
          if (c.type === "CallExpression") {
            var i = u.func_;
            i && n.length && (n[n.length - 1].datumName = this.getProperty(i, "name"));
          }
          c.loc && (!n.length || c.type === "CallExpression") && n.push({ datumLoc: c.loc });
        }
        for (var m = String(this.getProperty(t, "name")), O = String(this.getProperty(t, "message")), x = m + ": " + O + "\n", a = 0; a < n.length; a++) {
          var F = n[a].datumLoc, M = n[a].datumName, U = F.source + ":" + F.start.line + ":" + F.start.column;
          M ? x += "  at " + M + " (" + U + ")\n" : x += "  at " + U + "\n";
        }
        this.setProperty(t, "stack", x.trim(), r.NONENUMERABLE_DESCRIPTOR);
      }, r.prototype.createWorker = function() {
        var t = this.createWorker.blob_;
        return t || (t = new Blob([r.WORKER_CODE.join("\n")], { type: "application/javascript" }), this.createWorker.blob_ = t), new Worker(URL.createObjectURL(t));
      }, r.prototype.vmCall = function(t, e, n, a) {
        var u = { timeout: this.REGEXP_THREAD_TIMEOUT };
        try {
          return r.vm.runInNewContext(t, e, u);
        } catch (e2) {
          a(null), this.throwException(this.ERROR, "RegExp Timeout: " + n);
        }
        return r.REGEXP_TIMEOUT;
      }, r.prototype.maybeThrowRegExp = function(t, e) {
        var n;
        if (this.REGEXP_MODE === 0) n = false;
        else if (this.REGEXP_MODE === 1) n = true;
        else if (r.vm) n = true;
        else if (typeof Worker == "function" && typeof URL == "function") n = true;
        else {
          try {
            r.vm = A("vm");
          } catch (e2) {
          }
          n = !!r.vm;
        }
        n || (e(null), this.throwException(this.ERROR, "Regular expressions not supported: " + t));
      }, r.prototype.regExpTimeout = function(t, e, n) {
        var a = this;
        return setTimeout(function() {
          e.terminate(), n(null);
          try {
            a.throwException(a.ERROR, "RegExp Timeout: " + t);
          } catch (e2) {
          }
        }, this.REGEXP_THREAD_TIMEOUT);
      }, r.prototype.createObject = function(t) {
        return this.createObjectProto(t && t.properties.prototype);
      }, r.prototype.createObjectProto = function(t) {
        if (typeof t != "object") throw Error("Non object prototype");
        var e = new r.Object(t);
        return this.isa(e, this.ERROR) && (e.class = "Error"), e;
      }, r.prototype.createArray = function() {
        var t = this.createObjectProto(this.ARRAY_PROTO);
        return this.setProperty(t, "length", 0, { configurable: false, enumerable: false, writable: true }), t.class = "Array", t;
      }, r.prototype.createFunctionBase_ = function(t, e) {
        var n = this.createObjectProto(this.FUNCTION_PROTO);
        if (e) {
          var a = this.createObjectProto(this.OBJECT_PROTO);
          this.setProperty(n, "prototype", a, r.NONENUMERABLE_DESCRIPTOR), this.setProperty(a, "constructor", n, r.NONENUMERABLE_DESCRIPTOR);
        } else n.illegalConstructor = true;
        return this.setProperty(n, "length", t, r.READONLY_NONENUMERABLE_DESCRIPTOR), n.class = "Function", n;
      }, r.prototype.createFunction = function(t, e, n) {
        var a = this.createFunctionBase_(t.params.length, true);
        a.parentScope = e, a.node = t;
        var u = t.id ? String(t.id.name) : n || "";
        return this.setProperty(a, "name", u, r.READONLY_NONENUMERABLE_DESCRIPTOR), a;
      }, r.prototype.createNativeFunction = function(t, e) {
        var n = this.createFunctionBase_(t.length, e);
        return n.nativeFunc = t, t.id = this.functionCounter_++, this.setProperty(n, "name", t.name, r.READONLY_NONENUMERABLE_DESCRIPTOR), n;
      }, r.prototype.createAsyncFunction = function(t) {
        var e = this.createFunctionBase_(t.length, true);
        return e.asyncFunc = t, t.id = this.functionCounter_++, this.setProperty(e, "name", t.name, r.READONLY_NONENUMERABLE_DESCRIPTOR), e;
      }, r.prototype.nativeToPseudo = function(t) {
        if (t instanceof r.Object) throw Error("Object is already pseudo");
        if (t == null || t === true || t === false || typeof t == "string" || typeof t == "number") return t;
        if (t instanceof RegExp) {
          var e = this.createObjectProto(this.REGEXP_PROTO);
          return this.populateRegExp(e, t), e;
        }
        if (t instanceof Date) {
          var n = this.createObjectProto(this.DATE_PROTO);
          return n.data = new Date(t.valueOf()), n;
        }
        if (typeof t == "function") {
          var a = this, u = function() {
            var F = Array.prototype.slice.call(arguments).map(function(U) {
              return a.pseudoToNative(U);
            }), M = t.apply(a, F);
            return a.nativeToPseudo(M);
          }, c = Object.getOwnPropertyDescriptor(t, "prototype");
          return this.createNativeFunction(u, !!c);
        }
        if (Array.isArray(t)) {
          for (var i = this.createArray(), m = 0; m < t.length; m++) m in t && this.setProperty(i, m, this.nativeToPseudo(t[m]));
          return i;
        }
        var O = this.createObjectProto(this.OBJECT_PROTO);
        for (var x in t) this.setProperty(O, x, this.nativeToPseudo(t[x]));
        return O;
      }, r.prototype.pseudoToNative = function(t, e) {
        if (typeof t != "object" && typeof t != "function" || t === null) return t;
        if (!(t instanceof r.Object)) throw Error("Object is not pseudo");
        if (this.isa(t, this.REGEXP)) {
          var n = new RegExp(t.data.source, t.data.flags);
          return n.lastIndex = t.data.lastIndex, n;
        }
        if (this.isa(t, this.DATE)) return new Date(t.data.valueOf());
        var a = e || { pseudo: [], native: [] }, u = a.pseudo.indexOf(t);
        if (u !== -1) return a.native[u];
        a.pseudo.push(t);
        var c;
        if (this.isa(t, this.ARRAY)) {
          c = [], a.native.push(c);
          for (var i = this.getProperty(t, "length"), m = 0; m < i; m++) this.hasProperty(t, m) && (c[m] = this.pseudoToNative(this.getProperty(t, m), a));
        } else {
          c = {}, a.native.push(c);
          var O;
          for (var x in t.properties) O = this.pseudoToNative(t.properties[x], a), Object.defineProperty(c, x, { value: O, writable: true, enumerable: true, configurable: true });
        }
        return a.pseudo.pop(), a.native.pop(), c;
      }, r.prototype.arrayNativeToPseudo = function(t) {
        for (var e = this.createArray(), n = Object.getOwnPropertyNames(t), a = 0; a < n.length; a++) this.setProperty(e, n[a], t[n[a]]);
        return e;
      }, r.prototype.arrayPseudoToNative = function(t) {
        var e = [];
        for (var n in t.properties) e[n] = this.getProperty(t, n);
        return e.length = r.legalArrayLength(this.getProperty(t, "length")) || 0, e;
      }, r.prototype.getPrototype = function(t) {
        switch (typeof t) {
          case "number":
            return this.NUMBER.properties.prototype;
          case "boolean":
            return this.BOOLEAN.properties.prototype;
          case "string":
            return this.STRING.properties.prototype;
        }
        return t ? t.proto : null;
      }, r.prototype.getProperty = function(t, e) {
        if (this.getterStep_) throw Error("Getter not supported in that context");
        if (e = String(e), t == null && this.throwException(this.TYPE_ERROR, "Cannot read property '" + e + "' of " + t), typeof t == "object" && !(t instanceof r.Object)) throw TypeError("Expecting native value or pseudo object");
        if (e === "length") {
          if (this.isa(t, this.STRING)) return String(t).length;
        } else if (e.charCodeAt(0) < 64 && this.isa(t, this.STRING)) {
          var n = r.legalArrayIndex(e);
          if (!isNaN(n) && n < String(t).length) return String(t)[n];
        }
        do
          if (t.properties && e in t.properties) {
            var a = t.getter[e];
            return a ? (this.getterStep_ = true, a) : t.properties[e];
          }
        while (t = this.getPrototype(t));
      }, r.prototype.hasProperty = function(t, e) {
        if (!(t instanceof r.Object)) throw TypeError("Primitive data type has no properties");
        if (e = String(e), e === "length" && this.isa(t, this.STRING)) return true;
        if (this.isa(t, this.STRING)) {
          var n = r.legalArrayIndex(e);
          if (!isNaN(n) && n < String(t).length) return true;
        }
        do
          if (t.properties && e in t.properties) return true;
        while (t = this.getPrototype(t));
        return false;
      }, r.prototype.setProperty = function(t, e, n, a) {
        if (this.setterStep_) throw Error("Setter not supported in that context");
        if (e = String(e), t == null && this.throwException(this.TYPE_ERROR, "Cannot set property '" + e + "' of " + t), typeof t == "object" && !(t instanceof r.Object)) throw TypeError("Expecting native value or pseudo object");
        a && ("get" in a || "set" in a) && ("value" in a || "writable" in a) && this.throwException(this.TYPE_ERROR, "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
        var u = !this.stateStack || this.getScope().strict;
        if (!(t instanceof r.Object)) {
          u && this.throwException(this.TYPE_ERROR, "Can't create property '" + e + "' on '" + t + "'");
          return;
        }
        if (this.isa(t, this.STRING)) {
          var c = r.legalArrayIndex(e);
          if (e === "length" || !isNaN(c) && c < String(t).length) {
            u && this.throwException(this.TYPE_ERROR, "Cannot assign to read only property '" + e + "' of String '" + t.data + "'");
            return;
          }
        }
        if (t.class === "Array") {
          var i = t.properties.length, m;
          if (e === "length") {
            if (a) {
              if (!("value" in a)) return;
              n = a.value;
            }
            if (n = r.legalArrayLength(n), isNaN(n) && this.throwException(this.RANGE_ERROR, "Invalid array length"), n < i) for (m in t.properties) m = r.legalArrayIndex(m), !isNaN(m) && n <= m && delete t.properties[m];
          } else isNaN(m = r.legalArrayIndex(e)) || (t.properties.length = Math.max(i, m + 1));
        }
        if (t.preventExtensions && !(e in t.properties)) {
          u && this.throwException(this.TYPE_ERROR, "Can't add property '" + e + "', object is not extensible");
          return;
        }
        if (a) {
          var O = {};
          "get" in a && a.get && (t.getter[e] = a.get, O.get = this.setProperty.placeholderGet_), "set" in a && a.set && (t.setter[e] = a.set, O.set = this.setProperty.placeholderSet_), "configurable" in a && (O.configurable = a.configurable), "enumerable" in a && (O.enumerable = a.enumerable), "writable" in a && (O.writable = a.writable, delete t.getter[e], delete t.setter[e]), "value" in a ? (O.value = a.value, delete t.getter[e], delete t.setter[e]) : n !== r.VALUE_IN_DESCRIPTOR && (O.value = n, delete t.getter[e], delete t.setter[e]);
          try {
            Object.defineProperty(t.properties, e, O);
          } catch (e2) {
            this.throwException(this.TYPE_ERROR, "Cannot redefine property: " + e);
          }
          "get" in a && !a.get && delete t.getter[e], "set" in a && !a.set && delete t.setter[e];
        } else {
          if (n === r.VALUE_IN_DESCRIPTOR) throw ReferenceError("Value not specified");
          for (var x = t; !(e in x.properties); ) if (x = this.getPrototype(x), !x) {
            x = t;
            break;
          }
          if (x.setter && x.setter[e]) return this.setterStep_ = true, x.setter[e];
          if (x.getter && x.getter[e]) u && this.throwException(this.TYPE_ERROR, "Cannot set property '" + e + "' of object '" + t + "' which only has a getter");
          else try {
            t.properties[e] = n;
          } catch (e2) {
            u && this.throwException(this.TYPE_ERROR, "Cannot assign to read only property '" + e + "' of object '" + t + "'");
          }
        }
      }, r.prototype.setProperty.placeholderGet_ = function() {
        throw Error("Placeholder getter");
      }, r.prototype.setProperty.placeholderSet_ = function() {
        throw Error("Placeholder setter");
      }, r.prototype.setNativeFunctionPrototype = function(t, e, n) {
        this.setProperty(t.properties.prototype, e, this.createNativeFunction(n, false), r.NONENUMERABLE_DESCRIPTOR);
      }, r.prototype.setAsyncFunctionPrototype = function(t, e, n) {
        this.setProperty(t.properties.prototype, e, this.createAsyncFunction(n), r.NONENUMERABLE_DESCRIPTOR);
      }, r.prototype.getScope = function() {
        var t = this.stateStack[this.stateStack.length - 1].scope;
        if (!t) throw Error("No scope found");
        return t;
      }, r.prototype.createScope = function(t, e) {
        var n = false;
        if (e && e.strict) n = true;
        else {
          var a = t.body && t.body[0];
          a && a.expression && a.expression.type === "Literal" && a.expression.value === "use strict" && (n = true);
        }
        var u = this.createObjectProto(null), c = new r.Scope(e, n, u);
        return e || this.initGlobal(c.object), this.populateScope_(t, c), c;
      }, r.prototype.createSpecialScope = function(t, e) {
        if (!t) throw Error("parentScope required");
        var n = e || this.createObjectProto(null);
        return new r.Scope(t, t.strict, n);
      }, r.prototype.getValueFromScope = function(t) {
        for (var e = this.getScope(); e && e !== this.globalScope; ) {
          if (t in e.object.properties) return e.object.properties[t];
          e = e.parentScope;
        }
        if (e === this.globalScope && this.hasProperty(e.object, t)) return this.getProperty(e.object, t);
        var n = this.stateStack[this.stateStack.length - 1].node;
        n.type === "UnaryExpression" && n.operator === "typeof" || this.throwException(this.REFERENCE_ERROR, t + " is not defined");
      }, r.prototype.setValueToScope = function(t, e) {
        for (var n = this.getScope(), a = n.strict; n && n !== this.globalScope; ) {
          if (t in n.object.properties) {
            try {
              n.object.properties[t] = e;
            } catch (e2) {
              a && this.throwException(this.TYPE_ERROR, "Cannot assign to read only variable '" + t + "'");
            }
            return;
          }
          n = n.parentScope;
        }
        if (n === this.globalScope && (!a || this.hasProperty(n.object, t))) return this.setProperty(n.object, t, e);
        this.throwException(this.REFERENCE_ERROR, t + " is not defined");
      }, r.prototype.populateScope_ = function(t, e) {
        var n;
        if (t.variableCache_) n = t.variableCache_;
        else {
          switch (n = /* @__PURE__ */ Object.create(null), t.type) {
            case "VariableDeclaration":
              for (var a = 0; a < t.declarations.length; a++) n[t.declarations[a].id.name] = true;
              break;
            case "FunctionDeclaration":
              n[t.id.name] = t;
              break;
            case "BlockStatement":
            case "CatchClause":
            case "DoWhileStatement":
            case "ForInStatement":
            case "ForStatement":
            case "IfStatement":
            case "LabeledStatement":
            case "Program":
            case "SwitchCase":
            case "SwitchStatement":
            case "TryStatement":
            case "WithStatement":
            case "WhileStatement":
              var u = t.constructor;
              for (var c in t) if (c !== "loc") {
                var i = t[c];
                if (i && typeof i == "object") {
                  var m;
                  if (Array.isArray(i)) {
                    for (var a = 0; a < i.length; a++) if (i[a] && i[a].constructor === u) {
                      m = this.populateScope_(i[a], e);
                      for (var c in m) n[c] = m[c];
                    }
                  } else if (i.constructor === u) {
                    m = this.populateScope_(i, e);
                    for (var c in m) n[c] = m[c];
                  }
                }
              }
          }
          t.variableCache_ = n;
        }
        for (var c in n) n[c] === true ? this.setProperty(e.object, c, void 0, r.VARIABLE_DESCRIPTOR) : this.setProperty(e.object, c, this.createFunction(n[c], e), r.VARIABLE_DESCRIPTOR);
        return n;
      }, r.prototype.calledWithNew = function() {
        return this.stateStack[this.stateStack.length - 1].isConstructor;
      }, r.prototype.getValue = function(t) {
        return t[0] === r.SCOPE_REFERENCE ? this.getValueFromScope(t[1]) : this.getProperty(t[0], t[1]);
      }, r.prototype.setValue = function(t, e) {
        return t[0] === r.SCOPE_REFERENCE ? this.setValueToScope(t[1], e) : this.setProperty(t[0], t[1], e);
      }, r.prototype.throwException = function(t, e) {
        if (!this.globalScope) throw e === void 0 ? t : e;
        if (e === void 0 || !(t instanceof r.Object)) var n = t;
        else {
          var n = this.createObject(t);
          this.populateError(n, e);
        }
        throw this.unwind(r.Completion.THROW, n, void 0), r.STEP_ERROR;
      }, r.prototype.unwind = function(t, e, n) {
        if (t === r.Completion.NORMAL) throw TypeError("Should not unwind for NORMAL completions");
        e: for (var a = this.stateStack; a.length > 0; a.pop()) {
          var u = a[a.length - 1];
          switch (u.node.type) {
            case "TryStatement":
              u.cv = { type: t, value: e, label: n };
              return;
            case "CallExpression":
            case "NewExpression":
              if (t === r.Completion.RETURN) {
                u.value = e;
                return;
              } else if (t !== r.Completion.THROW) throw Error("Unsynatctic break/continue not rejected by Acorn");
              break;
            case "Program":
              u.done = true;
              break e;
          }
          if (t === r.Completion.BREAK) {
            if (n ? u.labels && u.labels.indexOf(n) !== -1 : u.isLoop || u.isSwitch) {
              a.pop();
              return;
            }
          } else if (t === r.Completion.CONTINUE && (n ? u.labels && u.labels.indexOf(n) !== -1 : u.isLoop)) return;
        }
        var c;
        if (this.isa(e, this.ERROR)) {
          var i = { EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError }, m = String(this.getProperty(e, "name")), O = this.getProperty(e, "message").valueOf(), x = i[m] || Error;
          c = x(O), c.stack = String(this.getProperty(e, "stack"));
        } else c = String(e);
        throw this.value = c, c;
      }, r.prototype.nodeSummary = function(t) {
        switch (t.type) {
          case "ArrayExpression":
            return "[...]";
          case "BinaryExpression":
          case "LogicalExpression":
            return this.nodeSummary(t.left) + " " + t.operator + " " + this.nodeSummary(t.right);
          case "CallExpression":
            return this.nodeSummary(t.callee) + "(...)";
          case "ConditionalExpression":
            return this.nodeSummary(t.test) + " ? " + this.nodeSummary(t.consequent) + " : " + this.nodeSummary(t.alternate);
          case "Identifier":
            return t.name;
          case "Literal":
            return t.raw;
          case "MemberExpression":
            var e = this.nodeSummary(t.object), n = this.nodeSummary(t.property);
            return t.computed ? e + "[" + n + "]" : e + "." + n;
          case "NewExpression":
            return "new " + this.nodeSummary(t.callee) + "(...)";
          case "ObjectExpression":
            return "{...}";
          case "ThisExpression":
            return "this";
          case "UnaryExpression":
            return t.operator + " " + this.nodeSummary(t.argument);
          case "UpdateExpression":
            var a = this.nodeSummary(t.argument);
            return t.prefix ? t.operator + a : a + t.operator;
        }
        return "???";
      }, r.prototype.createTask_ = function(t, e) {
        var n = this.stateStack[this.stateStack.length - 1], a = Array.from(e), u = a.shift(), c = Math.max(Number(a.shift() || 0), 0), i = this.newNode(), m, O, x;
        if (u instanceof r.Object && u.class === "Function") O = u, i.type = "CallExpression", m = n.scope;
        else {
          try {
            x = this.parse_(String(u), "taskCode" + this.taskCodeNumber_++);
          } catch (B) {
            this.throwException(this.SYNTAX_ERROR, "Invalid code: " + B.message);
          }
          i.type = "EvalProgram_", i.body = x.body;
          var F = n.node.arguments[0], M = F ? F.start : void 0, U = F ? F.end : void 0;
          r.stripLocations_(i, M, U), m = this.globalScope, a.length = 0;
        }
        var V = new r.Task(O, a, m, i, t ? c : -1);
        return this.scheduleTask_(V, c), V.pid;
      }, r.prototype.scheduleTask_ = function(t, e) {
        t.time = Date.now() + e, this.tasks.push(t), this.tasks.sort(function(n, a) {
          return n.time - a.time;
        });
      }, r.prototype.deleteTask_ = function(t) {
        for (var e = 0; e < this.tasks.length; e++) if (this.tasks[e].pid == t) {
          this.tasks.splice(e, 1);
          break;
        }
      }, r.prototype.nextTask_ = function() {
        var t = this.tasks[0];
        if (!t || t.time > Date.now()) return null;
        this.tasks.shift(), t.interval >= 0 && this.scheduleTask_(t, t.interval);
        var e = new r.State(t.node, t.scope);
        return t.functionRef && (e.doneCallee_ = 2, e.funcThis_ = this.globalObject, e.func_ = t.functionRef, e.doneArgs_ = true, e.arguments_ = t.argsArray), e;
      }, r.prototype.createGetter_ = function(t, e) {
        if (!this.getterStep_) throw Error("Unexpected call to createGetter");
        this.getterStep_ = false;
        var n = Array.isArray(e) ? e[0] : e, a = this.newNode();
        a.type = "CallExpression";
        var u = new r.State(a, this.stateStack[this.stateStack.length - 1].scope);
        return u.doneCallee_ = 2, u.funcThis_ = n, u.func_ = t, u.doneArgs_ = true, u.arguments_ = [], u;
      }, r.prototype.createSetter_ = function(t, e, n) {
        if (!this.setterStep_) throw Error("Unexpected call to createSetter");
        this.setterStep_ = false;
        var a = Array.isArray(e) ? e[0] : this.globalObject, u = this.newNode();
        u.type = "CallExpression";
        var c = new r.State(u, this.stateStack[this.stateStack.length - 1].scope);
        return c.doneCallee_ = 2, c.funcThis_ = a, c.func_ = t, c.doneArgs_ = true, c.arguments_ = [n], c;
      }, r.prototype.boxThis_ = function(t) {
        if (t == null) return this.globalObject;
        if (!(t instanceof r.Object)) {
          var e = this.createObjectProto(this.getPrototype(t));
          return e.data = t, e;
        }
        return t;
      }, r.prototype.getGlobalScope = function() {
        return this.globalScope;
      }, r.prototype.getStateStack = function() {
        return this.stateStack;
      }, r.prototype.setStateStack = function(t) {
        this.stateStack = t;
      }, r.Value, r.State = function(t, e) {
        this.node = t, this.scope = e;
      }, r.Scope = function(t, e, n) {
        this.parentScope = t, this.strict = e, this.object = n;
      }, r.Object = function(t) {
        this.getter = /* @__PURE__ */ Object.create(null), this.setter = /* @__PURE__ */ Object.create(null), this.properties = /* @__PURE__ */ Object.create(null), this.proto = t;
      }, r.Object.prototype.proto = null, r.Object.prototype.class = "Object", r.Object.prototype.data = null, r.Object.prototype.toString = function() {
        if (!r.currentInterpreter_) return "[object Interpreter.Object]";
        if (!(this instanceof r.Object)) return String(this);
        if (this.class === "Array") {
          var t = r.toStringCycles_;
          t.push(this);
          try {
            var e = [], n = this.properties.length, a = false;
            n > 1024 && (n = 1e3, a = true);
            for (var u = 0; u < n; u++) {
              var c = this.properties[u];
              e[u] = c instanceof r.Object && t.indexOf(c) !== -1 ? "..." : c;
            }
            a && e.push("...");
          } finally {
            t.pop();
          }
          return e.join(",");
        }
        if (this.class === "Error") {
          var t = r.toStringCycles_;
          if (t.indexOf(this) !== -1) return "[object Error]";
          var i, m, O = this;
          do
            if ("name" in O.properties) {
              i = O.properties.name;
              break;
            }
          while (O = O.proto);
          O = this;
          do
            if ("message" in O.properties) {
              m = O.properties.message;
              break;
            }
          while (O = O.proto);
          t.push(this);
          try {
            i = i && String(i), m = m && String(m);
          } finally {
            t.pop();
          }
          return m ? i + ": " + m : String(i);
        }
        return this.data !== null ? String(this.data) : "[object " + this.class + "]";
      }, r.Object.prototype.valueOf = function() {
        return r.currentInterpreter_ ? this.data === void 0 || this.data === null || this.data instanceof RegExp ? this : this.data instanceof Date ? this.data.valueOf() : this.data : this;
      }, r.Task = function(t, e, n, a, u) {
        this.functionRef = t, this.argsArray = e, this.scope = n, this.node = a, this.interval = u, this.pid = ++r.Task.pid, this.time = 0;
      }, r.Task.pid = 0, r.prototype.stepArrayExpression = function(t, e, n) {
        var a = n.elements, u = e.n_ || 0;
        for (e.array_ ? (this.setProperty(e.array_, u, e.value), u++) : (e.array_ = this.createArray(), e.array_.properties.length = a.length); u < a.length; ) {
          if (a[u]) return e.n_ = u, new r.State(a[u], e.scope);
          u++;
        }
        t.pop(), t[t.length - 1].value = e.array_;
      }, r.prototype.stepAssignmentExpression = function(t, e, n) {
        if (!e.doneLeft_) {
          e.doneLeft_ = true;
          var a = new r.State(n.left, e.scope);
          return a.components = true, a;
        }
        if (!e.doneRight_) {
          if (e.leftReference_ || (e.leftReference_ = e.value), e.doneGetter_ && (e.leftValue_ = e.value), !e.doneGetter_ && n.operator !== "=") {
            var u = this.getValue(e.leftReference_);
            if (e.leftValue_ = u, this.getterStep_) {
              e.doneGetter_ = true;
              var c = u;
              return this.createGetter_(c, e.leftReference_);
            }
          }
          return e.doneRight_ = true, n.operator === "=" && n.left.type === "Identifier" && (e.destinationName = n.left.name), new r.State(n.right, e.scope);
        }
        if (e.doneSetter_) {
          t.pop(), t[t.length - 1].value = e.setterValue_;
          return;
        }
        var i = e.leftValue_, m = e.value;
        switch (n.operator) {
          case "=":
            i = m;
            break;
          case "+=":
            i += m;
            break;
          case "-=":
            i -= m;
            break;
          case "*=":
            i *= m;
            break;
          case "/=":
            i /= m;
            break;
          case "%=":
            i %= m;
            break;
          case "<<=":
            i <<= m;
            break;
          case ">>=":
            i >>= m;
            break;
          case ">>>=":
            i >>>= m;
            break;
          case "&=":
            i &= m;
            break;
          case "^=":
            i ^= m;
            break;
          case "|=":
            i |= m;
            break;
          default:
            throw SyntaxError("Unknown assignment expression: " + n.operator);
        }
        var O = this.setValue(e.leftReference_, i);
        if (O) return e.doneSetter_ = true, e.setterValue_ = i, this.createSetter_(O, e.leftReference_, i);
        t.pop(), t[t.length - 1].value = i;
      }, r.prototype.stepBinaryExpression = function(t, e, n) {
        if (!e.doneLeft_) return e.doneLeft_ = true, new r.State(n.left, e.scope);
        if (!e.doneRight_) return e.doneRight_ = true, e.leftValue_ = e.value, new r.State(n.right, e.scope);
        t.pop();
        var a = e.leftValue_, u = e.value, c;
        switch (n.operator) {
          case "==":
            c = a == u;
            break;
          case "!=":
            c = a != u;
            break;
          case "===":
            c = a === u;
            break;
          case "!==":
            c = a !== u;
            break;
          case ">":
            c = a > u;
            break;
          case ">=":
            c = a >= u;
            break;
          case "<":
            c = a < u;
            break;
          case "<=":
            c = a <= u;
            break;
          case "+":
            c = a + u;
            break;
          case "-":
            c = a - u;
            break;
          case "*":
            c = a * u;
            break;
          case "/":
            c = a / u;
            break;
          case "%":
            c = a % u;
            break;
          case "&":
            c = a & u;
            break;
          case "|":
            c = a | u;
            break;
          case "^":
            c = a ^ u;
            break;
          case "<<":
            c = a << u;
            break;
          case ">>":
            c = a >> u;
            break;
          case ">>>":
            c = a >>> u;
            break;
          case "in":
            u instanceof r.Object || this.throwException(this.TYPE_ERROR, "'in' expects an object, not '" + u + "'"), c = this.hasProperty(u, a);
            break;
          case "instanceof":
            this.isa(u, this.FUNCTION) || this.throwException(this.TYPE_ERROR, "'instanceof' expects an object, not '" + u + "'"), c = a instanceof r.Object ? this.isa(a, u) : false;
            break;
          default:
            throw SyntaxError("Unknown binary operator: " + n.operator);
        }
        t[t.length - 1].value = c;
      }, r.prototype.stepBlockStatement = function(t, e, n) {
        var a = e.n_ || 0, u = n.body[a];
        if (u) return e.n_ = a + 1, new r.State(u, e.scope);
        t.pop();
      }, r.prototype.stepBreakStatement = function(t, e, n) {
        var a = n.label && n.label.name;
        this.unwind(r.Completion.BREAK, void 0, a);
      }, r.prototype.evalCodeNumber_ = 0, r.prototype.stepCallExpression = function(t, e, n) {
        if (!e.doneCallee_) {
          e.doneCallee_ = 1;
          var a = new r.State(n.callee, e.scope);
          return a.components = true, a;
        }
        if (e.doneCallee_ === 1) {
          e.doneCallee_ = 2;
          var u = e.value;
          if (Array.isArray(u)) {
            if (e.func_ = this.getValue(u), u[0] === r.SCOPE_REFERENCE ? e.directEval_ = u[1] === "eval" : e.funcThis_ = u[0], u = e.func_, this.getterStep_) return e.doneCallee_ = 1, this.createGetter_(u, e.value);
          } else e.func_ = u;
          e.arguments_ = [], e.n_ = 0;
        }
        var u = e.func_;
        if (!e.doneArgs_) {
          if (e.n_ !== 0 && e.arguments_.push(e.value), n.arguments[e.n_]) return new r.State(n.arguments[e.n_++], e.scope);
          if (n.type === "NewExpression") {
            if ((!(u instanceof r.Object) || u.illegalConstructor) && this.throwException(this.TYPE_ERROR, this.nodeSummary(n.callee) + " is not a constructor"), u === this.ARRAY) e.funcThis_ = this.createArray();
            else {
              var c = u.properties.prototype;
              (typeof c != "object" || c === null) && (c = this.OBJECT_PROTO), e.funcThis_ = this.createObjectProto(c);
            }
            e.isConstructor = true;
          }
          e.doneArgs_ = true;
        }
        if (e.doneExec_) t.pop(), e.isConstructor && typeof e.value != "object" ? t[t.length - 1].value = e.funcThis_ : t[t.length - 1].value = e.value;
        else {
          e.doneExec_ = true, u instanceof r.Object || this.throwException(this.TYPE_ERROR, this.nodeSummary(n.callee) + " is not a function");
          var i = u.node;
          if (i) {
            for (var m = this.createScope(i.body, u.parentScope), O = this.createArray(), x = 0; x < e.arguments_.length; x++) this.setProperty(O, x, e.arguments_[x]);
            this.setProperty(m.object, "arguments", O);
            for (var x = 0; x < i.params.length; x++) {
              var F = i.params[x].name, M = e.arguments_.length > x ? e.arguments_[x] : void 0;
              this.setProperty(m.object, F, M);
            }
            return m.strict || (e.funcThis_ = this.boxThis_(e.funcThis_)), this.setProperty(m.object, "this", e.funcThis_, r.READONLY_DESCRIPTOR), e.value = void 0, new r.State(i.body, m);
          } else if (u.eval) {
            var U = e.arguments_[0];
            if (typeof U != "string") e.value = U;
            else {
              try {
                var V = this.parse_(String(U), "eval" + this.evalCodeNumber_++);
              } catch (Z) {
                this.throwException(this.SYNTAX_ERROR, "Invalid code: " + Z.message);
              }
              var B = this.newNode();
              B.type = "EvalProgram_", B.body = V.body, r.stripLocations_(B, n.start, n.end);
              var m = e.directEval_ ? e.scope : this.globalScope;
              return m.strict ? m = this.createScope(V, m) : this.populateScope_(V, m), this.value = void 0, new r.State(B, m);
            }
          } else if (u.nativeFunc) e.scope.strict || (e.funcThis_ = this.boxThis_(e.funcThis_)), e.value = u.nativeFunc.apply(e.funcThis_, e.arguments_);
          else if (u.asyncFunc) {
            var q = this, Se = function(we) {
              e.value = we, q.paused_ = false;
            }, pe = u.asyncFunc.length - 1, ve = e.arguments_.concat(new Array(pe)).slice(0, pe);
            ve.push(Se), this.paused_ = true, e.scope.strict || (e.funcThis_ = this.boxThis_(e.funcThis_)), u.asyncFunc.apply(e.funcThis_, ve);
            return;
          } else this.throwException(this.TYPE_ERROR, this.nodeSummary(n.callee) + " is not callable");
        }
      }, r.prototype.stepConditionalExpression = function(t, e, n) {
        var a = e.mode_ || 0;
        if (a === 0) return e.mode_ = 1, new r.State(n.test, e.scope);
        if (a === 1) {
          e.mode_ = 2;
          var u = !!e.value;
          if (u && n.consequent) return new r.State(n.consequent, e.scope);
          if (!u && n.alternate) return new r.State(n.alternate, e.scope);
          this.value = void 0;
        }
        t.pop(), n.type === "ConditionalExpression" && (t[t.length - 1].value = e.value);
      }, r.prototype.stepContinueStatement = function(t, e, n) {
        var a = n.label && n.label.name;
        this.unwind(r.Completion.CONTINUE, void 0, a);
      }, r.prototype.stepDebuggerStatement = function(t, e, n) {
        t.pop();
      }, r.prototype.stepDoWhileStatement = function(t, e, n) {
        if (n.type === "DoWhileStatement" && e.test_ === void 0 && (e.value = true, e.test_ = true), !e.test_) return e.test_ = true, new r.State(n.test, e.scope);
        if (!e.value) t.pop();
        else if (n.body) return e.test_ = false, e.isLoop = true, new r.State(n.body, e.scope);
      }, r.prototype.stepEmptyStatement = function(t, e, n) {
        t.pop();
      }, r.prototype.stepEvalProgram_ = function(t, e, n) {
        var a = e.n_ || 0, u = n.body[a];
        if (u) return e.n_ = a + 1, new r.State(u, e.scope);
        t.pop(), t[t.length - 1].value = this.value;
      }, r.prototype.stepExpressionStatement = function(t, e, n) {
        if (!e.done_) return this.value = void 0, e.done_ = true, new r.State(n.expression, e.scope);
        t.pop(), this.value = e.value;
      }, r.prototype.stepForInStatement = function(t, e, n) {
        if (!e.doneInit_ && (e.doneInit_ = true, n.left.declarations && n.left.declarations[0].init)) return e.scope.strict && this.throwException(this.SYNTAX_ERROR, "for-in loop variable declaration may not have an initializer"), new r.State(n.left, e.scope);
        if (!e.doneObject_) return e.doneObject_ = true, e.variable_ || (e.variable_ = e.value), new r.State(n.right, e.scope);
        if (e.isLoop || (e.isLoop = true, e.object_ = e.value, e.visited_ = /* @__PURE__ */ Object.create(null)), e.name_ === void 0) e: for (; ; ) {
          if (e.object_ instanceof r.Object) for (e.props_ || (e.props_ = Object.getOwnPropertyNames(e.object_.properties)); ; ) {
            var a = e.props_.shift();
            if (a === void 0) break;
            if (Object.prototype.hasOwnProperty.call(e.object_.properties, a) && !e.visited_[a] && (e.visited_[a] = true, !!Object.prototype.propertyIsEnumerable.call(e.object_.properties, a))) {
              e.name_ = a;
              break e;
            }
          }
          else if (e.object_ !== null && e.object_ !== void 0) for (e.props_ || (e.props_ = Object.getOwnPropertyNames(e.object_)); ; ) {
            var a = e.props_.shift();
            if (a === void 0) break;
            if (e.visited_[a] = true, !!Object.prototype.propertyIsEnumerable.call(e.object_, a)) {
              e.name_ = a;
              break e;
            }
          }
          if (e.object_ = this.getPrototype(e.object_), e.props_ = null, e.object_ === null) {
            t.pop();
            return;
          }
        }
        if (!e.doneVariable_) {
          e.doneVariable_ = true;
          var u = n.left;
          if (u.type === "VariableDeclaration") e.variable_ = [r.SCOPE_REFERENCE, u.declarations[0].id.name];
          else {
            e.variable_ = null;
            var c = new r.State(u, e.scope);
            return c.components = true, c;
          }
        }
        if (e.variable_ || (e.variable_ = e.value), !e.doneSetter_) {
          e.doneSetter_ = true;
          var i = e.name_, m = this.setValue(e.variable_, i);
          if (m) return this.createSetter_(m, e.variable_, i);
        }
        if (e.name_ = void 0, e.doneVariable_ = false, e.doneSetter_ = false, n.body) return new r.State(n.body, e.scope);
      }, r.prototype.stepForStatement = function(t, e, n) {
        switch (e.mode_) {
          default:
            if (e.mode_ = 1, n.init) return new r.State(n.init, e.scope);
            break;
          case 1:
            if (e.mode_ = 2, n.test) return new r.State(n.test, e.scope);
            break;
          case 2:
            if (e.mode_ = 3, n.test && !e.value) t.pop();
            else return e.isLoop = true, new r.State(n.body, e.scope);
            break;
          case 3:
            if (e.mode_ = 1, n.update) return new r.State(n.update, e.scope);
            break;
        }
      }, r.prototype.stepFunctionDeclaration = function(t, e, n) {
        t.pop();
      }, r.prototype.stepFunctionExpression = function(t, e, n) {
        t.pop(), e = t[t.length - 1];
        var a = e.scope;
        n.id && (a = this.createSpecialScope(a)), e.value = this.createFunction(n, a, e.destinationName), n.id && this.setProperty(a.object, n.id.name, e.value, r.READONLY_DESCRIPTOR);
      }, r.prototype.stepIdentifier = function(t, e, n) {
        if (t.pop(), e.components) {
          t[t.length - 1].value = [r.SCOPE_REFERENCE, n.name];
          return;
        }
        var a = this.getValueFromScope(n.name);
        if (this.getterStep_) {
          var u = a;
          return this.createGetter_(u, this.globalObject);
        }
        t[t.length - 1].value = a;
      }, r.prototype.stepIfStatement = r.prototype.stepConditionalExpression, r.prototype.stepLabeledStatement = function(t, e, n) {
        t.pop();
        var a = e.labels || [];
        a.push(n.label.name);
        var u = new r.State(n.body, e.scope);
        return u.labels = a, u;
      }, r.prototype.stepLiteral = function(t, e, n) {
        t.pop();
        var a = n.value;
        if (a instanceof RegExp) {
          var u = this.createObjectProto(this.REGEXP_PROTO);
          this.populateRegExp(u, a), a = u;
        }
        t[t.length - 1].value = a;
      }, r.prototype.stepLogicalExpression = function(t, e, n) {
        if (n.operator !== "&&" && n.operator !== "||") throw SyntaxError("Unknown logical operator: " + n.operator);
        if (!e.doneLeft_) return e.doneLeft_ = true, new r.State(n.left, e.scope);
        if (e.doneRight_) t.pop(), t[t.length - 1].value = e.value;
        else if (n.operator === "&&" && !e.value || n.operator === "||" && e.value) t.pop(), t[t.length - 1].value = e.value;
        else return e.doneRight_ = true, new r.State(n.right, e.scope);
      }, r.prototype.stepMemberExpression = function(t, e, n) {
        if (!e.doneObject_) return e.doneObject_ = true, new r.State(n.object, e.scope);
        var a;
        if (!n.computed) e.object_ = e.value, a = n.property.name;
        else if (e.doneProperty_) a = e.value;
        else return e.object_ = e.value, e.doneProperty_ = true, new r.State(n.property, e.scope);
        if (t.pop(), e.components) t[t.length - 1].value = [e.object_, a];
        else {
          var u = this.getProperty(e.object_, a);
          if (this.getterStep_) {
            var c = u;
            return this.createGetter_(c, e.object_);
          }
          t[t.length - 1].value = u;
        }
      }, r.prototype.stepNewExpression = r.prototype.stepCallExpression, r.prototype.stepObjectExpression = function(t, e, n) {
        var a = e.n_ || 0, u = n.properties[a];
        if (!e.object_) e.object_ = this.createObjectProto(this.OBJECT_PROTO), e.properties_ = /* @__PURE__ */ Object.create(null);
        else {
          var c = e.destinationName;
          e.properties_[c] || (e.properties_[c] = {}), e.properties_[c][u.kind] = e.value, e.n_ = ++a, u = n.properties[a];
        }
        if (u) {
          var i = u.key;
          if (i.type === "Identifier") var c = i.name;
          else if (i.type === "Literal") var c = i.value;
          else throw SyntaxError("Unknown object structure: " + i.type);
          return e.destinationName = c, new r.State(u.value, e.scope);
        }
        for (var i in e.properties_) {
          var m = e.properties_[i];
          if ("get" in m || "set" in m) {
            var O = { configurable: true, enumerable: true, get: m.get, set: m.set };
            this.setProperty(e.object_, i, r.VALUE_IN_DESCRIPTOR, O);
          } else this.setProperty(e.object_, i, m.init);
        }
        t.pop(), t[t.length - 1].value = e.object_;
      }, r.prototype.stepProgram = function(t, e, n) {
        var a = n.body.shift();
        if (a) return e.done = false, new r.State(a, e.scope);
        e.done = true;
      }, r.prototype.stepReturnStatement = function(t, e, n) {
        if (n.argument && !e.done_) return e.done_ = true, new r.State(n.argument, e.scope);
        this.unwind(r.Completion.RETURN, e.value, void 0);
      }, r.prototype.stepSequenceExpression = function(t, e, n) {
        var a = e.n_ || 0, u = n.expressions[a];
        if (u) return e.n_ = a + 1, new r.State(u, e.scope);
        t.pop(), t[t.length - 1].value = e.value;
      }, r.prototype.stepSwitchStatement = function(t, e, n) {
        if (!e.test_) return e.test_ = 1, new r.State(n.discriminant, e.scope);
        for (e.test_ === 1 && (e.test_ = 2, e.switchValue_ = e.value, e.defaultCase_ = -1); ; ) {
          var a = e.index_ || 0, u = n.cases[a];
          if (!e.matched_ && u && !u.test) {
            e.defaultCase_ = a, e.index_ = a + 1;
            continue;
          }
          if (!u && !e.matched_ && e.defaultCase_ !== -1) {
            e.matched_ = true, e.index_ = e.defaultCase_;
            continue;
          }
          if (u) {
            if (!e.matched_ && !e.tested_ && u.test) return e.tested_ = true, new r.State(u.test, e.scope);
            if (e.matched_ || e.value === e.switchValue_) {
              e.matched_ = true;
              var c = e.n_ || 0;
              if (u.consequent[c]) return e.isSwitch = true, e.n_ = c + 1, new r.State(u.consequent[c], e.scope);
            }
            e.tested_ = false, e.n_ = 0, e.index_ = a + 1;
          } else {
            t.pop();
            return;
          }
        }
      }, r.prototype.stepThisExpression = function(t, e, n) {
        t.pop(), t[t.length - 1].value = this.getValueFromScope("this");
      }, r.prototype.stepThrowStatement = function(t, e, n) {
        if (e.done_) this.throwException(e.value);
        else return e.done_ = true, new r.State(n.argument, e.scope);
      }, r.prototype.stepTryStatement = function(t, e, n) {
        if (!e.doneBlock_) return e.doneBlock_ = true, new r.State(n.block, e.scope);
        if (e.cv && e.cv.type === r.Completion.THROW && !e.doneHandler_ && n.handler) {
          e.doneHandler_ = true;
          var a = this.createSpecialScope(e.scope);
          return this.setProperty(a.object, n.handler.param.name, e.cv.value), e.cv = void 0, new r.State(n.handler.body, a);
        }
        if (!e.doneFinalizer_ && n.finalizer) return e.doneFinalizer_ = true, new r.State(n.finalizer, e.scope);
        t.pop(), e.cv && this.unwind(e.cv.type, e.cv.value, e.cv.label);
      }, r.prototype.stepUnaryExpression = function(t, e, n) {
        if (!e.done_) {
          e.done_ = true;
          var a = new r.State(n.argument, e.scope);
          return a.components = n.operator === "delete", a;
        }
        t.pop();
        var u = e.value;
        switch (n.operator) {
          case "-":
            u = -u;
            break;
          case "+":
            u = +u;
            break;
          case "!":
            u = !u;
            break;
          case "~":
            u = ~u;
            break;
          case "delete":
            var c = true;
            if (Array.isArray(u)) {
              var i = u[0];
              i === r.SCOPE_REFERENCE && (i = e.scope);
              var m = String(u[1]);
              try {
                delete i.properties[m];
              } catch (e2) {
                e.scope.strict ? this.throwException(this.TYPE_ERROR, "Cannot delete property '" + m + "' of '" + i + "'") : c = false;
              }
            }
            u = c;
            break;
          case "typeof":
            u = u && u.class === "Function" ? "function" : typeof u;
            break;
          case "void":
            u = void 0;
            break;
          default:
            throw SyntaxError("Unknown unary operator: " + n.operator);
        }
        t[t.length - 1].value = u;
      }, r.prototype.stepUpdateExpression = function(t, e, n) {
        if (!e.doneLeft_) {
          e.doneLeft_ = true;
          var a = new r.State(n.argument, e.scope);
          return a.components = true, a;
        }
        if (e.leftSide_ || (e.leftSide_ = e.value), e.doneGetter_ && (e.leftValue_ = e.value), !e.doneGetter_) {
          var c = this.getValue(e.leftSide_);
          if (e.leftValue_ = c, this.getterStep_) {
            e.doneGetter_ = true;
            var u = c;
            return this.createGetter_(u, e.leftSide_);
          }
        }
        if (e.doneSetter_) {
          t.pop(), t[t.length - 1].value = e.setterValue_;
          return;
        }
        var c = Number(e.leftValue_), i;
        if (n.operator === "++") i = c + 1;
        else if (n.operator === "--") i = c - 1;
        else throw SyntaxError("Unknown update expression: " + n.operator);
        var m = n.prefix ? i : c, O = this.setValue(e.leftSide_, i);
        if (O) return e.doneSetter_ = true, e.setterValue_ = m, this.createSetter_(O, e.leftSide_, i);
        t.pop(), t[t.length - 1].value = m;
      }, r.prototype.stepVariableDeclaration = function(t, e, n) {
        var a = n.declarations, u = e.n_ || 0, c = a[u];
        for (e.init_ && c && (this.setValueToScope(c.id.name, e.value), e.init_ = false, c = a[++u]); c; ) {
          if (c.init) return e.n_ = u, e.init_ = true, e.destinationName = c.id.name, new r.State(c.init, e.scope);
          c = a[++u];
        }
        t.pop();
      }, r.prototype.stepWithStatement = function(t, e, n) {
        if (!e.doneObject_) return e.doneObject_ = true, new r.State(n.object, e.scope);
        t.pop();
        var a = this.createSpecialScope(e.scope, e.value);
        return new r.State(n.body, a);
      }, r.prototype.stepWhileStatement = r.prototype.stepDoWhileStatement, r.nativeGlobal.Interpreter = r, r.prototype.step = r.prototype.step, r.prototype.run = r.prototype.run, r.prototype.appendCode = r.prototype.appendCode, r.prototype.createObject = r.prototype.createObject, r.prototype.createObjectProto = r.prototype.createObjectProto, r.prototype.createAsyncFunction = r.prototype.createAsyncFunction, r.prototype.createNativeFunction = r.prototype.createNativeFunction, r.prototype.getProperty = r.prototype.getProperty, r.prototype.setProperty = r.prototype.setProperty, r.prototype.nativeToPseudo = r.prototype.nativeToPseudo, r.prototype.pseudoToNative = r.prototype.pseudoToNative, r.prototype.getGlobalScope = r.prototype.getGlobalScope, r.prototype.getStateStack = r.prototype.getStateStack, r.prototype.setStateStack = r.prototype.setStateStack, r.VALUE_IN_DESCRIPTOR = r.VALUE_IN_DESCRIPTOR, $.exports = { Interpreter: r };
    }, "./original-repo/acorn.js": function($, f) {
      (function(A, r) {
        return r(f);
      })(this, function(A) {
        A.version = "0.5.0";
        var r, t = "", e, n;
        A.parse = function(h, g) {
          return t = String(h), e = t.length, u(g), po(), Oo(r.program);
        };
        var a = { strictSemicolons: false, allowTrailingCommas: true, forbidReserved: false, allowReturnOutsideFunction: false, locations: false, onComment: null, ranges: false, program: null, sourceFile: null, directSourceFile: null };
        function u(h) {
          r = h || {};
          for (var g in a) Object.prototype.hasOwnProperty.call(r, g) || (r[g] = a[g]);
          n = r.sourceFile;
        }
        var c = function(h, g) {
          for (var P = 1, I = 0; ; ) {
            jt.lastIndex = I;
            var H = jt.exec(h);
            if (H && H.index < g) ++P, I = H.index + H[0].length;
            else break;
          }
          return { line: P, column: g - I };
        }, i = 0, m = 0, O = 0, x, F, M, U, V, B, q, Se = 0, pe = 0, ve, we, Z, de;
        function Y(h, g) {
          var P = c(t, h);
          g += " (" + P.line + ":" + P.column + ")";
          var I = new SyntaxError(g);
          throw I.pos = h, I.loc = P, I.raisedAt = i, I;
        }
        var R = [], p = { type: "num" }, v = { type: "regexp" }, N = { type: "string" }, L = { type: "name" }, Q = { type: "eof" }, ae = { keyword: "break" }, be = { keyword: "case", beforeExpr: true }, he = { keyword: "catch" }, Be = { keyword: "continue" }, Ue = { keyword: "debugger" }, Ve = { keyword: "default" }, Qe = { keyword: "do", isLoop: true }, pt = { keyword: "else", beforeExpr: true }, ht = { keyword: "finally" }, j = { keyword: "for", isLoop: true }, z = { keyword: "function" }, te = { keyword: "if" }, fe = { keyword: "return", beforeExpr: true }, je = { keyword: "switch" }, xt = { keyword: "throw", beforeExpr: true }, At = { keyword: "try" }, ft = { keyword: "var" }, mt = { keyword: "while", isLoop: true }, kt = { keyword: "with" }, $t = { keyword: "new", beforeExpr: true }, Mt = { keyword: "this" }, gt = { keyword: "null", atomValue: null }, Lt = { keyword: "true", atomValue: true }, Ft = { keyword: "false", atomValue: false }, ot = { keyword: "in", binop: 7, beforeExpr: true }, Dt = { break: ae, case: be, catch: he, continue: Be, debugger: Ue, default: Ve, do: Qe, else: pt, finally: ht, for: j, function: z, if: te, return: fe, switch: je, throw: xt, try: At, var: ft, while: mt, with: kt, null: gt, true: Lt, false: Ft, new: $t, in: ot, instanceof: { keyword: "instanceof", binop: 7, beforeExpr: true }, this: Mt, typeof: { keyword: "typeof", prefix: true, beforeExpr: true }, void: { keyword: "void", prefix: true, beforeExpr: true }, delete: { keyword: "delete", prefix: true, beforeExpr: true } }, nt = { type: "[", beforeExpr: true }, E = { type: "]" }, We = { type: "{", beforeExpr: true }, Ie = { type: "}" }, ie = { type: "(", beforeExpr: true }, le = { type: ")" }, Te = { type: ",", beforeExpr: true }, oe = { type: ";", beforeExpr: true }, xe = { type: ":", beforeExpr: true }, Bt = { type: "." }, et = { type: "?", beforeExpr: true }, ue = { binop: 10, beforeExpr: true }, it = { isAssign: true, beforeExpr: true }, Me = { isAssign: true, beforeExpr: true }, _t = { postfix: true, prefix: true, isUpdate: true }, Et = { prefix: true, beforeExpr: true }, Xe = { binop: 1, beforeExpr: true }, o = { binop: 2, beforeExpr: true }, s = { binop: 3, beforeExpr: true }, _ = { binop: 4, beforeExpr: true }, T = { binop: 5, beforeExpr: true }, w = { binop: 6, beforeExpr: true }, D = { binop: 7, beforeExpr: true }, Oe = { binop: 8, beforeExpr: true }, De = { binop: 9, prefix: true, beforeExpr: true }, He = { binop: 10, beforeExpr: true };
        function Le(h) {
          for (var g = h.split(" "), P = /* @__PURE__ */ Object.create(null), I = 0; I < g.length; I++) P[g[I]] = true;
          return function(H) {
            return P[H] || false;
          };
        }
        var Ae = Le("class enum extends super const export import"), ke = Le("implements interface let package private protected public static yield"), Ut = Le("eval arguments"), ao = Le("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"), uo = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/, Pr = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", lo = "\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u0620-\u0649\u0672-\u06D3\u06E7-\u06E8\u06FB-\u06FC\u0730-\u074A\u0800-\u0814\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0840-\u0857\u08E4-\u08FE\u0900-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09D7\u09DF-\u09E0\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5F-\u0B60\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2-\u0CE3\u0CE6-\u0CEF\u0D02\u0D03\u0D46-\u0D48\u0D57\u0D62-\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E34-\u0E3A\u0E40-\u0E45\u0E50-\u0E59\u0EB4-\u0EB9\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F41-\u0F47\u0F71-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1029\u1040-\u1049\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u170E-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17B2\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1920-\u192B\u1930-\u193B\u1951-\u196D\u19B0-\u19C0\u19C8-\u19C9\u19D0-\u19D9\u1A00-\u1A15\u1A20-\u1A53\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1B46-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C00-\u1C22\u1C40-\u1C49\u1C5B-\u1C7D\u1CD0-\u1CD2\u1D00-\u1DBE\u1E01-\u1F15\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2D81-\u2D96\u2DE0-\u2DFF\u3021-\u3028\u3099\u309A\uA640-\uA66D\uA674-\uA67D\uA69F\uA6F0-\uA6F1\uA7F8-\uA800\uA806\uA80B\uA823-\uA827\uA880-\uA881\uA8B4-\uA8C4\uA8D0-\uA8D9\uA8F3-\uA8F7\uA900-\uA909\uA926-\uA92D\uA930-\uA945\uA980-\uA983\uA9B3-\uA9C0\uAA00-\uAA27\uAA40-\uAA41\uAA4C-\uAA4D\uAA50-\uAA59\uAA7B\uAAE0-\uAAE9\uAAF2-\uAAF3\uABC0-\uABE1\uABEC\uABED\uABF0-\uABF9\uFB20-\uFB28\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F", Cr = new RegExp("[" + Pr + "]"), co = new RegExp("[" + Pr + lo + "]"), Vt = /[\n\r\u2028\u2029]/, jt = /\r\n|[\n\r\u2028\u2029]/g, Gt = function(h) {
          return h < 65 ? h === 36 : h < 91 ? true : h < 97 ? h === 95 : h < 123 ? true : h >= 170 && Cr.test(String.fromCharCode(h));
        }, wr = function(h) {
          return h < 48 ? h === 36 : h < 58 ? true : h < 65 ? false : h < 91 ? true : h < 97 ? h === 95 : h < 123 ? true : h >= 170 && co.test(String.fromCharCode(h));
        };
        function tt() {
          this.line = B, this.column = i - q;
        }
        function po() {
          B = 1, i = q = 0, V = true, yt();
        }
        function me(h, g) {
          O = i, r.locations && (F = new tt()), M = h, yt(), U = g, V = h.beforeExpr;
        }
        function ho() {
          var h = r.onComment && r.locations && new tt(), g = i, P = t.indexOf("*/", i += 2);
          if (P === -1 && Y(i - 2, "Unterminated comment"), i = P + 2, r.locations) {
            jt.lastIndex = g;
            for (var I; (I = jt.exec(t)) && I.index < i; ) ++B, q = I.index + I[0].length;
          }
          r.onComment && r.onComment(true, t.slice(g + 2, P), g, i, h, r.locations && new tt());
        }
        function er() {
          for (var h = i, g = r.onComment && r.locations && new tt(), P = t.charCodeAt(i += 2); i < e && P !== 10 && P !== 13 && P !== 8232 && P !== 8233; ) ++i, P = t.charCodeAt(i);
          r.onComment && r.onComment(false, t.slice(h + 2, i), h, i, g, r.locations && new tt());
        }
        function yt() {
          for (; i < e; ) {
            var h = t.charCodeAt(i);
            if (h === 32) ++i;
            else if (h === 13) {
              ++i;
              var g = t.charCodeAt(i);
              g === 10 && ++i, r.locations && (++B, q = i);
            } else if (h === 10 || h === 8232 || h === 8233) ++i, r.locations && (++B, q = i);
            else if (h > 8 && h < 14) ++i;
            else if (h === 47) {
              var g = t.charCodeAt(i + 1);
              if (g === 42) ho();
              else if (g === 47) er();
              else break;
            } else if (h === 160) ++i;
            else if (h >= 5760 && uo.test(String.fromCharCode(h))) ++i;
            else break;
          }
        }
        function fo() {
          var h = t.charCodeAt(i + 1);
          h >= 48 && h <= 57 ? Ir(true) : (++i, me(Bt));
        }
        function mo() {
          var h = t.charCodeAt(i + 1);
          V ? (++i, Sr()) : h === 61 ? ge(Me, 2) : ge(ue, 1);
        }
        function go() {
          var h = t.charCodeAt(i + 1);
          h === 61 ? ge(Me, 2) : ge(He, 1);
        }
        function _o(h) {
          var g = t.charCodeAt(i + 1);
          g === h ? ge(h === 124 ? Xe : o, 2) : g === 61 ? ge(Me, 2) : ge(h === 124 ? s : T, 1);
        }
        function Eo() {
          var h = t.charCodeAt(i + 1);
          h === 61 ? ge(Me, 2) : ge(_, 1);
        }
        function yo(h) {
          var g = t.charCodeAt(i + 1);
          if (g === h) {
            if (g === 45 && t.charCodeAt(i + 2) === 62 && Vt.test(t.slice(pe, i))) {
              i += 3, er(), yt(), st();
              return;
            }
            ge(_t, 2);
          } else g === 61 ? ge(Me, 2) : ge(De, 1);
        }
        function vo(h) {
          var g = t.charCodeAt(i + 1), P = 1;
          if (g === h) {
            P = h === 62 && t.charCodeAt(i + 2) === 62 ? 3 : 2, t.charCodeAt(i + P) === 61 ? ge(Me, P + 1) : ge(Oe, P);
            return;
          }
          if (g === 33 && h === 60 && t.charCodeAt(i + 2) === 45 && t.charCodeAt(i + 3) === 45) {
            i += 4, er(), yt(), st();
            return;
          }
          g === 61 && (P = t.charCodeAt(i + 2) === 61 ? 3 : 2), ge(D, P);
        }
        function bo(h) {
          var g = t.charCodeAt(i + 1);
          g === 61 ? ge(w, t.charCodeAt(i + 2) === 61 ? 3 : 2) : ge(h === 61 ? it : Et, 1);
        }
        function To(h) {
          switch (h) {
            case 46:
              return fo();
            case 40:
              return ++i, me(ie);
            case 41:
              return ++i, me(le);
            case 59:
              return ++i, me(oe);
            case 44:
              return ++i, me(Te);
            case 91:
              return ++i, me(nt);
            case 93:
              return ++i, me(E);
            case 123:
              return ++i, me(We);
            case 125:
              return ++i, me(Ie);
            case 58:
              return ++i, me(xe);
            case 63:
              return ++i, me(et);
            case 48:
              var g = t.charCodeAt(i + 1);
              if (g === 120 || g === 88) return Ro();
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return Ir(false);
            case 34:
            case 39:
              return No(h);
            case 47:
              return mo();
            case 37:
            case 42:
              return go();
            case 124:
            case 38:
              return _o(h);
            case 94:
              return Eo();
            case 43:
            case 45:
              return yo(h);
            case 60:
            case 62:
              return vo(h);
            case 61:
            case 33:
              return bo(h);
            case 126:
              return ge(Et, 1);
          }
          return false;
        }
        function st(h) {
          if (h ? i = m + 1 : m = i, r.locations && (x = new tt()), h) return Sr();
          if (i >= e) return me(Q);
          var g = t.charCodeAt(i);
          if (Gt(g) || g === 92) return Ar();
          var P = To(g);
          if (P === false) {
            var I = String.fromCharCode(g);
            if (I === "\\" || Cr.test(I)) return Ar();
            Y(i, "Unexpected character '" + I + "'");
          }
        }
        function ge(h, g) {
          var P = t.slice(i, i + g);
          i += g, me(h, P);
        }
        function Sr() {
          for (var h, g, P = i; ; ) {
            i >= e && Y(P, "Unterminated regexp");
            var I = t.charAt(i);
            if (Vt.test(I) && Y(P, "Unterminated regexp"), h) h = false;
            else {
              if (I === "[") g = true;
              else if (I === "]" && g) g = false;
              else if (I === "/" && !g) break;
              h = I === "\\";
            }
            ++i;
          }
          var H = t.slice(P, i);
          ++i;
          var G = xr();
          G && !/^[gmi]*$/.test(G) && Y(P, "Invalid regexp flag");
          try {
            var J = new RegExp(H, G);
          } catch (ne) {
            throw ne instanceof SyntaxError && Y(P, ne.message), ne;
          }
          me(v, J);
        }
        function vt(h, g) {
          for (var P = i, I = 0, H = g === void 0 ? 1 / 0 : g, G = 0; G < H; ++G) {
            var J = t.charCodeAt(i), ne;
            if (J >= 97 ? ne = J - 97 + 10 : J >= 65 ? ne = J - 65 + 10 : J >= 48 && J <= 57 ? ne = J - 48 : ne = 1 / 0, ne >= h) break;
            ++i, I = I * h + ne;
          }
          return i === P || g !== void 0 && i - P !== g ? null : I;
        }
        function Ro() {
          i += 2;
          var h = vt(16);
          h === null && Y(m + 2, "Expected hexadecimal number"), Gt(t.charCodeAt(i)) && Y(i, "Identifier directly after number"), me(p, h);
        }
        function Ir(h) {
          var g = i, P = false, I = t.charCodeAt(i) === 48;
          !h && vt(10) === null && Y(g, "Invalid number"), t.charCodeAt(i) === 46 && (++i, vt(10), P = true);
          var H = t.charCodeAt(i);
          (H === 69 || H === 101) && (H = t.charCodeAt(++i), (H === 43 || H === 45) && ++i, vt(10) === null && Y(g, "Invalid number"), P = true), Gt(t.charCodeAt(i)) && Y(i, "Identifier directly after number");
          var G = t.slice(g, i), J;
          P ? J = parseFloat(G) : !I || G.length === 1 ? J = parseInt(G, 10) : /[89]/.test(G) || de ? Y(g, "Invalid number") : J = parseInt(G, 8), me(p, J);
        }
        function No(h) {
          i++;
          for (var g = ""; ; ) {
            i >= e && Y(m, "Unterminated string constant");
            var P = t.charCodeAt(i);
            if (P === h) {
              ++i, me(N, g);
              return;
            }
            if (P === 92) {
              P = t.charCodeAt(++i);
              var I = /^[0-7]+/.exec(t.slice(i, i + 3));
              for (I && (I = I[0]); I && parseInt(I, 8) > 255; ) I = I.slice(0, -1);
              if (I === "0" && (I = null), ++i, I) de && Y(i - 2, "Octal literal in strict mode"), g += String.fromCharCode(parseInt(I, 8)), i += I.length - 1;
              else switch (P) {
                case 110:
                  g += "\n";
                  break;
                case 114:
                  g += "\r";
                  break;
                case 120:
                  g += String.fromCharCode(Yt(2));
                  break;
                case 117:
                  g += String.fromCharCode(Yt(4));
                  break;
                case 85:
                  g += String.fromCharCode(Yt(8));
                  break;
                case 116:
                  g += "	";
                  break;
                case 98:
                  g += "\b";
                  break;
                case 118:
                  g += "\v";
                  break;
                case 102:
                  g += "\f";
                  break;
                case 48:
                  g += "\0";
                  break;
                case 13:
                  t.charCodeAt(i) === 10 && ++i;
                case 10:
                  r.locations && (q = i, ++B);
                  break;
                default:
                  g += String.fromCharCode(P);
                  break;
              }
            } else (P === 13 || P === 10 || P === 8232 || P === 8233) && Y(m, "Unterminated string constant"), g += String.fromCharCode(P), ++i;
          }
        }
        function Yt(h) {
          var g = vt(16, h);
          return g === null && Y(m, "Bad character escape sequence"), g;
        }
        var at;
        function xr() {
          at = false;
          for (var h, g = true, P = i; ; ) {
            var I = t.charCodeAt(i);
            if (wr(I)) at && (h += t.charAt(i)), ++i;
            else if (I === 92) {
              at || (h = t.slice(P, i)), at = true, t.charCodeAt(++i) !== 117 && Y(i, "Expecting Unicode escape sequence \\uXXXX"), ++i;
              var H = Yt(4), G = String.fromCharCode(H);
              G || Y(i - 1, "Invalid Unicode escape"), (g ? Gt(H) : wr(H)) || Y(i - 4, "Invalid Unicode escape"), h += G;
            } else break;
            g = false;
          }
          return at ? h : t.slice(P, i);
        }
        function Ar() {
          var h = xr(), g = L;
          !at && ao(h) && (g = Dt[h]), me(g, h);
        }
        function K() {
          Se = m, pe = O, ve = F, st();
        }
        function tr(h) {
          if (de = h, i = m, r.locations) for (; i < q; ) q = t.lastIndexOf("\n", q - 2) + 1, --B;
          yt(), st();
        }
        function kr() {
          this.type = null, this.start = m, this.end = null;
        }
        function $r() {
          this.start = x, this.end = null, n && (this.source = n);
        }
        function Ee() {
          var h = new kr();
          return r.locations && (h.loc = new $r()), r.directSourceFile && (h.sourceFile = r.directSourceFile), r.ranges && (h.range = [m, 0]), h;
        }
        function ze(h) {
          var g = new kr();
          return g.start = h.start, r.locations && (g.loc = new $r(), g.loc.start = h.loc.start), r.ranges && (g.range = [h.range[0], 0]), g;
        }
        function X(h, g) {
          return h.type = g, h.end = pe, r.locations && (h.loc.end = ve), r.ranges && (h.range[1] = pe), h;
        }
        function rr(h) {
          return h.type === "ExpressionStatement" && h.expression.type === "Literal" && h.expression.value === "use strict";
        }
        function se(h) {
          return M === h ? (K(), true) : false;
        }
        function Wt() {
          return !r.strictSemicolons && (M === Q || M === Ie || Vt.test(t.slice(pe, m)));
        }
        function rt() {
          !se(oe) && !Wt() && Ge();
        }
        function ce(h) {
          M === h ? K() : Ge();
        }
        function Ge() {
          Y(m, "Unexpected token");
        }
        function Xt(h) {
          h.type !== "Identifier" && h.type !== "MemberExpression" && Y(h.start, "Assigning to rvalue"), de && h.type === "Identifier" && Ut(h.name) && Y(h.start, "Assigning to " + h.name + " in strict mode");
        }
        function Oo(h) {
          Se = pe = i, r.locations && (ve = new tt()), we = de = false, Z = [], st();
          var g = h || Ee(), P = true;
          for (h || (g.body = []); M !== Q; ) {
            var I = Fe();
            g.body.push(I), P && rr(I) && tr(true), P = false;
          }
          return X(g, "Program");
        }
        var or = { kind: "loop" }, Po = { kind: "switch" };
        function Fe() {
          (M === ue || M === Me && U === "/=") && st(true);
          var h = M, g = Ee();
          switch (h) {
            case ae:
            case Be:
              K();
              var P = h === ae;
              se(oe) || Wt() ? g.label = null : M !== L ? Ge() : (g.label = Je(), rt());
              for (var I = 0; I < Z.length; ++I) {
                var H = Z[I];
                if ((g.label === null || H.name === g.label.name) && (H.kind !== null && (P || H.kind === "loop") || g.label && P)) break;
              }
              return I === Z.length && Y(g.start, "Unsyntactic " + h.keyword), X(g, P ? "BreakStatement" : "ContinueStatement");
            case Ue:
              return K(), rt(), X(g, "DebuggerStatement");
            case Qe:
              return K(), Z.push(or), g.body = Fe(), Z.pop(), ce(mt), g.test = bt(), rt(), X(g, "DoWhileStatement");
            case j:
              if (K(), Z.push(or), ce(ie), M === oe) return nr(g, null);
              if (M === ft) {
                var G = Ee();
                return K(), Lr(G, true), X(G, "VariableDeclaration"), G.declarations.length === 1 && se(ot) ? Mr(g, G) : nr(g, G);
              }
              var G = Re(false, true);
              return se(ot) ? (Xt(G), Mr(g, G)) : nr(g, G);
            case z:
              return K(), lr(g, true);
            case te:
              return K(), g.test = bt(), g.consequent = Fe(), g.alternate = se(pt) ? Fe() : null, X(g, "IfStatement");
            case fe:
              return !we && !r.allowReturnOutsideFunction && Y(m, "'return' outside of function"), K(), se(oe) || Wt() ? g.argument = null : (g.argument = Re(), rt()), X(g, "ReturnStatement");
            case je:
              K(), g.discriminant = bt(), g.cases = [], ce(We), Z.push(Po);
              for (var J, ne; M !== Ie; ) if (M === be || M === Ve) {
                var Nt = M === be;
                J && X(J, "SwitchCase"), g.cases.push(J = Ee()), J.consequent = [], K(), Nt ? J.test = Re() : (ne && Y(Se, "Multiple default clauses"), ne = true, J.test = null), ce(xe);
              } else J || Ge(), J.consequent.push(Fe());
              return J && X(J, "SwitchCase"), K(), Z.pop(), X(g, "SwitchStatement");
            case xt:
              return K(), Vt.test(t.slice(pe, m)) && Y(pe, "Illegal newline after throw"), g.argument = Re(), rt(), X(g, "ThrowStatement");
            case At:
              if (K(), g.block = Tt(), g.handler = null, M === he) {
                var ut = Ee();
                K(), ce(ie), ut.param = Je(), de && Ut(ut.param.name) && Y(ut.param.start, "Binding " + ut.param.name + " in strict mode"), ce(le), ut.body = Tt(), g.handler = X(ut, "CatchClause");
              }
              return g.finalizer = se(ht) ? Tt() : null, !g.handler && !g.finalizer && Y(g.start, "Missing catch or finally clause"), X(g, "TryStatement");
            case ft:
              return K(), Lr(g), rt(), X(g, "VariableDeclaration");
            case mt:
              return K(), g.test = bt(), Z.push(or), g.body = Fe(), Z.pop(), X(g, "WhileStatement");
            case kt:
              return de && Y(m, "'with' in strict mode"), K(), g.object = bt(), g.body = Fe(), X(g, "WithStatement");
            case We:
              return Tt();
            case oe:
              return K(), X(g, "EmptyStatement");
            default:
              var dr = U, Ht = Re();
              if (h === L && Ht.type === "Identifier" && se(xe)) {
                for (var I = 0; I < Z.length; ++I) Z[I].name === dr && Y(Ht.start, "Label '" + dr + "' is already declared");
                var Ao = M.isLoop ? "loop" : M === je ? "switch" : null;
                return Z.push({ name: dr, kind: Ao }), g.body = Fe(), Z.pop(), g.label = Ht, X(g, "LabeledStatement");
              } else return g.expression = Ht, rt(), X(g, "ExpressionStatement");
          }
        }
        function bt() {
          ce(ie);
          var h = Re();
          return ce(le), h;
        }
        function Tt(h) {
          var g = Ee(), P = true, I = false, H;
          for (g.body = [], ce(We); !se(Ie); ) {
            var G = Fe();
            g.body.push(G), P && h && rr(G) && (H = I, tr(I = true)), P = false;
          }
          return I && !H && tr(false), X(g, "BlockStatement");
        }
        function nr(h, g) {
          return h.init = g, ce(oe), h.test = M === oe ? null : Re(), ce(oe), h.update = M === le ? null : Re(), ce(le), h.body = Fe(), Z.pop(), X(h, "ForStatement");
        }
        function Mr(h, g) {
          return h.left = g, h.right = Re(), ce(le), h.body = Fe(), Z.pop(), X(h, "ForInStatement");
        }
        function Lr(h, g) {
          for (h.declarations = [], h.kind = "var"; ; ) {
            var P = Ee();
            if (P.id = Je(), de && Ut(P.id.name) && Y(P.id.start, "Binding " + P.id.name + " in strict mode"), P.init = se(it) ? Re(true, g) : null, h.declarations.push(X(P, "VariableDeclarator")), !se(Te)) break;
          }
        }
        function Re(h, g) {
          var P = ir(g);
          if (!h && M === Te) {
            var I = ze(P);
            for (I.expressions = [P]; se(Te); ) I.expressions.push(ir(g));
            return X(I, "SequenceExpression");
          }
          return P;
        }
        function ir(h) {
          var g = Co(h);
          if (M.isAssign) {
            var P = ze(g);
            return P.operator = U, P.left = g, K(), P.right = ir(h), Xt(g), X(P, "AssignmentExpression");
          }
          return g;
        }
        function Co(h) {
          var g = wo(h);
          if (se(et)) {
            var P = ze(g);
            return P.test = g, P.consequent = Re(true), ce(xe), P.alternate = Re(true, h), X(P, "ConditionalExpression");
          }
          return g;
        }
        function wo(h) {
          return sr(ar(), -1, h);
        }
        function sr(h, g, P) {
          var I = M.binop;
          if (I !== null && (!P || M !== ot) && I > g) {
            var H = ze(h);
            H.left = h, H.operator = U;
            var G = M;
            K(), H.right = sr(ar(), I, P);
            var J = X(H, G === Xe || G === o ? "LogicalExpression" : "BinaryExpression");
            return sr(J, g, P);
          }
          return h;
        }
        function ar() {
          if (M.prefix) {
            var h = Ee(), g = M.isUpdate;
            return h.operator = U, h.prefix = true, V = true, K(), h.argument = ar(), g ? Xt(h.argument) : de && h.operator === "delete" && h.argument.type === "Identifier" && Y(h.start, "Deleting local variable in strict mode"), X(h, g ? "UpdateExpression" : "UnaryExpression");
          }
          for (var P = So(); M.postfix && !Wt(); ) {
            var h = ze(P);
            h.operator = U, h.prefix = false, h.argument = P, Xt(P), K(), P = X(h, "UpdateExpression");
          }
          return P;
        }
        function So() {
          return Rt(ur());
        }
        function Rt(h, g) {
          var P;
          return se(Bt) ? (P = ze(h), P.object = h, P.property = Je(true), P.computed = false, Rt(X(P, "MemberExpression"), g)) : se(nt) ? (P = ze(h), P.object = h, P.property = Re(), P.computed = true, ce(E), Rt(X(P, "MemberExpression"), g)) : !g && se(ie) ? (P = ze(h), P.callee = h, P.arguments = cr(le, false), Rt(X(P, "CallExpression"), g)) : h;
        }
        function ur() {
          var h;
          switch (M) {
            case Mt:
              return h = Ee(), K(), X(h, "ThisExpression");
            case L:
              return Je();
            case p:
            case N:
            case v:
              return h = Ee(), h.value = U, h.raw = t.slice(m, O), K(), X(h, "Literal");
            case gt:
            case Lt:
            case Ft:
              return h = Ee(), h.value = M.atomValue, h.raw = M.keyword, K(), X(h, "Literal");
            case ie:
              var g = x, P = m;
              K();
              var I = Re();
              return I.start = P, I.end = O, r.locations && (I.loc.start = g, I.loc.end = F), r.ranges && (I.range = [P, O]), ce(le), I;
            case nt:
              return h = Ee(), K(), h.elements = cr(E, true, true), X(h, "ArrayExpression");
            case We:
              return xo();
            case z:
              return h = Ee(), K(), lr(h, false);
            case $t:
              return Io();
          }
          Ge();
        }
        function Io() {
          var h = Ee();
          return K(), h.callee = Rt(ur(), true), h.arguments = se(ie) ? cr(le, false) : R, X(h, "NewExpression");
        }
        function xo() {
          var h = Ee(), g = true, P = false;
          for (h.properties = [], K(); !se(Ie); ) {
            if (g) g = false;
            else if (ce(Te), r.allowTrailingCommas && se(Ie)) break;
            var I = { key: Fr() }, H = false, G;
            if (se(xe) ? (I.value = Re(true), G = I.kind = "init") : I.key.type === "Identifier" && (I.key.name === "get" || I.key.name === "set") ? (H = P = true, G = I.kind = I.key.name, I.key = Fr(), M !== ie && Ge(), I.value = lr(Ee(), false)) : Ge(), I.key.type === "Identifier" && (de || P)) for (var J = 0; J < h.properties.length; ++J) {
              var ne = h.properties[J];
              if (ne.key.name === I.key.name) {
                var Nt = G === ne.kind || H && ne.kind === "init" || G === "init" && (ne.kind === "get" || ne.kind === "set");
                Nt && !de && G === "init" && ne.kind === "init" && (Nt = false), Nt && Y(I.key.start, "Redefinition of property");
              }
            }
            h.properties.push(I);
          }
          return X(h, "ObjectExpression");
        }
        function Fr() {
          return M === p || M === N ? ur() : Je(true);
        }
        function lr(h, g) {
          M === L ? h.id = Je() : g ? Ge() : h.id = null, h.params = [];
          var P = true;
          for (ce(ie); !se(le); ) P ? P = false : ce(Te), h.params.push(Je());
          var I = we, H = Z;
          if (we = true, Z = [], h.body = Tt(true), we = I, Z = H, de || h.body.body.length && rr(h.body.body[0])) for (var G = h.id ? -1 : 0; G < h.params.length; ++G) {
            var J = G < 0 ? h.id : h.params[G];
            if ((ke(J.name) || Ut(J.name)) && Y(J.start, "Defining '" + J.name + "' in strict mode"), G >= 0) for (var ne = 0; ne < G; ++ne) J.name === h.params[ne].name && Y(J.start, "Argument name clash in strict mode");
          }
          return X(h, g ? "FunctionDeclaration" : "FunctionExpression");
        }
        function cr(h, g, P) {
          for (var I = [], H = true; !se(h); ) {
            if (H) H = false;
            else if (ce(Te), g && r.allowTrailingCommas && se(h)) break;
            I.push(P && M === Te ? null : Re(true));
          }
          return I;
        }
        function Je(h) {
          var g = Ee();
          return h && r.forbidReserved === "everywhere" && (h = false), M === L ? (!h && (r.forbidReserved && Ae(U) || de && ke(U)) && t.slice(m, O).indexOf("\\") === -1 && Y(m, "The keyword '" + U + "' is reserved"), g.name = U) : h && M.keyword ? g.name = M.keyword : Ge(), V = false, K(), X(g, "Identifier");
        }
      });
    }, vm: ($) => {
      $.exports = jo;
    } }, b = {};
    function C($) {
      var f = b[$];
      if (f !== void 0) return f.exports;
      var A = b[$] = { exports: {} };
      return y[$].call(A.exports, A, A.exports, C), A.exports;
    }
    C.d = ($, f) => {
      for (var A in f) C.o(f, A) && !C.o($, A) && Object.defineProperty($, A, { enumerable: true, get: f[A] });
    }, C.o = ($, f) => Object.prototype.hasOwnProperty.call($, f), C.r = ($) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty($, Symbol.toStringTag, { value: "Module" }), Object.defineProperty($, "__esModule", { value: true });
    };
    var S = {};
    return (() => {
      /*!*******************************!*\
      !*** ./src/js-interpreter.js ***!
      \*******************************/
      C.r(S), C.d(S, { default: () => A });
      const $ = C("./original-repo/acorn.js");
      globalThis.acorn = $;
      const { Interpreter: f } = C("./original-repo/interpreter.js"), A = f;
    })(), S = S.default, S;
  })());
})(so);
var fi = so.exports;
const mi = Vo(fi);
var Rr = ((d) => (d[d.ZeroTorque = 0] = "ZeroTorque", d[d.Damp = 1] = "Damp", d[d.PositionalSquat = 2] = "PositionalSquat", d[d.PositionalSit = 3] = "PositionalSit", d[d.PrepareAndLock = 4] = "PrepareAndLock", d[d.R2XWalk = 200] = "R2XWalk", d[d.Stair = 201] = "Stair", d[d.Run = 202] = "Run", d[d.R2YTwist = 203] = "R2YTwist", d[d.R2AShoot = 204] = "R2AShoot", d[d.G1TaiMei = 301] = "G1TaiMei", d[d.R1XWalk = 500] = "R1XWalk", d[d.R1YWalk = 501] = "R1YWalk", d[d.L1XLieUp = 702] = "L1XLieUp", d[d.L1YSquatUp = 706] = "L1YSquatUp", d[d.JumpForward = 708] = "JumpForward", d[d.JumpUp = 709] = "JumpUp", d))(Rr || {}), Ke = ((d) => (d[d.Idle = 0] = "Idle", d[d.Busy = 1] = "Busy", d))(Ke || {}), Nr = ((d) => (d[d.Wave = 0] = "Wave", d[d.TurnAndWave = 1] = "TurnAndWave", d[d.ReachOut = 2] = "ReachOut", d[d.DrawBack = 3] = "DrawBack", d[d.Invalid = 4] = "Invalid", d))(Nr || {}), Ze = ((d) => (d[d.Stand = 0] = "Stand", d[d.Stepping = 1] = "Stepping", d[d.StandStill = 2] = "StandStill", d))(Ze || {});
Hr.FieldAngle.WRAP = 180;
Hr.FieldAngle.OFFSET = 90;
const gi = (d, l) => d - Math.floor(d / l) * l;
class _i {
  constructor(l, y, b, C, S) {
    __publicField(this, "workspace");
    __publicField(this, "jsGenerator");
    __publicField(this, "interpreter");
    __publicField(this, "highlightPause");
    __publicField(this, "isRunning");
    __publicField(this, "asyncBusy");
    __publicField(this, "currentCode");
    __publicField(this, "g1View");
    __publicField(this, "poseResetTimeout");
    __publicField(this, "stopCallback");
    __publicField(this, "sportState");
    __publicField(this, "robotOdom");
    __publicField(this, "webRTC");
    __publicField(this, "tickingInterval");
    __publicField(this, "isReal");
    __publicField(this, "isVideoPlaying");
    const { sportState: $, robotOdom: f } = _r(Gr());
    this.sportState = $, this.robotOdom = f, this.workspace = l, this.jsGenerator = y, this.interpreter = null, this.highlightPause = false, this.isRunning = false, this.asyncBusy = false, this.currentCode = null, this.g1View = b, this.poseResetTimeout = 0, this.stopCallback = C, this.webRTC = S, this.tickingInterval = 0, this.isReal = false, this.isVideoPlaying = false;
  }
  setNewWorkspace(l) {
    this.workspace = l;
  }
  sendRequest(l) {
    return this.isReal ? new Promise(() => {
    }) : this.g1View.manager.handleRequest(l);
  }
  getState() {
    return this.g1View.robot.sportState;
  }
  getSpeed() {
    return this.g1View.robot.velocity;
  }
  getOdom() {
    return this.isReal ? { currentPos: new ye(this.robotOdom.value.position.x, this.robotOdom.value.position.y, this.robotOdom.value.position.z), currentEuler: new $e().setFromQuaternion(new Go(this.robotOdom.value.orientation.x, this.robotOdom.value.orientation.y, this.robotOdom.value.orientation.z, this.robotOdom.value.orientation.w), "ZYX") } : { currentPos: this.g1View.robot.urdfRoot.position.clone(), currentEuler: new $e().setFromQuaternion(this.g1View.robot.urdfRoot.quaternion) };
  }
  move(l, y, b, C) {
    let S = null, $ = 0, f = parseFloat(b);
    this.asyncBusy = true, window.clearInterval(this.tickingInterval), this.tickingInterval = window.setInterval(() => {
      if (S === null) {
        const O = this.getOdom().currentPos, x = this.getOdom().currentEuler;
        O.setZ(0), x.x = 0, x.y = 0;
        const F = new ye(parseFloat(l), parseFloat(y), 0);
        S = O.clone().add(F.applyEuler(x)), $ = x.z;
      }
      const { currentPos: A, currentEuler: r } = this.getOdom(), t = this.getSpeed();
      A.setZ(0);
      const e = gi(r.z - $ + Math.PI, Math.PI * 2) - Math.PI;
      $ = r.z, f -= e, r.x = 0, r.y = 0;
      const n = r.clone();
      n.z = -r.z;
      const a = S.clone().sub(A).applyEuler(n);
      a.length() < 0.07 && Math.abs(f) < 0.1 && t.length() < 0.1 && (window.clearInterval(this.tickingInterval), C(), this.asyncBusy = false), a.z = 0;
      const u = a.length();
      u > 0.2 ? a.normalize().multiplyScalar(0.5) : a.normalize().multiplyScalar(u * 2.5);
      const c = a.x, i = a.y, m = Math.sign(f) * Math.min(1, Math.abs(f / 0.6));
      this.g1View.manager.getStateController().setMove(c, i, m);
    }, 100);
  }
  stepSeconds(l, y) {
    this.asyncBusy = true;
    let b = parseFloat(l) * 1e3;
    window.clearInterval(this.tickingInterval), this.tickingInterval = window.setInterval(() => {
      const C = this.getState();
      b > 0 ? (C.balance === Ze.Stand && (console.log("change"), C.balance = Ze.Stepping), b = b - 100) : (C.balance = Ze.Stand, window.clearInterval(this.tickingInterval), y(), this.asyncBusy = false);
    }, 100);
  }
  setColor(l) {
    const y = l.replace(/^#/, ""), b = parseInt(y.slice(0, 2), 16), C = parseInt(y.slice(2, 4), 16), S = parseInt(y.slice(4, 6), 16), $ = b << 16 | C << 8 | S;
    this.g1View.manager.robot.setLightColor($);
  }
  resetLight() {
  }
  sendCmd(l, y, b, C) {
    this.asyncBusy = true, this.sendRequest({ topic: l, api_id: y, parameter: b }).then((S) => {
      S.code === 0 ? (this.asyncBusy = false, C()) : (this.stop(), console.error("err"));
    });
  }
  initApi(l, y) {
    l.setProperty(y, "move", l.createAsyncFunction(this.move.bind(this))), l.setProperty(y, "stepSeconds", l.createAsyncFunction(this.stepSeconds.bind(this))), l.setProperty(y, "highlightBlock", l.createNativeFunction(this.highlightBlock.bind(this))), l.setProperty(y, "log_data", l.createNativeFunction(this.logData)), l.setProperty(y, "setColor", l.createNativeFunction(this.setColor.bind(this))), l.setProperty(y, "sendCmd", l.createAsyncFunction(this.sendCmd.bind(this))), l.setProperty(y, "waitForSeconds", l.createAsyncFunction(this.waitForSeconds.bind(this)));
  }
  stop() {
    this.isRunning = false, this.interpreter = null, this.highlightPause = false, this.asyncBusy = false, this.workspace.highlightBlock(null), this.currentCode = null, window.clearInterval(this.tickingInterval), this.g1View.manager.robot.setLightColor(65535), this.stopCallback();
  }
  waitForSeconds(l, y) {
    this.asyncBusy = true, setTimeout(() => {
      this.asyncBusy = false, y();
    }, l * 1e3);
  }
  pause() {
    this.isRunning = false;
  }
  highlightBlock(l) {
    var _a;
    l = String(l || ""), ((_a = this.workspace.getBlockById(l)) == null ? void 0 : _a.type) !== "my_procedure_def" && (this.workspace.highlightBlock(l), this.highlightPause = true);
  }
  logData(l) {
    console.log(l);
  }
  runCode(l) {
    l && (this.isRunning = true, this.stepCode(l));
  }
  stepCode(l) {
    l && (!this.currentCode && !this.interpreter && (this.currentCode = l, this.interpreter = new mi(l, this.initApi.bind(this))), this.currentCode === l ? this.highlightPause = false : this.stop()), this.interpreter && (this.isRunning || !this.highlightPause) && (this.interpreter.step() ? this.asyncBusy ? setTimeout(this.stepCode.bind(this), 10) : this.stepCode() : (console.log("\u7ED3\u675F"), this.stop()));
  }
}
class Or {
  constructor(l, y, b, C, S) {
    __publicField(this, "robot");
    __publicField(this, "action");
    __publicField(this, "autoQuit");
    __publicField(this, "from");
    __publicField(this, "to");
    this.robot = l, this.action = y, this.autoQuit = b, this.from = C, this.to = S;
  }
}
function fr(d, l, y, b) {
  const C = l - d;
  return Math.abs(C) < y * b ? l : d + y * b * Math.sign(C);
}
new ye(0, 0.11, 0), new ye(0, -0.11, 0);
function qt(d, l) {
  return l === void 0 || Math.abs(d - l) < 0.02 ? d : l + Math.sign(d - l) * 0.02;
}
function qe(d, l, y) {
  if (d.t.length !== d.v.length || d.t.length < 2) return 0;
  const b = d.t.findIndex((S) => S >= l);
  let C = 0;
  return b < 0 ? C = d.v[d.v.length - 1] : b === 0 ? C = d.v[0] : C = d.v[b - 1] + (d.v[b] - d.v[b - 1]) * (l - d.t[b - 1]) / (d.t[b] - d.t[b - 1]), qt(C, y);
}
class Pt extends Or {
  constructor(l, y, b, C, S, $) {
    super(l, y, b, C, S);
    __publicField(this, "t");
    __publicField(this, "startPosition");
    __publicField(this, "startEuler");
    __publicField(this, "curves");
    this.startPosition = new ye(), this.startEuler = new $e(0, 0, 0), this.t = 0, this.curves = $;
  }
  enter() {
    this.t = 0;
  }
  handleStick(l, y, b, C) {
  }
  handleRequest(l, y) {
  }
  setMove(l, y, b) {
  }
  run(l) {
    this.t = this.t + l;
    const y = {}, b = this.curves;
    if (Object.entries(b.joints).forEach((C) => {
      if (C[0] === "left_shoulder_pitch_joint" || C[0] === "right_shoulder_pitch_joint") {
        const S = this.robot.urdfRoot.joints[C[0]].angle;
        y[C[0]] = qe(C[1], this.t, S);
      } else y[C[0]] = qe(C[1], this.t);
    }), this.robot.urdfRoot.setJointValues(y), b.body) {
      const C = b.body.eulerX ? qe(b.body.eulerX, this.t) : 0, S = b.body.eulerY ? qe(b.body.eulerY, this.t) : 0, $ = b.body.eulerZ ? qe(b.body.eulerZ, this.t) : 0, f = b.body.posX ? qe(b.body.posX, this.t) : 0, A = b.body.posY ? qe(b.body.posY, this.t) : 0, r = b.body.posZ ? qe(b.body.posZ, this.t) : 0.75, t = new $e(0, 0, this.robot.mapPP.z), e = new ye(f, A, r).applyEuler(t).add(this.robot.mapPP.clone().setZ(0));
      b.useFeetIK ? (this.robot.ikRoot.setEuler(C, S, this.robot.mapPP.z + $), this.robot.ikRoot.setPosition(e.x, e.y, e.z), this.robot.solveIK()) : (this.robot.urdfRoot.position.set(e.x, e.y, e.z), this.robot.urdfRoot.quaternion.setFromEuler(new $e(C, S, this.robot.mapPP.z + $)));
    }
  }
}
const Ei = { joints: { right_elbow_joint: { t: [0, 1, 2], v: [1, 0.5, 0.5] }, right_shoulder_pitch_joint: { t: [0, 1, 2], v: [0.2, -0.2, -0.4] }, left_shoulder_pitch_joint: { t: [0, 2], v: [0.2, 0.7] }, left_elbow_joint: { t: [0, 2], v: [1, 0.7] } }, duration: 2 }, yi = { joints: { right_elbow_joint: { t: [0, 2], v: [0.5, 1] }, right_shoulder_pitch_joint: { t: [0, 2], v: [-0.4, 0.2] }, left_shoulder_pitch_joint: { t: [0, 2], v: [0.7, 0.2] }, left_elbow_joint: { t: [0, 2], v: [0.7, 1] } }, duration: 2 }, vi = { useFeetIK: true, body: { eulerY: { t: [0, 2], v: [0, 0.5] }, posX: { t: [0, 2], v: [0, -0.05] }, posZ: { t: [0, 2], v: [0.75, 0.4] } }, joints: {}, duration: 2 }, bi = { useFeetIK: true, body: { eulerY: { t: [0, 2], v: [0.5, 0] }, posX: { t: [0, 2], v: [-0.05, 0] }, posZ: { t: [0, 2], v: [0.4, 0.75] } }, joints: {}, duration: 2 }, Ti = { joints: { waist_yaw_joint: { t: [0, 5, 10], v: [0, 6, 0] }, left_shoulder_pitch_joint: { t: [0, 3, 7, 10], v: [0.2, -2.6, -2.6, 0.2] }, left_shoulder_roll_joint: { t: [0, 2, 3, 4, 5, 6, 7, 8, 10], v: [0.15, 1, 1.5, 0.5, 1.5, 0.5, 1.5, 1, 0.15] }, left_shoulder_yaw_joint: { t: [0, 2, 8, 10], v: [0, -1, -1, 0] }, left_elbow_joint: { t: [0, 3, 4, 5, 6, 7, 10], v: [1, 1.2, 0.8, 1.2, 0.8, 1.2, 1] } }, duration: 10 };
class Ri extends Or {
  constructor(l, y, b, C, S) {
    super(l, y, b, C, S);
  }
  enter() {
    this.robot.sportState.upperMotion = Nr.Invalid;
  }
  handleStick(l, y, b, C) {
  }
  handleRequest(l, y) {
  }
  setMove(l, y, b) {
  }
  run(l) {
    const y = this.robot.stanceIndex === 0 ? this.robot.armSwing : -this.robot.armSwing, b = this.robot.swingIndex === 0 ? this.robot.armSwing : -this.robot.armSwing;
    this.robot.urdfRoot.setJointValues({ left_shoulder_pitch_joint: qt(0.2 + y, this.robot.urdfRoot.joints.left_shoulder_pitch_joint.angle), right_shoulder_pitch_joint: qt(0.2 + b, this.robot.urdfRoot.joints.right_shoulder_pitch_joint.angle), waist_yaw_joint: qt(this.robot.velocity.z * 0.2, this.robot.urdfRoot.joints.waist_yaw_joint.angle) });
  }
}
const mr = [new ye(0, 0.11, 0), new ye(0, -0.11, 0)];
class Ni extends Or {
  constructor(l, y, b, C, S) {
    super(l, y, b, C, S);
    __publicField(this, "footStartPP");
    __publicField(this, "footTargetPP");
    __publicField(this, "velocityTarget");
    __publicField(this, "t");
    __publicField(this, "duration");
    __publicField(this, "bodyHeight");
    this.velocityTarget = { velocity: new ye(0, 0, 0), tic: 0 }, this.duration = 0, this.t = 0, this.footStartPP = mr.map(($) => $.clone()), this.footTargetPP = this.footStartPP.map(($) => $.clone()), this.bodyHeight = 0.75;
  }
  enter() {
    this.duration = 0.5, this.t = 0, this.bodyHeight = 0.745, this.robot.sportState.balance = Ze.Stand, this.robot.sportState.fsmId = Rr.R1XWalk, this.robot.sportState.fsmMode = Ke.Busy, this.robot.mapPP = this.robot.urdfRoot.position.clone().setZ(new $e().setFromQuaternion(this.robot.urdfRoot.quaternion, "ZYX").z);
    const l = new $e(0, 0, this.robot.mapPP.z);
    this.footStartPP = mr.map((y) => y.clone().applyEuler(l).add(this.robot.mapPP)), this.footTargetPP = this.footStartPP.map((y) => y.clone()), this.robot.ikRoot.setEuler(0, 0, this.robot.mapPP.z), this.robot.ikRoot.setPosition(...this.robot.mapPP.clone().setZ(this.bodyHeight).toArray()), this.robot.ikFootGoals.forEach((y, b) => {
      y.setEuler(0, 0, this.footStartPP[b].z), y.setPosition(...this.footStartPP[b].clone().setZ(0).toArray());
    }), this.robot.solveIK(), this.velocityTarget.velocity.set(0, 0, 0), this.robot.velocity.set(0, 0, 0), this.robot.urdfRoot.setJointValues({ waist_yaw_joint: 0, left_shoulder_pitch_joint: 0.2, left_shoulder_roll_joint: 0.15, left_shoulder_yaw_joint: 0, left_elbow_joint: 1, left_wrist_roll_joint: 0, right_shoulder_pitch_joint: 0.2, right_shoulder_roll_joint: -0.15, right_shoulder_yaw_joint: 0, right_elbow_joint: 1, right_wrist_roll_joint: 0 }), this.robot.swingIndex = 0, this.robot.stanceIndex = 1, this.robot.armSwing = 0;
  }
  handleStick(l, y, b, C) {
  }
  setMove(l, y, b) {
    this.velocityTarget.tic = 0.5, this.velocityTarget.velocity.set(l, y, b);
  }
  handleRequest(l, y) {
  }
  run(l) {
    if (this.t = this.t + l, this.t > this.duration) {
      this.t = this.t - this.duration;
      const i = 0.5 / this.robot.velocity.clone().setZ(this.robot.velocity.z * 0.05).length();
      this.duration = i > 0.5 ? 0.5 : i;
      const m = this.robot.swingIndex;
      this.robot.swingIndex = this.robot.stanceIndex, this.robot.stanceIndex = m, this.footStartPP[this.robot.stanceIndex] = this.footTargetPP[this.robot.stanceIndex];
    }
    const y = this.robot.velocity.clone().setZ(this.robot.velocity.z * 0.5).length() * this.duration, b = this.robot.velocity.x > 0 ? 0.2 : 0.3;
    this.bodyHeight = Math.sqrt(0.745 ** 2 - y ** 2 * b), this.velocityTarget.tic -= l, this.velocityTarget.tic < 0 && this.velocityTarget.velocity.set(0, 0, 0);
    const C = new $e(0, 0, this.robot.mapPP.z);
    this.robot.mapPP.add(this.robot.velocity.clone().multiplyScalar(l).applyEuler(C));
    const S = this.t / this.duration, $ = this.duration * 1.5 - this.t;
    this.footTargetPP[this.robot.swingIndex] = this.robot.mapPP.clone().add(this.robot.velocity.clone().multiplyScalar($).applyEuler(C)).add(mr[this.robot.swingIndex].clone().applyEuler(C));
    let f = Math.min(this.footTargetPP[this.robot.swingIndex].distanceTo(this.footStartPP[this.robot.swingIndex]) ** 0.3, 1);
    this.robot.sportState.balance === Ze.Stepping && (f = Math.max(f, 0.5));
    const A = this.robot.velocity.x > 0 ? new ye(-0.135, 0, 0.04) : new ye(0.0675, 0, 0.04), r = this.footTargetPP[this.robot.swingIndex].clone().multiplyScalar(S).add(this.footStartPP[this.robot.swingIndex].clone().multiplyScalar(1 - S)), t = this.robot.velocity.x > 0 ? this.robot.velocity.x * 0.6 : this.robot.velocity.x * 0.3;
    let e = new ye(0, 0, 0), n = 0;
    if (S < 0.5) {
      const i = this.footStartPP[this.robot.swingIndex].z;
      n = t * 2 * (0.5 - S), e = A.clone().applyEuler(new $e(0, t, 0)).sub(A).applyEuler(new $e(0, 0, i)).multiplyScalar(2 * (0.5 - S));
    } else {
      const i = this.footStartPP[this.robot.stanceIndex].clone(), m = t * 2 * (S - 0.5), O = A.clone().applyEuler(new $e(0, m, 0)).sub(A).applyEuler(new $e(0, 0, i.z)).multiplyScalar(2 * (S - 0.5)), x = i.clone().setZ(0).add(O);
      this.robot.ikFootGoals[this.robot.stanceIndex].setEuler(0, m, i.z), this.robot.ikFootGoals[this.robot.stanceIndex].setPosition(...x.toArray());
    }
    const a = r.clone().setZ(Math.sin(S * Math.PI) * 0.05 * f).add(e);
    this.robot.ikFootGoals[this.robot.swingIndex].setEuler(0, Math.sin(S * Math.PI * 2) * 0.2 * this.robot.velocity.x + n, r.z), this.robot.ikFootGoals[this.robot.swingIndex].setPosition(...a.toArray());
    const u = this.robot.mapPP.clone().setZ(Math.sin(S * Math.PI) * 0.01 * f + this.bodyHeight);
    this.robot.ikRoot.setEuler(-0.01 * this.robot.velocity.z * Math.abs(this.robot.velocity.x), 0.05 * this.robot.velocity.x, this.robot.mapPP.z);
    const c = this.robot.velocity.x > 0 ? 0.1 * this.robot.velocity.x : 0.05 * this.robot.velocity.x;
    this.robot.ikRoot.setPosition(...u.clone().add(new ye(c, 0.05 * this.robot.velocity.y - 0.01 * this.robot.velocity.z * Math.abs(this.robot.velocity.x), 0).applyEuler(C)).toArray()), this.robot.armSwing = 0.2 * this.robot.velocity.x * Math.cos(this.t / this.duration * Math.PI), this.robot.solveIK(), this.robot.velocity.x = fr(this.robot.velocity.x, this.velocityTarget.velocity.x, 0.8, l), this.robot.velocity.y = fr(this.robot.velocity.y, this.velocityTarget.velocity.y, 0.4, l), this.robot.velocity.z = fr(this.robot.velocity.z, this.velocityTarget.velocity.z, 0.5, l), this.robot.sportState.fsmMode = f === 0 ? Ke.Idle : Ke.Busy;
  }
}
const Oi = ["walk", "squatOn", "squatOff"];
class Pi {
  constructor(l) {
    __publicField(this, "robot");
    __publicField(this, "controllerDict");
    __publicField(this, "stateKey");
    __publicField(this, "upperKey");
    this.robot = l, this.controllerDict = /* @__PURE__ */ new Map(), this.stateKey = "walk", this.upperKey = "armSwing", this.controllerDict.set("walk", new Ni(this.robot, "walk", false, "", "")), this.controllerDict.set("squatOn", new Pt(this.robot, "squatOn", false, "", "squatOff", vi)), this.controllerDict.set("squatOff", new Pt(this.robot, "squatOff", true, "squatOn", "", bi)), this.controllerDict.set("armSwing", new Ri(this.robot, "armSwing", false, "", "")), this.controllerDict.set("handShakeOn", new Pt(this.robot, "handShakeOn", false, "", "handShakeOff", Ei)), this.controllerDict.set("handShakeOff", new Pt(this.robot, "handShakeOff", true, "handShakeOn", "none", yi)), this.controllerDict.set("turnAndWave", new Pt(this.robot, "turnAndWave", true, "", "", Ti)), this.controllerDict.get(this.stateKey).enter(), this.controllerDict.get(this.upperKey).enter();
  }
  run(l) {
    const y = this.getStateController();
    this.robot.sportState.fsmMode === Ke.Idle && y.autoQuit && (this.stateKey = "walk", this.getStateController().enter()), this.getStateController().run(l), this.stateKey === "walk" && this.getUpperController().run(l);
  }
  getStateController() {
    return this.controllerDict.get(this.stateKey);
  }
  getUpperController() {
    return this.controllerDict.get(this.upperKey);
  }
  changeStateController(l) {
    if (Oi.indexOf(l) > -1) {
      const y = this.getStateController(), b = this.controllerDict.get(l);
      return l === this.stateKey ? true : this.robot.sportState.fsmMode === Ke.Idle && (l === y.to || y.to === "") && (b.from === "" || b.from === y.action) ? (console.info("success:" + this.stateKey + "=>" + l), this.stateKey = l, b.enter(), true) : (console.warn("failed:" + this.stateKey + "=>" + l + " | idle:" + this.robot.sportState.fsmMode == Ke.Idle + " | next:" + y.to), false);
    } else return false;
  }
  handleRequest(l) {
    return new Promise((y) => {
    });
  }
  handleRobotRequest(l, y, b) {
  }
  hexToRGB(l) {
    l = l.replace(/^#/, "");
    const y = parseInt(l.slice(0, 2), 16), b = parseInt(l.slice(2, 4), 16), C = parseInt(l.slice(4, 6), 16);
    return y << 16 | b << 8 | C;
  }
}
const jr = ["right_hip_pitch_joint", "right_hip_roll_joint", "right_hip_yaw_joint", "right_knee_joint", "right_ankle_pitch_joint", "right_ankle_roll_joint", "left_hip_pitch_joint", "left_hip_roll_joint", "left_hip_roll_joint", "left_knee_joint", "left_ankle_pitch_joint", "left_ankle_roll_joint"];
class Ci {
  constructor(l, y, b = false) {
    __publicField(this, "scene");
    __publicField(this, "sportState");
    __publicField(this, "validLegJoints");
    __publicField(this, "urdfRoot");
    __publicField(this, "ikRoot");
    __publicField(this, "ikHelper");
    __publicField(this, "ikFootGoals");
    __publicField(this, "footLinks");
    __publicField(this, "ikSolvers");
    __publicField(this, "velocity");
    __publicField(this, "mapPP");
    __publicField(this, "lightMaterial");
    __publicField(this, "stanceIndex");
    __publicField(this, "swingIndex");
    __publicField(this, "armSwing");
    this.scene = l, this.sportState = { fsmId: Rr.R1XWalk, fsmMode: Ke.Idle, balance: Ze.Stand, upperMotion: Nr.Invalid }, this.swingIndex = 0, this.stanceIndex = 1, this.armSwing = 0, this.urdfRoot = y, this.velocity = new ye(0, 0, 0), this.ikRoot = Yo(y, false), this.ikRoot.setDoF(), this.mapPP = new ye(0, 0, 0), this.validLegJoints = [-0.7, 0, 0, 1.4, 0, 0, -0.7, 0, 0, 1.4, 0, 0], this.setLegJoints(this.validLegJoints), pr(this.ikRoot, this.urdfRoot), b && (this.ikHelper = new Wo([this.ikRoot]), this.ikHelper.setColor(16746496), this.ikHelper.setDrawThrough(true), this.ikHelper.setJointScale(0.2), this.scene.add(this.ikHelper)), this.ikFootGoals = [], this.ikSolvers = [], this.footLinks = [this.urdfRoot.links.left_ankle_roll_link, this.urdfRoot.links.right_ankle_roll_link], [this.ikRoot.find((S) => S.name === "left_ankle_roll_link"), this.ikRoot.find((S) => S.name === "right_ankle_roll_link")].forEach((S) => {
      const $ = new Xo();
      $.setPosition(0, 0, 0), $.setGoalDoF(lt.X, lt.Y, lt.Z, lt.EX, lt.EY, lt.EZ), $.makeClosure(S);
      const f = new Ho([this.ikRoot, $]);
      this.ikFootGoals.push($), this.ikSolvers.push(f);
    });
  }
  setLightColor(l) {
    if (this.lightMaterial) {
      const y = (l & 16711680) >> 16, b = l & 255, C = l & 255, S = (y + 2 * b + C) / 1024;
      this.lightMaterial.emissive.set(l), this.lightMaterial.color.set(l), this.lightMaterial.emissiveIntensity = 10 - S * 2;
    }
  }
  setLegJoints(l) {
    jr.forEach((y, b) => {
      this.urdfRoot.joints[y].setJointValue(l[b]);
    });
  }
  getLegJoints(l) {
    jr.forEach((y, b) => {
      l[b] = this.urdfRoot.joints[y].angle;
    });
  }
  solveIK() {
    pr(this.ikRoot, this.urdfRoot);
    let l = true;
    if (this.ikSolvers.forEach((y) => {
      y.maxIterations = 5, y.solve()[0] !== 0 && (l = false);
    }), !l) {
      const y = new Array(12).fill(0);
      this.getLegJoints(y), this.setLegJoints(this.validLegJoints), pr(this.ikRoot, this.urdfRoot), this.setLegJoints(y);
    }
    l && zo(this.urdfRoot, this.ikRoot);
  }
}
fn.DEFAULT_UP = new ye(0, 0, 1);
class wi {
  constructor() {
    __publicField(this, "renderDiv");
    __publicField(this, "scene");
    __publicField(this, "camera");
    __publicField(this, "renderer");
    __publicField(this, "effectComposer");
    __publicField(this, "orbitControl");
    __publicField(this, "gridHelper");
    __publicField(this, "currCameraPosition");
    __publicField(this, "robot");
    __publicField(this, "clock");
    __publicField(this, "animationFrameHandle");
    __publicField(this, "speed");
    __publicField(this, "manager");
    this.speed = 0.6, this.renderDiv = null, this.scene = new Jo(), this.scene.fog = new qo(3355443, 8, 16), this.scene.background = new Ko(3355443), this.currCameraPosition = new ye(-1.5, 0, 1.5), this.camera = new Zo(75, 1, 0.1, 500), this.camera.position.copy(this.currCameraPosition), this.camera.fov = 50, this.renderer = new Qo({ antialias: true }), this.renderer.toneMapping = en, this.renderer.toneMappingExposure = 1, this.renderer.setPixelRatio(window.devicePixelRatio);
    const l = new tn(16777215);
    l.intensity = 2, this.scene.add(l), this.gridHelper = new rn(30, 30, 8947848), this.gridHelper.rotateX(Math.PI / 2), this.gridHelper.position.z = -0.05, this.scene.add(this.gridHelper), this.animationFrameHandle = 0;
    const y = new on(this.scene, this.camera), b = new nn(new sn(window.innerWidth, window.innerHeight), 0.3, 1.1, 1.5), C = new an();
    this.effectComposer = new un(this.renderer), this.effectComposer.addPass(y), this.effectComposer.addPass(b), this.effectComposer.addPass(C), this.orbitControl = new ln(this.camera, this.renderer.domElement), this.orbitControl.addEventListener("change", () => {
      if (!this.robot) return;
      const $ = this.robot.urdfRoot.position.clone();
      $.setZ(0.55);
      const f = this.camera.position.clone().sub($);
      this.currCameraPosition = f;
    }), new cn().load("models/venice_sunset_1k.hdr", ($) => {
      $.mapping = dn, this.scene.environment = $;
    }), this.clock = new pn();
  }
  init(l) {
    this.renderDiv = l, this.renderDiv.appendChild(this.renderer.domElement), this.resize(), window.addEventListener("resize", this.resize.bind(this));
  }
  dispose() {
    this.animationFrameHandle && cancelAnimationFrame(this.animationFrameHandle), this.renderDiv && this.renderDiv.removeChild(this.renderer.domElement), this.renderer.dispose(), window.removeEventListener("resize", this.resize.bind(this));
  }
  load() {
    new hn().loadCompressedAsync("g1_23dof.urdf", "/g1_description.tar.xz").then((y) => {
      this.robot = new Ci(this.scene, y, false), console.log(this.robot.urdfRoot), this.manager = new Pi(this.robot), this.scene.add(y), this.scene.traverse((b) => {
        b.material && b.material.name === "EyeLight" && (this.robot.lightMaterial = b.material, this.robot.setLightColor(65535));
      });
    });
  }
  resize() {
    const { renderDiv: l, renderer: y, camera: b, effectComposer: C } = this;
    l && (y.setSize(l.clientWidth, l.clientHeight), C.setSize(l.clientWidth, l.clientHeight), b.aspect = l.clientWidth / l.clientHeight, b.updateProjectionMatrix());
  }
  cameraActive() {
    const { camera: l, orbitControl: y, robot: b } = this;
    if (!b) return;
    const C = b.urdfRoot.position.clone();
    C.setZ(0.55), y.target = C;
    const S = this.currCameraPosition, $ = C.clone().add(S);
    l.position.copy($), l.lookAt(C), this.gridHelper.position.x = Math.floor(C.x), this.gridHelper.position.y = Math.floor(C.y);
  }
  run() {
    var _a;
    this.animationFrameHandle = requestAnimationFrame(this.run.bind(this));
    let l = this.clock.getDelta();
    l = l > 0.05 ? 0.05 : l, this.clock.getElapsedTime(), this.cameraActive(), (_a = this.orbitControl) == null ? void 0 : _a.update(), this.effectComposer.render(), this.manager && this.manager.run(l);
  }
}
function Si() {
  const d = mn(), l = Ct(null);
  let y = 0;
  const [b, C] = ct(false), [S, $] = ct(false);
  let f = null, A = null;
  const r = new wi(), [t, e] = ct(true), [n, a] = ct("stop"), [u, c] = ct(Pe("Blockly.programming")), { webRtc: i, windowWidth: m, windowHeight: O, webIsInView: x, language: F, programData: M } = _r(gn()), U = Dr(() => "".concat((m == null ? void 0 : m.value) || 0, "px")), V = Dr(() => "".concat((O == null ? void 0 : O.value) || 0, "px"));
  let B = i == null ? void 0 : i.value;
  En("webRTC", B);
  const q = Ct(null), Se = Ct(null), pe = () => {
    if (t.value) if (B.getConnectionState() === "connected") Ot(Pe("robot_view"));
    else {
      Ot(Pe("robot_view_msg1"));
      return;
    }
    else Ot(Pe("simulator_view"));
    if (A && A.isRunning) {
      Ot(Pe("program_msg_1"));
      return;
    }
    e(!t.value);
  };
  let ve = null;
  const we = () => {
    f && (n.value === "stop" ? (a("run"), A && !A.isRunning && (t.value ? A.isReal = false : A.isReal = true), ve = Ce.javascriptGenerator.workspaceToCode(f), console.logGray(ve), A == null ? void 0 : A.runCode(ve)) : (a("stop"), A == null ? void 0 : A.pause()));
  }, Z = () => {
    A == null ? void 0 : A.stop(), A == null ? void 0 : A.resetLight();
  }, de = () => {
    f && (a("run"), A && !A.isRunning && (t.value ? A.isReal = false : A.isReal = true), ve = Ce.javascriptGenerator.workspaceToCode(f), A == null ? void 0 : A.stepCode(ve));
  }, Y = () => {
    Z(), f && N(false);
  };
  let R = false;
  const p = (j) => {
    f = k.inject("blocklyDiv", { theme: Yn, toolbox: { kind: "categoryToolbox", contents: [] }, renderer: "custom_renderer", move: { scrollbars: { horizontal: true, vertical: true }, drag: true, wheel: false }, zoom: { controls: false, wheel: true, startScale: 1, maxScale: 2, minScale: 0.5, scaleSpeed: 1.2, pinch: true } }), f.addChangeListener(k.Events.disableOrphans), f.addChangeListener((z) => {
      if (z.type == k.Events.TOOLBOX_ITEM_SELECT, z.type == k.Events.BLOCK_DRAG) {
        const te = f.getBlockById(z.blockId);
        q.value = te;
        const fe = te == null ? void 0 : te.getRelativeToSurfaceXY();
        if (Se.value = { x: (fe == null ? void 0 : fe.x) || 0, y: (fe == null ? void 0 : fe.y) || 0 }, z.isStart) {
          if (!(te == null ? void 0 : te.isDeletable())) return;
          L(true);
        } else if (te) {
          if (!(te == null ? void 0 : te.isDeletable())) return;
          L(false);
        } else L(false);
      }
    }), q.value = null, _n((z) => B = z, B), A ? A.setNewWorkspace(f) : A = new _i(f, Ce.javascriptGenerator, r, () => {
      a("stop");
    }, B), Br(() => {
      var _a;
      const z = document.getElementsByClassName("blocklyToolboxDiv")[0];
      if (f && (f.updateToolbox(hi(f)), Q(), y = z.clientWidth, (_a = f.trashcan) == null ? void 0 : _a.dispose(), j ? k.Xml.domToWorkspace(j, f) : v(), !R)) {
        if (!l.value) return;
        r.init(l.value), r.load(), r.run(), setTimeout(() => {
          var _a2, _b;
          (_b = (_a2 = r.manager) == null ? void 0 : _a2.getStateController()) == null ? void 0 : _b.setMove(1, 0, 0);
        }, 5e3), R = true;
      }
    });
  };
  function v() {
    var _a, _b;
    if (!f) return;
    const j = f.newBlock("start_program");
    j.setDeletable(false), j.moveBy(100, 100), (_a = f.getBlockById(j.id)) == null ? void 0 : _a.initSvg(), (_b = f.getBlockById(j.id)) == null ? void 0 : _b.render();
  }
  function N(j) {
    if (console.logPurple("\u5237\u65B0\u5DE5\u4F5C\u533A"), f) {
      const z = j ? k.Xml.workspaceToDom(f) : void 0;
      console.logRed("\u662F\u5426\u4FDD\u5B58", j), f.clear(), f.dispose(), Br(() => {
        p(z);
      });
    }
  }
  function L(j) {
    if (j) {
      const z = document.getElementsByClassName("blocklyToolboxDiv")[0];
      z.className = "".concat(z.className.replace("deleting", "").trim(), " deleting"), ae(true), C(true), $(false), be(false);
    } else {
      const z = document.getElementsByClassName("blocklyToolboxDiv")[0];
      z.className = "".concat(z.className.replace("deleting", "").trim()), ae(false), C(false);
    }
  }
  function Q() {
    const j = document.getElementsByClassName("blocklyToolboxDiv")[0], z = document.createElement("img");
    z.src = "/imageBlockly/img_trash_1.svg", z.className = "custom-trash-icon", j.appendChild(z);
    const te = document.createElement("img");
    te.src = "/imageBlockly/img_trash_2.svg", te.className = "custom-trash-icon", j.appendChild(te);
  }
  function ae(j) {
    const te = document.getElementsByClassName("blocklyToolboxDiv")[0].getElementsByClassName("custom-trash-icon");
    for (let fe = 0; fe < te.length; fe++) te[fe].style.display = j ? "block" : "none";
  }
  function be(j) {
    const fe = document.getElementsByClassName("blocklyToolboxDiv")[0].getElementsByClassName("custom-trash-icon")[0];
    fe && (fe.style.transform = "translate3d(-50%, -50%, 0) rotate(".concat(j ? 30 : 0, "deg)"));
  }
  const he = () => {
    if (!f) return;
    const j = k.serialization.workspaces.save(f);
    console.log("===>", j), Yr("webSaveProgramData", { data: JSON.stringify(j) }, () => {
      console.log("\u7F16\u7A0B\u4FDD\u5B58\u6210\u529F");
    });
  };
  document.addEventListener("pointermove", (j) => {
    b.value && (j.clientX <= y && !S.value && ($(true), be(true)), j.clientX > y && S.value && ($(false), be(false)));
  }), Jt(() => x == null ? void 0 : x.value, (j) => {
    if (!j && ["programming", "/programming"].includes(d.path)) Y(), r.manager && (r.manager.stateKey = "walk", r.manager.getStateController().enter()), r.robot && (r.robot.sportState.balance = Ze.Stand);
    else {
      const z = document.getElementById("custom_field_modal_wrapper");
      z && Array.from(z.children).forEach((te) => {
        te.className.includes("blockly_field_wrapper") && te.remove();
      });
    }
  });
  function Be() {
    f ? N(true) : window.setTimeout(() => Be(), 500);
  }
  Jt(() => F == null ? void 0 : F.value, () => {
    Be();
  });
  function Ue(j) {
    if (f) {
      if (!j) return;
      (j == null ? void 0 : j.data) ? window.setTimeout(() => {
        const z = JSON.parse(j.data), te = z.blocks.blocks.reduce((fe, je) => (je.type === "my_procedure_def" ? fe.unshift(je) : fe.push(je), fe), []);
        z.blocks.blocks = te, k.serialization.workspaces.load(z, f);
      }, 1e3) : (f.clear(), v()), console.log("%c 1111-".concat(j == null ? void 0 : j.name), "color: red"), c((j == null ? void 0 : j.name) ? decodeURIComponent(j == null ? void 0 : j.name) : "");
    } else window.setTimeout(() => Ue(j), 500);
  }
  Jt(() => M == null ? void 0 : M.value, (j) => {
    console.log("\u5F97\u5230\u4E86\u7F16\u7A0B\u6570\u636E", j), Ue(j);
  });
  const Ve = (j) => {
    var _a;
    if (j == "0") {
      const { x: z, y: te } = Se.value || { x: 0, y: 0 };
      if (console.log("\u5F00\u59CB\u5237\u65B0\u4E86", "\u8FD8\u539F\u5750\u6807", z, te), (_a = q.value) == null ? void 0 : _a.moveTo(new k.utils.Coordinate(z, te)), Z(), !f) return;
      N(true);
    }
  }, Qe = (j) => {
    (A == null ? void 0 : A.isRunning) && j.message.includes("Maximum call stack size exceeded") && (Ot(Pe("Blockly.msg_1")), A == null ? void 0 : A.stop());
  };
  return { workSpace: f, robotView: r, renderDiv: l, isDrag: b, inDelArea: S, showPreview: t, codeRunState: n, windowWidthPX: U, windowHeightPX: V, programName: u, changePreviewShow: pe, runCode: we, stop: Z, stepCode: de, exit: Y, initBlocklyWorkSpace: p, handleSaveProgram: he, listenIosStatusBarFn: Ve, registerErrorListen: () => {
    window.addEventListener("error", Qe, true);
  }, removeErrorListen: () => {
    window.removeEventListener("error", Qe);
  } };
}
const Qt = (d) => (Er("data-v-d30cdd6b"), d = d(), yr(), d), Ii = { class: "programme-wrapper" }, xi = Qt(() => W("div", { id: "blocklyDiv" }, null, -1)), Ai = { class: "operation-content" }, ki = { class: "opera-bar" }, $i = { class: "opera-1" }, Mi = ["src"], Li = { class: "opera-item-label" }, Fi = Qt(() => W("span", { class: "opera-item-line" }, null, -1)), Di = { class: "opera-item" }, Bi = ["src"], Ui = { class: "opera-item-label" }, Vi = Qt(() => W("span", { class: "opera-item-line" }, null, -1)), ji = { class: "opera-item" }, Gi = ["src"], Yi = { class: "opera-item-label" }, Wi = ["src"], Xi = { class: "opera-2-label" }, Hi = Qt(() => W("div", { id: "custom_field_modal_wrapper", class: "custom-field-modal-wrapper" }, null, -1)), zi = dt({ __name: "Programming", setup(d) {
  yn((V) => ({ "6d03539a": ee(e), "516e21a3": ee(n) }));
  const l = new URL("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='48px'%20height='56px'%20viewBox='0%200%2048%2056'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3e24gf-play%3c/title%3e%3cdefs%3e%3cfilter%20color-interpolation-filters='auto'%20id='filter-1'%3e%3cfeColorMatrix%20in='SourceGraphic'%20type='matrix'%20values='0%200%200%200%200.917647%200%200%200%200%200.929412%200%200%200%200%201.000000%200%200%200%201.000000%200'%3e%3c/feColorMatrix%3e%3c/filter%3e%3c/defs%3e%3cg%20id='\u9875\u9762-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='\u529F\u80FD\u5907\u4EFD-4'%20transform='translate(-1943.000000,%20-907.000000)'%3e%3cg%20id='\u7F16\u7EC4-9\u5907\u4EFD-2'%20transform='translate(1873.000000,%20877.000000)'%3e%3cg%20id='24gf-play'%20transform='translate(70.000000,%2030.000000)'%20filter='url(%23filter-1)'%3e%3cg%20transform='translate(0.357542,%200.482143)'%3e%3cpath%20d='M45.1071049,24.5689639%20L5.21444864,0.493824815%20C4.15235692,-0.146534976%202.82783708,-0.165345767%201.74799664,0.444594368%20C0.668156197,1.0545345%200,2.19874468%200,3.439151%20L0,51.5894291%20C-0.0052767066,52.8324836%200.661909948,53.981221%201.74413031,54.5923543%20C2.82635068,55.2034876%204.15437774,55.1814537%205.21573827,54.5347553%20L45.1083945,30.4596163%20C46.1402148,29.8369957%2046.7709497,28.7196072%2046.7709497,27.5142901%20C46.7709497,26.308973%2046.1402148,25.1915845%2045.1083945,24.5689639%20L45.1071049,24.5689639%20Z'%20id='\u8DEF\u5F84'%20fill='%235C5C66'%20fill-rule='nonzero'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", import.meta.url).href, y = new URL("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='48px'%20height='54px'%20viewBox='0%200%2048%2054'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3e24gf-pause2%3c/title%3e%3cdefs%3e%3cfilter%20color-interpolation-filters='auto'%20id='filter-1'%3e%3cfeColorMatrix%20in='SourceGraphic'%20type='matrix'%20values='0%200%200%200%200.917647%200%200%200%200%200.929412%200%200%200%200%201.000000%200%200%200%201.000000%200'%3e%3c/feColorMatrix%3e%3c/filter%3e%3c/defs%3e%3cg%20id='\u9875\u9762-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='\u529F\u80FD\u5907\u4EFD-5'%20transform='translate(-1949.000000,%20-908.000000)'%3e%3cg%20id='24gf-pause2'%20transform='translate(1949.000000,%20908.000000)'%20filter='url(%23filter-1)'%3e%3cg%3e%3cpath%20d='M17.1428572,3.37500004%20L17.1428572,50.625%20C17.1402001,52.4880936%2015.2229761,53.9979076%2012.8571428,54%20L4.28571433,54%20C1.91988112,53.9979076%200.00265703682,52.4880936%200,50.625%20L0,3.37500004%20C0.00265703682,1.51190638%201.91988112,0.00209241649%204.28571433,0%20L12.8571428,0%20C15.2229761,0.00209241649%2017.1402001,1.51190638%2017.1428572,3.37500004%20L17.1428572,3.37500004%20Z%20M43.7142857,0%20L35.1428572,0%20C32.7770239,0.00209241649%2030.8597999,1.51190638%2030.8571428,3.37500004%20L30.8571428,50.625%20C30.8597999,52.4880936%2032.7770239,53.9979076%2035.1428572,54%20L43.7142857,54%20C46.0801189,53.9979076%2047.997343,52.4880936%2048,50.625%20L48,3.37500004%20C47.997343,1.51190638%2046.0801189,0.00209241649%2043.7142857,0%20L43.7142857,0%20Z'%20id='\u5F62\u72B6'%20fill='%235C5C66'%20fill-rule='nonzero'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", import.meta.url).href, b = new URL("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='60px'%20height='48px'%20viewBox='0%200%2060%2048'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3e\u7F16\u7EC4%2012%3c/title%3e%3cg%20id='\u9875\u9762-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='\u529F\u80FD\u5907\u4EFD-5'%20transform='translate(-1769.000000,%20-910.000000)'%20fill='%23EAEDFF'%3e%3cg%20id='\u7F16\u7EC4-9\u5907\u4EFD-2'%20transform='translate(1700.000000,%20877.000000)'%3e%3cg%20id='\u7F16\u7EC4-12'%20transform='translate(69.000000,%2033.000000)'%3e%3cg%20id='\u65CB\u8F6C'%20fill-rule='nonzero'%3e%3cpath%20d='M53.4396823,2.84522273%20C52.8635954,1.31528088%2051.5114086,0.232226969%2049.9195119,0.0256905509%20C48.3772058,-0.14252926%2046.8607583,0.523575823%2045.9193182,1.78279029%20L43.1991864,5.46044103%20C39.6007843,4.16562781%2035.8137631,3.5024532%2031.9986441,3.49902733%20C18.0744628,3.50658783%205.54478393,12.1364321%200.317110048,25.3197547%20C-0.542704232,27.3960157%200.405984008,29.7913485%202.43721274,30.6727796%20C2.93318212,30.8786585%203.46202682,30.989474%203.99728828,30.9996819%20C5.57408879,31.0197211%207.01528101,30.0915906%207.67746644,28.6296403%20C11.641292,18.4399543%2021.2650643,11.7297336%2031.9986441,11.6715844%20C34.066188,11.6902674%2036.1229289,11.9786402%2038.1189405,12.5297028%20L36.6388688,14.5319794%20C35.6362141,15.7817831%2035.3900892,17.4945927%2035.9988378,18.986023%20C36.6233273,20.4744936%2037.9833425,21.5047484%2039.5590102,21.6829668%20L54.5997385,23.3174782%20L55.0797617,23.3174782%20C56.4647609,23.3174782%2057.7689327,22.6513594%2058.5999322,21.5195157%20C59.4792727,20.1336226%2059.6402895,18.4099805%2059.0328546,16.8851978%20L53.4396823,2.84522273%20L53.4396823,2.84522273%20Z'%20id='\u8DEF\u5F84'%3e%3c/path%3e%3c/g%3e%3ccircle%20id='\u692D\u5706\u5F62'%20cx='32.5'%20cy='37.5'%20r='10.5'%3e%3c/circle%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", import.meta.url).href, C = new URL("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='67px'%20height='67px'%20viewBox='0%200%2067%2067'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3e\u7ED3\u675F%3c/title%3e%3cdefs%3e%3cfilter%20color-interpolation-filters='auto'%20id='filter-1'%3e%3cfeColorMatrix%20in='SourceGraphic'%20type='matrix'%20values='0%200%200%200%200.984573%200%200%200%200%200.214794%200%200%200%200%200.214794%200%200%200%201.000000%200'%3e%3c/feColorMatrix%3e%3c/filter%3e%3c/defs%3e%3cg%20id='\u9875\u9762-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='\u529F\u80FD\u5907\u4EFD-4'%20transform='translate(-2104.000000,%20-902.000000)'%3e%3cg%20id='\u7F16\u7EC4-9\u5907\u4EFD-2'%20transform='translate(1873.000000,%20877.000000)'%3e%3cg%20id='\u7ED3\u675F'%20transform='translate(231.000000,%2025.000000)'%20filter='url(%23filter-1)'%3e%3cg%20transform='translate(0.484171,%200.500000)'%3e%3cpath%20d='M44.3724395,41.0663728%20C44.3724395,42.1691535%2043.4389428,43.0714286%2042.2980024,43.0714286%20L24.8602844,43.0714286%20C23.7146044,43.0714286%2022.7858473,42.1737345%2022.7858473,41.0663728%20L22.7858473,24.7371986%20C22.7858473,23.6298369%2023.7146044,22.7321429%2024.8602844,22.7321429%20L42.2980024,22.7321429%20C43.4389428,22.7321429%2044.3724395,23.634418%2044.3724395,24.7371986%20L44.3724395,41.0663728%20L44.3724395,41.0663728%20Z'%20id='\u8DEF\u5F84'%20fill='%23101317'%20fill-rule='nonzero'%3e%3c/path%3e%3cpath%20d='M65.9589636,32.9096673%20C65.9767473,24.1760692%2062.5070361,15.7950493%2056.3168316,9.61945003%20C50.1266271,3.4438508%2041.725786,-0.0176738421%2032.971533,6.78649597e-05%20C24.2244359,-0.0139395972%2015.8320008,3.44857488%209.64984528,9.62209697%20C3.45385119,15.7933074%20-0.0190336596,24.17509%200.00046383637,32.9096673%20C-0.0461125476,41.6491238%203.41676638,50.043433%209.61631302,56.2181458%20C15.8010248,62.4012575%2024.2117736,65.853412%2032.9673415,65.8030276%20C51.1292525,65.6184794%2065.9589636,51.0203634%2065.9589636,32.9096673%20Z%20M3.87358115,32.9096673%20C3.86946494,25.2078091%206.93313434,17.8198801%2012.3904788,12.3722747%20C17.8478232,6.92466931%2025.2514586,3.86397445%2032.971533,3.86397445%20C49.1466576,3.86397445%2062.2661548,16.9399724%2062.2661548,32.9096673%20C62.2661548,48.8542723%2049.1466576,61.9472894%2032.971533,61.9472894%20C25.2423063,61.9816738%2017.8197259,58.9332601%2012.3550693,53.4799262%20C6.89041272,48.0265924%203.83692771,40.6206471%203.87358115,32.9096673%20L3.87358115,32.9096673%20Z'%20id='\u5F62\u72B6'%20fill='%23101317'%20fill-rule='nonzero'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", import.meta.url).href, S = new URL("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='53px'%20height='53px'%20viewBox='0%200%2053%2053'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3e\u4FDD\u5B58%202%3c/title%3e%3cg%20id='\u9875\u9762-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='\u529F\u80FD\u5907\u4EFD-4'%20transform='translate(-2282.000000,%20-910.000000)'%20fill='%23E9ECFE'%20fill-rule='nonzero'%3e%3cg%20id='\u4FDD\u5B58'%20transform='translate(2282.000000,%20910.000000)'%3e%3cpath%20d='M29.3422693,13.2498171%20C32.6583564,13.2600201%2033.1328119,13.7089503%2033.1328119,16.5657787%20C33.1328119,19.4124041%2032.6532547,19.8664358%2029.6534713,19.8715373%20C26.7404163,19.8766387%2026.6332812,19.6113618%2026.4700277,16.366821%20C26.3424859,13.9232124%2027.1230418,12.7855825%2029.3422693,13.2498171%20Z'%20id='\u8DEF\u5F84'%3e%3c/path%3e%3cpath%20d='M49.4530622,9.91855114%20C47.1879196,7.78613279%2044.9839971,5.58229373%2042.8565997,3.31723692%20C41.3975214,1.76638721%2039.8874263,0.394089276%2037.7141138,0.00127536983%20C27.6995307,0.00127536983%2017.6849477,-0.00382610948%207.67036458,0.00637684913%20C2.72684394,0.0114783284%200.0127541812,2.75607419%200.00765250872,7.74021947%20C-0.00255083624,20.3000615%20-0.00255083624,32.8599036%200.00765250872,45.4197456%20C0.0127541812,50.2304406%202.76255565,52.9852394%207.57853447,52.9903409%20C20.1388521,53.0056453%2032.6991698,53.0005439%2045.2594874,52.9903409%20C50.2591265,52.9852394%2052.9885212,50.2814554%2052.9936229,45.327919%20C53.0038263,35.3137151%2052.9987246,25.2995112%2052.9987246,15.2853074%20C52.4324389,13.0916713%2051.0753941,11.4489949%2049.4530622,9.91855114%20Z%20M17.5625075,9.68898457%20C20.1031404,9.68898457%2022.6437733,9.68898457%2025.1895079,9.68898457%20C28.3270365,9.68898457%2031.4594634,9.66347717%2034.5918903,9.69408605%20C38.474263,9.73489788%2039.7496811,11.0204707%2039.7496811,14.8210727%20C39.7496811,16.3464151%2039.7037661,17.8717574%2039.7598845,19.3970997%20C39.8364096,21.4019811%2038.9334135,22.4834947%2036.9845747,23.0038456%20C35.3928528,23.4323698%2033.8113344,23.4323698%2032.2094092,23.4374713%20C26.6996029,23.4425728%2021.1948983,23.4527757%2015.685092,23.4323698%20C11.2109253,23.4170654%209.72633859,21.9427379%209.69062688,17.5299583%20C9.62940681,10.6072508%2010.5528095,9.68898457%2017.5625075,9.68898457%20Z%20M46.3665504,41.5885347%20C46.325737,44.4759719%2045.2543858,45.5472826%2042.3260257,45.562587%20C36.979473,45.5931959%2031.6380219,45.57279%2026.2914691,45.57279%20C21.1183732,45.57279%2015.9401757,45.5931959%2010.7670798,45.5676885%20C7.71627963,45.5523841%206.6653351,44.4861749%206.63982674,41.4252873%20C6.61431837,38.792924%206.61942005,36.1656622%206.63982674,33.5332988%20C6.6653351,30.3448743%207.87443148,28.8348364%2010.9762483,28.8042275%20C21.3275418,28.7072994%2031.6788353,28.7072994%2042.0301287,28.8042275%20C45.1472506,28.8348364%2046.371652,30.3397728%2046.3767537,33.4465737%20C46.3818554,36.1554592%2046.4073637,38.8745477%2046.3665504,41.5885347%20Z'%20id='\u5F62\u72B6'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", import.meta.url).href, { workSpace: $, robotView: f, renderDiv: A, showPreview: r, codeRunState: t, windowWidthPX: e, windowHeightPX: n, programName: a, changePreviewShow: u, runCode: c, stop: i, stepCode: m, initBlocklyWorkSpace: O, handleSaveProgram: x, listenIosStatusBarFn: F, registerErrorListen: M, removeErrorListen: U } = Si();
  return vn(() => {
    bn("appSendStatusBarShow", F), O(), M();
  }), Tn(() => {
    $ == null ? void 0 : $.clear(), $ == null ? void 0 : $.dispose(), f.dispose(), Rn("appSendStatusBarShow", F), U();
  }), (V, B) => (St(), wt(Nn, null, [W("div", Ii, [Kt(kn, { name: ee(a) }, null, 8, ["name"]), xi, W("div", Ai, [W("div", { class: Ur(["preview-window", ee(r) && "show"]) }, [W("div", { ref_key: "renderDiv", ref: A, class: "preview-cont" }, null, 512), W("div", { class: "preview-switch-btn", onClick: B[0] || (B[0] = (...q) => ee(u) && ee(u)(...q)) })], 2), W("div", ki, [W("div", $i, [W("div", { class: Ur(["opera-item", ee(t), !ee(r) && "real"]) }, [W("img", { src: ee(t) === "run" ? ee(y) : ee(l), style: { width: "17px", height: "19px" }, onClick: B[1] || (B[1] = (...q) => ee(c) && ee(c)(...q)) }, null, 8, Mi), W("span", Li, Ye(ee(t) === "stop" ? ee(r) ? V.$t("Blockly.SimulatorPlay") : V.$t("Blockly.RobotPlay") : V.$t("Blockly.stop")), 1)], 2), Fi, W("div", Di, [W("img", { src: ee(b), style: { width: "21px", height: "17px" }, onClick: B[2] || (B[2] = (...q) => ee(m) && ee(m)(...q)) }, null, 8, Bi), W("span", Ui, Ye(V.$t("Blockly.singleStep")), 1)]), Vi, W("div", ji, [W("img", { src: ee(C), style: { width: "23px", height: "23px" }, onClick: B[3] || (B[3] = (...q) => ee(i) && ee(i)(...q)) }, null, 8, Gi), W("span", Yi, Ye(V.$t("Blockly.finish")), 1)])]), W("div", { class: "opera-2", onClick: B[4] || (B[4] = (...q) => ee(x) && ee(x)(...q)) }, [W("img", { src: ee(S), style: { width: "18px", height: "18px" } }, null, 8, Wi), W("span", Xi, Ye(V.$t("Blockly.save")), 1)])])])]), Hi], 64));
} }), Ki = Zt(zi, [["__scopeId", "data-v-d30cdd6b"]]);
export {
  Ki as default
};
