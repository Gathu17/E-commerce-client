import React from 'react';
import Slider from '../components/Slider';
import Category from '../components/Category';

const config = [
    {
        title: "CLASSY",
        desc: "DON'T BE AFRAID TO STYLE UP! GET UPTO 30% OFF",
        image:"https://images.pexels.com/photos/2703465/pexels-photo-2703465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        bg:"linear-gradient(to bottom, #ccffff 0%, #66ccff 90%)"
    },
    {
        title: "BEACH VIBES",
        desc: "DON'T BE AFRAID TO STYLE UP! GET UPTO 30% OFF",
        image:"https://images.pexels.com/photos/947422/pexels-photo-947422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        bg:"linear-gradient(to bottom, #ffffff 0%, #ffff99 80%)"
    },
    {
        title: "VINTAGE",
        desc: "DON'T BE AFRAID TO STYLE UP! GET UPTO 30% OFF",
        image:"https://images.pexels.com/photos/956728/pexels-photo-956728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        bg: "linear-gradient(to bottom, #ffccff 0%, #ccccff 90%)"
    }
]

function Home() {
    return (
        <>
        <Slider config={config}/>
        <Category/>
        </>
    )
        
     ;
}
 
export default Home ;