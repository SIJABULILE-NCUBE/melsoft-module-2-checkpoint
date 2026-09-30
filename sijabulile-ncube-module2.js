/*
 * ============================================================
 *  Melsoft Academy | Module 2 Checkpoint
 *  Author: Sijabulile Ncube (s.mabhena@gmail.com)
 *  How to run: node sijabulile-ncube-module2.js
 * ============================================================
 *
 * How I approached this file:
 * I treated every challenge as if I was sitting across from an interviewer and had to talk through my thinking.
 * So my comments aren't just "this line logs x",they're what I would actually say out loud and why.
 *
 * Where I checked my understanding:
 * The MDN JavaScript reference at developer.mozilla.org/en-US/docs/Web/JavaScript/Reference was my go to.
 * I've put the exact MDN page under each challenge heading so anyone reading (including me later) can look it up.
 *
 * One thing about the layout:
 * Challenges 3 to 9 each live inside their own curly braces { }.I did this on purpose because several challenges
 * use the same variable names (tax,result,quantity) and let/const only exist inside the braces they're declared in.
 * Without the braces I'd get "has already been declared" errors.
 */

/* ------------------------------------------------------------
 * CHALLENGE 1: "Explain var,let and const"
 * MDN let:   developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 * MDN const: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 * MDN var:   developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 * ------------------------------------------------------------ */
console.log(">>> CHALLENGE 1 <<<");

// string | const: my name is fixed for this whole program so there's no reason to allow it to be reassigned.
const myFullName = "Sijabulile Ncube";

// number | let: this has to be able to change,every year on my birthday it goes up by one.
let myAge = 35;

// boolean | let: a yes/no answer that could flip later,so I left it open to change.
let iLikeJavaScript = true;

// number | const: 27.8 still counts as "number",JavaScript doesn't split whole numbers and decimals into different types.
// My ideal beach day temperature is a fixed preference so const makes sense.
const idealBeachTemperature = 27.8;

// number | const: 0 / 0 has no real answer so JavaScript gives back NaN.I only store it once,so const.
const failedMaths = 0 / 0;

// number | const: I used the Infinity keyword directly instead of dividing by zero.It's a fixed value so const.
const endlessNumber = Infinity;

// number | const: 9007199254740991 is the largest whole number JavaScript can hold before it starts losing accuracy.
// It's a built in constant so there's nothing to reassign.
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
const safeIntegerLimit = Number.MAX_SAFE_INTEGER;

// null | let: I haven't picked my favourite framework yet.null means "empty on purpose" and let means I can fill it in later.
let favouriteFramework = null;

console.log(`myFullName            => ${myFullName}`);
console.log(`myAge                 => ${myAge}`);
console.log(`iLikeJavaScript       => ${iLikeJavaScript}`);
console.log(`idealBeachTemperature => ${idealBeachTemperature}`);
console.log(`failedMaths           => ${failedMaths}`);
console.log(`endlessNumber         => ${endlessNumber}`);
console.log(`safeIntegerLimit      => ${safeIntegerLimit}`);
console.log(`favouriteFramework    => ${favouriteFramework}`);

// Showing the interviewer an example instead of just describing it.
// Example 1: hoisting.I can use a var BEFORE the line that declares it and I get undefined instead of an error.
// That's confusing behaviour because the code looks broken but still runs.
console.log("var used before its declaration:", hoistedVar);
var hoistedVar = "I have a value now";

// Example 2: let is also hoisted but it sits in the "temporal dead zone" until its line runs,
// so touching it early throws a ReferenceError.I used try/catch so the error prints and the rest of the file still runs.
try {
  console.log(earlyLet);
} catch (err) {
  console.log("let used before its declaration:", err.name + ": " + err.message);
}
let earlyLet = "I only exist from this line down";

// Example 3: var lets me declare the same name twice with no warning,which makes it easy to overwrite something by accident.
var petName = "Rex";
var petName = "Bella";
console.log("var declared twice,final value:", petName);

/*
 * What I'd say in the interview:
 *
 * 1.The biggest difference between var and let is where they live.
 *    let belongs to the block it was written in (anything between { }),var belongs to the whole function.
 *    On top of that var can be used before it's declared (you just get undefined) and it can be declared twice,
 *    both of which let refuses to do.So let catches mistakes early,var quietly lets them through.
 *
 * 2.Starting with const is like making a promise to whoever reads my code: "this won't be reassigned".
 *    It also means JavaScript will stop me with an error if I accidentally try.
 *    I only swap to let when I genuinely need the value to change,like a counter,a running total or a value
 *    that starts as null and gets filled in later.That way when I see let I know to keep an eye on it.
 *
 * 3.usrNm forces the reader to guess.User name? User number? Username for login or the person's actual name?
 *    I'd rename it to something that says exactly what it holds,like userName or accountHolderName.
 *    Code gets read far more often than it gets written,usually by other people on the team,
 *    so a clear name saves time on every single read and prevents someone using the variable for the wrong thing.
 */

