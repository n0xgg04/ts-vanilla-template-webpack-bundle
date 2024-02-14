const path = require("path")
const dotenv= require("dotenv")
dotenv.config()
module.exports = {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        static: [{
          directory: path.join(__dirname, "public"),
            watch: true,
        },{
            directory: path.join(__dirname,"dist")
        }
        ],
        compress: true,
        port: process.env.PORT,
    },
    watch: true
};
