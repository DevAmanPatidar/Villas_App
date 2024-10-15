import React from 'react';
import { Image } from 'react-native';

export const Category = [
    {
        id: 1,
        category: "Onion",
        photo: require('../../Assets/Onion.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Multiplier Onion ",
        },
        {
            id: 2,
            subCatTitle: "Small Common Onion",
        },
        {
            id: 3,
            subCatTitle: "White Onion",
        },
        {
            id: 4,
            subCatTitle: "Spanish Brown",
        },
        {
            id: 5,
            subCatTitle: "Red onion",
        },
        ]
    },
    {
        id: 2,
        category: "Potato",
        photo: require('../../Assets/Potato.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Kufri Chipsona",
        },
        {
            id: 2,
            subCatTitle: "Kufri Sindhuri",
        },
        {
            id: 3,
            subCatTitle: "Kufri Chandramukhi",
        },
        {
            id: 4,
            subCatTitle: "Kufri Khyati",
        },
        {
            id: 5,
            subCatTitle: "Bhura Aloo",
        },
        {
            id: 6,
            subCatTitle: "Kufri Bahar",
        },
        {
            id: 7,
            subCatTitle: "Kufri Jyoti",
        },
        {
            id: 8,
            subCatTitle: "Kufri Pukhraj",
        },
        {
            id: 9,
            subCatTitle: "Lady Rosetta",
        },
        
        ]
    },
    {
        id: 3,
        category: "Tomato",
        photo: require('../../Assets/Tomato.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Pusa Early Dwarf",
        },
        {
            id: 2,
            subCatTitle: "Rashmi",
        },
        {
            id: 3,
            subCatTitle: "Rupali",
        },
        {
            id: 4,
            subCatTitle: "Sioux",
        },
        {
            id: 5,
            subCatTitle: "Avishkar",
        },
        {
            id:6,
            subCatTitle:"Abhinav"
        },
        {
            id:7,
            subCatTitle:"Vaishali"
        },
        {
            id:8,
            subCatTitle:"Marglobe"
        },
        {
            id:9,
            subCatTitle:"Kesari"
        },
        ]
    },
    {
        id: 4,
        category: "Carrot",
        photo: require('../../Assets/Carrot.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Red Carrot",
        },
        {
            id: 2,
            subCatTitle: "Yellow Carrot",
        },
        {
            id: 3,
            subCatTitle: "Karud Kesari",
        },
        {
            id: 4,
            subCatTitle: "Black Carrot",
        },
        ]
    },
    {
        id: 5,
        category: "Chickpeas",
        photo: require('../../Assets/Chickpeas.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Desi",
        },
        {
            id: 2,
            subCatTitle: "Kabuli",
        },
        ]
    },
    {
        id: 6,
        category: "Wheat",
        photo: require('../../Assets/Wheat.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Karan Vandana",
        },
        {
            id: 2,
            subCatTitle: "Karan Narendra",
        },
        {
            id: 3,
            subCatTitle: "Karan Vandana",
        },
        {
            id: 4,
            subCatTitle: "Karan Shriya",
        },
        {
            id: 5,
            subCatTitle: "DDW-47 Durum",
        },
        ]
    },
    {
        id: 7,
        category: "Soya",
        photo: require('../../Assets/Soya.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Ahilya-1 (NRC 2)",
        },
        {
            id: 2,
            subCatTitle: "Ahilya-2 (NRC 12)",
        },
        {
            id: 3,
            subCatTitle: "Ahilya-3 (NRC 7)",
        },
        {
            id: 4,
            subCatTitle: "NRC 37 (Ahilya 4)",
        },
        {
            id: 5,
            subCatTitle: "Bragg",
        },
        ]
    },
    {
        id: 8,
        category: "Coriander",
        photo: require('../../Assets/Coriander.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Sadhana (CS-4)",
        },
        {
            id: 2,
            subCatTitle: "Sindhu (CS-2)",
        },
        {
            id: 3,
            subCatTitle: "Sudha (LCC-128)",
        },
        {
            id: 4,
            subCatTitle: "Swathi (CS-6)",
        },
        {
            id: 5,
            subCatTitle: "APHU Dhania-1",
        },
        ]
    },
    {
        id: 9,
        category: "Garlic",
        photo: require('../../Assets/Garlic.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Agrifound White",
        },
        {
            id: 2,
            subCatTitle: "Yamuna Safed",
        },
        {
            id: 3,
            subCatTitle: "Yamuna Safed-2",
        },
        {
            id: 4,
            subCatTitle: "Shweta",
        },
        {
            id: 5,
            subCatTitle: "Godavari",
        },
        ]
    },
    {
        id: 10,
        category: "Maize",
        photo: require('../../Assets/Maize.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "VL Sweet Corn Hybrid-2",
        },
        {
            id: 2,
            subCatTitle: "SHIATS Makka-2",
        },
        {
            id: 3,
            subCatTitle: "Maize VGIH-1",
        },
        {
            id: 4,
            subCatTitle: "JKMH 4152",
        },
        {
            id: 5,
            subCatTitle: "Hyshel",
        },
        ]
    },
]
export const FruitCategory = [
    {
        id: 1,
        category: "Banana",
        photo: require('../../Assets/Banana.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Basrai",
        },
        {
            id: 2,
            subCatTitle: "Singapuri",
        },
        {
            id: 3,
            subCatTitle: "Safed Velchi",
        },
        {
            id: 4,
            subCatTitle: "Robusta",
        },
        {
            id: 5,
            subCatTitle: "Malbhog",
        },
        {
            id: 6,
            subCatTitle: "Chinia",
        },
        {
            id: 7,
            subCatTitle: "Dwarf Cavendish",
        },
        {
            id: 8,
            subCatTitle: "Poovan",
        },
        {
            id: 9,
            subCatTitle: "Rasthali",
        },
        ]
    },
    {
        id: 2,
        category: "Mango",
        photo: require('../../Assets/Mango.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Alphonsos Hapoos",
        },
        {
            id: 2,
            subCatTitle: "Kesar Mangoes",
        },
        {
            id: 3,
            subCatTitle: "Dashehari Mangoes",
        },
        {
            id: 4,
            subCatTitle: "Himsagar mangoes",
        },
        {
            id: 5,
            subCatTitle: "Chausa Mangoes",
        },
        {
            id: 6,
            subCatTitle: "Badami Mangoes ",
        },
        {
            id: 7,
            subCatTitle: "Safeda Mangoes",
        },
        {
            id: 8,
            subCatTitle: "Langra mangoes",
        },
        {
            id: 9,
            subCatTitle: "Totapuri Mangoes",
        },   
        ]
    },
    {
        id: 3,
        category: "Guava",
        photo: require('../../Assets/Guava.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Sardar",
        },
        {
            id: 2,
            subCatTitle: "Allahabad Safeda",
        },
        {
            id: 3,
            subCatTitle: "Lalit",
        },
        {
            id: 4,
            subCatTitle: "Pant Prabhat",
        },
        {
            id: 5,
            subCatTitle: "Dhareedar",
        },
        {
            id:6,
            subCatTitle:"Khaja"
        },
        {
            id:7,
            subCatTitle:"Chittidar"
        },
        {
            id:8,
            subCatTitle:"Harija"
        },
        {
            id:9,
            subCatTitle:"Arka Mridula"
        },
        ]
    },
    {
        id: 4,
        category: "Apple",
        photo: require('../../Assets/Apple.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Ambri Apple",
        },
        {
            id: 2,
            subCatTitle: "McIntosh Apple",
        },
        {
            id: 3,
            subCatTitle: "Golden Delicious",
        },
        {
            id: 4,
            subCatTitle: "Honeycrisp",
        },
        {
            id: 5,
            subCatTitle: "Sunehari",
        },
        {
            id: 6,
            subCatTitle: " Lal Ambri",
        },
        {
            id: 7,
            subCatTitle: "Chaubattia Anupam",
        },
        {
            id: 8,
            subCatTitle: "Red Delicious",
        },
        {
            id: 9,
            subCatTitle: "Fuji Apple",
        },
        ]
    },
    {
        id: 5,
        category: "Berries",
        photo: require('../../Assets/Berries.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Jamun",
        },
        {
            id: 2,
            subCatTitle: "Angoor",
        },
        {
            id: 3,
            subCatTitle: "Ber",
        },
        {
            id: 4,
            subCatTitle: "Amla",
        },
        {
            id: 5,
            subCatTitle: "Chironji",
        },
        {
            id: 6,
            subCatTitle: "Phalsa",
        },
        {
            id: 7,
            subCatTitle: "Karonda",
        },
        {
            id: 8,
            subCatTitle: "Shahtoot",
        },
        {
            id: 9,
            subCatTitle: "Kosam",
        }, 
        ]
    },
    {
        id: 6,
        category: "WaterMellon",
        photo: require('../../Assets/WaterMellon.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Arka Manik",
        },
        {
            id: 2,
            subCatTitle: "Durgapur Kesar",
        },
        {
            id: 3,
            subCatTitle: "Arko Jyoti",
        },
        {
            id: 4,
            subCatTitle: "Asahi Yamato",
        },
        {
            id: 5,
            subCatTitle: "Black Thunder",
        },
        ]
    },
    {
        id: 7,
        category: "Orange",
        photo: require('../../Assets/Orange.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Khasi Santra",
        },
        {
            id: 2,
            subCatTitle: "Nagpur Orange",
        },
        {
            id: 3,
            subCatTitle: "Darjeeling orange",
        },
        {
            id: 4,
            subCatTitle: "Khasi mandarin",
        },
        {
            id: 5,
            subCatTitle: "Coorg mandarin",
        },
        ]
    },
    {
        id: 8,
        category: "Dates",
        photo: require('../../Assets/Dates.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Medjool",
        },
        {
            id: 2,
            subCatTitle: "Hallawi",
        },
        {
            id: 3,
            subCatTitle: "Zahidi",
        },
        {
            id: 4,
            subCatTitle: "Khadrawi",
        },
        {
            id: 5,
            subCatTitle: "Deglet",
        },
        ]
    },
    {
        id: 9,
        category: "Custard Apple",
        photo: require('../../Assets/Custard_Apple.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Island Gem",
        },
        {
            id: 2,
            subCatTitle: "Balanagar",
        },
        {
            id: 3,
            subCatTitle: "Pink Mammoth",
        },
        ]
    },
    {
        id: 10,
        category: "MuskMellon",
        photo: require('../../Assets/MuskMellon.png'),
        subCategoryData: [{
            id: 1,
            subCatTitle: "Hara Madhu",
        },
        {
            id: 2,
            subCatTitle: "Durgapura Madhu",
        },
        {
            id: 3,
            subCatTitle: "Arka Rajhans",
        },
        {
            id: 4,
            subCatTitle: "Arka Jeet",
        },
        {
            id: 5,
            subCatTitle: "Pusa Sharbati",
        },
        ]
    },
]
export const Offer = [
    {
        id: 1,
        offer: require('../../Assets/Photo3.png')
    },
    {
        id: 1,
        offer: require('../../Assets/Photo2.png')
    },
    {
        id: 1,
        offer: require('../../Assets/Photo.png')
    },
    {
        id: 1,
        offer: require('../../Assets/Photo4.png')
    },
    {
        id: 1,
        offer: require('../../Assets/Photo3.png')
    },
    {
        id: 1,
        offer: require('../../Assets/Photo.png')
    },
    {
        id: 1,
        offer: require('../../Assets/Photo2.png')
    },
    {
        id: 1,
        offer: require('../../Assets/Photo4.png')
    },
    {
        id: 1,
        offer: require('../../Assets/Photo3.png')
    },
    {
        id: 1,
        offer: require('../../Assets/Photo2.png')
    },
]
export const Vegetables = [
    {
        id: 1,
        vegetable1: "Onion",
        vegetable2: "Soya",
        veg_photo1: require('../../Assets/Onion.png'),
        veg_photo2: require('../../Assets/Soya.png'),
    },
    {
        id: 2,
        vegetable1: "Wheat",
        vegetable2: "Potato",
        veg_photo1: require('../../Assets/Wheat.png'),
        veg_photo2: require('../../Assets/Potato.png'),
    },
    {
        id: 3,
        vegetable1: "Tomato",
        vegetable2: "Garlic",
        veg_photo1: require('../../Assets/Tomato.png'),
        veg_photo2: require('../../Assets/Garlic.png'),
    },
    {
        id: 4,
        vegetable1: "Onion",
        vegetable2: "Carrot",
        veg_photo1: require('../../Assets/Onion.png'),
        veg_photo2: require('../../Assets/Carrot.png'),
    },
    {
        id: 5,
        vegetable1: "Chickpeas",
        vegetable2: "Soya",
        veg_photo1: require('../../Assets/Chickpeas.png'),
        veg_photo2: require('../../Assets/Soya.png'),
    },
    {
        id: 6,
        vegetable1: "Coriander",
        vegetable2: "Potato",
        veg_photo1: require('../../Assets/Coriander.png'),
        veg_photo2: require('../../Assets/Potato.png'),
    },
    {
        id: 7,
        vegetable1: "Maize",
        vegetable2: "Wheat",
        veg_photo1: require('../../Assets/Maize.png'),
        veg_photo2: require('../../Assets/Wheat.png'),
    },
    {
        id: 8,
        vegetable1: "Chickpeas",
        vegetable2: "Coriander",
        veg_photo1: require('../../Assets/Chickpeas.png'),
        veg_photo2: require('../../Assets/Coriander.png'),
    },
    {
        id: 9,
        vegetable1: "Onion",
        vegetable2: "Tomato",
        veg_photo1: require('../../Assets/Onion.png'),
        veg_photo2: require('../../Assets/Tomato.png'),
    },
    {
        id: 10,
        vegetable1: "Carrot",
        vegetable2: "Garlic",
        veg_photo1: require('../../Assets/Carrot.png'),
        veg_photo2: require('../../Assets/Garlic.png'),
    },
]
export const Fruits = [
    {
        id: 1,
        fruit1: "Banana",
        fruit2: "Mango",
        fru_photo1: require('../../Assets/Banana.png'),
        fru_photo2: require('../../Assets/Mango.png'),
    },
    {
        id: 2,
        fruit1: "Guava",
        fruit2: "Apple",
        fru_photo1: require('../../Assets/Guava.png'),
        fru_photo2: require('../../Assets/Apple.png'),
    },
    {
        id: 3,
        fruit1: "Berries",
        fruit2: "WaterMellon",
        fru_photo1: require('../../Assets/Berries.png'),
        fru_photo2: require('../../Assets/WaterMellon.png'),
    },
    {
        id: 4,
        fruit1: "Orange",
        fruit2: "Banana",
        fru_photo1: require('../../Assets/Orange.png'),
        fru_photo2: require('../../Assets/Banana.png'),
    },
    {
        id: 5,
        fruit1: "Dates",
        fruit2: "Custard Apple",
        fru_photo1: require('../../Assets/Dates.png'),
        fru_photo2: require('../../Assets/Custard_Apple.png'),
    },
    {
        id: 6,
        fruit1: "MuskMellon",
        fruit2: "Guava",
        fru_photo1: require('../../Assets/MuskMellon.png'),
        fru_photo2: require('../../Assets/Guava.png'),
    },
    {
        id: 7,
        fruit1: "Berries",
        fruit2: "Dates",
        fru_photo1: require('../../Assets/Berries.png'),
        fru_photo2: require('../../Assets/Dates.png'),
    },
    {
        id: 8,
        fruit1: "MuskMellon",
        fruit2: "Apple",
        fru_photo1: require('../../Assets/MuskMellon.png'),
        fru_photo2: require('../../Assets/Mango.png'),
    },
    {
        id: 9,
        fruit1: "Custard Apple",
        fruit2: "WaterMellon",
        fru_photo1: require('../../Assets/Custard_Apple.png'),
        fru_photo2: require('../../Assets/WaterMellon.png'),
    },
    {
        id: 10,
        fruit1: "Orange",
        fruit2: "Banana",
        fru_photo1: require('../../Assets/Orange.png'),
        fru_photo2: require('../../Assets/Banana.png'),
    },
]

