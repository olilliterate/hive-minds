const fs = require('fs');
const listOfQuestions = require('./mcqQuestionsData');

console.log(listOfQuestions);

if (fs.existsSync('formatted.txt')) {
    fs.unlinkSync('formatted.txt')
}

listOfQuestions.map((ele) => {
    const line =` ('${ele.type}', '${ele.question_body}', '${ele.answer}', '${ele.prompt_one}', '${ele.prompt_two}', '${ele.prompt_three}', '${ele.prompt_four}'),\n`
    fs.appendFileSync('formatted.txt', line, 'utf-8');
})

