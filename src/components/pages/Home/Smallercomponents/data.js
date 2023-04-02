import ImgMediaCard from './mycard';
import React from 'react'
import avatar1 from '../images/drinksimages/img1.png';
import avatar2 from '../images/drinksimages/img2.png';
import avatar3 from '../images/drinksimages/img3.png';
import avatar4 from '../images/drinksimages/img4.png';
import avatar5 from '../images/drinksimages/img5.png';
import avatar6 from '../images/drinksimages/img6.png';
import avatar7 from '../images/drinksimages/img7.png';


let img_data = [
    {
        'image':avatar1,
        'drinkname':'modelo',
        'size':'35.5 cl/355ml',
        'prize': '$3.55'
},
    {
        'image':avatar2,
        'drinkname':'rum',
        'size':'10 cl/250ml',
        'prize': '$1.23'
},
    {
        'image':avatar3,
        'drinkname':'drink-3',
        'size':'35.5 cl/355ml',
        'prize': '$4.55'
},
    {
        'image':avatar4,
        'drinkname':'drink-4',
        'size':'15.5 cl/155ml',
        'prize': '$2.55'
},
    {
        'image':avatar5,
        'drinkname':'drink-5',
        'size':'35.5 cl/355ml',
        'prize': '$3.55'
},
    {
        'image':avatar6,
        'drinkname':'drink-6',
        'size':'45.5 cl/455ml',
        'prize': '$4.55'
},
    {
        'image':avatar7,
        'drinkname':'drink-7',
        'size':'35.5 cl/355ml',
        'prize': '$3.55'
}

];

var data = [];

for (let index = 0; index < 6; index++) {
    data.push(
        <ImgMediaCard 
        avatar = {img_data[index]['image']}
        drinkname = {img_data[index]['drinkname']}
        size = {img_data[index]['size']}
        prize = {img_data[index]['prize']}
        id = {index}
        />
    );
}

export default data;