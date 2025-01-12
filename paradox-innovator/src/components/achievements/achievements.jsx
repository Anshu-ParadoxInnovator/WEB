import React from "react";
import styles from "./achievements.module.css";

const achievements = [
  {
    title: "Hack Heritage 2024",
    description:
      "Winner among 250+ teams of Hack Heritage, an internal Hackathon for SIH24.",
    image: "https://i.ibb.co/TTQH56j/Whats-App-Image-2025-01-10-at-19-14-13.jpg",
  },
  {
    title: "NIRMITI 2024",
    description:
      "Winner among 60+ startups among the city, Tier 2 TRL 4 Service products.",
    image: "https://i.ibb.co/51h1MKq/Whats-App-Image-2025-01-10-at-19-14-13.jpg",
  }, 
 {
    title: "Joint winner - SIH 2024 (Hardware edition)",
    description:
      "Victory at SIH 2024 - MIT ADT university, pune",
    image: "https://i.ibb.co/M6txpxv/Whats-App-Image-2025-01-10-at-19-14-14.jpg",
  },
];

const Achievements = () => {
  return (
    <div className={styles.achievementsSection}>
      <h2 className={styles.title}>Achievements</h2>
      <div className={styles.achievementsContainer}>
        {achievements.map((achievement, index) => (
          <div className={styles.achievementCard} key={index}>
            <img
              src={achievement.image}
              alt={achievement.title}
              className={styles.image}
            />
            <h3 className={styles.subtitle}>{achievement.title}</h3>
            <p className={styles.description}>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;



// import React, { useState, useEffect } from "react";
// import styles from "./achievements.module.css";

// const achievements = [
//   {
//     title: "Hack Heritage 2024",
//     description:
//       "Winner among 250+ teams of Hack Heritage, an internal Hackathon for SIH24.",
//     images: [
//       "https://i.ibb.co/TTQH56j/Whats-App-Image-2025-01-10-at-19-14-13.jpg",
//       "/path/to/hack-heritage2.jpg",
//       "/path/to/hack-heritage3.jpg",
//     ], // Add multiple images here
//   },
//   {
//     title: "NIRMITI 2024",
//     description:
//       "Winner among 60+ startups among the city, Tier 2 TRL 4 Service products.",
//     images: [
//       "/path/to/nirmiti1.jpg",
//       "/path/to/nirmiti2.jpg",
//       "/path/to/nirmiti3.jpg",
//     ], // Add multiple images here
//   },
// ];

// const Achievements = () => {
//   const [currentImages, setCurrentImages] = useState(
//     achievements.map((achievement) => achievement.images[0])
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImages((prevImages) =>
//         prevImages.map((currentImage, index) => {
//           const imageList = achievements[index].images;
//           const currentIndex = imageList.indexOf(currentImage);
//           return imageList[(currentIndex + 1) % imageList.length];
//         })
//       );
//     }, 3000); // Change images every 3 seconds

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   return (
//     <div className={styles.achievementsSection}>
//       <h2 className={styles.title}>Achievements</h2>
//       <div className={styles.achievementsContainer}>
//         {achievements.map((achievement, index) => (
//           <div className={styles.achievementCard} key={index}>
//             <img
//               src={currentImages[index]}
//               alt={achievement.title}
//               className={styles.image}
//             />
//             <h3 className={styles.subtitle}>{achievement.title}</h3>
//             <p className={styles.description}>{achievement.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Achievements;
