import jobList from "../../mock/hr.json";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import {
  resume,
  checkEnglishLevel,
  experienceArray,
  checkExperience,
} from "../../service/analysis";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "./style.scss";

const Analysis = () => {
  const [matchesExperience, setMatchesExperience] = useState([]);
  const [matchesEnglish, setMatchesEnglish] = useState([]);
  const [needSkills, setNeedSkills] = useState([]);
  const [needSkillsVacancy, setNeedSkillsVacancy] = useState([]);
  const [needEnglish, setNeedEnglish] = useState([]);
  const [matchesEmployment, setMatchesEmployment] = useState([]);
  const [secondRound, setSecondRound] = useState([]);
  const [thirdRound, setThirdRound] = useState([]);
  const [percentExp, setPercentExp] = useState();
  const [percentSecondRound, setPercentSecondRound] = useState();
  const [percentThirdRound, setPercentThirdRound] = useState();
  const [needSkillsSecondRound, setNeedSkillsSecondRound] = useState([]);
  const [neeвEnglishSecondRound, setNeedEnglishSecondRound] = useState([]);
  const [needSkillsThirdRound, setNeedSkillsThirdRound] = useState([]);
  const [needEnglishThirdRound, setNeedEnglishThirdRound] = useState([]);

  /////////////////////////////////////Анализ///////////////////////////////////

  const analyce = useCallback((candidate, vacancies) => {
    if (!candidate) {
      return;
    }
    const match = [];
    const skillsSecondRound = [];
    const skills = [];
    const skillsThirdRound = [];
    const secondRound = [];
    const thirdRound = [];

    //------------------Experience-------------------//
    vacancies.forEach((vacancy) => {
      if (candidate.experience === vacancy.experience) {
        match.push(vacancy);
      }
      if (vacancy.experience === checkExperience(candidate.experience)[0]) {
        secondRound.push(vacancy);
      }
      if (
        checkExperience(candidate.experience)[1] &&
        vacancy.experience === checkExperience(candidate.experience)[1]
      ) {
        thirdRound.push(vacancy);
      }
    });
    checkExperience(candidate.experience);
    //------------------Skills-------------------//
    match.forEach((vacancy, i) => {
      if (candidate.skills && candidate.skills.length > 0) {
        vacancy.skills.forEach((skill) => {
          if (!candidate.skills.includes(skill)) {
            // match.splice(i, 1);
            skills.push(skill);
            setNeedSkillsVacancy(vacancy);
          }
        });
      }
    });

    thirdRound.forEach((vacancy, i) => {
      if (candidate.skills && candidate.skills.length > 0) {
        vacancy.skills.forEach((skill) => {
          if (!candidate.skills.includes(skill)) {
            // match.splice(i, 1);
            skillsThirdRound.push(skill);
          }
        });
      }
    });

    secondRound.forEach((vacancy, i) => {
      if (candidate.skills && candidate.skills.length > 0) {
        vacancy.skills.forEach((skill) => {
          if (!candidate.skills.includes(skill)) {
            // match.splice(i, 1);
            skillsSecondRound.push(skill);
          }
        });
      }
    });
    setNeedSkillsThirdRound(skillsThirdRound);
    setNeedSkillsSecondRound(skillsSecondRound);
    //------------------English-------------------//
    match.forEach((vacancy, i) => {
      if (checkEnglishLevel(candidate.english, vacancy.english).length) {
        setMatchesEnglish(vacancy);
        // match.splice(i, 1);
        setNeedEnglish(checkEnglishLevel(candidate.english, vacancy.english));
      }
    });
    secondRound.forEach((vacancy, i) => {
      if (checkEnglishLevel(candidate.english, vacancy.english).length) {
        setNeedEnglishSecondRound(
          checkEnglishLevel(candidate.english, vacancy.english)
        );
      }
    });
    thirdRound.forEach((vacancy, i) => {
      if (checkEnglishLevel(candidate.english, vacancy.english).length) {
        setNeedEnglishThirdRound(
          checkEnglishLevel(candidate.english, vacancy.english)
        );
      }
    });
    //------------------Employment-------------------//
    match.forEach((vacancy, i) => {
      if (candidate.employment && candidate.employment !== vacancy.employment) {
        setMatchesEmployment(vacancy);
      }
    });
    setMatchesExperience(match);
    setNeedSkills(skills);
    setPercentExp(Math.round((match.length * 100) / jobList.length));
    setPercentSecondRound(
      Math.round((secondRound.length * 100) / jobList.length)
    );
    setPercentThirdRound(
      Math.round((thirdRound.length * 100) / jobList.length)
    );
    setSecondRound(secondRound);
    setThirdRound(thirdRound);
  }, []);

  useEffect(() => {
    const resume = JSON.parse(localStorage.getItem("resume"));
    analyce(resume, jobList);
  }, [analyce]);

  const [borderSize, setBorderSize] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (borderSize < percentExp) {
        setBorderSize(borderSize + 1);
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, [borderSize, percentExp]);

  if (!resume.experience) {
    return (
      <section className="analysis">
        <h2>Заполните анкету</h2>
      </section>
    );
  }

  return (
    <section className="analysis">
      <div className="analysis__graph">
        <div className="analysis__graph-el one">
          <CircularProgressbarWithChildren
            value={percentThirdRound}
            styles={{
              root: {},
              path: {
                stroke: `rgba(115, 138, 219)`,
                strokeLinecap: "butt",
                transition: "stroke-dashoffset 0.5s ease 0s",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              trail: {
                stroke: "#d6d6d6",
                strokeLinecap: "butt",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              background: {
                fill: "#738adb",
              },
            }}
          >
            <div className="analysis__graph-el two">
              <CircularProgressbarWithChildren
                value={percentSecondRound}
                styles={{
                  root: {},
                  path: {
                    stroke: `rgba(0, 27, 183, 72%)`,
                    strokeLinecap: "butt",
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: "#d6d6d6",
                    strokeLinecap: "butt",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  background: {
                    fill: "#3e98c7",
                  },
                }}
              >
                <div className="analysis__graph-el three">
                  <CircularProgressbar
                    value={percentExp}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "butt",
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(0, 27, 183)`,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="frame1">{percentExp}%</div>
        <div className="frame2">{percentSecondRound}%</div>
        <div className="frame3">{percentThirdRound}%</div>
      </div>
      <div className="analysis__result">
        {matchesExperience.length ? (
          <div className="result">
            <h2>
              По Вашему опыту идельно подошли <span>{percentExp}% </span>
              вакансий
            </h2>
            <ul>
              {matchesExperience.map((el) => {
                return (
                  <li className="result__links" key={el.id}>
                    <Link to={el.link}>{el.position}</Link>
                  </li>
                );
              })}
            </ul>
            {/* <h2>Для полного соответствия Вам стоит:</h2>
            <ul>
              {needSkills.length ? (
                <li className="dotted">{`дополнительно выучить: ${needSkills.join(
                  ", "
                )}`}</li>
              ) : (
                ""
              )}
              {needEnglish.length ? (
                <li className="dotted">{`поднять уровень английского до: ${needEnglish.toString()}`}</li>
              ) : (
                ""
              )}
            </ul>
            <li className="result__links">
              <Link to=""> ссылка на курсы</Link>
            </li> */}
          </div>
        ) : (
          <div className="result">
            <h2>По Вашему запросу ничего не найдено...</h2>
          </div>
        )}
        {secondRound.length > 0 && (
          <div className="result">
            <h2>
              <span>{percentSecondRound}% </span>вакансий будут доступны вам при
              получении достаточного опыта
            </h2>
            <ul>
              {secondRound.map((el) => {
                return (
                  <li className="result__links" key={el.id}>
                    <Link to={el.link}>{el.position}</Link>
                  </li>
                );
              })}
            </ul>
            <h2>
              {secondRound.length > 1
                ? "В данных вакансиях перечислены навыки, не указанные в Вашей анкете "
                : "В данной вакансии перечислены навыки, не указанные в Вашей анкете: "}
            </h2>
            <ul>
              {needSkillsSecondRound.length > 0 ? (
                <li>{`технологии: ${needSkillsSecondRound.join(", ")}`}</li>
              ) : (
                ""
              )}
              {neeвEnglishSecondRound.length > 0 ? (
                <li>{`уровни английского, которые следует пройти: ${neeвEnglishSecondRound.toString()}`}</li>
              ) : (
                ""
              )}
            </ul>
            <li className="result__links">
              <Link to="https://rs.school/">Вам может помочь этот курс</Link>
            </li>
          </div>
        )}
        {thirdRound.length > 0 && (
          <div className="result">
            <h2>
              <span>{percentThirdRound}% </span>вакансий будут доступны Вам при
              переходе на следующий уровень
            </h2>
            <ul>
              {thirdRound.map((el) => {
                return (
                  <li className="result__links" key={el.id}>
                    <Link to={el.link}>{el.position}</Link>
                  </li>
                );
              })}
            </ul>
            <h2>
              {thirdRound.length > 1
                ? "В данных вакансиях перечислены навыки, не указанные в Вашей анкете "
                : "В данной вакансии перечислены навыки, не указанные в Вашей анкете: "}
            </h2>
            <ul>
              {needSkillsThirdRound.length > 0 ? (
                <li>{`технологии: ${needSkillsThirdRound.join(", ")}`}</li>
              ) : (
                ""
              )}
              {needEnglishThirdRound.length > 0 ? (
                <li>{`уровень английского, которые следует пройти: ${needEnglish.toString()}`}</li>
              ) : (
                ""
              )}
            </ul>
            <li className="result__links">
              <Link to="https://rs.school/">Вам может помочь этот курс</Link>
            </li>
          </div>
        )}
      </div>
    </section>
  );
};

export default Analysis;
