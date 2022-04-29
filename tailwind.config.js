module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                encacap: {
                    blue: {
                        light: "#8ECAE6",
                        DEFAULT: "#219EBC",
                        dark: "#023047",
                    },
                    main: "#FB8500",
                    yellow: "#FFB703",
                    facebook: "#1877f2",
                    zalo: "#03a5fa",
                    google: "#db4437",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
