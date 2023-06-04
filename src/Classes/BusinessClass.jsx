import User from "./UserClass";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../config/firebase";
import {doc, setDoc} from "firebase/firestore";

export default class Business
{

    static async makeBusiness(name, type, address, openingHours,
                                     contact, social = [], profilePic = "",
                                     pictures = [])
    {
        let coord= await Business.handleGeocode(address);
        if (coord === undefined)
        {
            coord = [0,0];
        }
        let new_business = new Business(name, type, address, coord, openingHours,
            contact, social, profilePic,
            pictures);
        await new_business.signIn();
        return new_business;
    }


    constructor(name, type, address, coord, openingHours,
                      contact, social = [], profilePic = "",
                      pictures = []) {
        this.name = name;
        this.type = type;
        this.address = address;
        this.openingHours = [];
        this.contact = contact;
        this.social = social;
        this.profilePic = profilePic;
        this.pictures = pictures;


        this.rating = [0, 0];
        this.coord = coord;
        this.last_visited = [];
    }
    signIn = async () => {
        try {
                const ref = doc(db, "Business", this.name).withConverter(businessConverter);
                await setDoc(ref, this);
            }catch (err) {
            console.error(err);
        }
    };
    toString()
    {
        return "Business name: " + this.name_ + "\nBusiness address: " + this.address + "Coord: "+this.coord;
    }

    static async handleGeocode(address) {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
                    address
                )}&format=json&limit=1`
            );
            const data = await response.json();
            if (data.length > 0) {
                const { lat, lon } = data[0];
                return [parseFloat(lat), parseFloat(lon)];
            }
            return [0,0];
        }
        catch (error) {
            console.error('Error geocoding address:', error);
            return [0,0];
        }
        return [0,0];
    };
}


const businessConverter = {
    toFirestore(business) {
        return {
            name : business.name,
            type : business.type,
            address : business.address,
            // openingHours : business.openingHours,
            contact : business.contact,
            social : business.social,
            profilePic : business.profilePic,
            pictures : business.pictures,
            rating: business.rating,
            coord: business.coord,
            last_visited: business.last_visited
        };
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new User(data.name, data.type, data.address, data.openingHours, data.contact,
            data.social, data.profilePic, data.pictures, data.rating, data.coord, data.last_visited);
    },
};