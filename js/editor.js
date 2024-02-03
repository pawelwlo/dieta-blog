
// import {db} from "./js/firebase.js"
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
 
 
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBRkumXWdsx_YER65uUDLyw0YYdRyn-2CE",
    authDomain: "diet-blog-b8ca5.firebaseapp.com",
    databaseURL: "https://diet-blog-b8ca5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "diet-blog-b8ca5",
    storageBucket: "diet-blog-b8ca5.appspot.com",
    messagingSenderId: "1086895413120",
    appId: "1:1086895413120:web:9159ecdebe13c4b29f9365",
    measurementId: "G-DJXKKYQTW3"
  
  };

  // Use this to initialize the firebase App
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
 
 

const blogTitleField = document.querySelector('.title');
const articleField = document.querySelector('.article');

// Banner
const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath;

const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');

bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, "banner");
});

uploadInput.addEventListener('change', () => {
    uploadImage(uploadInput, "image");
})



const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    if (file && file.type.includes("image")) {
        const formData = new FormData();
        formData.append('image', file);

        fetch('uploads', {
            method: 'POST', 
            body: formData
        }).then(res => res.json())
            .then(data => {
                if (uploadType === "image") { 
                    addImage(data, file.name);
                } else  {
                    bannerPath = `${location.origin}/${data}`;
                    banner.style.backgroundImage = `url("${bannerPath}")`;
                }
                
            })
    } else {
        alert("dodaj tylko zdjecia");
    }
};

const addBanner = (bannerURL) => {
    bannerPath = `${location.origin}/${bannerURL}`;
    banner.style.backgroundImage = `url("${bannerPath}")`;
}

const addImage = (imagepath, alt) => {
    let curPos = articleField.selectionStart;
    let textToInsert = `\r![${alt}](${imagepath})\r`;
    articleField.value = articleField.value.slice(0, curPos) + textToInsert + articleField.value.slice(curPos);
}

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

publishBtn.addEventListener('click', async () => {
    if (articleField.value.length && blogTitleField.value.length) {
        let letters = 'abcdefghijklmnoprstuvwxyz'; 
        let blogTitle = blogTitleField.value.split(" ").join("-");
        let id = '';
        for (let i = 0; i < 4; i++) {
            id += letters[Math.floor(Math.random() * letters.length)];
        }
        let docName = `${blogTitle}-${id}`;
        let date = new Date();

        const data = {
            title: blogTitleField.value,
            article: articleField.value,
            bannerImage: bannerPath,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
        };

        try {
            await setDoc(doc(db, "blogs", docName), data);
            location.href = `/${docName}`;
        } catch (err) {
            console.error(err);
        }
    }
})
