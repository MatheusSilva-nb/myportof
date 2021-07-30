/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Matheus SIlva",
  title: "Olá! , Sou Matheus",
  subTitle: emoji(
    "Um apaixonado por desenvolvimento 🚀 em buscar de aperfeiçoar habilidades no desenvolvimento web e mobile com JavaScript / Reactjs / React Native."
  ),
  resumeLink:
    //link para o curriculo
    "https://drive.google.com/u/0/uc?id=1QT2pKbAqEgs6bnHzaez4FQ_fHRG8s6ZZ&export=download",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MatheusSilva-nb",
  linkedin: "https://www.linkedin.com/in/silva-matheus/",
  gmail: "matheussilvacorp@gmail.com",
  gitlab: "https://gitlab.com/matheussilvacorp",
  facebook: "",
  medium: "https://medium.com/@matheussilvacorp",
  stackoverflow: "https://stackexchange.com/users/16191116/matheus-silva",
  discord: "https://discord.gg/zRtJhdz4Z3",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que faço",
  subTitle: "Desenvolvedor backend utilizando python com uma habilidade intermediária no frontend",
  skills: [
    emoji(
      "⚡ Desenvolvimento de interfaces frontend"
    ),
    emoji("⚡ Desenvolvimento de APIs usando django"),
    emoji(
      "⚡ Análise e automação de processos web, usando selenium, pyautogui"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Aprendiz Aux.Administrativo",
      company: "shopping center Riomar Fortaleza",
      companylogo: require("./assets/images/rmf.jpeg"),
      date: "Agosto/2017 - Novembro/2018",
      desc: "",
      descBullets: [
        "Auxiliava usuários em chamados recorrentes ao setor",
        "Manutenção preventiva no escopo (limpeza periódica em computadores )",
        "Instalação e atualização de softwares, mantendo todo o escopo atualizado",
        "Controle de inventário",
        "Abria e acompanhava chamados com empresas terceiras"
      ]
    },
    {
      role: "Estagiário de T.I",
      company: "shopping center Riomar Fortaleza",
      companylogo: require("./assets/images/rmf.jpeg"),
      date: "Janeiro/2019 - Janeiro/2021",
      desc: "",
      descBullets: [
        "Auxiliava usuários em chamados recorrentes ao setor",
        "Manutenção preventiva no escopo (limpeza periódica em computadores )",
        "Instalação e atualização de softwares, mantendo todo o escopo atualizado",
        "Controle de inventário",
        "Abria e acompanhava chamados com empresas terceiras",
        "Montagem de redes locais para eventos",
        "Auxiliava em configurações e instalações de ativos de rede.(Switch,access points ,roteadores ,Ramais IP,PABX)",
        "Configurações de usuários de redes pelo AD(Active Directory )",
   
      ]
    },
    {
      role: "Estagiário de desenvolvimento mobile/web",
      company: "NB Consulting IT",
      companylogo: require("./assets/images/nb.jpeg"),
      date: "Abril/2021 - Julho/2021",
      desc: "implementação de recursos no frontend e backend usando as tecnologias (React Native/ReactJS/Django)"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projetos",
  subtitle: "Projetos em geral (eventos e/ou pessoais)",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blog",
  subtitle:
    "Em breve, posts sobre desenvolvimeto, hacking e etc...",

  blogs: [
    {
      url: "https://olhardigital.com.br/2021/07/29/colunistas/tecnologia-em-orbita/",
      title: "Tecnologia em órbita",
      description:
        "Steve Jobs já dizia que “a tecnologia move o mundo”. E isso ficou claro nos últimos dias quando vimos o foguete New Shepard..."
    },
    {
      url: "https://olhardigital.com.br/2021/07/29/internet-e-redes-sociais/clubhouse-especialista-fala-sobre-as-consequencias-juridicas-da-rede-social/",
      title: "Clubhouse: Especialista fala sobre as consequências jurídicas da rede social",
      description:
        "O Clubhouse foi lançado ano passado e rapidamente se tornou uma das redes sociais mais usadas entre os usuários. "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    },
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Em breve ...",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://content.blubrry.com/hipsterstech/hipsters_262_seguranca_informacao.mp3?_=1"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Faço parte de uma comunidade de desenvolvedores no discord.",
  number: "+55 85 981944875",
  email_address: "matheussilvacorp@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