/* ------------------------------------------------------------
 * CHALLENGE 2: "Explain typeof and its surprises"
 * MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * ------------------------------------------------------------ */
console.log("\n>>> CHALLENGE 2 <<<");

// My Challenge 1 variables first.
console.log(`typeof myFullName            => ${typeof myFullName}`);
console.log(`typeof myAge                 => ${typeof myAge}`);
console.log(`typeof iLikeJavaScript       => ${typeof iLikeJavaScript}`);
console.log(`typeof idealBeachTemperature => ${typeof idealBeachTemperature}`);
console.log(`typeof failedMaths           => ${typeof failedMaths}`);
console.log(`typeof endlessNumber         => ${typeof endlessNumber}`);
console.log(`typeof safeIntegerLimit      => ${typeof safeIntegerLimit}`);
console.log(`typeof favouriteFramework    => ${typeof favouriteFramework}`);

// Then the list from the interviewer.
console.log(`typeof undefined             => ${typeof undefined}`);
console.log(`typeof null                  => ${typeof null}`);
console.log(`typeof NaN                   => ${typeof NaN}`);
console.log(`typeof "42"                  => ${typeof "42"}`);
console.log(`typeof (typeof 42)           => ${typeof (typeof 42)}`);
console.log(`typeof [1,2,3]               => ${typeof [1,2,3]}`);
console.log(`typeof function() {}         => ${typeof function () {}}`);

/*
 * The ones I didn't expect:
 *
 * typeof favouriteFramework / typeof null => "object"
 * I assumed I'd see "null".null is a primitive,not an object,so this is just a known quirk.
 * Takeaway: if I want to know whether something is null I write value === null.
 *
 * typeof failedMaths / typeof NaN => "number"
 * The name literally says "not a number" so this felt backwards at first.
 * NaN is actually a special value that lives inside the number type and stands for "this calculation broke".
 * Takeaway: to detect it I use Number.isNaN(value),typeof can't tell it apart from a normal number.
 *
 * typeof [1,2,3] => "object"
 * I thought arrays would get their own label.They don't,arrays are objects under the hood.
 * Takeaway: Array.isArray(value) is the proper check.
 * MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 *
 * typeof (typeof 42) => "string"
 * I had to read this twice.The inner part runs first and gives back the word "number".
 * A word is text,so the outer typeof says "string".typeof ALWAYS hands back a string.
 */

/*
 * Interviewer: "Why is typeof NaN number and typeof null object? Bugs or intentional?"
 *
 * My answer is: one of each.
 * NaN being a number is by design.JavaScript numbers follow a standard called IEEE 754 and that standard includes NaN
 * as an official numeric value for results that can't be worked out,like 0 / 0 or Math.sqrt(-1).
 * So from the language's point of view NaN is a number,just an invalid one.
 *
 * null being an object is a mistake from the first version of JavaScript in 1995.
 * Internally values carried a little type tag and objects had the tag 0.null was stored as all zeros,
 * so typeof read the zero and reported "object".There was a proposal to fix it but it was turned down because
 * too many existing websites relied on the old answer and would have broken.
 * So it's a bug that has been kept on purpose for backwards compatibility.
 * MDN explains it here: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null
 */

/* ------------------------------------------------------------
 * CHALLENGE 3: "Convert this string to a number,five different ways"
 * MDN Number():   developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
 * MDN parseInt:   developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 * MDN parseFloat: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
 * MDN Boolean():  developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
 * ------------------------------------------------------------ */
{
  console.log("\n>>> CHALLENGE 3 <<<");

  // The eight starting values,copied exactly.
  let a = "123";
  let b = "3.14";
  let c = "hello";
  let d = "42abc";
  let e = "";
  let f = 0;
  let g = null;
  let h = undefined;

  // I grouped the output by CONVERSION METHOD rather than by value.
  // That way all eight results for Number() sit together and I can compare them at a glance,same for parseInt etc.
  // The two arrays line up: startingValues[0] is a and valueLabels[0] is its label.
  const startingValues = [a, b, c, d, e, f, g, h];
  const valueLabels = ['a = "123"', 'b = "3.14"', 'c = "hello"', 'd = "42abc"', 'e = ""', "f = 0", "g = null", "h = undefined"];

  // Strings get wrapped in quotes when printed so I can tell "0" (text) apart from 0 (number)
  // and so an empty string actually shows up as "" instead of a blank space.
  function display(value) {
    return typeof value === "string" ? `"${value}"` : String(value);
  }

  // One small function that prints a whole section.I pass in the name for the heading and the conversion to run.
  function runConversion(heading, convert) {
    console.log(`\n### ${heading} ###`);
    for (let i = 0; i < startingValues.length; i++) {
      const converted = convert(startingValues[i]);
      // padEnd just lines the arrows up in the console so it's easier to read.
      console.log(`${valueLabels[i].padEnd(15)} => ${display(converted).padEnd(12)} typeof: ${typeof converted}`);
    }
  }

  runConversion("Number(x)", (x) => Number(x));
  runConversion("parseInt(x)", (x) => parseInt(x));
  runConversion("parseFloat(x)", (x) => parseFloat(x));
  runConversion("Boolean(x)", (x) => Boolean(x));
  runConversion("String(x)", (x) => String(x));

  /*
   * Follow up questions:
   *
   * 1.Number("42abc") vs parseInt("42abc")
   *    Number("42abc") gives NaN.Number() is all or nothing,one bad character anywhere and the whole thing fails.
   *    parseInt("42abc") gives 42.parseInt() starts at the left,collects digits,and simply stops when it hits "a".
   *    It doesn't complain about the leftovers.That's handy for something like "12px" but dangerous for user input,
   *    because a typo like "42abc" gets accepted as if it were a clean 42.
   *
   * 2.When I'd use parseFloat instead of parseInt
   *    Any time the part after the decimal point matters: money ("R149.95"),interest rates ("11.75"),distances,weights.
   *    parseInt throws away everything after the dot,so parseInt("3.14") is 3 as my output shows.
   *    Coming from credit,cutting 11.75% down to 11% on a loan calculation would be a very expensive mistake.
   *
   * 3.Number("") returns 0
   *    An empty string becomes 0,not NaN.So if a user leaves a field blank,the code gets a perfectly normal looking 0
   *    and carries on without any warning.Number.isNaN() won't catch it because 0 is a valid number.
   *    Look at my output: Number(null) is also 0,while parseInt and parseFloat give NaN for both.
   *    Three tools,different answers for the same input,which is exactly why I check for empty input BEFORE converting.
   */
}

