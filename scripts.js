import { Action, subscribe, update } from "./store.js";
// alert("Hello");
const handler = (prev, next) => console.log(prev, next)
const unsubscribe = subscribe(handler)

/**
 * @type {Action}
 */
const customAction = (state) => {
    return {
        ... state,
        wind: {
            ... state.wind, // destructoring
            value: state.value + 19,
        },
    };
};
  


update(customAction);
update(customAction);
update(customAction);
update(customAction);


