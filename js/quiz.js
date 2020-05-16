function questionOne(event){
    event.preventDefault()

    var correctAnswer= document.querySelector('input[name="group1"]:checked').value
    var correctAns2= document.querySelector('input[name="group2"]:checked').value
    console.log(correctAnswer)
    console.log(correctAns2)
    var count= 0

    if(correctAnswer=="red")
    {

                count = count +5
                document.getElementById("Reward").innerHTML="Your Score is"+count;

    }
    if (correctAns2=="right"){

        count = count +12
                document.getElementById("Reward").innerHTML="Your Score is"+count;
    }
    else{
    

        document.getElementById("Reward").innerHTML="You Answer is wrong please try again"
    
    
      
     localStorage.setItem("Alldata",JSON.stringify(questionOne))
}
}
