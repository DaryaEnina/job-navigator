import { useEffect, useState } from "react";
import hr from "../../mock/hr.json";
import { resume } from "../../service/analysis";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const [selectPosition, setSelectPosition] = useState(false);
  const [selectEducation, setSelectEducation] = useState(false);
  const [vacancyStack, setVacancyStack] = useState([
    "HTML",
    "CSS",
    "SASS",
    "SCSS",
    "JavaScript",
    "MUI",
    "Git",
    "React",
    "Redux",
    "TypeScript",
    "Angular",
    "AWS",
    "MS Azure",
    "GCP",
    "Cloud Native",
    "Webpack",
    "jQuery",
    "Vue.JS",
    "CI/CD",
    "Graphql",
    "Jest",
    "React-Testing library",
  ]);
  const [selectStack, setSelectStack] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState(false);
  const [selectEmployment, setSelectEmployment] = useState(false);
  const [selectExperience, setSelectExperience] = useState(false);
  const [stack, setStack] = useState([]);
  const [approve, setApprove] = useState(false);
  const [firsname, setFirsname] = useState("");
  const [name, setName] = useState("");
  const [fathername, setfathername] = useState("");
  const [location, setLocation] = useState("");
  const [education, setEducation] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [language, setLanguage] = useState("");
  const [employment, setEmployment] = useState("");
  const [courses, setCourses] = useState("");

  const navigate = useNavigate();

  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth < 1024 ? true : false,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addEventListener("change", setMQuery);
    return () => mediaQuery.removeEventListener("change", setMQuery);
  }, [mQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    resume.position = position;
    resume.skills = stack;
    resume.experience = experience;
    resume.english = language;
    resume.employment = employment;
    navigate("/analysis");
  };
  return (
    <section className="resume">
      <div className="resume__wrapper">
        <h2>АНКЕТА СОИСКАТЕЛЯ</h2>
        <form className="resume__form" onSubmit={handleSubmit}>
          <div className="form__component">
            <div className="form__input-wrap firsname">
              <input
                className="text-input"
                type="text"
                placeholder={mQuery.matches ? "Фамилия" : "Text..."}
                value={firsname}
                onChange={(e) => setFirsname(e.target.value)}
              />
            </div>
          </div>
          <div className="form__component">
            <div className="form__input-wrap name">
              <input
                className="text-input"
                type="text"
                placeholder={mQuery.matches ? "Имя" : "Text..."}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="form__component">
            <div className="form__input-wrap fathername">
              <input
                className="text-input"
                type="text"
                placeholder={mQuery.matches ? "Отчество" : "Text..."}
                value={fathername}
                onChange={(e) => setfathername(e.target.value)}
              />
            </div>
          </div>
          <div className="form__component">
            <div className="form__input-wrap location">
              <input
                className="text-input"
                type="text"
                placeholder={mQuery.matches ? "Локация" : "Text..."}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="form__component">
            <div
              className="form__input-wrap education"
              onClick={() => setSelectEducation(!selectEducation)}
            >
              <div className="select__arrow">{selectEducation ? "Ʌ" : "V"}</div>
              <input
                className="text-input"
                type="text"
                placeholder={mQuery.matches ? "Образование" : "Text..."}
                value={education}
                disabled
              />
              <div className={selectEducation ? "select__list" : "hide"}>
                <p onClick={(e) => setEducation(e.target.innerHTML)}>Среднее</p>
                <p onClick={(e) => setEducation(e.target.innerHTML)}>
                  Средне-специальное
                </p>
                <p onClick={(e) => setEducation(e.target.innerHTML)}>Высшее</p>
              </div>
            </div>
          </div>
          <div className="form__component">
            <div
              className="form__input-wrap position"
              onClick={() => setSelectPosition(!selectPosition)}
            >
              <div className="select__arrow">{selectPosition ? "Ʌ" : "V"}</div>
              <input
                className="text-input"
                type="text"
                placeholder={mQuery.matches ? "Желаемая должность" : "Text..."}
                disabled
                value={position}
              />
              <div className={selectPosition ? "select__list" : "hide"}>
                <p onClick={(e) => setPosition(e.target.innerHTML)}>
                  Frontend developer
                </p>
              </div>
            </div>
          </div>
          <div className="form__component">
            <div
              className="form__input-wrap stack"
              onClick={() => setSelectStack(!selectStack)}
            >
              <div className="select__arrow">{selectStack ? "Ʌ" : "V"}</div>
              <input
                className="text-input"
                type="text"
                placeholder={
                  mQuery.matches
                    ? "Стек технологий (ключевые навыки)"
                    : "Text..."
                }
                disabled
                value={stack}
              />
              <div className={selectStack ? "select__list" : "hide"}>
                {vacancyStack.map((el) => {
                  return <p onClick={() => setStack([...stack, el])}>{el}</p>;
                })}
              </div>
            </div>
          </div>
          <div className="form__component">
            <div
              className="form__input-wrap experience"
              onClick={() => setSelectExperience(!selectExperience)}
            >
              <div className="select__arrow">
                {selectExperience ? "Ʌ" : "V"}
              </div>
              <input
                className="text-input"
                type="text"
                placeholder={mQuery.matches ? "Опыт работы" : "Text..."}
                disabled
                value={experience}
              />
              <div className={selectExperience ? "select__list" : "hide"}>
                <p onClick={(e) => setExperience(e.target.innerHTML)}>
                  Без опыта
                </p>
                <p onClick={(e) => setExperience(e.target.innerHTML)}>
                  1–3 года
                </p>
                <p onClick={(e) => setExperience(e.target.innerHTML)}>
                  3–6 лет
                </p>
                <p onClick={(e) => setExperience(e.target.innerHTML)}>
                  более 6 лет
                </p>
              </div>
            </div>
          </div>
          <div className="form__component">
            <div
              className="form__input-wrap language"
              onClick={() => setSelectLanguage(!selectLanguage)}
            >
              <div className="select__arrow">{selectLanguage ? "Ʌ" : "V"}</div>
              <input
                className="text-input"
                type="text"
                placeholder={
                  mQuery.matches ? "Уровень английского языка" : "Text..."
                }
                disabled
                value={language}
              />
              <div className={selectLanguage ? "select__list" : "hide"}>
                <p onClick={(e) => setLanguage(e.target.innerHTML)}>A1</p>
                <p onClick={(e) => setLanguage(e.target.innerHTML)}>A2</p>
                <p onClick={(e) => setLanguage(e.target.innerHTML)}>B1</p>
                <p onClick={(e) => setLanguage(e.target.innerHTML)}>B2</p>
                <p onClick={(e) => setLanguage(e.target.innerHTML)}>C1</p>
                <p onClick={(e) => setLanguage(e.target.innerHTML)}>C2</p>
              </div>
            </div>
          </div>
          <div className="form__component">
            <div
              className="form__input-wrap employment"
              onClick={() => setSelectEmployment(!selectEmployment)}
            >
              <div className="select__arrow">
                {selectEmployment ? "Ʌ" : "V"}
              </div>
              <input
                className="text-input"
                type="text"
                placeholder={mQuery.matches ? "Тип занятости" : "Text..."}
                disabled
                value={employment}
              />
              <div className={selectEmployment ? "select__list" : "hide"}>
                <p onClick={(e) => setEmployment(e.target.innerHTML)}>
                  Полная занятость
                </p>
                <p onClick={(e) => setEmployment(e.target.innerHTML)}>
                  Удаленная работа
                </p>
              </div>
            </div>
          </div>
          <div className="form__component">
            <div className="form__input-wrap courses">
              <input
                className="text-input"
                type="text"
                placeholder={
                  mQuery.matches ? "Повышение квалификации, курсы" : "Text..."
                }
                value={courses}
                onChange={(e) => setCourses(e.target.value)}
              />
            </div>
          </div>
          <div className="form-agreement">
            <input
              type="checkbox"
              id="approve"
              name="approve"
              className="custom-checkbox"
              onChange={() => {
                setApprove(true);
              }}
            />
            <label htmlFor="approve"></label>
            <p>Я даю согласие на обработку персональных данных</p>
          </div>
          <button type="submit" className="form__submit">
            Результат
          </button>
        </form>
      </div>
    </section>
  );
};

export default Resume;