/* ------------------------------------------------------------
 * CHALLENGE 4: "What does this print? And why?"
 * MDN type coercion: developer.mozilla.org/en-US/docs/Glossary/Type_coercion
 * MDN addition (+):  developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
 * ------------------------------------------------------------ */
{
  console.log("\n>>> CHALLENGE 4 <<<");

  // My rule of thumb going in: + joins text if EITHER side is a string.-,* and / always try to do maths.

  // 1) "5" + 3
  // Predict: "53" | string | there's a string on the left so + joins instead of adding.3 becomes "3".
  console.log(`1)  "5" + 3          => ${JSON.stringify("5" + 3)} (${typeof ("5" + 3)})`);
  // Right.

  // 2) "5" - 3
  // Predict: 2 | number | minus has no text version,so "5" is turned into the number 5 first.
  console.log(`2)  "5" - 3          => ${"5" - 3} (${typeof ("5" - 3)})`);
  // Right.

  // 3) "5" * "2"
  // Predict: 10 | number | * is maths only,so both strings are changed into numbers.5 x 2.
  console.log(`3)  "5" * "2"        => ${"5" * "2"} (${typeof ("5" * "2")})`);
  // Right.

  // 4) true + 1
  // Predict: 2 | number | no string anywhere so + adds.true counts as 1.
  console.log(`4)  true + 1         => ${true + 1} (${typeof (true + 1)})`);
  // Right.

  // 5) true + "1"
  // Predict: "true1" | string | "1" is a string,so true gets turned into the word "true" and the two are joined.
  console.log(`5)  true + "1"       => ${JSON.stringify(true + "1")} (${typeof (true + "1")})`);
  // Right.

  // 6) false + null
  // Predict: NaN | number | false is 0,but I don't think null can be turned into a number,so the sum breaks.
  console.log(`6)  false + null     => ${false + null} (${typeof (false + null)})`);
  // Wrong on the value.It's 0,not NaN.
  // null DOES convert to a number,and it becomes 0 (my Challenge 3 output shows Number(null) is 0).
  // So this is 0 + 0 = 0.What I was mixing up is undefined,which is the one that becomes NaN (see number 7).

  // 7) null + undefined
  // Predict: NaN | number | now I know null is 0,but undefined turns into NaN,and anything plus NaN is NaN.
  console.log(`7)  null + undefined => ${null + undefined} (${typeof (null + undefined)})`);
  // Right.

  // 8) 1 / 0
  // Predict: Infinity | number | JavaScript numbers follow IEEE 754,dividing a positive number by 0 gives Infinity,not a crash.
  console.log(`8)  1 / 0            => ${1 / 0} (${typeof (1 / 0)})`);
  // Right.

  // 9) 0 / 0
  // Predict: NaN | number | zero divided by zero has no answer,so NaN.Still the number type.
  console.log(`9)  0 / 0            => ${0 / 0} (${typeof (0 / 0)})`);
  // Right.

  // 10) "abc" - 1
  // Predict: NaN | number | minus forces "abc" into a number,that fails and gives NaN,and NaN - 1 is still NaN.
  console.log(`10) "abc" - 1        => ${"abc" - 1} (${typeof ("abc" - 1)})`);
  // Right.

  // 11) [] + []
  // Predict: 0 | number | two empty arrays,nothing in them,so I'm guessing JavaScript treats them as 0 + 0.
  console.log(`11) [] + []          => ${JSON.stringify([] + [])} (${typeof ([] + [])})`);
  // Wrong on both.The result is "" (an empty string) and the type is string.
  // Arrays aren't primitives,so before + can do anything it converts each array to a primitive,and for arrays that
  // means turning them into a string with toString().An empty array becomes "".Then "" + "" is just "".
  // I printed it with JSON.stringify so the quotes show,otherwise the console shows nothing at all.

  // 12) [1] + [2]
  // Predict: "12" | string | using what I just learnt in 11: [1] becomes "1",[2] becomes "2",and + joins the strings.
  console.log(`12) [1] + [2]        => ${JSON.stringify([1] + [2])} (${typeof ([1] + [2])})`);
  // Right.Number 11 taught me this one.
}

