module.exports = {
    mutilpleMongooseToObject: (mongooses) => {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    moongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};