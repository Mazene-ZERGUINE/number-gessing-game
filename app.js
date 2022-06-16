// getting variables

const easyMode = document.getElementById("easy") ; 
const hardMode = document.getElementById("hard") ; 
const normalMode = document.getElementById("normal") ; 

const level = document.getElementById("level") ; 
const gesses = document.getElementById("gesses") ; 

const submit = document.getElementById("sub") ; 
const input = document.getElementById("gess") ;
const result = document.getElementById("result") ; 

const finalResult = document.getElementById("finalresult") ;
const popUp = document.getElementById("popup") ;
const newGame = document.getElementById("newgame")
const app = document.getElementById('app') ; 

// easy mode // 

easyMode.addEventListener('click' , function()
{
    level.innerHTML = "you have selected the easy mode gess a number between 1 and 50"

    // the number of gesses // 

    var gessNumber = 20 ; 
    gesses.innerHTML = "you have " + gessNumber + " shots try to gesse the right number" ; 

    const numberToGess = Math.round(Math.random() * 50) ; 
    console.log(numberToGess);
  
    // when w click the submit button //
    submit.addEventListener("click" , function()
    {
        var inputValue = input.value ; 
        
        if (inputValue == numberToGess) 
        {
            finalResult.innerHTML = "Congrats ! you won"
            popUp.style.display = "block"

            
        }
        else if (gessNumber == 0) 
        {
            finalResult.innerHTML = "you lost ! better luck next time"
            popUp.style.display = "block"

        }
        else if(inputValue > numberToGess) 
        {
            if (inputValue - numberToGess >= 30 )
            {
            result.innerHTML = "you are way to hight try again"  ; 

            gessNumber = gessNumber - 1 ; 
            gesses.innerHTML = "you have " + gessNumber + " try to gesse the right number" ; 

           
            }
            else if(inputValue - numberToGess < 15 && inputValue - numberToGess >= 5 )
            {
                result.innerHTML = "you are a bit to hight try again"  ; 

                gessNumber = gessNumber - 1 ; 
                gesses.innerHTML = "you have " + gessNumber + " try to gesse the right number" ; 
    
                
            }
            else if(inputValue - numberToGess < 5 )
            {
                result.innerHTML = "you are close !"  ; 

                gessNumber = gessNumber - 1 ; 
                gesses.innerHTML = "you have " + gessNumber + " try to gesse the right number" ; 
    
               
            }

        }
        else if(inputValue < numberToGess)
        {

            if (numberToGess - inputValue > 30)
            {
            result.innerHTML = "you are way to low try again"  ; 

            gessNumber = gessNumber - 1 ; 
            gesses.innerHTML = "you have " + gessNumber + " try to gesse the right number" ; 

            }
            else if(numberToGess - inputValue < 15 && numberToGess - inputValue > 5)
            {
                result.innerHTML = "you are a bit to low try again"  ; 

                gessNumber = gessNumber - 1 ; 
                gesses.innerHTML = "you have " + gessNumber + " try to gesse the right number" ; 
    
               
            }
            else if(numberToGess - inputValue <= 5 )
            {
                result.innerHTML = "you are close !"  ; 

                gessNumber = gessNumber - 1 ; 
                gesses.innerHTML = "you have " + gessNumber + " try to gesse the right number" ; 
    
                
            }
         

        }
       
    })
 
    return false
})


// hard level 

hardMode.addEventListener('click' , () =>
{

    level.innerHTML = "you have selected the hard mode gess a number between 1 and 1000"

    // the number of gesses // 

    var gessNumber = 10 ; 
    gesses.innerHTML = "you have " + gessNumber + " shots try to gesse the right number" ; 

    const numberToGess = Math.round(Math.random() * 1000) ; 


    submit.addEventListener('click' , () => 
    {
        var inputValue = input.value ; 


        if (inputValue == numberToGess) 
        {
            finalResult.innerHTML = "Congrats ! you won"
            popUp.style.display = "block"
            
        }
        else if (gessNumber == 0) 
        {
            finalResult.innerHTML = "you lost ! better luck next time"
            popUp.style.display = "block"
        }
        else if(gessNumber === 3) 
        {
            var closeNumber = numberToGess - Math.round(Math.random() * 200) ; 
            var op1 = closeNumber / 6 ; 
            var op2 = op1 - 67 ; 
            
            result.innerHTML = "hint : the number you are looking for is close to " + op1 + '* 6 - ' + 67
            gessNumber = gessNumber - 1 ; 
            gesses.innerHTML = "you have " + gessNumber + " try to gesse the right number" ;   
        }

        else if (inputValue > numberToGess) 
        {
            result.innerHTML = "you are high" ; 
            gessNumber = gessNumber - 1 ; 
            gesses.innerHTML = "you have " + gessNumber + " try to gesse the right number" ; 
        }
        else if(inputValue < numberToGess) 
        {
            result.innerHTML = "you are low" ; 
            gessNumber = gessNumber - 1 ; 
            gesses.innerHTML = "you have " + gessNumber + " try to gesse the right number" ; 
            
        }
    })

    return false ;
})


normalMode.addEventListener('click' , () =>
{

    level.innerHTML = "you have selected the normal mode gess a number between 1 and 500"

    // the number of gesses // 

    var gessNumber = 15 ; 
    gesses.innerHTML = "you have " + gessNumber + " shots try to gesse the right number" ; 

    const numberToGess = Math.round(Math.random() * 1000) ; 


    submit.addEventListener('click' , () => 
    {
        var inputValue = input.value ; 


        if (inputValue == numberToGess) 
        {
            finalResult.innerHTML = "Congrats ! you won"
            popUp.style.display = "block"
            
        }
        else if (gessNumber == 0) 
        {
            finalResult.innerHTML = "you lost ! better luck next time"
            popUp.style.display = "block"
        }

        else if (inputValue > numberToGess) 
        {
            result.innerHTML = "you are high" ; 
            gessNumber = gessNumber - 1 ; 
            gesses.innerHTML = "you have " + gessNumber + " try to gesse the right number" ; 
        }
        else if(inputValue < numberToGess) 
        {
            result.innerHTML = "you are low" ; 
            gessNumber = gessNumber - 1 ; 
            gesses.innerHTML = "you have " + gessNumber + " try to gesse the right number" ; 
            
        }
    })

    return false ;
})


// in case the user didn't chose a level 
submit.addEventListener("click" , function()
{
    if (level.innerHTML === "") 
    {
        alert("please select a level to the game") ;
        return false ; 
    }
})

// restart a new game 
newGame.addEventListener("click" , function() 
{
    document.location.reload(true) ;
})