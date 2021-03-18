const Myself = {
    name : "Jungwoo",
    age : 26,
    gender : "male"
};

const resolvers = {
    Query: {
        person: () => Myself
    }
};

export default resolvers;
