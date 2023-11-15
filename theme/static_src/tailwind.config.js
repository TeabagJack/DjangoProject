/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

module.exports = {
    content: [
        /**
         * HTML. Paths to Django template files that will contain Tailwind CSS classes.
         */

        /*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
        '../templates/**/*.html',

        /*
         * Main templates directory of the project (BASE_DIR/templates).
         * Adjust the following line to match your project structure.
         */
        '../../templates/**/*.html',

        /*
         * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
         * Adjust the following line to match your project structure.
         */
        '../../**/templates/**/*.html',

        /**
         * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
         * patterns match your project structure.
         */
        /* JS 1: Ignore any JavaScript in node_modules folder. */
        // '!../../**/node_modules',
        /* JS 2: Process all JavaScript files in the project. */
        // '../../**/*.js',

        /**
         * Python: If you use Tailwind CSS classes in Python, uncomment the following line
         * and make sure the pattern below matches your project structure.
         */
        // '../../**/*.py'
    ],
    theme: {
        extend: {
            colors: {
              "neutral-gray-gray-25": "#f9f9fc",
              "neutral-gray-gray-100": "#e0e2e7",
              "neutral-white": "#fff",
              "primary-primary-500": "#5c59e8",
              "neutral-black-black-500": "#667085",
              "neutral-gray-gray-300": "#a3a9b6",
              "primary-primary-100": "#dedefa",
              "neutral-black-black-700": "#333843",
              "neutral-black-black-800": "#1a1c21",
              "secondary-red-red-500": "#f04438",
              "secondary-yellow-yellow-500": "#e46a11",
              darkorange: "#f7931e",
              "secondary-green-green-500": "#0d894f",
              "primary-primary-200": "#bebdf6",
              "neutral-gray-gray-50": "#f0f1f3",
              "secondary-green-green-400": "#3da172",
            },
            spacing: {},
            fontFamily: {
              "text-l-bold": "Inter",
            },
            borderRadius: {
              "81xl": "100px",
            },
          },
          fontSize: {
            base: "16px",
            sm: "14px",
            "5xl": "24px",
            "3xs": "10px",
            xs: "12px",
            inherit: "inherit",
          },
    },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
