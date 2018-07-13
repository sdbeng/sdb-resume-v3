//Work JSON
var work = {
  jobs: [
    {
      employer: "Trilogy-UC BErkeley",
      title: "Junior Full Stack Web Developer TA",
      location: "Berkeley, CA",
      dates: "2017 - Present",
      description:
        "Providing Bootcamp support to a group of talented undergraduate individuals who pursue a career change in their lives. Lead discussions, provide feedback and guide students in their daily homework activities and challenges. Being an active mentor in their path to succeed with all 4 final projects."
    },
    {
      employer: "MDUSD",
      title: "Technology Coordinator",
      location: "Concord, CA",
      dates: "2015 - present",
      description:
        "Provide one-on-one and in-classroom instructional technology support to faculty and staff members to create and strengthen online learning opportunities for mdusd students; assist the office VP with data analisys. Work collaboratively with the IT department on web design/redesign projects; develop and provide technical support for interactive web applications by utilizing various programming languages including , HTML, CSS and Javascript; use the SchoolLoop content management system to maintain the website; Use InDesign, Photoshop. Illustrator, Publisher and Acrobat to design and publish online documents including postcards, flyers, brochures, web banners and email invitations"
    },
    {
      employer: "SDB Webs",
      title: "Front End Developer",
      location: "Concord, CA",
      dates: "2009 - 2016",
      description:
        "Building web applications to help the community and non profits solve different problems when trying to access data on the web or mobile devices. As contracted Front End Developer for a National Two-Way Bilingual Org. I developed 4 iOS iPhone Apps & published to the App Store for the Annual National TWBI Conference. (http://goo.gl/TmwMyH). Re-designed and created their front end website and kept up to date according to their CEO guidelines. Created Call for Papers angularjs front and back end to collect Conference presenters data."
    }
  ]
};
// Display work json info
work.display = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last")
      .append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
      .append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
      .append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
      .append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
      .append(
        HTMLworkDescription.replace("%data%", work.jobs[job]["description"])
      );
  }
};
// Projects JSON
var projects = {
  projects: [
    {
      title: "Project-1",
      "date worked": "Dec, 2016 - Jan, 2017",
      description: "Blog project for Udacity React Nanodegree",
      image: "",
      github: "",
      demo: "#",
      progress: 100
    },
    {
      title: "Project-2",
      "date worked": "Nov, 2016",
      description:
        "MyReads: A Book Tracking App project for Udacity React Nanodegree",
      image: "",
      github: "",
      demo: "",
      progress: 100
    },
    {
      title: "Resume",
      "date worked": "Oct, 2015",
      description:
        "Resume project for Udacity Front-end Web Development Nanodegree",
      image: "",
      github: "https://github.com/sdbeng/sdb-resume-v3",
      demo: "",
      progress: 90
    },
    {
      title: "Project-3",
      "date worked": "Oct, 2013 - Dec, 2013",
      description: "Readable. Udacity React Nanodegree",
      image: "",
      github: "",
      demo: "",
      progress: 80
    },
    {
      title: "React Native App",
      "date worked": "Jul, 2014 - Aug, 2014",
      description: "Mobile Flashcards React Native App",
      image: "",
      github: "",
      demo: "flashcards_view1.png",
      progress: 100
    },
    {
      title: "Project-5",
      "date worked": "Sept, 2014 - Oct, 2014",
      description: "",
      github: "",
      demo: "",
      progress: 80
    }
  ]
};
// Display project json info
projects.display = function() {
  var d3Div = new Array(projects.projects.length);
  var progressDiv = new Array(projects.projects.length);

  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    $(".project-entry:last")
      .append('<div id="div' + project + '"></div>')
      .append(
        HTMLprojectTitle.replace("%data%", projects.projects[project]["title"])
      )
      .append(
        HTMLprojectDates.replace(
          "%data%",
          projects.projects[project]["date worked"]
        )
      )
      .append(
        HTMLprojectDescription.replace(
          "%data%",
          projects.projects[project]["description"]
        )
      );
    // display demo or github json info if they exisit
    if (projects.projects[project]["demo"] != undefined)
      $(".project-entry:last").append(
        HTMLprojectDemo.replace("#", projects.projects[project]["demo"])
      );
    if (projects.projects[project]["github"] != undefined)
      $(".project-entry:last").append(
        HTMLprojectGithub.replace("#", projects.projects[project]["github"])
      );

    // call d3 progress chart function
    projects.progressChart(
      d3Div,
      progressDiv,
      project,
      "div" + project,
      projects.projects[project]["progress"]
    );
  }
};
// project d3 progress chart function
projects.progressChart = function(
  d3Div,
  progressDiv,
  project,
  container,
  value
) {
  d3Div[project] = d3.select(document.getElementById(container));

  progressDiv[project] = radialProgress(document.getElementById(container))
    .diameter(150)
    .value(value)
    .render();
};

