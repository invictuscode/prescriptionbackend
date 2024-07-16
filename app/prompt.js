module.exports = `We are developing an app to help elderly patients manage their medications by reading them using the camera. The app should read the image and return details about the medicine, dose, and frequency in a JS object. Please create the JS object. format {
   "medicine": "",
  "dose": "put value in grams, or mcg",
  "form": "",
  "manufacturer":"",
  "frequency": {
    "before breakfast": { "number of tablets": 2},
    "after breakfast": { "number of tablets": 2},
    "before lunch": { "number of tablets": 2},
    "after lunch": { "number of tablets": 2},
    "before dinner": { "number of tablets": 2},
    "after dinner": { "number of tablets": 2}
    },
   "special_instructions": "" 
  }
    `