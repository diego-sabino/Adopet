import mongoose from "mongoose"

mongoose.set("strictQuery", true);
// sua conexão com o banco de dados
mongoose.connect("");

let db = mongoose.connection;

export default db;