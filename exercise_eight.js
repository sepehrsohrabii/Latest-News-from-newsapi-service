getMovieName = () => {
  const Category = document.getElementById("category").value;
  console.log(Category);
  fetchAPI(Category);
};

let fetchAPI = async (x) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines/sources?category=${x}&apiKey=fc689815bf5e4be9a2e0cb1d9f83c6b9`
    );

    const result = await response.json();

    sendResults(result["sources"]);
  } catch (e) {
    console.log("Error", e);
  }
};

sendResults = (list) => {
  console.log(list);
  document.getElementById("tasksList").innerHTML = "";
  for (item of list) {
    var entry = document.createElement("li");
    entry.className = "p-3";
    entry.appendChild(
      document.createTextNode(
        `Category: ${item["category"]} - Country: ${item["country"]} - Description: ${item["description"]} - ID: ${item["id"]} - Language: ${item["language"]} - Name: ${item["name"]} - URL: ${item["url"]}`
      )
    );
    tasksList.appendChild(entry);
  }
};

mainFunction = () => {
  getMovieName();
};
