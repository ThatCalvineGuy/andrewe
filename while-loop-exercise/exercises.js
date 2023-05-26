require.main === module


console.log("step 1: log numbers 1-9")
let stepOneVar = 1;
while (stepOneVar <= 9) {
    console.log(stepOneVar)
    stepOneVar++;
}

console.log("step 2: log numbers 9-1")
let stepTwoVar = 9
while (stepTwoVar >= 1) {
    console.log(stepTwoVar)
    stepTwoVar--;
}

console.log("step 3: keep dividing 10,000 by 2 until it's less than 10")
let stepThreeVar = 10000;
while(stepThreeVar > 10) {
    stepThreeVar /= 2
    console.log(stepThreeVar)
}

console.log("step 4: log numbers 1-12 except 3")
let stepFourVar = 1;
while (stepFourVar <= 12) {
    if (stepFourVar === 3) {
        stepFourVar++;
        continue;
    }
    console.log(stepFourVar);
    stepFourVar++;
}

console.log("step 5: log numbers 1-12 except 3 or 6")
let stepFiveVar = 1;
while (stepFiveVar <= 12) {
    if ((stepFiveVar === 3) || (stepFiveVar === 6)) {
        stepFiveVar++;
        continue;
    }
    console.log(stepFiveVar);
    stepFiveVar++;
}