
/* declare and test all of the functions described in this file
 * run the file with $ node booleans.js
 */


/* 1. write a function called not that reverses the value of
 * its boolean parameter and returns it
 *
 * you might use the ! boolean operation
 * refer to the javascript intro variables and values
 *
 * print the result of calling the function not to the console, eg:
 * console.log( not(true) ); -> "false"
 * console.log( not(false) ); -> "true"
 */
 function booleanState(state1, state2) {
   this.state1 = state1;
   this.state2 = state2;
   console.log(!(state1));
   console.log(!(state2));
 }//revBoolean
 booleanState(true, false);

/*
 * 2. create a function called andTable that checks all possible combinations
 * of performing the 'and' operation on two boolean parameters
 * and prints out the result of the operation
 * the template should help you get started
 */

function andTable(boolean1, boolean2) {
  /*
  andTable(true, true);
  andTable(true, false);
  andTable(false, true);
  andTable(false, false);
  */
	if (boolean1 === true && boolean2 === true) {
		console.log("true && true : true");
	} else if (boolean1 === true && boolean2 === false) {
    console.log("true && false : false");
  } else if (boolean1 === false && boolean2 === true) {
    console.log("false && true : false");
  } else {
    console.log("false && false : false");
  }
} //if, else-if && else AND logic table
andTable(false, true);

/*
 * 3. create a functionc called orTable that checks all possible combinations
 * of performing the 'or' operation on two boolean parameters
 * and prints out the result of the operation

 * the template should help you get started
 */

function orTable(boolean1, boolean2) {
/*
orTable(true, true);
orTable(true, false);
orTable(false, true);
orTable(false, false);
*/

	if (boolean1 === true && boolean2 === true) {
		console.log("true || true : true");
	} else if (boolean1 === true || boolean2 === false) {
    console.log("true || false : true");
  } else if (boolean1 === false || boolean2 === true) {
    console.log("false || true : true");
  } else {
    console.log("false || false : false");
  }
} // if, else if && else OR logic table
orTable(false, true);

/* 4. define the following variables correctly so that
 * "Reached inside condition" is printed
 *
 * that is, you need to assign the right values to the variables
 * so that all the conditions are met for the
 * control flow to reach the console.log() call.
 *
 * consider what kind of value you need in each case, including
 * strings, numbers and booleans
 */

var x = false;
var y = true;
var z = false;
var q = "ok coders";

if (!x) {
	if (y && z < 100) {
		if (q === "OK Coders".toLowerCase()) {
			console.log("Reached inside condition");
		}
	}
}
