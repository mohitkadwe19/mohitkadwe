/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Mohit",
  logo_name: "mohit.k()",
  // nickname: "Mahhi / ",
  full_name: "Mohit Kadwe",
  subTitle:
    "Full Stack Developer, DevOps Learning Practitioner, Web developer Enthusiast, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1irF25pWuNtKbjeSjXX-PEVxwUGH_7YN7/view?usp=sharing",
  mail: "mailto:im.mohitpawar530@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/mohitkadwe19/",
  linkedin: "https://www.linkedin.com/in/vedansh-vijaywargiya/",
  gmail: "im.mohitpawar530@gmail.com",
  // gitlab: "https://gitlab.com/mohitkadwe19",
  youtube: "https://www.youtube.com/channel/UCf-hOZB-HBSVzcDp3OQB8jw",
  twitter: "https://twitter.com/mohitpa29730937",
  instagram: "https://www.instagram.com/mohit._pawar/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces and Backend for web applications",
        "⚡ Building responsive website front end using ReactJS,Redux,NextJS",
        "⚡ Creating application backend in Node, Express, MongoDB",
        "⚡ Integration of third party services such as Firebase/ AWS / Twilio /sendGrid/ RazorPay/ Paytm",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:next-dot-js",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "TailwindCSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "rgb(59 130 246/1)",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Bulma",
          fontAwesomeClassname: "simple-icons:bulma",
          style: {
            color: "#00d1b2",
          },
        },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        {
          skillName: "React-Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#28A733",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#C30000",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#406080",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178c6",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Gyan Ganga Institute of  Technology and Science",
      subtitle: "Bachelors in Computer Science and Engineering",
      logo_path: "logo_ggits.png",
      alt_name: "GGITS",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I'm currently pursuing my Bachelors in Computer Science and Engineering.",
        "⚡ I have studied core subjects like Data Structures And Algorithm, DBMS, OOPs,Software Engineering etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learned under my Computer Engineering course. ",
      ],
      website_link: "https://ggits.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Oracle Cloud Academy",
      subtitle: "Database Foundations",
      logo_path: "oracle_logo.png",
      certificate_link: "https://drive.google.com/file/d/16xyaNdvy74As4N2Qig4lZHqh6X0eBAkg/view?usp=sharing",
      alt_name: "Oracle Academy",
      color_code: "#f47e2c",
    },
    {
      title: "Cisco Netacad",
      subtitle: "CPA : Programming Essentials in C++",
      logo_path: "cisco_netacad_logo.png",
      certificate_link: "https://drive.google.com/file/d/1kTEva05lc07YckcCeYygn2_ZHAjQBT4I/view?usp=sharing",
      alt_name: "Cisco Netacad",
      color_code: "#fff",
    },
    {
      title: "Cisco Netacad",
      subtitle: "CPA : Programming Essentials in C",
      logo_path: "cisco_netacad_logo.png",
      certificate_link: "https://drive.google.com/file/d/1KSpZECd1E3uqCzVlTCo1v2CmfCsD0e8C/view?usp=sharing",
      alt_name: "Cisco Netacad",
      color_code: "#fff",
    },
    {
      title: "Cisco Netacad",
      subtitle: "Introduction to IoT",
      logo_path: "cisco_netacad_logo.png",
      certificate_link: "https://drive.google.com/file/d/1MA_eYf3V450evVA1Prc-4vKHJqR7kQJ3/view?usp=sharing",
      alt_name: "Cisco Netacad",
      color_code: "#fff",
    },
    {
      title: "Cisco Netacad",
      subtitle: "Introduction to Cybersecurity",
      logo_path: "cisco_netacad_logo.png",
      certificate_link: "https://drive.google.com/file/d/1MUUGYQsjFQMPKURJSJn2_oEfzOH-xBV8/view?usp=sharing",
      alt_name: "Cisco Netacad",
      color_code: "#fff",
    },
    {
      title: "Cisco Netacad",
      subtitle: "Introduction to Packet Tracer",
      logo_path: "cisco_netacad_logo.png",
      certificate_link: "https://drive.google.com/file/d/1K-9nxewnDg1Z-IRQRSas2D69AuhmJ6_z/view?usp=sharing",
      alt_name: "Cisco Netacad",
      color_code: "#fff",
    },
    {
      title: "Cisco Netacad",
      subtitle: "CCNAv7: Introduction to Networks",
      logo_path: "cisco_netacad_logo.png",
      certificate_link: "https://drive.google.com/file/d/1H54MLFMVBmjmXDp5gs73wM3sUE7K-6lG/view?usp=sharing",
      alt_name: "Cisco Netacad",
      color_code: "#fff",
    },
    {
      title: "E-Summit - By E-Cell IIT Bombay 2021",
      subtitle: "Certificate Of Participation",
      logo_path: "E-Summit_logo.png",
      certificate_link: "https://drive.google.com/file/d/1dJWwCMeI8hS0xwUfwYAPqRTN3vyrUYnd/view?usp=sharing",
      alt_name: "E-Summit - By E-Cell IIT Bombay 2021",
      color_code: "#6f42c1",
    },
    {
      title: "Hack This Fall",
      subtitle: "Certificate Of Participation",
      logo_path: "hackThisFall.png",
      certificate_link: "https://drive.google.com/file/d/1Ydnmn1RSm7jAtjQIX_AXGjU0u704g5KQ/view?usp=sharing",
      alt_name: "Hack This Fall",
      color_code: "#fff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internships ,VolunteerShips,Achievements and clubs",
  description:
    "Passionate web developer with 1+ year of experience working on industrial projects . Intuitive and inquisitive learner willing to work and contribute towards individual and organizational growth.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Mern stack Developed",
          company: "ALL INDIAN IT SERVICES",
          company_url: "https://allindianitservices.com/",
          logo_path: "aiits_logo.png",
          duration: "Dec 2021 - present",
          location: "Nagpur",
          description: " Developed web applications for clients in an agile environment using reusable, scalable and efficient code, principles and patterns.Technology Stack : 1.FrontEnd Languages and Frameworks - ReactJS, ReactNative,  2.Backend Languages and Frameworks - NodeJS, ExpressJS, 3. Database - MongoDB, MySql, 4. Cloud Services - AWS Cloud Services, Contabo, 5. Third-Party Services - SendGrid",
          color: "#0071C5",
        },
        {
          title: "Full stack developer",
          company: "3BIT DIGITAL",
          company_url: "https://www.linkedin.com/company/3-bit-digital/",
          logo_path: "3bit_digital_logo.png",
          duration: "July 2021 - Dec 2021",
          location: "Jabalpur",
          description: "Developed E-commerce,Management and portfolio web applications for clients in an agile environment using reusable, scalable and efficient code, principles and patterns.Technology Stack : 1.FrontEnd Languages and Frameworks - ReactJS, NextJS,  2.Backend Languages and Frameworks - NodeJS, ExpressJS 3. Database - MongoDB, 4. Cloud Services - AWS Cloud Services",
          color: "#ee3c26",
        },
        {
          title: "Full stack developer",
          company: "WINGZ ACADEMY",
          company_url: "https://wingzacademy.com",
          logo_path: "wingz_logo.png",
          duration: "May 2021 - July 2021",
          location: "Jabalpur",
          description: "Developed Front end of for the Academy and designed simple web application for better user experience.Technology Stack : 1.FrontEnd Languages  - Html, Css, JavaScript, 2.Backend Languages  - Php 3. Database - MySql ",
          color: "#000",
        },
        {
          title: "Mern stack developer",
          company: "FASHUP PVT LTD.",
          company_url: "https://fashup.in",
          logo_path: "fashup-logo2.jpg",
          duration: "April 2021 - May 2021",
          location: "Remote",
          description: "Developed Front end dashboard and designed DB Schemas as well and created RestFul web api. Technology Stack : 1.FrontEnd Languages and Frameworks - ReactJS,  2.Backend Languages and Frameworks - NodeJS, ExpressJS 3. Database - MongoDB",
          color: "#fff",
        },
      ],
    },
    {
      title: "Volunteerships & Club",
      experiences: [
        {
          title: "Technical Core Lead",
          company: "Code chef chapters",
          company_url: "#",
          logo_path: "codechef_chapter_ggits.jpg",
          duration: "Mar 2020 - Present",
          location: "Jabalpur",
          description: "Conduct various seminar and competitions in college through codechef and Educate student about the programming.",
          color: "#0059c9",
        },
        {
          title: "Technical Core Lead",
          company: "Web masters club GGITS",
          company_url: "#",
          logo_path: "webmasters_ggits.jpg",
          duration: "Dec 2020 - Present",
          location: "Jabalpur",
          description: "Conduct workshops and competitions on website development and maintain and added new features implementation on College official website under guidance of HoD.",
          color: "#ffffff",
        },
        {
          title: "Technical Core Lead",
          company: "Udyam E-cell GGITS",
          company_url: "https://indiaenvironment.org/",
          logo_path: "Ecell_logo.jpg",
          duration: "May 2020 - present",
          location: "Jabalpur",
          description: "Conducted various events and activities of E-cell and spearheaded initiatives to promote Entrepreneurship and Participated in NEC Challenge by E-cell IIT Bombay.",
          color: "#282b6c",
        },
      ],
    },
    {
      title: "Achievements",
      experiences: [
        {
          title: "Smart India Hackathon 2022",
          company: "Zonal Round Finalist",
          company_url: "https://www.sih.gov.in/",
          logo_path: "SIH-logo.png",
          duration: "2022",
          location: "Jabalpur",
          description:
            "As a member of the global Crowdsource community one can gain recognition from other Crowdsourcers and Google.",
          color: "#ffffff",
        },
        {
          title: "Microsoft Imagine cup 2021",
          company: "All Indian Finalist and secured 3rd rank",
          company_url: "https://imaginecup.microsoft.com/en-us/Events",
          logo_path: "microsoft_image_cup.jpg",
          duration: "2020-2021",
          location: "Remote",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#282b6c",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://dev.to/mohitkadwe19",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Chatting-Go",
      url: "https://chatting-go.vercel.app/login",
      description:
        "This is Blogging website where users can create blogs, follow and unfollow other users, get summarized blog reccomendation on their dashboard and have a personalised searching mechanism.",
      languages: [
        {
          name: "Versel",
          iconifyClass: "logos-vercel",
        },
        {
          name: "Heroku-App",
          iconifyClass: "logos-heroku",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Github",
          iconifyClass: "logos-github",
        },
        {
          name: "Git",
          iconifyClass: "logos-git",
        },
        {
          name: "ExpressJS",
          iconifyClass: "logos-express",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "1",
      name: "Rajarshri Chhatrapati Shahu Maharaj Foreign Scholarship",
      url: "https://github.com/vvHacker007/Youtube-Downloader/",
      description:
        "A desktop GUI which can be used to download youtube videos and playlist with desired quality and type on desktop.",
      languages: [
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "ExpressJS",
          iconifyClass: "logos-express",
        },
        {
          name: "Github",
          iconifyClass: "logos-github",
        },
        {
          name: "Git",
          iconifyClass: "logos-git",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "Redux",
          iconifyClass: "logos-redux",
        },
        {
          name: "Ubuntu",
          iconifyClass: "logos-ubuntu",
        },
        {
          name: "Nginx",
          iconifyClass: "logos-nginx",
        },
      ],
    },
    {
      id: "2",
      name: "Tune In",
      url: "https://github.com/vvHacker007/Tune-In",
      description:
        "Tune in is a collaborative music playing system where multiple guests can join a room and enjoy the song being played. Guests can pause and vote to skip the current song.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
      ],
    },
    {
      id: "3",
      name: "Event Scheduler",
      url: "https://github.com/vvHacker007/Event-Scheduler",
      description:
        "It is an all-purpose scheduler software. It is designed to monitor all the activities and give appropriate reminders for them.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Movie Reccomendation System",
      url: "https://github.com/vvHacker007/Movie-Recommendation-Systems",
      description:
        "Made three python kernels explaining and implementing the three different types of movie recommender systems.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "3",
      name: "Login Authenticator",
      url: "https://github.com/vvHacker007/Login-Authenticator",
      description: "Made a template for a Login Authenticator using Flask ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Calculator",
      url: "https://github.com/vvHacker007/Calculator",
      description:
        "Made a GUI based Calculator. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "5",
      name: "Notepad",
      url: "https://github.com/vvHacker007/Notepad",
      description:
        "Made a GUI based Notepad. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "6",
      name: "Tetris",
      url: "https://github.com/vvHacker007/Tetris",
      description: "Made a GUI based arcade game Tetris using pygame.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Steganography",
      url: "https://github.com/vvHacker007/Steganography",
      description:
        "A CLI tool to conceal messages within a file, text, image, or video.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      id: "8",
      name: "Mini Paint",
      url: "https://github.com/vvHacker007/Mini-Paint",
      description: "GUI based Mini Paint Application.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "9",
      name: "Speedtest",
      url: "https://github.com/vvHacker007/Speed-test",
      description:
        "An internet speed testing application which can notify about the download speed, upload speed, and also the reaction time of the connection.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "10",
      name: "Cat Classifier",
      url: "https://github.com/vvHacker007/Cat-Classifier",
      description:
        "Binary Cat Classifier made by hard coding Neural Networks in Python without using libraries such as Tensorflow or keras.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "11",
      name: "Snake",
      url: "https://github.com/vvHacker007/Snake",
      description:
        "A snake game which covers all the basic features like score, high score and an automated speed increase simultaneously when the snake eats the food.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "12",
      name: "Score Predictor",
      url: "https://score-predictor-app.herokuapp.com/",
      description:
        "Predicts students score based on the number of hours the student puts in it.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "13",
      name: "Blood Donation Predictor",
      url: "https://blood-donation-predictor-app.herokuapp.com/",
      description:
        "Predicts if one is ready to donate blood based on the user's blood donation history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "14",
      name: "Credit-Card Default Predictor",
      url: "https://default-predictor-app.herokuapp.com/",
      description:
        "Predicts whether user's credit card would be defaulted or not based on the user's bank statements and history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "15",
      name: "Portfolio Website",
      url: "https://vvhacker007.github.io/Portfolio/",
      description: "You are stalking it right now 😉",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
