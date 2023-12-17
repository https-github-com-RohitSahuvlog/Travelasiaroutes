import React from 'react';
import styles from './SeeItiniery.module.css';

const itineraryData = [
    {
        day: 1,
        city: "New Delhi",
        description: "Upon arrival at Delhi airport, you will be met and transferred via private vehicle to your hotel. Check in to your hotel and spend the rest of the day at leisure. Rest up and get ready for your adventure tomorrow. Those eager to dive in can opt for an evening walking food tour with an expert of the local food scene. Stroll down historic alleys and visit hidden gem family restaurants and food stalls to sample New Delhi favorites such as kebabs, butter chicken, rice pudding, and stuffed flatbreads."
    },
    {
        day: 2,
        city: "New Delhi",
        description: "Begin your exploration in the heart of Old Delhi at Chandni Chowk, one of the oldest and busiest markets. The historic market began as a bazaar dating back to when Emperor Shah Jahan founded his new capital. Today it is still a popular market densely-packed with beautifully decorated shops selling curios, souvenirs, snacks, textiles and everything in between. Take a rickshaw down the narrow lanes, passing shops, shrines, and havelis. Next to the market is Jama Masjid, one of the largest and perhaps most magnificent mosque in India. Before noon, head to prominent Sikh temple where you will help prepare bread in the community kitchen for lunch. In the afternoon, take a driving tour of New Delhi, passing government buildings, the parliament house, India Gate, and the president's palace. Then, pay a visit to the stunning Lotus Temple, remarkable for its flowerlike shape. Finally, visit Humayan's Tomb which was the first garden-tomb in India. This UNESCO site was a leap in Mughal architecture and set a precedent for subsequent structures, such as the Taj Mahal."
    },
    // Add more day objects as needed
];

const SeeItiniery = () => {
    console.log("checking");
    return (
        <div className={styles.container}>
            <div className={styles.pageSection}>
                <h2 className={`${styles.daybyday} h1`}>
                    Day-by-Day
                </h2>

                {itineraryData.map((day) => (
                    <div key={day.id} className={`mx-auto ${styles.mt12} ${styles.maxW2xl}`} id={`day-${day.id}`}>
                        <div className="flex items-end justify-between">
                            <h3 className={`${styles.mb0} ${styles.day1}`}>Day {day.day}</h3>
                        </div>

                        <h4 className={`${styles.h3} ${styles.goldLinedTop} ${styles.mt5} ${styles.block} ${styles.pt_6} ${styles.textBlack}`}>
                            <div className={`${styles.mt5}`}>{day.city}</div>
                        </h4>

                        <div className={`${styles.mt5} ${styles.leadingNormal}`}>
                            <p>{day.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeeItiniery;
