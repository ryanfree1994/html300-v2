/* linkedIn_data array represents local JSON data */
const linkedIn_data = [{
    "name": "Steve Smith",
    "jobTitle": "Project Manager",
    "company": "Front End Dev Co",
    "experience": "3 years",
    "school": "UW",
    "major": "Marketing",
    "email": "steve@fedc.com",
    "linkedInUrl": "steve.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", ".NET", "C#"
    ]
  },/*something weird is occurring with second object*/
  {
    "name": "Aaron Katz",
    "jobTitle": "Full Stack Developer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "SU",
    "major": "Computer Science",
    "email": "aaronNotMyemail@uw.com",
    "linkedInUrl": "aaron.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "PHP", "Twig"
    ]
  },
  {
    "name": "Kyle Hendricks",
    "jobTitle": "Starting Pitcher",
    "company": "Chicago Cubs",
    "experience": "12 years",
    "school": "USC",
    "major": "Pitching",
    "email": "kyleH@cubs.com",
    "linkedInUrl": "kyle.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "Ruby", "Rails"
    ]
  },
  {
    "name": "Michael Jordan",
    "jobTitle": "Point Guard",
    "company": "Chicago Bulls",
    "experience": "20 years",
    "school": "UNC",
    "major": "Trash Talking",
    "email": "mJordan@bulls.com",
    "linkedInUrl": "mJordas.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "Java", "Spring"
    ]
  }
];

/*creating template function*/
const linkedInHTML = linkedIn_data.map(function(template) {
  let linkedIn_person =
  `<div class="main">
      <div class="main__first-background">
        <div class="main__head-title">
          <img src="img/unsplash-headshot.jpg" alt="Photo of Steve Smith headshot" class="main__img-headshot">
          <h1 class="main__h1">${template.name}</h1>
          <p class="main__p">${template.jobTitle}</p>
        </div>
        <div class="main__card-content">
          <p class="main__p-content"><b>Company Name: </b>${template.company}</p>
          <p class="main__p-content"><b>Experience: </b>${template.experience}</p>
          <p class="main__p-content"><b>School: </b>${template.school}</p>
          <p class="main__p-content"><b>Major: </b>${template.major}</p>
          <p class="main__p-content"><b>Email: </b>${template.email}</p>
          <img class="main__linkedin-img" src="img/linkedin.svg" alt="LinkedIn logo">
          <p class="main__p-content">${template.linkedInUrl}</p>
        </div>
      </div>
  </div>`;
  return linkedIn_person;
});

/*inserting templates based on length of JSON data*/
const insert_template = document.getElementById("template-hook");

for (let i = 0; i < linkedIn_data.length; i++) {
  insert_template.insertAdjacentHTML("afterbegin", linkedInHTML[i]);
}
