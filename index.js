const buttonElement = document.querySelector("#randomColorButton");
const setColorButton = document.querySelector("#setColorButton");

const colorArrayx = ['red', 'blue', 'green', 'purple', 'gray'];

const colorArray =[
    {
      name: "red",
      motto: "Rose Red",
    },
    {
      name: "blue",
      motto: "Ocean Blue",
    },
    {
      name: "gray",
      motto: "Smoke Gray",
    },
    {
      name: "green",
      motto: "Grass Green",
    },
    {
      name: "purple",
      motto: "Deep Purple",
    },
  ];


function changeColors() {
    // const randomIndex= Math.floor(Math.random()*(colorArray.length+1))
    const randomIndex = Math.floor(Math.random() * colorArray.length)
    console.log(randomIndex);

    document.querySelector("body").style.backgroundColor = colorArray[randomIndex].name;
    document.querySelector("#colorDesc").textContent = colorArray[randomIndex].motto;
    document.querySelector("#colorName").textContent = colorArray[randomIndex].name;


}

function addColor() {

    const userInput = document.querySelector("#colorInput")

    const colorData= userInput.value.split(":");

    const colorObject ={
        name:colorData[0],
        motto:colorData[1]
    }
    colorArray.push(colorObject)
    console.log(colorObject);
    
     const searchIndex=colorArray.findIndex(color => color.name ==colorObject.name )
    if ( searchIndex ==-1 ){
        document.querySelector("body").style.backgroundColor = colorObject.name;
        document.querySelector("#colorDesc").textContent = colorObject.motto;
        document.querySelector("#colorName").textContent = colorObject.name;
        colorArray.push(colorObject)
    }
        
    else console.log(userInput.value + " böyle renk var");

   

    userInput.value = "";
    userInput.focus();

}

buttonElement.addEventListener("click", changeColors)
setColorButton.addEventListener("click", addColor)
//buttonElement.addEventListener("click", ()=> changeColors())
// buttonElement.addEventListener("click", function () {
//     changeColors();
// })
