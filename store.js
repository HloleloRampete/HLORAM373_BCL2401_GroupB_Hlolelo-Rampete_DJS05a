// Creating the shape of the store
/**
 *  @type {object} Item
 *  @prop {number} value
 */

/**
 *  @type {object} State
 *  @prop {Item} wind
 *  @prop {Item} temperature
 *  @prop {Item} humidity
 */

/**
 * @callback Notify
 * @param {states} next
 * @param {states} prev
 */

/**
 * @callback Action
 * @param {states}
 * @returns {states}
 */

export const Action = {}

/**
 * @callback Update
 * @param {Action}
 */

/**
 * @callback Subscribe
 * @param {Notify} notify
 */

/**
 * @callback EmptyFn
 */

/**
 
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
  },
};

/**
 * @type {Array<states>}
 */
const states = [initial];

/**
 * @type {Array<Notify>}
 */
let notifiers = [];

/**
 * @param {Action} action 
 */
export const update = (action) => {
  if (typeof action !== "function") {
    throw new Error("action is requred to be function");
  }

  const prev = Object.freeze({ ...states[0] });
  const next = Object.freeze({ ...action(prev) });

  const handler = (notify) => notify(next, prev);
  notifiers.forEach(handler); // replacing a loop logic

  states.unshift(next);
};

/**
 * @param {Notify} notify
 * @returns
 */
export const subscribe = (notify) => {
  notifiers.push(notify);

  const unsubscribe = () => {
    const handler = (current) => current !== notify;
    const result = notifiers.filter(handler); // if conditon is true, filter() will not run.
    notifiers = result;
  };

  return unsubscribe;
};
