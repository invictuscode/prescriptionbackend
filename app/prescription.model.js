const prompt = require("./prompt")
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
require('dotenv').config()
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);


async function run(filename="") {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([prompt, {
        inlineData: {
            data: Buffer.from(fs.readFileSync('prescription_photos/5.png')).toString("base64"),
            mimeType: 'image/png'
        }
    }]
    );
    try {
        var response = result.response.text().slice(result.response.text().indexOf('{'), result.response.text().lastIndexOf('}') + 1);
        return response;
    } catch (err) {
        return {
            "read": false,
            "error" : err.message,
            "medicine": "",
            "dose": "",
            "form": "",
            "manufacturer": "",
           "frequency": {
                "before_breakfast": { "number_of_tablets": 0 },
                "after_breakfast": { "number_of_tablets": 0 },
                "before_lunch": { "number_of_tablets": 0 },
                "after_lunch": { "number_of_tablets": 0 },
                "before_dinner": { "number_of_tablets": 0 },
                "after_dinner": { "number_of_tablets": 0 }
            },
            "special_instructions": ""
        }

    }
}

module.exports = run;