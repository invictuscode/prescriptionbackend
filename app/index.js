const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const database = require('./firebase.config')
const admin = require('firebase-admin');

const run = require("./prescription.model")

app.get('/get_prescription/:userID', async (req, res) => {
    const all_prescription = [];
    const user_id = req.params.userID;
    const response = await database.collection(user_id).get();
    response.forEach(doc => {
        all_prescription.push( doc.data());    
    });
    res.json(all_prescription)
})


app.post("/post_prescription/:userID", async (req, res) => {
    const user_id = req.params.userID;
    try{
        const response = await run();

        if(!response){
         return res.status(400).json({ message: "Failed to save prescription" });
        }
        const parsed = {...JSON.parse(response), read:true, error:null, createdAt: admin.firestore.FieldValue.serverTimestamp()}
        await database.collection(user_id).add(parsed)
        
        res.json(parsed);
    } catch (e){
        console.error(e);
        res.status(500).json({ message: "server error " });
    }

    
   
})


app.listen(port, () => {console.log(`Server is running on port ${port}`)});


