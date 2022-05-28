async function cats() {
  div_cat.setAttribute("style", "display:none");
  var data = await fetch("https://api.thecatapi.com/v1/breeds");
  var cats = await data.json();

  var catname_uppercase = document.getElementById("name").value;
  var cats_name =
    catname_uppercase.charAt(0).toUpperCase() + catname_uppercase.slice(1);

  var cat_image = document.createElement("div");
  document.body.append(cat_image);
  var cats_div = document.createElement("div");
  cats_div.innerHTML = `
    <h1 id="catname">Name </h1>
    <h1 id="Orgin">Orgin</h1>
    <h1 id="Description">Description</h1>`;
  document.body.append(cats_div);
  var name = document.getElementById("catname");
  var origin = document.getElementById("Orgin");
  var description = document.getElementById("Description");
  var image = document.getElementById("image");
  if (cats_name == "") {
    alert("Search with cats name");
    window.location.reload();
}
  for (var index in cats) {
    if (cats[index].name === cats_name) {
      name.innerText = `Name : ${cats[index].name}`;
      origin.innerText = `Origin : ${cats[index].origin}`;
      description.innerText = `Description : ${cats[index].description}`;
      cat_image.innerHTML = `<img width="400px" height="300px" src="${cats[index].image.url}" alt=""></img>`;
    }
  }
  var refresh = document.createElement("button");
  refresh.innerHTML = `<input type="button" value="Reload Page" onClick="window.location.reload(true)">
  `;
  cats_div.append(refresh);
}

var div_cat = document.createElement("div");
document.body.append(div_cat);
div_cat.innerHTML = `<h1>Cats Breed and Photo</h1>
<input type="text" id="name" placeholder="Cat Name">
    <button id="search" onclick="cats()">Search</button>`;
