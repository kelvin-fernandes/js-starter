function experienceByYear(years) {
  if (years <= 1)
    return "Iniciante";
  else if (years <= 3)
    return "Intermediário";
  else if (years <= 6)
    return "Avançado";
  else
    return "Jedi Master";
}

let studyingYears = 4;
console.log(experienceByYear(studyingYears));