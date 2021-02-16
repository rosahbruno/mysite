export const copy = {
  firstName: 'Bruno',
  lastName: 'Rosa',
  location: 'Pittsburgh, Pa',
  myPhone: '(412) 773-1347',
  myEmail: 'rosahbruno@gmail.com',
  nav: {
    about: 'About',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    interests: 'Interests',
    portfolio: 'Portfolio'
  },
  about: {
    header:
      'Welcome to my site! I am a software engineer located in Pittsburgh, Pa. I am currently working at Branding Brand as a tech lead for one of our largest clients.',
    subHeader:
      "I am also working towards my Master's of Data Science at Juniata College expected to graduate in Dec '21. I also serve as Co-Founder & Lead Developer for Precision Studio based out of York, Pa.",
    tertiaryHeader:
      'I have experience, and a strong interest, in Mobile, Web, Backend, & Data Engineering.'
  },
  experience: [
    {
      title: 'Software Engineer',
      startDate: "Dec '19",
      endDate: 'Present',
      company: 'Branding Brand',
      description:
        "Serving as Tech Lead on 3 React Native apps for one of our largest clients. I work very closely with our PMs, EMs, & Stakeholders to plan and complete work.\nI lead a team of 3-4 devs in maintenance and enhancements across the apps. During my time we have completed countless large features including an entire app redesign.\nI have also contributed to our process improvement by introducing more thorough code reviews, PR templates, unit testing, developer documentation, helping build a new release plan, etc.\nDuring this time I have also contributed to our company's open source offering.",
      link: 'https://www.brandingbrand.com',
      skills: 'TS, React Native, React, Jest, Travis, Git'
    },
    {
      title: 'Co-Founder/Lead Developer',
      startDate: "Jan '19",
      endDate: 'Present',
      company: 'Precision Studio',
      description:
        'I lead all technical projects and handle mobile/web development. We have worked with lots of clients in different capacities and rolled out 10+ sites.\nWe are also developing our own proprietary software which we intend to release in the near future!\nI also assist with with client acquisition, requirements gathering, etc.',
      link: 'https://precisionstudio.org/',
      skills:
        'React, Go, Project Planning, Design, Marketing Campaigns, SEO, Git'
    },
    {
      title: 'Software Engineer',
      startDate: "Aug '19",
      endDate: "Dec '19",
      company: 'BNY Mellon',
      description:
        'I worked on the mobility team inside of workplace technology. My time was split between native (both iOS & Android) & hybrid development (Ionic).\nI led a major version upgrade of 2 of our hybrid apps in <1 month. I also worked with other internal teams on architecture and design of a new Emergency Contacts app.',
      link: 'https://www.bnymellon.com/',
      skills: 'TS, Swift, Kotlin, Ionic, Angular, Node, Sketch, GitLab'
    },
    {
      title: 'Software Engineer',
      startDate: "May '17",
      endDate: "Aug '19",
      company: 'UPMC',
      description:
        'I served as a member of the MARS application team which was a proprietary data warehouse that had over 30+ years of clinical health records.\nI split work between helping Sr devs get our old services ported over to our new Hadoop cluster and working on maintaining legacy Mars. I worked on a variety of things from Scala & Spark jobs, to API development in Node, automation scripting in Python, UI development in Polymer, and rewriting all of our developer documentation.\n',
      link: 'https://www.upmc.com/',
      skills: 'Python, Scala, Java, C/C++, Spark, Node, Hadoop, Linux, SQL, Git'
    },
    {
      title: 'Lead Developer',
      startDate: "Jan '18",
      endDate: "Dec '19",
      company: 'Bizi Marketplace',
      description:
        'Bizi was developed as a cross-platform marketplace app that targeted college campuses.\nI served as lead developer and architected and implemented all major features including: authentication, real-time messaging, notifications, social elements, product search, etc.\nOver the course of the project I managed 2 separate teams of 4-5 developers each.',
      link: 'https://www.bizimarketplace.com/',
      skills: 'TS, Angular, Ionic, Node, Firebase, NoSQL, Git, Balsamiq'
    },
    {
      title: 'Lead Web Developer',
      startDate: "May '16",
      endDate: "May '17",
      company: 'Juniata College',
      description:
        "Led a team of 8 students that handled the frontend development of www.juniata.edu.\nOur team was responsible for meeting with campus offices and academic departments to discuss improvements and new designs for their sections of the site.\nI worked very closely with our Webmaster and Digital Marketing Specialist to ensure our team was following best practices and staying with the college's branding.",
      link: 'https://www.juniata.edu',
      skills: 'JS, PHP, SQL, Trello, OU Campus CMS'
    },
    {
      title: 'Web Developer',
      startDate: "Aug '15",
      endDate: "May '16",
      company: 'Juniata College',
      description:
        'Working as a web developer on the Marketing web team. I played a key role in migration of all site content from our old site to our new CMS.',
      link: 'https://www.juniata.edu',
      skills: 'JS, PHP, SQL, OU Campus CMS'
    }
  ],
  education: {
    activities: 'Activities',
    awards: 'Awards',
    schools: [
      {
        school: 'Juniata College',
        startDate: "May '20",
        endDate: "Dec' 21",
        degree: "Master's of Data Science",
        gpa: 'GPA: 3.8'
      },
      {
        school: 'Juniata College',
        startDate: "Aug '14",
        endDate: "May '18",
        degree: 'Bachelor of Science',
        gpa: 'Computer Science (with Honors)\nOverall: 3.4\nMajor: 3.9',
        activities:
          "Class of '18 member of the IT Advisory Board\nHead of CS/IT Tutoring labs\nHead of CS/IT Mentoring Program\nGolf Team\nSki Club",
        awards:
          "Dale L. Wampler Award in Information Technology/Computer Science\nDean's List (over 3.6) 5 semesters"
      },
      {
        school: 'Conemaugh Township High School',
        startDate: "Aug '10",
        endDate: "May '14",
        degree: 'High School Diploma',
        gpa: 'GPA: 3.65',
        activities:
          'Football\nBasketball\nBaseball\nSki Club\nNewspaper/Yearbook Sports Editor\nJournalism',
        awards:
          'Computer & Technology Award 2x\nTeam Captain of Football & Baseball Teams\nAll Conference: Baseball 3x, Football 2x\nAll County: Baseball 4x, Football 2x'
      }
    ]
  },
  skills: [
    {
      title: 'Frontend',
      items: ['React Native*', 'React*', 'iOS Development', 'Angular', 'Gatsby']
    },
    {
      title: 'Backend',
      items: ['SQL*', 'Node*', 'REST API development*', 'Spring Boot']
    },
    {
      title: 'Languages',
      items: ['TS/JS*', 'Python*', 'Java*', 'Scala', 'Swift']
    },
    {
      title: 'Big Data',
      items: ['Hadoop*', 'Spark', 'MapReduce*', 'ETL*', 'R']
    },
    {
      title: 'Design (System & UI)',
      items: ['Figma', 'Sketch', 'Visio', 'Lucidchart*', 'ER Diagrams']
    },
    {
      title: 'Version Control',
      items: ['Git*', 'GitHub*', 'GitLab', 'Git Flow*', 'SVN']
    },
    {
      title: 'Misc',
      items: [
        'Linux*',
        'Travis',
        'Automation Scripting*',
        'Project Planning',
        'Agile',
        'Process Improvement*'
      ]
    }
  ],
  interests: [
    'My current professional interests lie with big data, design & architecture patterns, API development, and DevOps. I am also currently working on building my own headless CMS for my side projects and other websites I work on.',
    'Outside of coding, I am an avid golfer and snowboarder. I enjoy running, most sports, and a ton of TV! Favorites include Bojack Horseman, Barry, The Sopranos, Always Sunny in Philadelphia, Curb Your Enthusiasm, and about 100 more!'
  ],
  portfolio: [
    {
      title: 'Branding Brand',
      items: [
        {
          description: 'Our clients',
          link: 'https://www.brandingbrand.com'
        }
      ]
    },
    {
      title: 'BNY Mellon',
      items: [
        {
          description:
            'Worked on all proprietary internal apps (help desk tool, incident management, internal social network, emergency contacts)',
          link: ''
        }
      ]
    },
    {
      title: 'UPMC',
      items: [
        {
          description:
            'Worked on the MARS app. Our team was moving a dataset of 2+ billion records to Hadoop and rebuilding our services & UI.',
          link: ''
        }
      ]
    },
    {
      title: 'Precision Studio',
      items: [
        {
          description: "DeNunzio's",
          link: 'http://www.denunziosrestaurant.com'
        },
        {
          description: 'Stoney Brook',
          link: 'https://www.stoneybrooketown.com'
        },
        {
          description: 'Spaghetti Benders',
          link: 'https://spaghettibenders.com'
        },
        {
          description: 'Shrewsbury Pet Shop',
          link: 'http://shrewsburypets.com'
        },
        {
          description: 'Precision Studio',
          link: 'https://precisionstudio.org'
        }
      ]
    },
    {
      title: 'Juniata',
      items: [
        {
          description: 'Juniata Website',
          link: 'https://www.juniata.edu'
        },
        {
          description: 'Hue Calendar',
          link: 'https://github.com/rosahbruno/Hue_Calendar'
        },
        {
          description: 'Fort Mill EMS App',
          link: 'https://github.com/rosahbruno/fmEMSFinalApp'
        }
      ]
    },
    {
      title: 'Additional Programming',
      items: [
        {
          description: 'GitHub',
          link: 'https://github.com/rosahbruno'
        },
        {
          description: 'CodeWars',
          link: 'https://www.codewars.com/users/rosahbruno'
        }
      ]
    },
    {
      title: 'Research',
      items: [
        {
          description: 'Creating a Cross-Platform Mobile App',
          link: '',
          subItem:
            'Conducted research with a colleague on the process & best toolset for building a cross-platform mobile app. The culmination of our research was developing an MVP of a mobile app, Bizi Marketplace.'
        },
        {
          description:
            'Quantum Computing - The Catalyst of a Computing Revolution',
          link: '',
          subItem:
            'Conducted research with a colleague on the potential impact of quantum computing on our everyday lives in a very near future.'
        }
      ]
    }
  ]
};
