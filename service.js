'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
 function testCall(number){

  return "Mahesh "+number;
 }
module.exports = function(number, locale) {
    console.log(testCall(number));
    return number.toLocaleString(locale);
};