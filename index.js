var data = [];
async function load() {
  for (let i = 1; i <= 7; i += 1) {
    const res = await fetch("./data/" + i + ".json").then(async (res) => {
      var cont = await res.json();
      data.push(cont);
      var response = await res.status;
    });
  }
}
if (data.length === 0) load();

const button = document.getElementById("field");
button.addEventListener("keyup", search);
function hide() {
  let children = document.querySelectorAll(".container");
  for (var i = 0; i < children.length; ++i) {
    children[i].style.display = "none";
  }
   children = document.querySelectorAll(".on");
  for (var i = 0; i < children.length; ++i) {
    children[i].style.display = "none";
  }
}
function deletecourses() {
    let children = document.querySelectorAll(".ok");
    for (var i = 0; i < children.length; ++i) {
      children[i].style.display = "none";
    }
  }
function show() {

    children = document.querySelectorAll(".on");
    for (var i = 0; i < children.length; ++i) {
      children[i].style.display = "";
    }
  }
function addcourse(data){
const style = document.createElement('style');
  style.innerHTML = `
         .pho{
            display:flex;
         }
      `;
      document.head.appendChild(style);
    for(let i = 0 ; i < data.length ; i+=1){
        console.log(data[i].instructors[0].name)
        const div = document.createElement('div');
     
    div.className = 'ok';
    console.log(div)

    div.innerHTML = `
    <img src="${data[i].image}">
    <figcaption>
        <h3>${data[i].title}</h3>
        <p>${data[i].instructors[0].name}</p>
        <span style="color: rgb(244, 88, 88);">4.4</span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star-half checked"></span>
        <div>
            <span>${data[i].price}</span>
            <span style="text-decoration-line: line-through; font-weight: 100;">${data[i].price}</span>
       </div>
    </figcaption>
  `;

  document.getElementById('ph').appendChild(div);
    const style = document.createElement('style');
  style.innerHTML = `
        .ok img{
            width:20rem;
            
        }
        .ok{
        }
      `;
      document.head.appendChild(style);

    }

}

function search() {
    var courses = []
    deletecourses();

  vis = false;
  var word = document.getElementById("field").value;
  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[i].courses.length; j += 1) {
      var s = data[i].courses[j].title;
      word =word.toLowerCase();
      s = s.toLowerCase()
      if (s.search(word) !== -1 && word.length >= 2) {
         hide()
 //        console.log(data[i].courses[j])
        courses.push(data[i].courses[j]);
        vis = true;

      }
      else if(word.length >= 2){
        hide()
      }
      else if(word.length < 2){
        show()
      }
    }
  }
  if (!vis) {
    console.log("there isnot data to show ");
  }
    else{
addcourse(courses);
  }
  courses = []
}
