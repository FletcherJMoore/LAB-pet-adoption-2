const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Grey",
    specialSkill: "Never sheds.",
    typeOfPet: "cat",
    imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
      id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill: "Doesn't bite.",
    typeOfPet: "dino",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1zMd9rsnu5IhPLz57tvIYSdtNjLhnBFY6w&usqp=CAU",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Green",
    specialSkill: "Alwasy finds a way to comfort you even if you're down.",
    typeOfPet: "dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    id: 4,
    name: "Coco",
    color: "Yellow",
    specialSkill: "Burps minimally.",
    typeOfPet: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    typeOfPet: "cat",
    imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    id: 6,
    name: "Tiger",
    color: "Brown and White",
    specialSkill: "Can run for miles without getting tired",
    typeOfPet: "dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    id: 7,
    name: "Oreo",
    color: "White",
    specialSkill: "Able to hide in the smallest of places",
    typeOfPet: "cat",
    imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    typeOfPet: "dino",
    imageUrl: "https://pics.craiyon.com/2023-06-08/7ba3dfac97814500820dbf8929d1f008.webp"
  },
  {
    id: 9,
    name: "Sassy",
    color: "Grey",
    specialSkill: "Can leave any couch unscratched",
    typeOfPet: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    id: 10,
    name: "Sammy",
    color: "Yellow",
    specialSkill: "Listens attentively to boring stories.",
    typeOfPet: "cat",
    imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    typeOfPet: "dino",
    imageUrl: "https://variety.com/wp-content/uploads/2022/06/2512_D093_00185RV4_CROP-e1654811831650.jpeg"
  },
  {
    id: 12,
    name: "Buster",
    color: "Brown and White",
    specialSkill: "Doesn't bark at the mailman.",
    typeOfPet: "dog",
    imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    id: 13,
    name: "Chester",
    color: "Black",
    specialSkill: "Will always bring the ball back after you throw it.",
    typeOfPet: "dog",
    imageUrl: "https://animalcarecentersmyrna.com/wp-content/uploads/2020/09/black-dog-.jpeg"
  },
  {
    id: 14,
    name: "Samantha",
    color: "Black and White",
    specialSkill: "Always up for dessert.",
    typeOfPet: "cat",
    imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    id: 15,
    name: "Coco",
    color: "Yellow",
    specialSkill: "Burps minimally.",
    typeOfPet: "cat",
    imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Can outrun any car.",
    typeOfPet: "dino",
    imageUrl: "https://i1.pickpik.com/photos/307/341/287/dinosaur-gad-mammal-dino-preview.jpg"
  },
  {
   id: 17,
    name: "Muffin",
    color: "Brown and White",
    specialSkill: "Doesn't get angry at guests.",
    typeOfPet: "cat",
    imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Can chase a laser for hours",
    typeOfPet: "dino",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBOBdiL19nvqxMNYKiU_1uD8shBKatwjfkA&usqp=CAU"
  },
  {
    id: 19,
    name: "Callie",
    color: "Black and White",
    specialSkill: "Listens attentively to boring stories.",
    typeOfPet: "dog",
    imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
  },
  {
    id: 20,
    name: "Spooky",
    color: "White",
    specialSkill: "Uses litter box at appropriate hours.",
    typeOfPet: "cat",
    imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Black",
    specialSkill: "Has scales harder than steel.",
    typeOfPet: "dino",
    imageUrl: "https://img.artpal.com/729972/10-23-5-7-10-45-52m.jpg"
  },
  {
      id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Sleeps for 12 hours at a time.",
    typeOfPet: "cat",
    imageUrl: "https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1286283054.jpg"
  },
  {
      id: 23,
    name: "Buddy",
    color: "Black and White",
    specialSkill: "Enjoys fine wine.",
    typeOfPet: "dog",
    imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
      id: 24,
    name: "George",
    color: "Brown",
    specialSkill: "Is loving with all animals.",
    typeOfPet: "dog",
    imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
  },
  {
    id: 25,
    name: "Salem",
    color: "Black",
    specialSkill: "Can go an entire day without giving bad luck.",
    typeOfPet: "cat",
    imageUrl: "https://us.feliway.com/cdn/shop/articles/10_fascinating_facts_about_black_cats-3.jpg?v=1667409596"
  },
  {
      id: 26,
    name: "Bubba",
    color: "Grey",
    specialSkill: "Cleans himself.",
    typeOfPet: "dog",
    imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
      id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    typeOfPet: "dino",
    imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
      id: 28,
    name: "Nala",
    color: "Grey",
    specialSkill: "Dances when he has to.",
    typeOfPet: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
      id: 29,
    name: "Oscar",
    color: "Grey",
    specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
    typeOfPet: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
  },
  {
      id: 30,
    name: "Lucy",
    color: "Grey",
    specialSkill: "Can see the top of the tallest mountain.",
    typeOfPet: "dino",
    imageUrl: "https://as2.ftcdn.net/v2/jpg/02/59/13/99/1000_F_259139944_4JR1zTCug0P7KBWyq9stiPj5nsYHKODE.jpg"
  },
];


const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}; 

// const targetingApp = document.querySelector("#animals")
const cardsOnDom = (pets) =>{
let domString = ""
for (const pet of pets) {
domString += `<div class="card" style="width: 18rem;">
    <img src=${pets.imageUrl} class="card-img-top" alt=${pets.name}>
    <div class="card-body">
      <h5 class="card-title">${pet.name}</h5>
      <h6>${pet.type}</h6>
      <h6>${pet.color}</h6>
      <p class="card-text">${pet.specialSkill}</p>
    </div>
  </div>`;
}
};

//targetingApp.innerHTML = domString;

const filter = (array, type) => {
const typeArray = [];
// array.forEach((item) =>{
// if (item.type === type) {
// typeArray.push(item)
// }
// });

for (const pet of array) {
  if (array.type === type) {
    typeArray.push(pet);
  }
}
return typeArray;
};


const showAllButton = document.querySelector("#show-btn");
const showDinoButton = document.querySelector("#dino");
const showCatButton = document.querySelector("#cat");
const showDogButton = document.querySelector("#dog");


showAllButton.addEventListener("click", () => {
cardsOnDom(pets)
//targetingApp.innerHTML(pets);
});

showDinoButton.addEventListener("click", () => {
const allDinos = filter(pets, "dino");
cardsOnDom(allDinos);
//function filterDinos () {
// const filterPets = pets.filter(type.dino === "dino");
//return filterPets;
//}
});


showCatButton.addEventListener("click", ()  => {
const allCats = filter(pets, "cat");
cardsOnDom(allCats);
//function filterCats () {
// const filterPets = pets.filter(type.cat === "cats");
//return filterPets;
//}
});


showDogButton.addEventListener("click", () => {
const allDogs = filter(pets, "dog");
cardsOnDom(allDogs);
//function filterDogs () {
//const filterPets = pets.filter(type.dog === "dogs");
//return filterPets;
//}
});


cardsOnDom(pets);

const addPetObj = {
  id: pets.length + 1,
  name: document.querySelector("#name").value,
  email: document.querySelector("#email").value,
  color: document.querySelector("#color").value,
  specialSkill: document.querySelector("#specialSkill").value,
  image: document.querySelector("#imageUrl").value,

}
