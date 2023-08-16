const skills = [

    {id: 111111, skill: 'HTML', mastery: true},
    {id: 222222, skill: 'CSS', mastery: true},
    {id: 333333, skill: 'Javascript', mastery: false},

];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}