export const PERSONAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/kimi-nel-67a289191",
  github: "https://github.com/kiminel",
  githubRepos: "https://github.com/kiminel?tab=repositories",
  email: "kimi.monique.nel@gmail.com",
  emailMailto: "mailto:kimi.monique.nel@gmail.com",
};

const EXPERIENCE_START_DATE = new Date(2021, 1, 1); // Feb 1, 2021

export const getYearsOfExperience = (now: Date = new Date()) => {
  let years = now.getFullYear() - EXPERIENCE_START_DATE.getFullYear();
  const anniversaryThisYear = new Date(
    now.getFullYear(),
    EXPERIENCE_START_DATE.getMonth(),
    EXPERIENCE_START_DATE.getDate()
  );

  if (now < anniversaryThisYear) {
    years -= 1;
  }

  const isExactAnniversary =
    now.getMonth() === EXPERIENCE_START_DATE.getMonth() &&
    now.getDate() === EXPERIENCE_START_DATE.getDate();

  return {
    years: Math.max(0, years),
    isExactAnniversary,
  };
};
