function showSkills(users) {
  for (var user of users) {
    console.log(`${user.name} has these following skills: ${user.skills.join(', ')}`);
  }
}

var users = [
  {
    name: "Diego",
    skills: ["Javascript", "ReactJS", "Redux"]
  },
  {
    name: "Gabriel",
    skills: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

showSkills(users);