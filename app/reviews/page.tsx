import TopCard from "@/components/TopCard";
import CustomImage from "@/components/CustomImage";

import First from "@/app/assets/image 2.png"
import Second from "@/app/assets/image 3.png"
import Third from "@/app/assets/image 4.png"
import Fourth from "@/app/assets/image 7.png"
import Fifth from "@/app/assets/image 6.png"
import Sixth from "@/app/assets/image 9.png"
import Newsletter from "@/components/Newsletter";
const Home = () =>{
    // @ts-ignore
    // @ts-ignore
    return(
        <div>
            <TopCard title={"REVIEWS"} desc={"We believe fitness should be accessible to everyone, everywhere," +
                " regardless of income or access to a gym."} />
            <div className="my-24 max-w-[1440px] mx-auto p-4 flex flex-col gap-32">
                {/*@ts-ignore*/}
                <CustomImage direction="ltr" image={First}>
                    <h3 className="text-4xl font-bold text-heading">Adizero Adios Boost 2</h3>
                    <p className="text-normal text-base my-2 text-justify lg:pr-16">
                        De Adios Boost 2 is een neutrale schoen voor op de weg, goed voor
                        wedstrijden & marathons. Ik gebruik deze schoen zelf voor wedstrijden.
                        Heel lichte schoen met genoeg demping door het boost materiaal. Voelt
                        ook heel natuurlijk aan als je ermee aan het lopen bent.
                    </p>
                    <div className="text-text text-base">
                        <div>
                            <p className="font-bold">Terrein</p>
                            <p>Weg</p>
                        </div>
                        <div>
                            <p className="font-bold">Ondersteuning</p>
                            <p>Neutrale pronatie</p>
                        </div>
                        <div>
                            <p className="font-bold">Gebruik</p>
                            <p>Wedstrijd / training</p>
                        </div>
                        <div>
                            <p className="font-bold">Prijs</p>
                            <p>128€</p>
                        </div>
                        <div>
                            <p className="font-bold">Gewicht</p>
                            <p>W: 198g</p>
                            <p>M: 235g</p>
                        </div>
                    </div>
                </CustomImage>
                {/*@ts-ignore*/}
                <CustomImage direction="rtl" image={Second}>
                    <h3 className="text-4xl font-bold text-heading">
                        New Balance Fresh Foam Zante
                    </h3>
                    <p className="text-normal text-base my-2 text-justify lg:pr-16">
                        Deze schoen is gemaakt voor de marathon in Rotterdam, de zool is gemaakt
                        van een dikke foam die zeker genoeg demping geeft maar door de dikke
                        zool loop je niet meer natuurlijk en ook minder stabiel. Door de dikke
                        flexibele zool kunnen je voeten nogal vlug naar buiten of naar binnen
                        gaan.
                    </p>
                    <div className="text-text text-base">
                        <div>
                            <p className="font-bold">Terrein</p>
                            <p>Weg</p>
                        </div>
                        <div>
                            <p className="font-bold">Ondersteuning</p>
                            <p>Neutrale pronatie</p>
                        </div>
                        <div>
                            <p className="font-bold">Gebruik</p>
                            <p>Training</p>
                        </div>
                        <div>
                            <p className="font-bold">Prijs</p>
                            <p>130€</p>
                        </div>
                        <div>
                            <p className="font-bold">Gewicht</p>
                            <p>W: 214g</p>
                        </div>
                    </div>
                </CustomImage>
                {/*@ts-ignore*/}
                <CustomImage direction="ltr" image={Third} >
                    <h3 className="text-4xl font-bold text-heading">Adistar Boost Glow</h3>
                    <p className="text-normal text-base my-2 text-justify lg:pr-16">
                        Dit is een neutrale trainingschoen ook gemaakt van het boost materiaal.
                        Je hebt een heel dikke zool bij deze schoen welke heel veel demping
                        geeft, zeker aan te raden voor trainingen mee te doen. Wedstrijden zou
                        ik hier niet op lopen omdat deze iets zwaarder is dan een gewone schoen.
                        Deze schoen is perfect om op de baan te lopen maar wil je eens op een
                        niet zo vlakke ondergrond lopen zou ik toch voor een andere schoen gaan,
                        hoe dikker je zool hoe makkelijker je je voeten ook kan omslaan.
                    </p>
                    <div className="text-text text-base">
                        <div>
                            <p className="font-bold">Terrein</p>
                            <p>Weg</p>
                        </div>
                        <div>
                            <p className="font-bold">Ondersteuning</p>
                            <p>Neutrale pronatie</p>
                        </div>
                        <div>
                            <p className="font-bold">Gebruik</p>
                            <p>Training</p>
                        </div>
                        <div>
                            <p className="font-bold">Prijs</p>
                            <p>110€</p>
                        </div>
                        <div>
                            <p className="font-bold">Gewicht</p>
                            <p>W: 320g</p>
                        </div>
                    </div>
                </CustomImage>
                {/*@ts-ignore*/}
                <CustomImage direction="rtl" image={Fourth} >
                    <h3 className="text-4xl font-bold text-heading">Adizero Boston Boost</h3>
                    <p className="text-normal text-base my-2 text-justify lg:pr-16">
                        Dit is persoonlijk mijn favoriete schoen van het moment. Geeft heel veel
                        demping, is héél licht en iets tussen een wedstrijdschoen en
                        trainingsschoen. Deze kan dus zowel gebruikt worden voor wedstrijden of
                        voor op training. Je kan er ook makkelijk in het bos met lopen,
                        eigenlijk een beetje een allround schoen en zeker aan te raden als je
                        eerste paar schoenen !
                    </p>
                    <div className="text-text text-base">
                        <div>
                            <p className="font-bold">Terrein</p>
                            <p>Weg / Offroad</p>
                        </div>
                        <div>
                            <p className="font-bold">Ondersteuning</p>
                            <p>Neutrale pronatie</p>
                        </div>
                        <div>
                            <p className="font-bold">Gebruik</p>
                            <p>Wedstrijd / training</p>
                        </div>
                        <div>
                            <p className="font-bold">Prijs</p>
                            <p>130€</p>
                        </div>
                        <div>
                            <p className="font-bold">Gewicht</p>
                            <p>W: 262g</p>
                        </div>
                    </div>
                </CustomImage>
                {/*@ts-ignore*/}
                <CustomImage direction="ltr" image={Fifth} >
                    <h3 className="text-4xl font-bold text-heading">Adidas Energy Boost</h3>
                    <p className="text-normal text-base my-2 text-justify lg:pr-16">
                        Dit is een nieuwe schoen in 2016 en omdat ik al heel tevreden was van de
                        Boston Boost wilde ik de Energy Boost ook wel eens een kans geven. Ook
                        al lijkt de schoen een beetje groot en lomp toch is deze heel licht en
                        geeft zeer veel steun/demping. Naar mijn mening nog meer dan de Boston
                        Boost. De ideala schoen om te trainen op de baan. Het enige nadeel aan
                        deze schoen is dat hij niet geschikt is voor gladde ondergrond.
                    </p>
                    <div className="text-text text-base">
                        <div>
                            <p className="font-bold">Terrein</p>
                            <p>Weg</p>
                        </div>
                        <div>
                            <p className="font-bold">Ondersteuning</p>
                            <p>Neutrale pronatie</p>
                        </div>
                        <div>
                            <p className="font-bold">Gebruik</p>
                            <p>Normale Training</p>
                        </div>
                        <div>
                            <p className="font-bold">Prijs</p>
                            <p>140€</p>
                        </div>
                        <div>
                            <p className="font-bold">Gewicht</p>
                            <p>W: 278g</p>
                        </div>
                    </div>
                </CustomImage>
                {/*@ts-ignore*/}
                <CustomImage direction="rtl" image={Sixth} >
                    <h3 className="text-4xl font-bold text-heading">Adidas Energy Techfit</h3>
                    <p className="text-normal text-base my-2 text-justify lg:pr-16">
                        Deze schoen had ik eigenlijk gekocht omdat hij in de aanbeiding stond en
                        op de foto en omschrijving wel leek wat ik kon gebruiken. Na het eerste
                        loopje met deze schoenen merkte ik al onmiddelijk dat deze goed aan de
                        voet zaten, iets strakker dan de andere schoenen van adidas die ik heb
                        maar wel aangenaam aan de voet. Het is een schoen die wat tussen
                        training en wedstrijd ligt maar zeker heel veel stabiliteit en demping
                        geeft !
                    </p>
                    <div className="text-text text-base">
                        <div>
                            <p className="font-bold">Terrein</p>
                            <p>Weg</p>
                        </div>
                        <div>
                            <p className="font-bold">Ondersteuning</p>
                            <p>Neutrale pronatie</p>
                        </div>
                        <div>
                            <p className="font-bold">Gebruik</p>
                            <p>Wedstrijd / training</p>
                        </div>
                        <div>
                            <p className="font-bold">Prijs</p>
                            <p>91€</p>
                        </div>
                        <div>
                            <p className="font-bold">Gewicht</p>
                            <p>W: 310g</p>
                        </div>
                    </div>
                </CustomImage>
            </div>
            <Newsletter/>
        </div>
    )
}

export default Home