//Bio JSON
var bio = {
  "first name": "Sergio",
  "last name": "Barrera",
  role: "Full-Stack Web Developer",
  "welcome message":
    "I'm passionate about Full Stack development. Currently working as Full Stack developer/Teaching Assistance at the UC Berkeley. Feel free to check out my Github repositories and demo projects. You can also find me on Linkedin and Twitter.",
  "bio pic": "#",
  contacts: {
    "mobile number": "000-000-0000",
    email: "sdbeng@gmail.com",
    "github username": "sdbeng",
    "twitter handle": "@sergb_appdev",
    location: "Concord, CA"
  },
  skills: [
    "HTML",
    "CSS",
    "Javascript",
    "Node",
    "MySQL",
    "React",
    "Python",
    "mongodb"
  ]
};
bio.display = function() {
  var formattedFName = HTMLheaderFName.replace(
    "%data%",
    bio["first name"].toUpperCase()
  );
  var formattedLName = HTMLheaderLName.replace(
    "%data%",
    bio["last name"].toUpperCase()
  );
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());
  var formattedMobile = HTMLmobile.replace(
    "%data%",
    bio.contacts["mobile number"]
  );
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
  var formattedGithub = HTMLgithub.replace(
    "%data%",
    bio.contacts["github username"]
  );
  var formattedTwitter = HTMLtwitter.replace(
    "%data%",
    bio.contacts["twitter handle"]
  );
  var formattedLocation = HTMLlocation.replace(
    "%data%",
    bio.contacts["location"]
  );
  var formattedBioPic = HTMLbioPic.replace("%data%", bio["bio pic"]);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace(
    "%data%",
    bio["welcome message"]
  );

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedLName);
  $("#header").prepend(formattedFName);
  $("#header").append(formattedWelcomeMsg);
  $("#topContacts ul").append(formattedMobile);
  $("#topContacts ul").append(formattedEmail);
  $("#topContacts ul").append(formattedGithub);
  $("#topContacts ul").append(formattedTwitter);
  $("#topContacts ul").append(formattedLocation);
};
//Education JSON
var education = {
  schools: [
    {
      name: "University of Illinois at Urbana-Champaign",
      location: "",
      degree: "Certification",
      majors: ["Unix Admin", "Web Development", "Databases"],
      dates: "2008-2010",
      url: ""
    },
    {
      name: "Universidad Tecnologica Nacional",
      location: "Cordoba, Argentina",
      degree: "Bachelors",
      majors: ["B.S. in Electronics"],
      dates: "July 1997",
      url: ""
    }
  ],
  onlineCourses: [
    {
      title: "React Front-end Development",
      school: "Udacity",
      dates: 2018,
      url: "https://www.udacity.com/nanodegrees"
    },
    {
      title: "Full Stack Web Development",
      school: "Udacity",
      dates: 2018,
      url: "https://www.udacity.com/nanodegrees"
    },
    {
      title: "CS50's Web Programming with Python and JavaScript",
      school: "EDX Berkeley",
      dates: 2018,
      url: "https://courses.edx.org/dashboard"
    }
  ]
};
// Display education json info
education.display = function() {
  for (var school in education.schools) {
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last")
      .append(
        HTMLschoolDates.replace("%data%", education.schools[school]["dates"])
      )
      .append(
        HTMLschoolName.replace(
          "%data%",
          education.schools[school]["name"]
        ).replace("#", education.schools[school]["url"])
      )
      .append(
        HTMLschoolLocation.replace(
          "%data%",
          education.schools[school]["location"]
        )
      );

    for (var major in education.schools[school].majors) {
      $(".education-entry:last").append(
        HTMLschoolMajor.replace(
          "%data%",
          education.schools[school]["majors"][major]
        )
      );
    }
  }
  $("#education").append(HTMLonlineClasses);
  // Display online courses
  for (var onlineCourse in education.onlineCourses) {
    var num = education.schools.length + parseInt(onlineCourse);
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last")
      .append(
        HTMLonlineDates.replace(
          "%data%",
          education.onlineCourses[onlineCourse]["dates"]
        )
      )
      .append(
        HTMLonlineSchool.replace(
          "%data%",
          education.onlineCourses[onlineCourse]["school"]
        )
      )
      .append(
        HTMLonlineTitle.replace(
          "%data%",
          education.onlineCourses[onlineCourse]["title"]
        )
      )
      .append(
        HTMLonlineURL.replace(
          "%data%",
          education.onlineCourses[onlineCourse]["url"]
        )
      );
  }
};
//Map
$("#mapDiv").append(googleMap);

// chartjs library from: http://www.chartjs.org/docs/#polar-area-chart
var polarData = [
  {
    value: 10,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "HTML",
    labelcolor: "red"
  },
  {
    value: 7,
    color: "#F06613",
    highlight: "#FF5A5E",
    label: "CSS",
    labelcolor: "orange"
  },
  {
    value: 7,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Javascript",
    labelcolor: "green"
  },
  {
    value: 4,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Node",
    labelcolor: "yellow"
  },
  {
    value: 4,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "Python",
    labelcolor: "gray"
  },
  {
    value: 7,
    color: "#23582b",
    highlight: "#A8B3C5",
    label: "Git",
    labelcolor: "darker-green"
  },
  {
    value: 5,
    color: "#4D5360",
    highlight: "#616774",
    label: "MySQL",
    labelcolor: "darker-gray"
  }
];
// Display a list of skill labels
var skillsChartLabels = function() {
  for (skill in polarData) {
    var skillLabel = polarData[skill].label;
    var skillLabelColor = polarData[skill].labelcolor;
    var skillHTML =
      '<span class="label ' + skillLabelColor + '">' + skillLabel + "</span>";
    $("#skills-list").append(skillHTML);
  }
};

// Call functions
window.onload = function() {
  var ctx = document.getElementById("skills-chart").getContext("2d");
  window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
    responsive: false
  });
  // Call skillsChartLabels function defined
  skillsChartLabels();
};
// Call bio, work, projects and education functions
bio.display();
work.display();
projects.display();
education.display();
