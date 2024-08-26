/// <refarence types="chrome"/>
/// <reference path="./types.d.ts" />

chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "displaySummary") {
        displaySummary(request.quizData, request.classAndSection);
    }
});

function displaySummary(quizData: Quiz[], classAndSection: string) {
    const container = document.getElementById("container");

    // クラスとセクション情報を表示
    const header = document.createElement("h1");
    header.textContent = `${classAndSection}`;
    const info = document.getElementById("info");
    if (info) {
        info.appendChild(header);
    }

    // クイズデータを表示
    quizData.forEach((quiz, index) => {
        if (quiz.index !== index) {
            const errorElement = document.createElement("p");
            errorElement.textContent = `Error: Quiz index mismatch. Expected: ${index}, Actual: ${quiz.index}`;
            errorElement.style.color = "red";
            errorElement.style.fontWeight = "bold";
            if (container) {
                container.appendChild(errorElement);
            }
        }
        const quizElement = document.createElement("div");
        quizElement.classList.add("quiz-item");

        const questionNumElement = document.createElement("h2");
        questionNumElement.textContent = `（${index + 1}）`;
        quizElement.appendChild(questionNumElement);
        quizElement.appendChild(divMake(quiz.question, ["quiz-question"]));

        if (quiz.image) {
            for (let i = 0; i < quiz.image.length; i++) {
                if (i <= quiz.question.length + 1) {
                    const imageElement = document.createElement("img");
                    imageElement.src = quiz.image[i];
                    imageElement.alt = `問題の画像 #${i + 1} `;
                    quizElement.appendChild(imageElement);
                }
            }
        }

        if (quiz.choices.length !== 0) {
            const choicesElement = document.createElement("ul");
            quiz.choices.forEach((choice: string[]) => {
                const choiceItem = document.createElement("li");
                choice.forEach((text) => {
                    const textElement = document.createElement("p");
                    textElement.textContent = text;
                    choiceItem.appendChild(textElement);
                });
                choicesElement.appendChild(choiceItem);
            });
            quizElement.appendChild(choicesElement);
            if (quiz.correct && quiz.answer) {
                const correctElement = document.createElement("div");
                correctElement.textContent = `正解: `;
                correctElement.appendChild(
                    divMake(quiz.correct, ["quiz-example"])
                );
                quizElement.appendChild(correctElement);
                const answerElement = document.createElement("div");
                answerElement.textContent = `回答: `;
                if (
                    divMake(quiz.correct, ["quiz-example"]).textContent !==
                    divMake(quiz.answer, ["quiz-example"]).textContent
                ) {
                    answerElement.appendChild(
                        divMake(quiz.answer, ["quiz-userAnswer-incorrect"])
                    );
                    quizElement.appendChild(answerElement);
                }
            }
        } else {
            if (quiz.correct && quiz.answer) {
                const correctElement = document.createElement("div");
                correctElement.textContent = `正解: `;
                correctElement.appendChild(
                    divMake(quiz.correct, ["quiz-example"])
                );
                quizElement.appendChild(correctElement);
                const answerElement = document.createElement("div");
                answerElement.textContent = `回答: `;
                answerElement.appendChild(
                    divMake(quiz.answer, ["quiz-userAnswer-correct"])
                );
                quizElement.appendChild(answerElement);
            }
        }

        if (container) {
            container.appendChild(quizElement);
        }
    });
}

function divMake(target: any[], [className]: [string]) {
    const functionElement = document.createElement("div");
    functionElement.classList.add(className);
    target.forEach((item) => {
        const itemTextElement = document.createElement("p");
        itemTextElement.textContent = item;
        functionElement.appendChild(itemTextElement);
    });
    return functionElement;
}
