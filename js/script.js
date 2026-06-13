const amountOfYearsExperienceContainer = document.getElementById("amountOfYearsExperienceContainer");

const startedInYear = new Date("2020").getFullYear();
const today = new Date().getFullYear();

const setAmountOfYearsExperience = () => {
    amountOfYearsExperienceContainer.innerText = today - startedInYear;
};

window.onload = () => {
    setAmountOfYearsExperience();
};