const usersData = [

    {
        id: 1,
        username: "user1",
        email: "user1@example.com",
        gender: "male"
    },
    {
        id: 2,
        username: "user2",
        email: "user2@example.com",
        gender: "female"
    },
    {
        id: 3,
        username: "user3",
        email: "user3@example.com",
        gender: "male"
    },
    {
        id: 4,
        username: "user4",
        email: "user4@example.com",
        gender: "female"
    },
    {
        id: 5,
        username: "user5",
        email: "user5@example.com",
        gender: "male"
    },
    {
        id: 6,
        username: "user6",
        email: "user6@example.com",
        gender: "female"
    },
    {
        id: 7,
        username: "user7",
        email: "user7@example.com",
        gender: "male"
    },
    {
        id: 8,
        username: "user8",
        email: "user8@example.com",
        gender: "female"
    },
    {
        id: 9,
        username: "user9",
        email: "user9@example.com",
        gender: "male"
    },
    {
        id: 10,
        username: "user10",
        email: "user10@example.com",
        gender: "female"
    }

];
localStorage.setItem('users', JSON.stringify(usersData));
export default usersData;