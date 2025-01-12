// import React from 'react';
// import styles from './servicescomponent.module.css';

// const ServicesComponent = () => {
//   const services = [
//     { title: "Home Automations", side: "left" },
//     { title: "Research Projects", side: "left" },
//     { title: "IoT & Automations", side: "left" },
//     { title: "Help on College Projects", side: "left" },
//     { title: "PCB Designing", side: "left" },
//     { title: "Workshops", side: "right" },
//     { title: "Lab Setups", side: "right" },
//     { title: "Custom College Projects", side: "right" },
//     { title: "3D Designing", side: "right" },
//     { title: "Electronics", side: "right" }
//   ];

//   return (
//     <div className={styles.servicesContainer}>
//       <div className={styles.innerContainer}>
//         <h2 className={styles.title}>Services</h2>
//         <div className={styles.underline}></div>
        
//         <div className={styles.gridContainer}>
//           <div className={styles.divider}></div>
          
//           {/* Left Column */}
//           <div className={styles.column}>
//             {services
//               .filter(s => s.side === "left")
//               .map((service, index) => (
//                 <div key={index} className={styles.serviceCard}>
//                   <h3 className={styles.cardTitle}>{service.title}</h3>
//                 </div>
//             ))}
//           </div>
          
//           {/* Right Column */}
//           <div className={styles.column}>
//             {services
//               .filter(s => s.side === "right")
//               .map((service, index) => (
//                 <div key={index} className={styles.serviceCard}>
//                   <h3 className={styles.cardTitle}>{service.title}</h3>
//                 </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesComponent;


import React from 'react';
import styles from './servicescomponent.module.css';

const ServicesComponent = () => {
  const services = [
    { title: "Home Automations", side: "left" },
    { title: "Research Projects", side: "left" },
    { title: "IoT & Automations", side: "left" },
    { title: "Help on College Projects", side: "left" },
    { title: "PCB Designing", side: "left" },
    { title: "Workshops", side: "right" },
    { title: "Lab Setups", side: "right" },
    { title: "Custom College Projects", side: "right" },
    { title: "3D Designing", side: "right" },
    { title: "Electronics", side: "right" }
  ];

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.innerContainer}>
        <h2 className={styles.title}>Services</h2>
        <div className={styles.underline}></div>
        
        <div className={styles.gridContainer}>
          <div className={styles.divider}></div>
          
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {services
              .filter(s => s.side === "left")
              .map((service, index) => (
                <div 
                  key={`left-${index}`} 
                  className={styles.serviceCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
            ))}
          </div>
          
          {/* Right Column */}
          <div className={styles.rightColumn}>
            {services
              .filter(s => s.side === "right")
              .map((service, index) => (
                <div 
                  key={`right-${index}`} 
                  className={styles.serviceCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;