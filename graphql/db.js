export const people = [
    {
        id : 0,
        name : "Jungwoo0",
        age : 26,
        gender : "male"
    },
    {
        id : 1,
        name : "Jungwoo1",
        age : 26,
        gender : "female"
    },
    {
        id : 2,
        name : "Jungwoo2",
        age : 26,
        gender : "male"
    },
    {
        id : 3,
        name : "Jungwoo3",
        age : 26,
        gender : "female"
    },
    {
        id : 4,
        name : "Jungwoo4",
        age : 26,
        gender : "male"
    },
    {
        id : 5,
        name : "Jungwoo5",
        age : 26,
        gender : "female"
    },
    {
        id : 6,
        name : "Jungwoo6",
        age : 26,
        gender : "male"
    }
    

];

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}