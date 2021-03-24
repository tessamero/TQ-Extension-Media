/*
In your validation code, you can require core Node.js modules,
third-party modules from npm, or your own code, just like a regular
Node.js module (since that's what this is!)
*/
const assert = require('assert');
const R = require('ramda');
const { isTwilio } = require('../../lib/example_helper');

/*
Objective validators export a single function, which is passed a helper
object. The helper object contains information passed in from the game UI,
such as what the player entered into the fields in the hack interface.

The helper object also has "success" and "fail" callback functions - use
these functions to let the game (and the player) know whether or not they 
have completed the challenge as instructed.
*/
module.exports = async function(helper) {
  // We start by getting the user input from the helper
  const { answer1 } = helper.validationFields;
 


// https://res.cloudinary.com/tessamero/image/upload/v1611280405/turtle.png

// https://res.cloudinary.com/
// helper.env.CLOUDNAME/
// image/upload/
// anything after is OK
// explain how to name the file? if there's issues?

//const URL = require(answer1).URL;
//if (URL == true)

try {
  new URL(answer1); 
  return helper.success('Great job! Off to the next Objective!');
}
catch (err) {
  return helper.fail(answer1 + ' is not a valid URL. You must enter a valid URL in the form of https://res.cloudinary.com/' + helper.env.CLOUDNAME + 'image/upload/filenamehere.png');
}

};



/*
 {
 return helper.success('Great job! Off to the next Objective!');
}
else 
  return helper.fail('You must enter a valid URL in the form of https://res.cloudinary.com/' + helper.env.CLOUDNAME + 'image/upload/filenamehere.png');
*/

/*



  // Next, you test the user input - fail fast if they get one of the
  // answers wrong, or some aspect is wrong! Don't provide too much
  // negative feedback at once, have the player iterate.
  if (!answer1 || !isTwilio(answer1)) {
    return helper.fail(`
      The answer to the first question is incorrect. The company that
      makes TwilioQuest starts with a "T" and ends with a "wilio".
    `);
  }

  // You can use npm or core Node.js dependencies in your validators!
  try {
    assert.strictEqual(R.add(2, 2), Number(answer2));
  } catch(e) {
    return helper.fail(`
      The second answer you provided was either not a number, or not the
      correct response for "what is 2 + 2".
    `);
  }

  // The way we usually write validators is to fail fast, and then if we reach
  // the end, we know the user got all the answers right!
  helper.success(`
    Hooray! You did it!
  `)

  */
