export const resume = {
  id: "0",
  position: "",
  skills: [],
  experience: "",
  english: "",
  employment: "",
};

export function checkEnglishLevel(currentLevel, requiredLevel) {
  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const currentLevelIndex = levels.indexOf(currentLevel);
  const requiredLevelIndex = levels.indexOf(requiredLevel);

  if (currentLevelIndex >= requiredLevelIndex) {
    return [];
  } else {
    const nextLevels = levels.slice(
      currentLevelIndex + 1,
      requiredLevelIndex + 1
    );
    return nextLevels.join(", ");
  }
}

export const experienceArray = [
  "Без опыта",
  "1–3 года",
  "3–6 лет",
  "более 6 лет",
];

export function checkExperience(currentLevel) {
  const currentLevelIndex = experienceArray.indexOf(currentLevel);
  const nextLevels = experienceArray.slice(currentLevelIndex + 1, 4);
  return nextLevels;
}
