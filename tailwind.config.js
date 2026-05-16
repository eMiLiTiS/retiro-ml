module.exports = {
    content: ["./*.html", "./*.php", "./js/*.js"],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                forest: {
                    50: '#f2f7f2',
                    100: '#e0ece0',
                    200: '#c2d9c4',
                    300: '#96bb99',
                    400: '#659669',
                    500: '#4a7c4e',
                    600: '#3a623d',
                    700: '#2d4a2d',
                    800: '#263e27',
                    900: '#1a2e1a',
                },
                sage: {
                    100: '#edf3ee',
                    200: '#d5e4d6',
                    300: '#b0ccb2',
                    400: '#7ba07d',
                },
                gold: {
                    400: '#d4b05a',
                    500: '#c9a84c',
                    600: '#a8883a',
                },
                cream: '#FAF8F5',
                parchment: '#F2EDE3',
            },
            backgroundImage: {
                'gradient-forest': 'linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 40%, #3a623d 100%)',
            }
        },
    },
    plugins: [],
}