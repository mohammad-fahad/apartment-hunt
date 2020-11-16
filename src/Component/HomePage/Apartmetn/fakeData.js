const fakeData = [

    {
        id: '1',
        title: 'Washington Avenue',
        location: 'Nasirabad H/S, Chattogram',
        bedrooms: '3',
        bathrooms: '2',
        img: "https://i.ibb.co/njWrxFm/Rectangle-394.png",
        img1: "https://i.ibb.co/ChPmJWV/Rectangle-410.png",
        img2: "https://i.ibb.co/4R4VLvq/Rectangle-407.png",
        img3: "https://i.ibb.co/Wg9DYyn/Rectangle-408.png",
        img4: "https://i.ibb.co/RPjFmJ3/Rectangle-406.png",
        price: '150',
        apartmentDescription: '3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.',
        priceDetails: 'Rent/Month: $550 (negotiable) Service Charge : 8,000/= Tk per month,subject to change Security Deposit : 3 month’s rent Flat Release Policy : 3 months earlier notice required',
        propertyDetails: 'Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. Flat Size : 3000 Sq Feet. Floor : A5 (5th Floor) (6 storied Building ) (South Facing Unit) Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera',
    },
    {
        id: '2',
        title: 'Family Apartment Three',
        location: 'Nasirabad H/S, Chattogram',
        bedrooms: '3',
        bathrooms: '2',
        img: "https://i.ibb.co/120cnvP/Rectangle-396.png",
        img4: "https://i.ibb.co/ChPmJWV/Rectangle-410.png",
        img3: "https://i.ibb.co/4R4VLvq/Rectangle-407.png",
        img2: "https://i.ibb.co/Wg9DYyn/Rectangle-408.png",
        img1: "https://i.ibb.co/RPjFmJ3/Rectangle-406.png",
        price: '160',
        apartmentDescription: '3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.',
        priceDetails: 'Rent/Month: $550 (negotiable) Service Charge : 8,000/= Tk per month,subject to change Security Deposit : 3 month’s rent Flat Release Policy : 3 months earlier notice required',
        propertyDetails: 'Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. Flat Size : 3000 Sq Feet. Floor : A5 (5th Floor) (6 storied Building ) (South Facing Unit) Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera',
    },
    {
        id: '3',
        title: 'Gorgeous house',
        location: 'Nasirabad H/S, Chattogram',
        bedrooms: '3',
        bathrooms: '2',
        img: "https://i.ibb.co/372VkY4/Rectangle-398.png",
        img1: "https://i.ibb.co/ChPmJWV/Rectangle-410.png",
        img2: "https://i.ibb.co/4R4VLvq/Rectangle-407.png",
        img3: "https://i.ibb.co/Wg9DYyn/Rectangle-408.png",
        img4: "https://i.ibb.co/RPjFmJ3/Rectangle-406.png",
        price: '170',
        apartmentDescription: '3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.',
        priceDetails: 'Rent/Month: $550 (negotiable) Service Charge : 8,000/= Tk per month,subject to change Security Deposit : 3 month’s rent Flat Release Policy : 3 months earlier notice required',
        propertyDetails: 'Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. Flat Size : 3000 Sq Feet. Floor : A5 (5th Floor) (6 storied Building ) (South Facing Unit) Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera',
    },
    {
        id: '4',
        title: 'Luxury villa',
        location: 'Nasirabad H/S, Chattogram',
        bedrooms: '3',
        bathrooms: '2',
        img: "https://i.ibb.co/0MdBFjk/Rectangle-405.png",
        img4: "https://i.ibb.co/ChPmJWV/Rectangle-410.png",
        img3: "https://i.ibb.co/4R4VLvq/Rectangle-407.png",
        img2: "https://i.ibb.co/Wg9DYyn/Rectangle-408.png",
        img1: "https://i.ibb.co/RPjFmJ3/Rectangle-406.png",
        price: '180',
        apartmentDescription: '3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.',
        priceDetails: 'Rent/Month: $550 (negotiable) Service Charge : 8,000/= Tk per month,subject to change Security Deposit : 3 month’s rent Flat Release Policy : 3 months earlier notice required',
        propertyDetails: 'Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. Flat Size : 3000 Sq Feet. Floor : A5 (5th Floor) (6 storied Building ) (South Facing Unit) Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera',
    },
    {
        id: '5',
        title: 'Epic Huda Palacio',
        location: 'Nasirabad H/S, Chattogram',
        bedrooms: '3',
        bathrooms: '2',
        img: "https://i.ibb.co/CHFyjVd/Rectangle-403.png",
        img1: "https://i.ibb.co/ChPmJWV/Rectangle-410.png",
        img2: "https://i.ibb.co/4R4VLvq/Rectangle-407.png",
        img3: "https://i.ibb.co/Wg9DYyn/Rectangle-408.png",
        img4: "https://i.ibb.co/RPjFmJ3/Rectangle-406.png",
        price: '190',
        apartmentDescription: '3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.',
        priceDetails: 'Rent/Month: $550 (negotiable) Service Charge : 8,000/= Tk per month,subject to change Security Deposit : 3 month’s rent Flat Release Policy : 3 months earlier notice required',
        propertyDetails: 'Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. Flat Size : 3000 Sq Feet. Floor : A5 (5th Floor) (6 storied Building ) (South Facing Unit) Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera',
    },
    {
        id: '6',
        title: 'Washington Avenue',
        location: 'Nasirabad H/S, Chattogram',
        bedrooms: '3',
        bathrooms: '2',
        img: "https://i.ibb.co/tYN44Xr/Rectangle-404.png",
        img4: "https://i.ibb.co/ChPmJWV/Rectangle-410.png",
        img3: "https://i.ibb.co/4R4VLvq/Rectangle-407.png",
        img2: "https://i.ibb.co/Wg9DYyn/Rectangle-408.png",
        img1: "https://i.ibb.co/RPjFmJ3/Rectangle-406.png",
        price: '2000',
        apartmentDescription: '3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.',
        priceDetails: 'Rent/Month: $550 (negotiable) Service Charge : 8,000/= Tk per month,subject to change Security Deposit : 3 month’s rent Flat Release Policy : 3 months earlier notice required',
        propertyDetails: 'Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. Flat Size : 3000 Sq Feet. Floor : A5 (5th Floor) (6 storied Building ) (South Facing Unit) Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera',
    },




];

export default fakeData;