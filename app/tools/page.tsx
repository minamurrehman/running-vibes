import TopCard from "@/components/TopCard";
import Newsletter from "@/components/Newsletter";
import Form from "@/components/Form";

const Home = () =>{

    return(
        <div>
            {/*@ts-ignore*/}
            <TopCard title={"Our tools"} desc={"We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym."} />
            <div className="max-w-[1440px] mx-auto p-3 mt-20">
               {/*form1 here*/}
                <div className="my-16">
                    <h2 className="text-4xl font-bold text-center text-heading">
                        Calculate your average speed here
                    </h2>
                    <p className="text-2xl font-semibold text-center text-heading my-8">
                        Snelheid voor afstand en tijd
                    </p>

                    <Form/>
                </div>
                {/*form2 here */}
                <div className="my-16">
                    <h2 className="text-4xl font-bold text-center text-heading">
                        Calculate your consumed calories here
                    </h2>
                    <p className="text-2xl font-semibold text-center text-heading my-8">
                        Snelheid voor afstand en tijd
                    </p>
                    <Form/>
                </div>
            </div>
            <Newsletter/>
        </div>
    )
}

export default Home