const result = document.querySelector('.score');
const form = document.querySelector('.quiz-form');
const correctAnswers = ['B','B','B','B'];
const final = document.querySelector('.result');

form.addEventListener('submit',e => {
    e.preventDefault();
    result.classList.remove('score');
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    // check answers
    let score = 0;
    userAnswers.forEach((answer,index)=> {
        if(answer === correctAnswers[index]){
            score +=25;
        }
    });
    let output = 0;
    const timer = setInterval(() => {
        final.textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else{
            output++;
        }
    },10);
    scrollTo(0,0);  //scrolls to the top 
    
    
});
