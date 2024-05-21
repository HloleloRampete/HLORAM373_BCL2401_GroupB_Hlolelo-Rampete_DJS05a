// Creating the shape of the store
/**
 *  @typeof {object} Item
 *  @prop {number} value
 */

/**
 *  @typeof {object} State
 *  @prop {Item} wind
 *  @prop {Item} temperature 
 *  @prop {Item} humidity
 */

/** 
* @callback Action
* @param {State}
* @returns {State}
*/

/** 
* @callback Update
* @param {Action}
*/

/**
 * @callback Subscribe
 */

/** 
* @typeof {object} store
* @prop {Update} update
* @prop {Subscribe} subscribe
*/