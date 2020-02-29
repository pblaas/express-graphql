const userCount = 50;
const commentCount = 150;

module.exports = {
    users: [
        { id: 1, username: 'Mike', age: 12, profession: 'Analyst' },
        { id: userCount, username: 'Lucy', age: 31, profession: 'Cook' }
    ],
    comments: [
        { id: 1, user_id: 1, message: "this is a example text."},
        { id: 2, user_id: 2, message: "this is another example text."},
        { id: commentCount, user_id: userCount, message: "this is third example line" }
    ]
};
