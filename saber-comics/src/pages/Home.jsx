import React from "react";
import hero from "../assets/aesthetic-anime-character.jpg";
import Button from "../components/Button";
import Genre from "../components/Genretab";
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
            <section className="updates">
                <p>This is the updates section</p>
            </section>
        </div>
    );
}
export default Home;