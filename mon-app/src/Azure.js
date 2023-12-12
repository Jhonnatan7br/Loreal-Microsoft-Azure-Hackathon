

/*
FRONT-END React = App.js

function App() {
    const handleUpload = async (file) => {
      const formData = new FormData();
      formData.append('photo', file);
  
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      console.log(data);
    };
  
    return (
      <div>
        <input
          type="file"
          onChange={(event) => handleUpload(event.target.files[0])}
        />
      </div>
    );
  }
*/  

/*
const express = require('express');
const axios = require('axios');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

app.post('/upload', upload.single('photo'), async (req, res) => {
  const imageFile = req.file;

  try {
    const azureResponse = await axios.post('https://customvisongroup5.cognitiveservices.azure.com/customvision/v3.0/Prediction/de642783-d9c1-4ba7-8211-0ab8a4636381/classify/iterations/571abe22-882f-4e3e-8579-4cdef83f3544/image',  
    imageFile.buffer, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Prediction-Key': '3e75041b56ff4f6cb0176abf0477d948'
      }
    });

    res.json(azureResponse.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
*/
