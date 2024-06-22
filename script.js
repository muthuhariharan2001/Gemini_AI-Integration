const { GoogleGenerativeAI } = require("@google/generative-ai");

document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const generateBtn = document.getElementById('generateBtn');
    const generatedContent = document.getElementById('generatedContent');

    generateBtn.addEventListener('click', function() {
        const apiKey = 'REPLACE IT WITH YOUR API KEY'; // Replace with your actual API key

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-pro",
        });

        model.generateContent(inputText.value)
            .then(r => {
                generatedContent.innerText = r.response.text();
            })
            .catch(error => {
                generatedContent.innerText = `Error: ${error.message}`;
            });
    });
});
