//Required in order to get linaria working.
export default config => {
    const newBabelLoader = {
        test: /\.jsx?$/, //This one is a different regex from the standard one -> /\.m?[jt]sx?$/
        exclude: /node_modules/,
        enforce: "pre", //Don't delete this
        resolve: { mainFields: ["module", "jsnext:main", "browser", "main"] }, //Don't delete this
        use: [
            {
                loader: "babel-loader",
                options: {
                    plugins: [] //Move your plugins to the .babelrc
                }
            },
            { loader: "linaria/loader" }
        ]
    };

    config.module.rules[0] = newBabelLoader; //override your babel-loader rule
};
