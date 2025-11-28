import { Facebook } from 'lucide-react'
import React from 'react'
import { BsFacebook, BsLinkedin, BsShare, BsTwitter } from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { Button } from 'react-bootstrap';

const rightData = [
    {
        image : "https://www.spjimr.org/wp-content/uploads/2025/11/learning-to-stand-out-insights-from-the-linkedin-masterclass-at-spimr.webp",
        para : "Learning to stand out: Insights from the LinkedIn masterclass at UCU"
    },
    {
        image : "https://www.spjimr.org/wp-content/uploads/2025/10/unlocking-creativity-a-storytelling-masterclass-with-author-sanjena-sathian.webp",
        para : "Learning to stand out: Insights from the LinkedIn masterclass at UCU"
    },
    {
        image : "https://www.spjimr.org/wp-content/uploads/2025/10/unlocking-creativity-a-storytelling-masterclass-with-author-sanjena-sathian.webp",
        para : "Learning to stand out: Insights from the LinkedIn masterclass at UCU"
    },
]
const sliderImage = [
    "https://www.spjimr.org/wp-content/uploads/2025/10/unlocking-creativity-a-storytelling-masterclass-with-author-sanjena-sathian-slider-pic-1.webp",
    "https://www.spjimr.org/wp-content/uploads/2025/10/unlocking-creativity-a-storytelling-masterclass-with-author-sanjena-sathian.webp"
]
function BlogPageData() {
    return (
        <div className='captital-campus-content-sec my-4'>
            <div className='d-flex flex-lg-row flex-column gap-3'>
                <div className='col-lg-8'>
                    <h3 className='mb-3'>Oct 28, 2025</h3>
                    <h1 className='mb-3'>Unlocking creativity: A storytelling masterclass with <span style={{color:"#5ac501"}}> Author Sanjena Sathian </span></h1>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='mb-0 fs-5'>Yashvardhan Joshi, PGDM 2025-27</p>
                        <div className='d-flex gap-3'>
                            <BsFacebook size={23} />
                            <BsTwitter size={23} />
                            <BsLinkedin size={23} />
                            <BsShare size={23} />
                        </div>
                    </div>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 2500, // 2.5 sec
                            disableOnInteraction: false,
                        }}
                        className='my-4'
                    >
                        {sliderImage.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className='blog-page-swiper-image'
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>

                    <p>On Friday, October 3, 2025 the UCU community was privileged to host a session with the celebrated author, storyteller, and writing teacher, Ms. Sanjena Sathian. The event offered participants a unique opportunity to delve into the world of creative writing and explore the nuances of storytelling from a master of the craft.</p>

                    <p>Ms. Sathian is the author of the critically acclaimed novels ‘Gold Diggers’ and ‘Goddess Complex’. Her most recent work, ‘Goddess Complex’, released in March 2025, was named a top-anticipated book of the year by TIME and a New York Times Editor’s Choice. Her debut novel, ‘Gold Diggers’, was not only named a Top 10 Best Book of 2021 by the Washington Post but has also been acquired by Mindy Kaling for a television series adaptation. Her prolific work extends to short fiction and non-fiction, with bylines in prestigious publications like The Atlantic, The New York Times, and NewYorker.com.</p>

                    <p>The session, expertly moderated by Prof. Vineeta Dwivedi, began with a discussion that revealed the core of Ms. Sathian’s philosophy: a writer’s education is constant and sourced from everywhere. She pointed to Julia Cameron’s ‘The Artist’s Way’ as a key influence but also encouraged the audience to find lessons in newspapers and even television, citing the sharp dialogue in Veep as ‘some of the meanest writing she has ever seen.’ Her view on AI further cemented this human-centric approach; while a useful tool, she sees it as an aggregator of the existing ‘average of all of the internet’, incapable of replacing the paramountcy of genuine human creativity.</p>

                    <p>This philosophy was then put directly into practice. Transitioning from discussion to a hands-on workshop, Ms. Sathian created an environment designed to dismantle creative inhibition. With meditative music playing, she introduced a series of timed writing exercises built on one foundational principle: the pen must never stop moving. Even if it meant just doodling, the goal was to outrun the internal critic and allow instinct to take over. The prompts were not random but formed a deliberate sequence in exercising empathy. We began with a simple act of memory, listing names of people we used to know. This evolved into a deeper challenge: to choose one person and imagine how they felt when they last saw us.</p>

                    <p>The final exercise was a masterclass in perspective-taking, requiring us to embody that person and write from their first-person point of view as they experienced something from our own recent lives. I found myself channelling a classmate from the third standard who had moved from Kenya, narrating my own recent, first-time experience of watching a film in a Mumbai IMAX through his imagined eyes. For many of us whose creative habits have been sidelined by the demands of an MBA, this workshop was a powerful breakthrough. It wasn’t just about writing; it was an active lesson in empathy, reminding us that the core of compelling storytelling lies in the ability to genuinely inhabit another point of view.</p>
                    <div className='text-white p-4 rounded' style={{backgroundColor:"#0c0142"}}>
                        <p className='fs-5 fw-bold'>About Post Graduate Diploma in Management (PGDM)</p>
                        <p>UCU Post Graduate Diploma in Management (PGDM) is a two-year, full-time residential programme equivalent to an MBA. PGDM is approved by AICTE, accredited by NBA and AMBA, UK and consistently rates among India’s top 10 management programmes. The programme offers a holistic approach to leadership development with its innovative blend of classroom learning and thoughtfully curated immersive experiences.</p>
                        <Button>Know more about UCU PGDM</Button>
                    </div>
                </div>


                <div className='vertical-line-blog-page'></div>
                <div>
                    <h3 className='blog-page-right-head mb-4'>You may also read:</h3>
                    <div className='d-flex flex-column gap-5'>
                        {rightData.map((item,index)=>(
                            <div className='d-flex gap-3 flex-column'>
                                <img src={item.image} className='rounded'/>
                                <p className='mb-0'>{item.para}</p>
                                <Button style={{backgroundColor:"#5ac501",border:"none"}} className='col-6'>Know more</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPageData