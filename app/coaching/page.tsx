import TopCard from "@/components/TopCard";
import DualImage from "@/components/DualImage";

import Coaching1 from "@/app/assets/coaching1.png"
import Coaching2 from "@/app/assets/coaching2.png"
import Newsletter from "@/components/Newsletter";
const Home = () =>{
    const info = [
        {
            heading: 'First, make sure you have a good foundation',
            info: 'If you are not yet ready to run 3 minutes 30 times a week at a leisurely and regular pace and you hardly feel that you have trained the day before, it is best to build up your basic running condition first. Otherwise, you run the risk of getting injured.',
        },
        {
            heading: 'The interval training',
            info: 'If you can easily run 3 times a week for 30 minutes, you can start with interval training. Interval training means as much as not walking at a regular pace all the time but letting this vary. The intention is that you run faster than you normally do during an interval. Because this is heavier for you and you are therefore tired earlier, after a while you lower the pace again to rest. After catching your breath, start the next interval.',
        },
        {
            heading: 'Types of interval',
            info: 'There are different types of interval training. And each also has its uses. The distinction between the different forms is mainly based on the duration and pace of the interval. If the pace during the interval is relatively high and the duration of the interval is relatively short, then it is called Intensive Interval Training. If the duration of the interval is relatively long and the pace is relatively low, then it is called Extensive Interval Training.',
        },
        {
            heading: 'How do I start my interval?',
            info: `If you've never done interval training before, it's best to start with Extensive Interval Training. Such a training will look like this, for example: You start running like you always do when you start running QUIETLY for 30-45 minutes. After 15 minutes, slowly increase your pace. Choose this pace in such a way that you feel that this is heavy to very heavy but in such a way that you can last at least 10 minutes. It is also recommended to monitor your heart rate while doing this. Take a look at heart rate zones on our website to know exactly how high you can and may go.Maintain the higher pace for 5 minutes and then continue running at a slower pace. After 2 minutes you start the second and last interval of 5 minutes. Keep the same pace as during the first interval. After the second interval, you lower the pace again and finish your training round.Intensive interval training goes a step further. The pace is even higher, and therefore the duration of the interval is shorter, for example, 1 minute. Often during the rest period, walking between intervals is done to recover better. When recovering in that minute, it is also the intention that you get your heart rate back as low as possible.`,
        },
        {
            heading: 'Interval on the slopes',
            info: `Interval training on the slopes is useful. You can then start with a small warm-up of about 10 minutes at moderate pace. For your interval you can work with blocks of 200m pace and 200m run. Try your pace to your target +1km/h faster that you want to run. E.g. your goal is 5min/km (12k/h) then your pace runs at 4'30-4'45 or 13-14km/h. You do this in blocks of 10 times 2x200m. After a 5 minute run you walk another 1km at your desired target pace and then run out again. Ideal is a total training of about 10km or an hour of training. After a few weeks you can increase this to 300m + 100m run. If you can easily handle this pace with a 5 or 10km run, you can use this system again in the next phase at a higher speed that you want to achieve.This is possible, if no piste nearby, also near you on a strip of 400m that you explore once and have markers after 200m for example.`,
        },
        {
            heading: 'What effect does that training have exactly?',
            info: 'Because you let your body work extra hard during the interval, your body will adapt to better cope with that higher pace. In the longer term, you can therefore keep up the pace for longer and longer.Interval training can be built with infinite variations. It is important that you do not build up too quickly, do not perform too much interval training and do not perform the intervals too intensively. If you do, you increase the risk of injuries and/or overtraining.If you are serious about interval training, you are advised to follow a schedule or ask for guidance. We are happy to assist you in this! You can ask us for a schedule or advice on how to get started.',
        },
    ]
    return(
        <div>
            {/*@ts-ignore*/}
            <TopCard
                title="Coaching"
                desc="We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym."
            />

                <DualImage imageA={Coaching2} imageB={Coaching1} className={'mt-16'}>
                    <h1 className="text-[40px] font-[600] max-w-[400px]">
                        How can I run longer at a higher speed?
                    </h1>
                    <p className="font-normal text-text max-w-[500px] mt-3">
                        It is a question that many runners ask themselves, the answer to this
                        is: INTERVAL TRAINING. Pay attention never start this without having a
                        good basis, starting immediately with interval without doing some
                        endurance runs for a few months is not recommended.
                    </p>
                </DualImage>

            <div className="max-w-[1440px] mx-auto flex flex-col gap-4 mt-8 lg:mt-16 w-full">
                {
                    info.map((infoItem,index)=>(
                        <div className="text-justify" key={index}>
                            <p className="font-bold text-base text-text">{ infoItem.heading }</p>
                            <p className="font-normal text-base text-text">
                                { infoItem.info }
                            </p>
                        </div>
                    ))
                }
            </div>
            <Newsletter/>
        </div>
    )
}

export default Home