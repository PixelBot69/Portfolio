import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const data=[
    {
        name: 'PokeDex',
        description: 'hey this my project hehehe',
        image: 'src/components/Projects/Gohs-Pokedex-Bug-Types-Pokemon-Journeys.avif'

    },
    {
        name: 'PokeDex',
        description: 'hey this my project hehehe',
        image: 'src/components/Projects/66e01ce5-c164-490c-a1e0-6ba478abea66-cover.png'

    }
    ,
    {
        name: 'PokeDex',
        description: 'hey this my project hehehe',
        image: 'src/components/Projects/Apple-Weather-app.webp'

    },
    {
        name: 'PokeDex',
        description: 'hey this my project hehehe',
        image: 'src/components/Projects/Dark-Mode-Hero.jpeg'

    }
    ,
    {
        name: 'PokeDex',
        description: 'hey this my project hehehe',
        image: 'src/components/Projects/hackathon-scrum-tips.avif'

    },

]



function Project() {
    const settings = {
        accessibility:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
       
        <div className="p-[1.5rem] md:p-[5.5rem]">
         <div className=" ml-[2rem] pb-[5rem]  ">
            <h1 className="text-white text-[3rem]">PROJECTS</h1>
         </div>
         <Slider {...settings}>
            {data.map((e) => (
                <div key={e.name} className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex">
                    <img className="w-full" src={e.image} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{e.name}</div>
                        <p className="text-gray-700 text-base">
                            {e.description}
                        </p>
                    </div>
                </div>
            ))}
            </Slider>
            <hr className="mt-[10.75rem] ml-[5.75rem] mr-[5.75rem] border-[#DD7B6A] "></hr>
        </div>
        
        
    );
}



export default Project;