/* ------------------------------------------------------------
 * CHALLENGE 5: "Do a code review of this junior developer's code"
 * MDN truthy values: developer.mozilla.org/en-US/docs/Glossary/Truthy
 * MDN semicolons (ASI): developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion
 * ------------------------------------------------------------ */
{
  console.log("\n>>> CHALLENGE 5 <<<");
  console.log("[before the review]");

  // Declares userName with var and stores the text "Sarah".Nothing below ever reads it.
  var userName = "Sarah"
  // Declares userAge and stores "25" as TEXT.The quotes make it a string,not a number.
  var userAge = "25"
  // Declares userScore and stores the number 85.5.
  var userScore = 85.5
  // Declares scoreAdjustment and stores "10" as TEXT.
  var scoreAdjustment = "10"
  // 85.5 + "10": one side is a string so + glues them together.newScore ends up as the string "85.510".
  var newScore = userScore + scoreAdjustment
  // Prints New score: 85.510 when the developer clearly expected 95.5.
  console.log("New score: " + newScore)
  // Declares salary and stores "50000" as TEXT.
  var salary = "50000"
  // Declares TAX_RATE as 0.15.Capital letters say "constant" but var means anyone can reassign it.
  var TAX_RATE = 0.15
  // * can only multiply numbers,so JavaScript quietly turns "50000" into 50000.tax becomes 7500.
  var tax = salary * TAX_RATE
  // Prints Tax: R7500 (no cents shown).
  console.log("Tax: R" + tax)
  // Minus quietly turns "25" into 25,so this works out to 40.Correct answer,but only because of the operator used.
  var yearsUntilRetirement = 65 - userAge
  // Prints Years until retirement: 40.
  console.log("Years until retirement: " + yearsUntilRetirement)
  // "25" + 85.5: string on the left,so + glues again.The result is the string "2585.5".
  var totalAgeAndScore = userAge + userScore
  // Prints 2585.5 on its own with no label.
  console.log(totalAgeAndScore)
  // Declares isAdmin and stores "false" as TEXT,not the boolean false.
  var isAdmin = "false"
  // Boolean() on any string that isn't empty gives true."false" is not empty,so this prints Admin: true.
  console.log("Admin: " + Boolean(isAdmin))

  /*
   * MY REVIEW NOTES (numbered):
   *
   * #1 Security bug: isAdmin is the string "false".
   *    Every non empty string is truthy,so Boolean("false") is true and a normal user gets reported as an admin.
   *    I'm putting this first because it's the one that could actually hurt someone.It should be a real boolean.
   *
   * #2 scoreAdjustment is text,so the new score is glued together into "85.510" instead of added to 95.5.
   *    The user would see a score that makes no sense.
   *
   * #3 userAge is text,so userAge + userScore glues into "2585.5" instead of adding to 110.5.
   *    Also,adding an age to a score isn't a meaningful number.I'd want to ask what this was meant to show.
   *
   * #4 userAge is stored as a string in the first place.An age is a number and should be stored as one,
   *    otherwise every calculation depends on which operator happens to be used.
   *
   * #5 salary is stored as a string.salary * TAX_RATE works only because * converts behind the scenes.
   *    If someone later writes salary + bonus it will glue the text and nobody gets an error.
   *
   * #6 65 - userAge relies on hidden conversion too.It gives 40 today,which means tests pass and the real problem
   *    (issue #4) stays hidden.
   *
   * #7 var is used everywhere.var ignores block scope (these lines leak straight out of the { } I wrapped this
   *    challenge in),can be declared twice and can be used before it's declared.const should be the default.
   *
   * #8 TAX_RATE looks like a constant but isn't protected.With var it can be reassigned anywhere in the file,
   *    and every tax calculation after that would be wrong.
   *
   * #9 No semicolons.The code relies on JavaScript inserting them automatically,which usually works but can
   *    break in edge cases (for example when the next line starts with a bracket).
   *
   * #10 console.log(totalAgeAndScore) prints a bare number.Anyone reading logs has no idea what 2585.5 means.
   *
   * #11 userName is never used.Unused variables are clutter and make the next developer wonder what they missed.
   *
   * #12 Money isn't formatted and strings are built with +."R7500" should read "R7500.00",
   *     and template literals are easier to read and don't invite accidental gluing.
   */

  // CORRECTED VERSION
  // I put the fix inside a function.Functions get their own scope,so my const names can match the originals
  // without JavaScript complaining that userName etc."has already been declared" by the var lines above.
  function correctedVersion() {
    console.log("[after the review]");

    // Now actually used in the first log line.
    const userName = "Sarah";
    // Real numbers,no quotes.
    const userAge = 25;
    const userScore = 85.5;

    // If this came from a form it would be text,so I convert it myself instead of hoping + does the right thing.
    const scoreAdjustment = Number("10");
    const newScore = userScore + scoreAdjustment;
    console.log(`${userName}'s new score: ${newScore}`);

    // const actually protects TAX_RATE now.
    const salary = 50000;
    const TAX_RATE = 0.15;
    const tax = salary * TAX_RATE;
    console.log(`Tax: R${tax.toFixed(2)}`);

    // Named the 65 so nobody has to guess what it means.
    const RETIREMENT_AGE = 65;
    const yearsUntilRetirement = RETIREMENT_AGE - userAge;
    console.log(`Years until retirement: ${yearsUntilRetirement}`);

    // Real addition now plus a label.(Flagged in #3 that this calculation may not be needed at all.)
    const totalAgeAndScore = userAge + userScore;
    console.log(`Age plus score: ${totalAgeAndScore}`);

    // A real boolean.If the value arrived as text I'd compare it directly: adminText === "true".
    const isAdmin = false;
    console.log(`Admin: ${isAdmin}`);
  }
  correctedVersion();

  /*
   * Handing the review back:
   *
   * Good start,the logic is readable and it runs.The main theme of my changes is types.
   * Most of the wrong output came from numbers stored in quotes,so I stored them as real numbers and where a value
   * might come in as text I converted it with Number() myself.Please look at the isAdmin fix first,
   * Boolean("false") is true,so every user was showing as an admin,and that's a security problem.
   * I also swapped var for const,added semicolons,used template literals,formatted the tax with two decimals,
   * labelled the bare log,named the retirement age,and used userName so it isn't dead code.
   * Rule to take away: decide the type yourself,don't leave it to JavaScript to guess.
   */
}

