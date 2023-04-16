// variables for apis

/* let cocktailByNameApi =
  "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

let drinkNames;
let drinkData;

fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    drinkData = data.drinks;
    drinkNames = data.drinks[1].strDrink;
    console.log(data);
    console.log(drinkNames);
    console.log(drinkData);
    logDrinks(data);
  });

function logDrinks(data) {
  for (let i = 0; i < 6; i++) {
    console.log(data.drinks[i]);
  }
}

let userSearchInput = prompt("type in drink name");
let searchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userSearchInput;
console.log(searchUrl);

fetch(searchUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < 6; i++) {
      console.log(data.drinks[i].strDrink);
      console.log(data.drinks[i].strDrinkThumb);
    }
  });
 */

// getApi for main display
async function getApi(URL) {
  try {
    const response = await fetch(URL);
    display(response);

    if (!response.ok) {
      throw new Error(
        `Failed to retrieve data: ${response.status} ${response.statusText}`
      );
    }
    drinkData = await response.json();
    displayFeatured(drinkData);
    displayPopular(drinkData);
    /*   display(drinkData);
    drinkObjectDisplay(drinkData);
    drinkNamesDisplay(drinkData);
    drinkThumbDisplay(drinkData);
    cardDisplay(); */
    //
  } catch (error) {
    console.error(error);
  }
}

getApi("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");

// Simple display arrow functions
let display = (x) => {
  console.log(x);
};

let drinkObjectDisplay = (x) => {
  for (let i = 0; i < 3; i++) {
    console.log(x.drinks[i]);
  }
};

let drinkNamesDisplay = (x) => {
  for (let i = 0; i < 3; i++) {
    console.log(x.drinks[i].strDrink);
  }
};

let drinkThumbDisplay = (x) => {
  for (let i = 0; i < 3; i++) {
    console.log(x.drinks[i].strDrinkThumb);
  }
};

// create drink cards on html
function cardDisplay() {
  for (let i = 25; i < 31; i++) {
    //
    let cardDiv = $("<div>");
    cardDiv.attr("card", "card");
    cardDiv.attr("style", "width: 300px;");

    let cardHeaderDiv = $("<div>");
    cardHeaderDiv
      .addClass("card-header")
      .text(`${drinkData.drinks[i].strDrink}`);

    let cardBodyDiv = $("<div>");
    cardBodyDiv.addClass("card-body");

    let cardImgDiv = $("<img>");
    cardImgDiv
      .addClass("card-img-bottom")
      .attr("src", `${drinkData.drinks[i].strDrinkThumb}`);

    cardBodyDiv.append(cardImgDiv);
    cardDiv.append(cardHeaderDiv).append(cardBodyDiv).append(cardBodyDiv);

    $("#cardContainer").append(cardDiv);
  }
}

function displayFeatured(x) {
  let featuredContainer = $("#featuredContainer");
  let featuredRow = $("<div>");
  featuredRow.attr(
    "class",
    "row align-items-end mx-auto justify-content-center gy-4"
  );
  featuredRow.attr("style", "max-width: 1200px");
  for (let i = 25; i < 28; i++) {
    let featuredCol = $("<div>");
    featuredCol.attr("class", "col-lg-4 col-md-6 col-12 order-lg-1 order-md-1");

    let featuredBox = $("<div>");
    featuredBox.attr("class", "box");

    let featuredCard = $("<div>");
    featuredCard.attr("class", "card");

    let featuredImg = $("<img>");
    featuredImg.attr("src", x.drinks[i].strDrinkThumb);
    featuredImg.attr("class", "card-img-top");

    let featuredTitle = $("<h4>");
    featuredTitle.attr("class", "card-title");
    featuredTitle.text(x.drinks[i].strDrink);

    featuredContainer.append(featuredRow);

    featuredRow.append(featuredCol);

    featuredCol.append(featuredBox);

    featuredBox.append(featuredCard);

    featuredCard.append(featuredImg).append(featuredTitle);
  }
}

function displayPopular(x) {
  let popularContainer = $("#popularContainer");
  let popularRow = $("<div>");
  popularRow.attr("class", "row mx-auto flex-wrap gy-4");
  popularRow.attr("style", "max-width: 1000px");
  for (let i = 60; i < 68; i++) {
    let popularCol = $("<div>");
    popularCol.attr("class", "col-lg-3 col-md-4 col-sm-6 col-12");

    let popularBox = $("<div>");
    popularBox.attr("class", "box");

    let popularCard = $("<div>");
    popularCard.attr("class", "card card-1");
    popularCard.attr("style", "width: 200px");

    let popularImg = $("<img>");
    popularImg.attr("src", x.drinks[i].strDrinkThumb);
    popularImg.attr("class", "card-img-top");

    let popularTitle = $("<h4>");
    popularTitle.attr("class", "card-title");
    popularTitle.text(x.drinks[i].strDrink);

    popularContainer.append(popularRow);

    popularRow.append(popularCol);

    popularCol.append(popularBox);

    popularBox.append(popularCard);

    popularCard.append(popularImg).append(popularTitle);
  }
}
