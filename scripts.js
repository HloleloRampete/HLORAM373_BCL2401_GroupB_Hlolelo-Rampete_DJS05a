import { Action, subscribe, update, Notify } from "./store.js";
// alert("Hello");
const handler = (prev, next) => console.log(prev, next)
const unsubscribe = subscribe(handler);

/**
 * @type {Notify}
 */
const htmlHandler = (next, prev) => {
    if (prev.wind.value === next.wind.value)
        return
    const div = document.createElement("div");
    div.innerText = next.wind.value.toString();
    document.body.appendChild();
}

subscribe(handler);

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


