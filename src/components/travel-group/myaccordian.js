import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./myaccordon.css";
function MyAccordion() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Day 1 - Arrival in Kathmandu</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Arrive in Kathmandu, where you are met and transferred to the Kathmandu 4*/5* Hotel. In the evening, we gather for our Welcome Dinner and our first Orientation.
                        <br />
                        Overnight in Kathmandu (D)
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Day 2, 3 - Explore KATHMANDU Valley and City</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ease yourself in gently into the chaos of Nepal’s capital city by visiting the following religious monuments in 2 days stay in the Capital of the country. Kathmandu is home to 7 UNESCO world heritage sites.
                        <br />
                        - Pashupatinath Temple, Boudhanath Stupa, Swayambhunath Stupa, Patan Durbar Square, Kathmandu Durbar Square, The ancient city of Bakthapur, Famous Market of Themal
                        <br />
                        - Swayambhunath - also known as the Monkey Temple, this is a very old religious site, this Buddhist complex has an iconic stupa, temples & many shrines.
                        <br />
                        - Boudhanath - Located about 11 km from the center and northeastern outskirts of Kathmandu, this Buddhist stupa's massive mandala makes it one of the largest stupas not only in Nepal but in the world.
                        <br />
                        - Pashupatinath - visit this famous and sacred Hindu temple just before sunset as dusk is the perfect time to soak in its spirituality. Pashupatinath has been a UNESCO World Heritage Site since 1979, and it’s here you can witness Hindu cremation along the sacred banks of the Bagmati river and Sadhu’s (Hindu holy men) performing their religious daily duties.
                        <br />
                        - Patan - Patan Durbar Square, like its counterpart in Kathmandu, is an enchanting blend of palace buildings, artistic courtyards, and graceful pagoda temples. Listed as a World Heritage Site, the former royal palace complex is the center of Patan’s religious and social life and houses a museum containing an array of bronze statues and religious objects. One remarkable monument here is a 17th-century temple dedicated to the Hindu god Krishna, built entirely of stone.
                        <br />
                        - Kathmandu Durbar Square - It showcases Nepalese craftsmanship and artistic structural engineering along with an ancient business center of prehistoric Nepal. The structural engineering is the preserved remains of the Malla period who ruled over Nepal from the twelfth to the eighteenth century.
                        <br />
                        - Take an unforgettable ride on a ‘street helicopter - The Nepali Rikshaw. As the sun goes down, discover the myriad sights, sounds, and smells of nighttime Kathmandu on an evening rickshaw ride through the city. Sit back and relax as your cycle rickshaw is expertly navigated through the buzzing backstreets and atmospheric laneways of this energetic place.
                        <br />
                        Overnights at Kathmandu (B, L, D)
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Day 4 - Kathmandu, Dhulikhel, and Hike to Namobudha Monastery</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Trek Distance: 7 Kms, Starting Elevation: 1450m, Peak Elevation: 1775m
                        <br />
                        Today after breakfast, we will be ready with our overnight backpack for an hour drive to Dhulikhel. It offers the wonderful mountain panorama views before we set out for a 3-4 hrs day hike to Namobuddha. It is a famous ancient Buddhist monastery in Nepal situated at 1750 meters surrounded by Tamang settlements close to Kathmandu. There is a special Buddhist legend about King Mahasattva offering his body to a hungry tigress at this very place which makes Namo Buddha a holy site for Buddhist people. Namo Buddha is also famous for growing rice, mustard, and millet. Thus, you can see beautiful hillside terraced farms throughout the day hike. You’ll also be surprised by the number of temples, variation in landscapes, and diversity of people living in harmony.
                        <br />
                        This one-day hike from Dhulikhel to Namo Buddha treks through terraced farmlands, pine forest, and ethnic rural villages, providing a panoramic mountain view, temples, and a diverse variety of landscapes. On a clear day, you get views of the majestic Mt. Everest and Mt. Manaslu along with several other gigantic mountains. Walking through these beautiful villages and forests, we reach Namo Buddha Monastery, which is regarded as a sacred Buddhist pilgrimage place. One of three main Stupas was built on bones and hair of Prince Mahasattva, who according to legend offered his body to feed an old starving tigress so she could feed her cubs. It also offers you a chance to immerse yourself into a Tibetan Buddhist monastery where you can live/sleep in a special guesthouse for visitors, learn about Tibetan Buddhism from senior monks and the monastery Lama. Learn about the sacred site and revered ancient stupa, the site of where Buddha Shakyamuni, in a previous life, gave his flesh to a starving tigress to feed her cubs. Experience the puja, which can be as meaningful and significant as one wants it to be. Learn about the importance of meditation and the main principles of Buddhism. During our time at the monastery, we will visit the ancient stupa and hike up the long stairway through the forest to the monastery. We will also experience dining with the monks while at the monastery. And finally, enjoy a talk with the monks with an opportunity to ask questions. Unlike most monastery visits, which are little more than walking around and taking a few photos, our time at the monastery is a unique opportunity to really learn about Tibetan Buddhism, the importance of meditation, and life in a monastery! The more one puts into this experience, the more one will get out of it!
                        <br />
                        Overnight at the Monastery. (B, L, D)
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* Continue adding more days as needed */}
        </div>
    );
}

export default MyAccordion;
