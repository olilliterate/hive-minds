const fs = require('fs');
const listOfQuestions = require('./flash');

console.log(listOfQuestions);

if (fs.existsSync('formatted.txt')) {
    fs.unlinkSync('formatted.txt')
}

listOfQuestions.map((ele) => {
    const line =` ('${ele.term}', '${ele.definition}', '${ele.cluster}'),\n`
    fs.appendFileSync('formatted.txt', line, 'utf-8');
})