/* ------------------------------------------------------------
 * CHALLENGE 6: "Why does 0.1 + 0.2 not equal 0.3?"
 * MDN Number.EPSILON: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON
 * ------------------------------------------------------------ */
{
  console.log("\n>>> CHALLENGE 6 <<<");

  console.log(`0.1 + 0.2         => ${0.1 + 0.2}`);
  console.log(`0.3 - 0.1         => ${0.3 - 0.1}`);
  console.log(`0.1 * 3           => ${0.1 * 3}`);
  console.log(`0.1 + 0.2 === 0.3 => ${0.1 + 0.2 === 0.3}`);

  /*
   * Why it happens:
   * Under the hood every number is stored in binary using the IEEE 754 "double" format.
   * In binary,a lot of simple looking decimals go on forever.0.1 in binary is 0.0001100110011...and never ends,
   * the same way 2/3 in decimal is 0.6666...forever.The computer only has 64 bits,so it has to cut it off and round.
   * That means 0.1 and 0.2 are each stored as something extremely close to (but not exactly) 0.1 and 0.2.
   * Add them and the tiny rounding errors show up: 0.30000000000000004.
   * This isn't unique to JavaScript.Python,Java,C# and Excel all use the same standard and do the same thing.
   * The real issue is === demands a perfect match,and after rounding the two values are not a perfect match.
   */

  // Safe comparison: don't ask "are they identical?",ask "is the gap between them too small to matter?"
  // Math.abs removes the minus sign so it doesn't matter which number is bigger.
  function areCloseEnough(first, second) {
    return Math.abs(first - second) < Number.EPSILON;
  }
  console.log(`areCloseEnough(0.1 + 0.2,0.3) => ${areCloseEnough(0.1 + 0.2,0.3)}`);
  console.log(`Number.EPSILON                 => ${Number.EPSILON}`);

  /*
   * What Number.EPSILON is:
   * It's the difference between 1 and the very next number JavaScript is able to store,about 0.00000000000000022.
   * Basically the smallest "step" size near 1.The error in 0.1 + 0.2 is smaller than one of those steps,
   * so if the gap is below EPSILON I can safely treat the two numbers as the same.
   * It's a tolerance,like saying "close enough counts".
   * Small caveat from MDN: this works for numbers near 1.For big values the steps between numbers get bigger,
   * so you'd need to scale the tolerance.
   */

  // Why banks and payment systems work in cents:
  // Rands with decimals pick up rounding errors,whole cents don't,because whole numbers are stored exactly.
  const rands = 1.1 + 2.2;
  const cents = 110 + 220;
  console.log(`R1.10 + R2.20 in Rands => ${rands}`);
  console.log(`110c + 220c in cents   => ${cents} (R${(cents / 100).toFixed(2)})`);
}

