'use strict';

let important = node => node.important;
let unimportant = node => !node.important;
let inherit = node => node.value === "inherit";

export default (...props) => (props.every(important) || props.every(unimportant)) && !props.some(inherit);
