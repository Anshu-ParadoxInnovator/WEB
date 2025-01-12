// import React from "react";
// import styles from "./aboutcomponent.module.css";
// // import member1 from "./images/anshu.jpg"; // Replace with actual image paths
// // import member2 from "./images/ranjan.jpg";
// // import member3 from "./images/ankit.jpg";
// // import member4 from "./images/shreya.jpg";
// // import member5 from "./images/swayam.jpg";

// const AboutComponent = () => {
//     return (
//         <section className={styles.aboutSection}>
//             <div className={styles.diagonal}></div>
//             <div className={styles.container}>
//                 <h2 className={styles.title}>About Paradox Innovator</h2>
//                 <p className={styles.text}>
//                     At Paradox Innovator, we are dedicated to creating innovative
//                     solutions that enhance safety and efficiency in various sectors.
//                     Our team of engineers and designers works tirelessly to develop
//                     cutting-edge technology that meets the needs of our community.
//                 </p>
//                 <h3 className={styles.title}>Our Team</h3>
//                 <p className={styles.text}>
//                     We are a diverse team of passionate individuals who specialize in
//                     robotics, engineering, and design. Together, we strive to make a
//                     difference through our projects. Paradox Innovator focuses on
//                     innovative ideas that help mankind. Each member contributes
//                     uniquely to our projects.
//                 </p>
//                 <div className={styles.team}>
//                     <div className={styles.member}>
//                         <img src="https://i.ibb.co/Yfx7NFL/Whats-App-Image-2025-01-10-at-19-14-14.jpg" alt="Anshu Raj" />
//                         <div className={styles.memberName}>Anshu Raj</div>
//                     </div>
//                     <div className={styles.member}>
//                         <img src="https://i.ibb.co/S66YxLV/Whats-App-Image-2025-01-10-at-19-14-13.jpg" alt="Ranjan Kr. Gupta" />
//                         <div className={styles.memberName}>Ranjan Kr. Gupta</div>
//                     </div>
//                     <div className={styles.member}>
//                         <img src="https://i.ibb.co/V2zwCN4/Whats-App-Image-2025-01-10-at-19-14-13.jpg" alt="Ankit Pandit" />
//                         <div className={styles.memberName}>Ankit Pandit</div>
//                     </div>
//                     <div className={styles.member}>
//                         <img src="https://i.ibb.co/hXTWTfr/Whats-App-Image-2025-01-10-at-19-14-13.jpg" alt="Shreya Panda" />
//                         <div className={styles.memberName}>Shreya Panda</div>
//                     </div>
//                     <div className={styles.member}>
//                         <img src="https://i.ibb.co/xJ9Z9Lk/Whats-App-Image-2025-01-10-at-19-14-13.jpg" alt="Swayam Mishra" />
//                         <div className={styles.memberName}>Swayam Mishra</div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutComponent;


import React from "react";
import styles from "./aboutcomponent.module.css";

const AboutSection = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>About Paradox Innovator</h2>
                <p className={styles.text}>
                    At Paradox Innovator, we are dedicated to creating innovative solutions that enhance safety and efficiency in various sectors. Our team of engineers and designers works tirelessly to develop cutting-edge technology that meets the needs of our community.
                </p>
                <h3 className={styles.title}>Our Team</h3>
                <div className={styles.team}>
                    <div className={styles.member}>
                        <img src="https://i.ibb.co/Yfx7NFL/Whats-App-Image-2025-01-10-at-19-14-14.jpg" alt="Anshu Raj" />
                        <div className={styles.memberName}>Anshu Raj</div>
                    </div>
                    <div className={styles.member}>
                        <img src="https://i.ibb.co/S66YxLV/Whats-App-Image-2025-01-10-at-19-14-13.jpg" alt="Ranjan Kr. Gupta" />
                        <div className={styles.memberName}>Ranjan Kr. Gupta</div>
                    </div>
                    <div className={styles.member}>
                        <img src="https://i.ibb.co/V2zwCN4/Whats-App-Image-2025-01-10-at-19-14-13.jpg" alt="Ankit Pandit" />
                        <div className={styles.memberName}>Ankit Pandit</div>
                    </div>
                    <div className={styles.member}>
                        <img src="https://i.ibb.co/hXTWTfr/Whats-App-Image-2025-01-10-at-19-14-13.jpg" alt="Shreya Panda" />
                        <div className={styles.memberName}>Shreya Panda</div>
                    </div>
                    <div className={styles.member}>
                        <img src="https://i.ibb.co/xJ9Z9Lk/Whats-App-Image-2025-01-10-at-19-14-13.jpg" alt="Swayam Mishra" />
                        <div className={styles.memberName}>Swayam Mishra</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
