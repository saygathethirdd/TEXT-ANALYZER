  const input=document.querySelector('.text-area');
  const countWord=document.querySelector('.word-count');
  const countCharacter=document.querySelector('.character-count');
  const countSentence=document.querySelector('.sentence-count');

  const mostAppeared=document.querySelector('.most-appeared');
  const exculede=document.querySelector('.exclude');
  input.addEventListener('keyup', (event)=>{
    if(event.key !== 'Enter'){
      countWordFunc();
      countCharFunc();
      countSentenceFunc();
      mostAppearedChar();
    }    
  });


function countSentenceFunc(){
 let sentenceInput=input.value.split('.');
 let countt=0;
 for(let val of sentenceInput){
  let valWord=val.split(' ').length;
  if(valWord >= 2){
    countt++;
  }else{
    continue;
  }
 }
return countSentence.innerHTML=countt;   
}




function countCharFunc(){
  let characterLength=input.value.length;
  let spaceExcluded=exculede.checked;

console.log(input.value.split(''));
    if(spaceExcluded){
      let countt=0;
      let inputVal=input.value.split('');
  for(let val of inputVal){
    if(val === ' '){
      continue;
    }else{
       countt++;
    }
  }
    countCharacter.innerHTML=countt;
    }else{
       return countCharacter.innerHTML=characterLength;
    }

}


function countWordFunc(){
 let wordInput=input.value.split(' ');
 let countt=0;
 for(let val of wordInput){
  if(val){
    countt++;
  }else{
    continue;
  }
 }
 return  countWord.innerHTML=countt;
}



/*
function mostAppearedCharFunc(){
  let val=input.value.split('');
  let letters='abcdefghijklmnopqrstuvwxyz';
  let valA={
    no:0,
    letter:'a'
  };


 for(let i=0; i<letters.length; i++){
  let count=0;

  for(let el of val){
   if(letters[i]=== el.toLowerCase()){
    count++;
   }
  }

  if(Number(count) > Number(valA.no)){
    valA.no=count;
    valA.letter=letters[i];
  }else{
    continue;
  }
}
return mostAppeared.innerHTML=`Most appeard letter is ${valA.letter}`;
}

*/



function mostAppearedChar(){
 let val=input.value.split('');
 let lettersToCompare='abcdefghijklmnopqrstuvwxyz';
 let letters={};
 for(let valElement of val){
  if(lettersToCompare.includes(valElement.toLowerCase())){
  let findLetterInObject=letters.hasOwnProperty(valElement);
  if(findLetterInObject){
    letters[valElement.toLowerCase()]+=1
  }else{
    letters[valElement.toLowerCase()]=1;
  }
 }
 else{
  continue;
 } 
}


 let mostAppearedLetter=0;
 let theLetter='';
 for(let letter in letters){
   if(letters[letter] > mostAppearedLetter){
    mostAppearedLetter=letters[letter];
    theLetter=letter;
   }else{
    continue;
   }
 }
 return mostAppeared.innerHTML=`Most appeard letter is ${theLetter}`;
}

const toggleButton=document.querySelector('.toggle');

toggleButton.addEventListener('click',toggleColor);

function toggleColor(){
 document.body.classList.toggle('light-mode');
}