/* ------------------------------------------------------------
 * CHALLENGE 7: "Refactor this code"
 * MDN template literals: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 * ------------------------------------------------------------ */
{
  console.log("\n>>> CHALLENGE 7 <<<");

  // THE ORIGINAL,with my notes on what's wrong:

  // Problem: var instead of const.Problem: "p" says nothing (price?).Problem: it's a string,not a number.
  var p = "199.99"
  // Problem: "q" is another single letter guess (quantity?) and it's also a string.
  var q = "3"
  // Problem: "t" gives no clue that it's a tax rate.
  var t = 0.15
  // Problem: p * q only works because * converts the strings behind the scenes.No explicit conversion.
  // Problem: "sub" is short for subtotal.Why make the reader expand it in their head?
  var sub = p * q
  // Works,but only because sub is already a number by this point.
  var tax = sub * t
  // Problem: "tot" is another abbreviation,and the value is never rounded to cents.
  var tot = sub + tax
  // Problem: "r" is a meaningless name.Problem: + concatenation,no "R" for Rands,no two decimal formatting.
  var r = "Total: " + tot
  // Problem: no semicolons on any line.
  console.log(r)

  // MY REFACTOR:

  // Inputs kept as strings on purpose,because in production these would come from a form or an API.
  // Each name says exactly what it is.WHY: anyone can read the calculation without scrolling back up.
  const unitPriceText = "199.99";
  const quantityText = "3";

  // UPPER_CASE + const.WHY: signals a fixed business rule and JavaScript won't let it be reassigned.
  const VAT_RATE = 0.15;

  // Explicit conversion.WHY: the maths below no longer depends on which operator happens to coerce the value.
  // parseFloat for the price because cents matter.parseInt for the quantity because you can't buy half an item.
  // I pass 10 as the second argument to parseInt so it always reads the text as a normal base 10 number.
  const unitPrice = parseFloat(unitPriceText);
  const quantity = parseInt(quantityText, 10);

  // const for every result.WHY: none of these are reassigned,and const makes that clear.
  const subtotal = unitPrice * quantity;
  const vatAmount = subtotal * VAT_RATE;
  const grandTotal = subtotal + vatAmount;

  // Template literal and toFixed(2).WHY: reads like the final sentence,no gluing bugs,and money shows as R689.97.
  const totalMessage = `Total: R${grandTotal.toFixed(2)}`;
  console.log(totalMessage);

  // Honest trade off I'd mention in the interview: parseFloat("199.99abc") would still give 199.99.
  // For real user input I'd add validation (like I do in Challenge 8) so bad text gets rejected instead of trimmed.
}

/* ------------------------------------------------------------
 * CHALLENGE 8: "Whiteboard challenge: build a receipt generator"
 * MDN toFixed:          developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 * MDN Number.isNaN:     developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
 * MDN Number.isInteger: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * ------------------------------------------------------------ */
{
  console.log("\n>>> CHALLENGE 8 <<<");

  /*
   * VARIABLES USED
   * productName   (string)  the item on the receipt
   * unitPrice     (number)  price for one item,in Rands
   * quantityInput (string)  how many,as text,the way a form field would send it
   * taxRate       (number)  15% VAT written as 0.15
   * quantity      (number)  quantityInput after converting it
   * subtotal      (number)  unitPrice times quantity
   * tax           (number)  subtotal times taxRate
   * total         (number)  subtotal plus tax
   */

  const productName = "Desk Lamp";
  const unitPrice = 385.5;
  const quantityInput = "4";
  const taxRate = 0.15;

  // Number() is strict,"4" works but something like "4x" becomes NaN,which is what I want so bad input can't sneak in.
  const quantity = Number(quantityInput);

  // Every value going into these lines is a number I've checked the type of,so no surprises from +.
  const subtotal = unitPrice * quantity;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  // One template literal with \n line breaks.toFixed(2) on every Rand amount.
  console.log(
    `\n*** RECEIPT ***\nItem:      ${productName}\nUnit:      R${unitPrice.toFixed(2)}\nQty:       ${quantity}\nSubtotal:  R${subtotal.toFixed(2)}\nVAT 15%:   R${tax.toFixed(2)}\nTOTAL:     R${total.toFixed(2)}\n***************`
  );

  // EDGE CASE: what if the form sends something that isn't a number?
  const dodgyQuantityInput = "abc";
  const dodgyQuantity = Number(dodgyQuantityInput);
  console.log(`\nNumber("abc") => ${dodgyQuantity}`);
  console.log(`Subtotal without checking => R${(unitPrice * dodgyQuantity).toFixed(2)}`);

  // A quantity must be a whole number bigger than zero,so I check that before calculating.
  // Number.isInteger(NaN) is false,so this one check also catches "abc".
  const isValidQuantity = Number.isInteger(dodgyQuantity) && dodgyQuantity > 0;
  if (isValidQuantity) {
    console.log("Quantity OK,carry on with the receipt.");
  } else {
    console.log(`Rejected "${dodgyQuantityInput}": quantity must be a whole number above 0`);
  }

  /*
   * What happened:
   * Number("abc") didn't throw an error,it just returned NaN and the program kept running.
   * Any maths that touches NaN becomes NaN too,so the customer would get a receipt saying "RNaN".
   * JavaScript won't protect me here,it's my job as the developer.
   *
   * How a real app should handle it:
   * Check the value right after converting it (Number.isInteger already returns false for NaN,decimals and text)
   * and if it fails,stop and tell the user what's wrong instead of calculating anything.
   * On the front end I'd also use <input type="number" min="1" step="1"> so most mistakes never get typed,
   * but I'd still validate on the server because anything on the front end can be bypassed.
   */
}

