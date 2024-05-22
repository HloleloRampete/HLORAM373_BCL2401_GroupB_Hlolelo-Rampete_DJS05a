import { Action, subscribe, update, Notify } from "./store.js";
// alert("Hello");
const handler = (prev, next) => console.log(prev, next)
const unsubscribe = subscribe(handler)

const htmlHandler

/**
 * @type {Action}
 */
const customAction = (state) => {
    return {
        ... state,
        wind: {
            ... state.wind, // destructoring
            value: state.wind.value + 19,
        },
    };
};
  


update(customAction);
update(customAction);
update(customAction);
update(customAction);


