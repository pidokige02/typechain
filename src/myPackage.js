// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */

export function init(config) {
    return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
    return code + 1;
}

// legacy js file 의 logiq 은 건드리지 않고, type checking만 ts 처람 하고 싶을 때 사용한다.
