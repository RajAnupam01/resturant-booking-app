import { collection, doc, setDoc } from "firebase/firestore";
import {cuisine} from "../store/data"
import {db} from "./firebaseConfig"

const restaurantData = cuisine;

const uploadData = async () => {
    try {
        for (let i = 0; i < restaurantData.length; i++) {
            const restaurant = restaurantData[i];
            const docRef = doc(collection(db, "cuisines"), `cuisine_${i + 1}`)
            await setDoc(docRef, restaurant)
        }
        console.log("Data uploaded")
    } catch (error) {
        console.log("Error uploading Data",error)
    }
}

export default uploadData;