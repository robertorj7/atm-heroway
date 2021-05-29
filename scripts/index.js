const input = document.querySelector('input');
const buttonClear = document.querySelector('.action.gray');
const buttonConfirm = document.querySelector('.action.pink');
const withdrawInput = document.querySelector('.withdraw');
const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {  
  number.addEventListener('click', () => {
    if (input.value == 0) {
      input.value = number.innerHTML;
    } else {
      input.value += number.innerHTML;
    }
  })  
})

buttonClear.addEventListener('click', () => {
  input.value = 0;
  withdrawInput.innerHTML = "";
})

buttonConfirm.addEventListener('click', () => {
  const value = Number(input.value);
  let withdrawText = [];    

  withdrawInput.innerHTML = "";
  
  if (value == 0 || value == null) {
    withdrawInput.innerHTML = "Erro de valor nulo!";    
    return;
  }  

  let hundredNotes = Math.floor(value / 100);
  let rest = value % 100;    
  printNotes(hundredNotes, "hundred");

  if (rest !== 0) {
    let fiftyNotes = Math.floor(rest / 50);
    rest %= 50;
    printNotes(fiftyNotes, "fifty");

    if (rest !== 0) {
      let twentyNotes = Math.floor(rest / 20);
      rest %= 20;
      printNotes(twentyNotes, "twenty");

      if (rest !== 0) {
        let tenNotes = Math.floor(rest / 10);
        rest %= 10;        
        printNotes(tenNotes, "ten");

        if (rest !== 0) {
          withdrawInput.innerHTML = "Erro de notas indisponíveis!";
          input.value = 0;
          return;
        }
      }
    }
  }

  function printNotes(noteQuant, noteValue) {
    for (let i=0; i<noteQuant; i++) {
      switch (noteValue) {
        case "hundred":
          withdrawText.push("$ 100 ");
          break;
        case "fifty":
          withdrawText.push("$ 50 ");
          break;
        case "twenty":
          withdrawText.push("$ 20 ");
          break;
        case "ten":
          withdrawText.push("$ 10 ");
          break;
        default:
          break;
      }      
    }
  }

  withdrawInput.innerHTML = withdrawText;

  input.value = 0;
})