/* ------------------------------------------------------------
 * CHALLENGE 9: "Predict the output before it runs"
 * ------------------------------------------------------------ */
{
  console.log("\n>>> CHALLENGE 9 <<<");

  /*
   * My predictions (before running anything):
   * typeof result  => number
   * result         => 2
   * typeof result2 => number
   * result2        => 2      (I'm thinking the "a" gets ignored and it uses the 10)
   * result2 + 1    => 3
   * result3        => 1055
   * result4        => 1010
   */

  // Text "10".
  let mystery = "10";
  // Number 5.
  let count = 5;
  // Division only works on numbers so "10" becomes 10.10 / 5 = 2.
  let result = mystery / count;
  // "number": division always gives back a number.
  console.log(typeof result);
  // 2.
  console.log(result);

  // Text "10a".That trailing "a" is going to matter.
  let mystery2 = "10a";
  // Number 5.
  let count2 = 5;
  // Division converts "10a" the strict way (like Number()),not the forgiving way (like parseInt)."10a" becomes NaN.
  let result2 = mystery2 / count2;
  // "number": NaN still belongs to the number type.
  console.log(typeof result2);
  // NaN.
  console.log(result2);
  // NaN + 1 is NaN.Once NaN gets into a calculation,it spreads to everything after it.
  console.log(result2 + 1);

  // Text "10".
  let mystery3 = "10";
  // Read left to right: "10" + 5 has a string so it joins into "105",then "105" + 5 joins into "1055".
  let result3 = mystery3 + 5 + 5;
  // Read left to right: 5 + 5 are both numbers so that's 10,then 10 + "10" has a string so it joins into "1010".
  let result4 = 5 + 5 + mystery3;
  // 1055.
  console.log(result3);
  // 1010.
  console.log(result4);

  /*
   * Where I went wrong:
   * I got result2 and result2 + 1 wrong.I predicted 2 and 3 because I was thinking the way parseInt works,
   * grab the 10 and ignore the "a".But the / operator converts using the same strict rules as Number(),
   * and Number("10a") is NaN.So result2 is NaN and NaN + 1 is also NaN.
   * The rest I got right.result3 vs result4 is a nice example of why ORDER matters with +:
   * it works left to right,and the moment a string appears everything after it is joined as text.
   */
}

/* ------------------------------------------------------------
 * CHALLENGE 10: "Talk me through what you learnt"
 * ------------------------------------------------------------ */

/*
 * 1.Most important thing about JavaScript's type system
 *    JavaScript would rather give me a wrong answer than an error.When types don't match it converts them silently
 *    and keeps going,so problems show up as "85.510",NaN or "Admin: true" instead of a crash.
 *    That changed how I write code: I now decide the type myself instead of trusting the language to guess.
 *
 * 2.typeof vs Number.isNaN
 *    typeof answers "what kind of value is this?" and gives me a word like "string" or "number".
 *    Number.isNaN answers one very specific question: "is this the NaN value?".I need both because typeof NaN is "number",
 *    so typeof on its own would happily wave a failed conversion through.
 *    I'd use typeof to check what arrived from an API before working with it,and Number.isNaN straight after
 *    converting form input to confirm the conversion actually worked.
 *
 * 3.A slow burning production bug
 *    Picture a loan system where the monthly instalment is read from a CSV file,so every value comes in as text.
 *    A developer adds a once off admin fee with instalment + fee and never converts."2500" + 150 becomes "2500150".
 *    If that string gets saved and later multiplied or divided somewhere else,it gets converted back into a huge number,
 *    and nobody spots it until a customer complains or month end reconciliation doesn't balance.
 *    In my years in credit I've seen how long a small data issue can sit unnoticed in a book of accounts.
 *
 * 4.Implicit vs explicit coercion
 *    Implicit coercion is JavaScript changing the type for me because of the operator I used,without me asking.
 *    From my work: in Challenge 9,mystery / count turned the string "10" into the number 10 on its own.
 *    Explicit coercion is me converting on purpose so there's no doubt what type I'm working with.
 *    From my work: parseInt(quantityText,10) in my Challenge 7 refactor.
 *
 * 5.The one concept I'd stress to a beginner
 *    I'd pick the difference between null and undefined when they get converted.They both "feel" empty,
 *    but Number(null) is 0 and Number(undefined) is NaN.I got caught by exactly this in Challenge 4 number 6.
 *    It matters because data from forms,databases and APIs is full of missing values,
 *    and whether "missing" turns into 0 or NaN completely changes what your calculations do next.
 */

