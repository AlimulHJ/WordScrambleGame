
const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;
let newWords ="";
let randWords = "";
let swords = ['java','javascript','c++','php','c#','html','css','reactjs','angular','android','sql'];

btn.addEventListener('click', function(){
  if(!play){
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle('hidden');
    newWords = createNewWords();
    randWords = scrambleWords(newWords.split(""));
    console.log(randWords);
    msg.innerHTML = `Guess the word ${randWords}`;
  }else{
    let tempWord = guess.value;
    if(tempWord === newWords){
      // console.log("Correct.");
      play = false;
      msg.innerHTML = `Corrent. It's ${newWords}`;
      btn.innerHTML = "Start again.";
      guess.classList.toggle('hidden');
      guess.value = "";
    }else{
      // console.log("Incorrect!");
      guess.value = "";
      msg.innerHTML = `Incorrent! Try again : ${randWords}`;
    }
  }
  
})


const createNewWords = () => {
  let ranNum = Math.floor(Math.random() * swords.length);
  // console.log(ranNum)
  let newTempswords= swords[ranNum];
  return newTempswords;
}

const scrambleWords = (arr) =>{
  for(let i=arr.length-1; i>=0; i--){
    let temp= arr[i];
    console.log(temp);
    let j = Math.floor(Math.random()*(i+1));
    console.log("Value of i "+i);
    console.log("Value of j "+j);

    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}