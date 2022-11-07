// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Bishal",
  middleName: "Ranjan",
  lastName: "Swain",
  koreanName:"비샬",
  message: " Give me Data and I'll give you a Model. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/bluesaiyancodes",
    },
    //{
    //  image: "fa-facebook",
    //  url: "https://www.facebook.com/blue.bishal",
    //},
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/_b.l.u.e._/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/bishal-swain-1b2740159/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/blue_bishal",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/bishal.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/bishal.jpg"),
  imageSize: 375,
  message:
    "My name is Bishal Ranjan Swain. I am currently pursuing my PhD in Computer Vision and Pattern Recognition Lab of Kumoh National Institute of Technology. I currently working on Allergic Rhinitis; visit GitHub for more information. I have a keen interest in Artificial Intelligence having special attention to Deep Learning. I would like to apply my knowledge in the domain to solve key bottlenecks and ensure a progessive output.",
  resume: "https://drive.google.com/file/d/1J2pBdkQZBPjK3kXI5xEn-YM79LXFWbc9/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Highlighted Projects",
  gitHubUsername: "bluesaiyancodes", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["UltraViolet", "DroneWork", "WindatShar", "Safarnama", "covid19testing", "FaceRecognitionGUI_v1"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/bishal.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/bishal.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "Java", value: 80 },
    { name: "JavaScript", value: 65 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for collaboration in the domain of Deep Learning! If you have an interesting project or, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "bishalswain@acm.org",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Research Associate',
      companyname:'Indian Institute of Science',
      companylogo: require('../assets/img/iisc.png'),
      date: 'July 2020 – June 2021',
    },
    {
      role: 'Internship',
      companyname:'National Atmospheric Research Laboratory',
      companylogo: require('../assets/img/narl.png'),
      date: 'Dec 2019 – May 2020',
    },
  ]
}

const educations = {
  show: true,
  heading: "Education",
  lists: [
    {
      university: "Kumoh National Institute of Technology",
      degree: "Ph.D in Computer Science",
      time: "2022",
      status: "On Going",
      description:""
    },
    {
      university: "Chonnam National University",
      degree: "Korean Language and Training",
      time: "2021-2022",
      status: "Graduated",
      description:""
    },
    {
      university: "Pondicherry University",
      degree: "Master of Science in Computer Science",
      time: "2018-2020",
      status: "Graduated",
      description:""
    },
    {
      university: "Odisha University of Agriculture and Technology",
      degree: "Bachelor of Science in Computer Science",
      time: "2015-2018",
      status: "Graduated",
      description:"Who does not want to learn how machines learn?"
    }]
  };

  const portfolio = {
    show: true,
    heading: "Certifications",
     list: [
     {
      title: "Machine Learning",
      url: "https://coursera.org/share/6b8602f0824e72b8de19f52dd72b51cd",
      notes: "An introduction to machine learning, datamining, and pattern recognition covering supervised and unsupervised learning.",
      thumbnail:require("../assets/img/stanford.png"), 
     },
     {
      title: "Deep Learning",
      url: "https://coursera.org/share/5b6a160e7d531d158bffca2b0d252574",
      notes: "The Deep Learning Specialization will help in understanding the capabilities, challenges, and consequences of deep learning.",
      thumbnail:require("../assets/img/deeplearning.png"), 
     },
     {
      title: "Docker and Kubernetes",
      url: "https://www.udemy.com/certificate/UC-5df012b4-cb48-4d25-a45b-b54dc3ddc277/",
      notes: "Build, test, and deploy Docker applications with Kubernetes while learning production-style development workflows.",
      thumbnail:require("../assets/img/udemy.png"), 
     },
     {
      title: "Deep Learning for Business",
      url: "https://coursera.org/share/84f58084b0b468dbafb58279625abfcb",
      notes: "The course focuses on building business strategies and enable to conduct technical planning on new DL and ML services.",
      thumbnail:require("../assets/img/yonsei.png"), 
     },
     {
      title: "RHCSA",
      url: "https://drive.google.com/file/d/10C66GJ9f0vcLOpY4uZz2qpfbz7KFUhgI/view",
      notes: "A Red Hat Certified System Administrator performs the core system administration skills required in RHEL environments.",
      thumbnail:require("../assets/img/redhat.png"), 
     },
     {
      title: "Ethical Hacking Expert",
      url: "https://drive.google.com/file/d/1pPJkgPXXVL1S8pWzZpARWfHD60RKDmMh/view",
      notes: "The traning program covers investigation, scanning, gaining access, maintaining access, and covering tracks.",
      thumbnail:require("../assets/img/star.png"), 
     },
    
    ]
  
  };

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, educations, portfolio };