/* ------------------------------------------------------------
 * CONSOLE OUTPUT
 * Copied straight from my terminal after running: node sijabulile-ncube-module2.js
 * ------------------------------------------------------------ */
/*
>>> CHALLENGE 1 <<<
myFullName            => Sijabulile Ncube
myAge                 => 35
iLikeJavaScript       => true
idealBeachTemperature => 27.8
failedMaths           => NaN
endlessNumber         => Infinity
safeIntegerLimit      => 9007199254740991
favouriteFramework    => null
var used before its declaration: undefined
let used before its declaration: ReferenceError: Cannot access 'earlyLet' before initialization
var declared twice,final value: Bella

>>> CHALLENGE 2 <<<
typeof myFullName            => string
typeof myAge                 => number
typeof iLikeJavaScript       => boolean
typeof idealBeachTemperature => number
typeof failedMaths           => number
typeof endlessNumber         => number
typeof safeIntegerLimit      => number
typeof favouriteFramework    => object
typeof undefined             => undefined
typeof null                  => object
typeof NaN                   => number
typeof "42"                  => string
typeof (typeof 42)           => string
typeof [1,2,3]               => object
typeof function() {}         => function

>>> CHALLENGE 3 <<<

### Number(x) ###
a = "123"       => 123          typeof: number
b = "3.14"      => 3.14         typeof: number
c = "hello"     => NaN          typeof: number
d = "42abc"     => NaN          typeof: number
e = ""          => 0            typeof: number
f = 0           => 0            typeof: number
g = null        => 0            typeof: number
h = undefined   => NaN          typeof: number

### parseInt(x) ###
a = "123"       => 123          typeof: number
b = "3.14"      => 3            typeof: number
c = "hello"     => NaN          typeof: number
d = "42abc"     => 42           typeof: number
e = ""          => NaN          typeof: number
f = 0           => 0            typeof: number
g = null        => NaN          typeof: number
h = undefined   => NaN          typeof: number

### parseFloat(x) ###
a = "123"       => 123          typeof: number
b = "3.14"      => 3.14         typeof: number
c = "hello"     => NaN          typeof: number
d = "42abc"     => 42           typeof: number
e = ""          => NaN          typeof: number
f = 0           => 0            typeof: number
g = null        => NaN          typeof: number
h = undefined   => NaN          typeof: number

### Boolean(x) ###
a = "123"       => true         typeof: boolean
b = "3.14"      => true         typeof: boolean
c = "hello"     => true         typeof: boolean
d = "42abc"     => true         typeof: boolean
e = ""          => false        typeof: boolean
f = 0           => false        typeof: boolean
g = null        => false        typeof: boolean
h = undefined   => false        typeof: boolean

### String(x) ###
a = "123"       => "123"        typeof: string
b = "3.14"      => "3.14"       typeof: string
c = "hello"     => "hello"      typeof: string
d = "42abc"     => "42abc"      typeof: string
e = ""          => ""           typeof: string
f = 0           => "0"          typeof: string
g = null        => "null"       typeof: string
h = undefined   => "undefined"  typeof: string

>>> CHALLENGE 4 <<<
1)  "5" + 3          => "53" (string)
2)  "5" - 3          => 2 (number)
3)  "5" * "2"        => 10 (number)
4)  true + 1         => 2 (number)
5)  true + "1"       => "true1" (string)
6)  false + null     => 0 (number)
7)  null + undefined => NaN (number)
8)  1 / 0            => Infinity (number)
9)  0 / 0            => NaN (number)
10) "abc" - 1        => NaN (number)
11) [] + []          => "" (string)
12) [1] + [2]        => "12" (string)

>>> CHALLENGE 5 <<<
[before the review]
New score: 85.510
Tax: R7500
Years until retirement: 40
2585.5
Admin: true
[after the review]
Sarah's new score: 95.5
Tax: R7500.00
Years until retirement: 40
Age plus score: 110.5
Admin: false

>>> CHALLENGE 6 <<<
0.1 + 0.2         => 0.30000000000000004
0.3 - 0.1         => 0.19999999999999998
0.1 * 3           => 0.30000000000000004
0.1 + 0.2 === 0.3 => false
areCloseEnough(0.1 + 0.2,0.3) => true
Number.EPSILON                 => 2.220446049250313e-16
R1.10 + R2.20 in Rands => 3.3000000000000003
110c + 220c in cents   => 330 (R3.30)

>>> CHALLENGE 7 <<<
Total: 689.9655
Total: R689.97

>>> CHALLENGE 8 <<<

*** RECEIPT ***
Item:      Desk Lamp
Unit:      R385.50
Qty:       4
Subtotal:  R1542.00
VAT 15%:   R231.30
TOTAL:     R1773.30
***************

Number("abc") => NaN
Subtotal without checking => RNaN
Rejected "abc": quantity must be a whole number above 0

>>> CHALLENGE 9 <<<
number
2
number
NaN
NaN
1055
1010
*/
