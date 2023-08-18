const skills = [

    {id: 111111, skill: 'HTML', mastery: true},
    {id: 222222, skill: 'CSS', mastery: true},
    {id: 333333, skill: 'Javascript', mastery: false},

];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
    // skill.skill = updatedSkill.skill;

}
function deleteOne(id) {
    id = parseInt(id);
    // Find the index for the todo
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // Add the mastery
    skill.mastery = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}