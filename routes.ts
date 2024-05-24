/**
 * Aray of routes that are accesssible to the public
 * These routes do not require authentication
 * @types {string[]}
 */

export const publicRoutes = ["/"];

/**
 * Aray of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @types {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @types {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after loggin in
 * @types {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
