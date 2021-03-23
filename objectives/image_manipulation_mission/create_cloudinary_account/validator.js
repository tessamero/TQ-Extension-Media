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
  const { answer1, answer2 } = helper.validationFields;

  if (answer1 == 'yes' && answer2 != '')  {
    return helper.success('You found the link and you found your cloud name! Great job! We have generated an environment variable that is your cloudname called, ' + 
    answer2 + 'Wonderful! ', [{name:'CLOUDNAME', value: answer2 }] );
  }

  // if anything else is inputed then error message
  else {
    return helper.fail('Darn. You can always click on the Help button for more instructions. We\'re here for you!');
  }

}


// to easily access answer2 since it's now a cloudname, use helper.env.CLOUDNAME for the variable, as it's now an environment variable!





/*
 *
 *
 * /

  // Next, you test the user input - fail fast if they get one of the
  // answers wrong, or some aspect is wrong! Don't provide too much
  // negative feedback at once, have the player iterate.
 /* if (!answer1 || !isTwilio(answer1)) {
    return helper.fail(`
      The answer to the first question is incorrect. The company that
      makes TwilioQuest starts with a "T" and ends with a "wilio".
    `);
  }
*/
  // You can use npm or core Node.js dependencies in your validators!
 /* try {
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
};
*/