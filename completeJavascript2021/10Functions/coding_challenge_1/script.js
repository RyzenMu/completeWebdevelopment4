const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer(){
    const answer = Number(prompt(`${this.question}\n ${this.options.join('\n')} \n (write option number)`));
    //register answer
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type='array'){
    if(type === 'array'){
      console.log(this.answers);
    }else if (type === 'string'){
      console.log(`Poll resultd are ${this.answers.join(', ')}`);
    }
  }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));   

// bonus
poll.displayResults();
poll.displayResults.call({answers:[5, 2, 3]});
poll.displayResults.call({answers:[5, 2, 3]}, 'string');
 