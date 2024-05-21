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

const initial = {
    wind: {
        value: 1,
    },
    temperature: {
        value: 1,
    },
    humidity: {
        value: 1,
    }
};


const states = [initial];

export const update = (action) => {
        if (typeof action !== 'function') {
            throw new Error ("action is requred to be function")
        }

        const prev = Object.freeze({ ... states[0] });
        const next = Object.freeze({ ... action(prev) });

        states.unshift(next);
};

export const subscribe = () => {}

