const { connect } = require("mongoose");

const mongoDbUrl = 'mongodb+srv://vatsals5:qibYdDT6gckfvVpo@cluster0.qb6zczv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDb = () => {
  return connect(mongoDbUrl);
};

module.exports = { connectDb };
