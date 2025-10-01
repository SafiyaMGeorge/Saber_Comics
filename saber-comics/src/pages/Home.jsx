import React from "react";
import hero from "../assets/aesthetic-anime-character.jpg";
import Button from "../components/Button";
import Genre from "../components/Genretab";
import Cards from "../components/Cards";
import data from "../data/covers"
function Home(){
    return(
        <div className="h-screen">
            <section className="heroBanner bg-no-repeat bg-center bg-cover w-full h-70 text-white" style={{ backgroundImage: `url(${hero})` }}>
                <h1>Title</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Incidunt, et? Rerum suscipit possimus nulla molestiae voluptate ea, 
                    sit voluptas enim numquam, laboriosam ducimus aperiam quibusdam voluptates 
                    facilis alias labore. Et.
                </p>
                <Button>Read</Button>
                <Genre type='' />
                <Genre type='' />
                <Genre type='' />
            </section>
            <section className="updates w-full h-150 flex-col justify-items-center bg-amber-200">
                <h1 className="py-4">Updates</h1>
                <div className="w-full px-8 flex justify-between">
                    {data.map(covers =>(
                        <Cards image={covers.image} title={covers.title} key={covers.id} path={covers.path}/>
                    ))}
                </div>
            </section>
        </div>
    );
}
export default Home;