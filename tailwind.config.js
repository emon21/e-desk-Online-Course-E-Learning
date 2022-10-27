/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}","./**/*.{html,js}","index.html"],
  theme: {
    extend: {
        fontFamily:{
            // poppins:['poppins','sans-serif'],
            'public_sans':['Public Sans', 'sans-serif']
        },
        container:{
            center:true,
            padding:'0px',
            screens:{
                'sm': "512px",
                'md': "720px",
                'lg': "1024px",
                'xl': "1140px",
                '2xl': "1320px"
            }
        },
    },
  },
  plugins: [],
}
