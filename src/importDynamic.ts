/**
 * Provides a mechanism to use dynamic import / import() with tsconfig -> module: commonJS as otherwise import() gets
 * transpiled to require().
 *
 * Simply import and use in the same manner as import().
 */
export default new Function('modulePath', 'return import(modulePath)');
