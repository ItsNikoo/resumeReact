const contacts = {
    street: "Проспект Вернадского, д.78",
    city: "Москва, Россия",
    number: "+7-985-817-17-87",
    email: "abracadabra@gmail.com",
}

const skills = [
    "React JS",
    "Next JS",
    "JavaScript",
    "Typescript",
    "Java",
    "Python",
    "Kotlin",
    "Английский язык",
    "Коммуникабельность"
]

const educations = [
    {
        id:1,
        primary: true,
        education: "Прикладная информатика",
        grade: "Бакалавриат",
        year: 2026
    },
    {
        id:2,
        primary: true,
        education: "Прикладная информатика",
        grade: "Магистратура",
        year: 2028
    },
    {
        id:3,
        primary: false,
        education: "Московская школа программистов",
        grade: "",
        year: 2022
    },
    {
        id:4,
        primary: false,
        education: "Какой-то бизнес-курс",
        grade: "",
        year: 2021
    }
]

const experiences = [
    {
        id:1,
        place: "РТУ МИРЭА",
        achievements: ["Лучший сотрудник месяца", "Грамота 'Самый нервный человек'"],
        yearBegin: 2023,
        yearEnd: 2025
    },
    {
        id:2,
        place: "ООО Роснефть",
        achievements: ["Лучший заправщик месяца", "Топ-эшелон чаевых", "Предотвращал слив бензина" ],
        yearBegin: 2022,
        yearEnd: 2025
    }
]

const links = [
    "https://Linkedin.org/something",
    "https://github.com/ItsNikoo",
    'https://github.com/ItsNikoo/resumeReact'
]

const data = {
    contacts: contacts,
    skills: skills,
    educations: educations,
    experiences: experiences,
    links: links,
}

export default data;