function isThereThatSkill(skills, desiredSkill) {
  return skills.indexOf(desiredSkill) !== -1;
}

let skills = ["react", "javascript", "react-native"];
let desiredSkill = 'javascript';
console.log(isThereThatSkill(skills, desiredSkill));