import React, { useState, useEffect } from "react";
import Puzzle from "./Puzzle";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  
    {
      question: "While exploring a remote forest, you discover an area where plants are glowing in the dark. The local wildlife seems to be attracted to the glow. What’s your next step to understand this phenomenon?",
      options: [
        "Analyze the plants’ chemical makeup to determine the source of the glow.",
        "Observe the behavior of the wildlife around the glowing plants.",
        "Measure the environmental conditions such as soil and air quality.",
        "Investigate historical records of similar occurrences in other forests."
      ],
      answer: "Analyze the plants’ chemical makeup to determine the source of the glow."
    },
    {
      question: "You come across a river where the water suddenly changes color and becomes murky. The change happens at a specific time each day. What should you investigate first to understand the cause?",
      options: [
        "The river’s flow rate and any changes in its course.",
        "The local industrial activities and their waste disposal practices.",
        "The types of algae or microorganisms present in the water.",
        "The weather patterns and any recent storms that could affect the river."
      ],
      answer: "The local industrial activities and their waste disposal practices."
    },
    {
      question: "During a climate study, you find an unusual pattern in the temperature readings of a remote glacier. The glacier is warming at a faster rate than expected. What’s your approach to investigate?",
      options: [
        "Compare the glacier’s temperature data with historical records.",
        "Analyze the surrounding environment for any recent changes or disturbances.",
        "Study the glacier’s ice core samples for signs of accelerated melting.",
        "Investigate global climate models to see if they predict such changes."
      ],
      answer: "Analyze the surrounding environment for any recent changes or disturbances."
    },
    {
      question: "You discover a patch of desert where unusual plant species are thriving in an otherwise barren area. These plants have unique adaptations. What do you investigate to understand their survival?",
      options: [
        "The specific adaptations of the plants and how they cope with the environment.",
        "The soil composition and its ability to support plant life.",
        "The sources of water available to these plants in the desert.",
        "The role of local fauna in aiding the plants’ growth and survival."
      ],
      answer: "The specific adaptations of the plants and how they cope with the environment."
    },
    {
      question: "While monitoring a coastal area, you notice a rapid decline in the population of marine life. There’s no visible pollution or overfishing. What’s your first step to find the cause?",
      options: [
        "Investigate changes in water temperature and salinity.",
        "Examine the coastal ecosystem for any changes in habitat.",
        "Review any recent changes in local shipping routes and activities.",
        "Study the migration patterns of marine species in the area."
      ],
      answer: "Investigate changes in water temperature and salinity."
    },
    {
      question: "You find a field where the vegetation is growing in unusual patterns, resembling geometric shapes. This phenomenon is not seen in surrounding areas. What should you focus on to understand this?",
      options: [
        "Analyze the soil for any unique properties or compositions.",
        "Study the growth patterns of the vegetation and their possible causes.",
        "Investigate any unusual environmental conditions or factors in the area.",
        "Review historical agricultural practices in the region."
      ],
      answer: "Analyze the soil for any unique properties or compositions."
    },
    {
      question: "During a survey of a rainforest, you encounter an area where traditional flora and fauna are absent, replaced by unfamiliar species. What’s your approach to investigating this anomaly?",
      options: [
        "Study the new species to understand their origins and adaptations.",
        "Examine the environmental changes that might have led to the species replacement.",
        "Check for any recent human activities or disturbances in the area.",
        "Compare the current observations with historical data of the rainforest."
      ],
      answer: "Examine the environmental changes that might have led to the species replacement."
    },
    {
      question: "You discover an isolated island where a unique ecosystem exists, including plants and animals not found elsewhere. The island appears to be unaffected by global climate changes. What should you investigate to understand its stability?",
      options: [
        "The island’s geological stability and its impact on the ecosystem.",
        "The specific climatic conditions of the island and their effects on the ecosystem.",
        "The history of the island’s isolation and any evolutionary adaptations.",
        "The presence of natural barriers that protect the island from external influences."
      ],
      answer: "The specific climatic conditions of the island and their effects on the ecosystem."
    },
    {
      question: "In a mountainous region, you observe a sudden increase in landslides and soil erosion. There are no major storms or construction activities. What’s your next step to find the cause?",
      options: [
        "Study changes in vegetation cover and root systems in the area.",
        "Analyze geological formations and soil stability in the region.",
        "Investigate any subtle changes in the region’s climate.",
        "Review local wildlife activity and its impact on the soil."
      ],
      answer: "Study changes in vegetation cover and root systems in the area."
    },
    {
      question: "You notice an unusual increase in air pollution in a rural area where industrial activity is minimal. The source of the pollution is not immediately clear. What should you investigate first?",
      options: [
        "Local agricultural practices and their impact on air quality.",
        "The presence of any natural sources of pollution, such as wildfires.",
        "Changes in local transportation or vehicle emissions.",
        "Air quality data and its correlation with seasonal changes."
      ],
      answer: "Local agricultural practices and their impact on air quality."
    }
    ,
        {
          question: "While investigating an unexplained anomaly in a laboratory, you discover a strange substance with properties unlike any known material. The substance reacts unpredictably with light and heat. What’s your next step to understand it?",
          options: [
            "Analyze the substance’s chemical composition using spectroscopy.",
            "Expose the substance to different wavelengths of light and measure reactions.",
            "Conduct experiments to see how the substance behaves under various temperatures.",
            "Compare it with known substances in a comprehensive database."
          ],
          answer: "Analyze the substance’s chemical composition using spectroscopy"
        },
        {
          question: "In a physics experiment, you find an unusual pattern in the data that doesn’t fit with current theories. The data shows fluctuations that are hard to explain. What do you investigate first?",
          options: [
            "Recalibrate the instruments to ensure accurate measurements.",
            "Review the experimental setup for any possible errors or anomalies.",
            "Consult existing theories to find any overlooked factors.",
            "Analyze the data for any hidden patterns or correlations."
          ],
          answer: "Review the experimental setup for any possible errors or anomalies"
        },
        {
          question: "You come across a mysterious signal from deep space that doesn’t match any known celestial phenomena. The signal contains a series of prime numbers. What’s your approach to decoding it?",
          options: [
            "Analyze the signal’s frequency and modulation for any patterns.",
            "Translate the prime numbers into a possible message or code.",
            "Compare the signal with known signals from space for similarities.",
            "Research theories on extraterrestrial communication methods."
          ],
          answer: "Translate the prime numbers into a possible message or code"
        },
        {
          question: "During a deep-sea expedition, you discover a new species of bioluminescent creature with an unknown function for its light. What do you study first to understand its purpose?",
          options: [
            "The frequency and pattern of the light emitted by the creature.",
            "The biological structure and anatomy of the creature.",
            "The creature’s behavior and interactions with its environment.",
            "The chemical composition of the light-producing substances."
          ],
          answer: "The creature’s behavior and interactions with its environment"
        },
        {
          question: "A newly discovered element has properties that challenge current periodic table theories. It exhibits unusual magnetic and conductive properties. What’s your initial investigation?",
          options: [
            "Examine the element’s magnetic susceptibility and conductivity in detail.",
            "Compare its properties with those of elements in similar groups.",
            "Study the element’s reaction with various chemical compounds.",
            "Review theoretical models to explain the observed properties."
          ],
          answer: "Examine the element’s magnetic susceptibility and conductivity in detail"
        },
        {
          question: "You’re working with a new form of energy that seems to defy known conservation laws. Initial tests show it generates power without any apparent input. What’s your first step to investigate?",
          options: [
            "Conduct a thorough energy balance analysis to ensure no errors.",
            "Review similar cases of energy anomalies for possible explanations.",
            "Test the energy source under different conditions to validate results.",
            "Consult theoretical physicists to explore potential breakthroughs."
          ],
          answer: "Conduct a thorough energy balance analysis to ensure no errors"
        },
        {
          question: "An experiment involving gene editing yields unexpected results in the modified organisms. They exhibit traits not predicted by current genetic models. What should you investigate first?",
          options: [
            "Review the gene editing protocol and procedures for any deviations.",
            "Analyze the gene expression patterns in the modified organisms.",
            "Compare the traits with those observed in other genetically modified organisms.",
            "Research the interaction of the edited genes with the organisms’ genomes."
          ],
          answer: "Review the gene editing protocol and procedures for any deviations"
        },
        {
          question: "While studying a newly discovered archaeological site, you find an ancient machine that appears to harness energy in an unknown way. What’s your approach to understanding its function?",
          options: [
            "Analyze the machine’s components and their arrangement.",
            "Test the machine with different energy sources to observe reactions.",
            "Research historical texts and artifacts related to the machine.",
            "Compare the machine with other ancient technology for similarities."
          ],
          answer: "Analyze the machine’s components and their arrangement"
        },
        {
          question: "A recent study shows an unusual interaction between two chemical compounds that shouldn’t react according to current theories. What’s your best approach to investigate?",
          options: [
            "Repeat the experiment under different conditions to confirm results.",
            "Analyze the reaction products for any new compounds formed.",
            "Review the theoretical models for any overlooked factors.",
            "Compare the reaction with known reactions of similar compounds."
          ],
          answer: "Analyze the reaction products for any new compounds formed"
        },
        {
          question: "You encounter a mysterious mineral with properties that defy known classifications. It shows unusual electromagnetic behavior and is found only in one location. What do you study first?",
          options: [
            "The mineral’s electromagnetic properties and how they deviate from the norm.",
            "The mineral’s geological context and formation process.",
            "The mineral’s chemical composition and structure.",
            "The location’s environmental factors that might influence the mineral’s properties."
          ],
          answer: "The mineral’s electromagnetic properties and how they deviate from the norm"
        },
       
            {
              question: "You’re a detective investigating a series of mysterious disappearances. You find a cryptic note at each scene. The note says, 'The key to solving this case lies in the shadows.' What do you investigate first?",
              options: [
                "The dark alleyways near the crime scenes.",
                "The hidden compartments in the victims’ homes.",
                "The shady characters seen around the area.",
                "The unusual patterns in the crime scene photographs."
              ],
              answer: "The dark alleyways near the crime scenes"
            },
            {
              question: "At a grand estate, a priceless painting is stolen during a masquerade ball. The only clue left behind is a single red feather. Where do you look for the thief?",
              options: [
                "The guests who wore feathered masks.",
                "The servants who cleaned the ballroom.",
                "The other rooms where the feather might have fallen.",
                "The garden where the feather was found."
              ],
              answer: "The guests who wore feathered masks"
            },
            {
              question: "A high-profile businessman is found dead in his office with no sign of forced entry. The only clue is a broken pen on his desk. What could be the key to solving the case?",
              options: [
                "The broken pen’s ink stains on the victim’s shirt.",
                "The security footage from the office hallway.",
                "The fingerprints on the broken pen.",
                "The office’s secret compartments."
              ],
              answer: "The fingerprints on the broken pen"
            },
            {
              question: "During a heist, the thieves leave behind a complex puzzle instead of any obvious clues. The puzzle features a map of the city with certain locations marked. What do you do next?",
              options: [
                "Visit the marked locations on the map for clues.",
                "Examine the puzzle for hidden messages.",
                "Analyze the types of locations marked on the map.",
                "Look for connections between the locations on the map."
              ],
              answer: "Visit the marked locations on the map for clues"
            },
            {
              question: "In a locked room, a valuable item is stolen, but there are no signs of a break-in. The room is only accessible through a secret passage. What do you investigate?",
              options: [
                "The secret passage for signs of tampering.",
                "The lock mechanism on the door to the room.",
                "The items in the room that were disturbed.",
                "The key holders of the secret passage."
              ],
              answer: "The secret passage for signs of tampering"
            },
            {
              question: "A jewelry store is robbed during a storm. The only clue is a muddy footprint found inside the store. What’s your next step?",
              options: [
                "Track the muddy footprints outside to find the thief’s exit.",
                "Analyze the mud to determine its origin.",
                "Check the store’s surveillance footage for any unusual activity.",
                "Investigate the storm’s impact on the store’s security systems."
              ],
              answer: "Analyze the mud to determine its origin"
            },
            {
              question: "A famous chef is poisoned, but the only thing missing from the kitchen is a bottle of rare spice. What do you focus on to solve the case?",
              options: [
                "The kitchen staff who had access to the spice.",
                "The chef’s recent food critics and guests.",
                "The spice’s storage and handling procedures.",
                "The records of spice purchases and deliveries."
              ],
              answer: "The kitchen staff who had access to the spice"
            },
            {
              question: "A rare book is stolen from a library, and the only clue is a single page torn from another book in the library’s collection. What’s your approach to finding the thief?",
              options: [
                "Investigate the torn page for clues about its origin.",
                "Check the library’s catalog for missing or unusual book entries.",
                "Examine library staff and visitors for suspicious behavior.",
                "Analyze the library’s security system for breaches."
              ],
              answer: "Investigate the torn page for clues about its origin"
            },
            {
              question: "A computer hacker leaves behind a cryptic message on the victim’s computer screen. The message is a series of numbers and letters. What should you do to crack the code?",
              options: [
                "Analyze the pattern of the numbers and letters for a code.",
                "Search for software or tools used to generate such codes.",
                "Investigate recent activities of the computer user.",
                "Check for similar messages in other hacked systems."
              ],
              answer: "Analyze the pattern of the numbers and letters for a code"
            },
            {
              question: "In a high-security facility, a crucial document is stolen, but the only clue is a set of fingerprints on a coffee cup. What’s your best course of action?",
              options: [
                "Compare the fingerprints with those of employees and visitors.",
                "Analyze the coffee cup for any additional traces of the thief.",
                "Review security footage around the time of the theft.",
                "Investigate who had access to the coffee cup."
              ],
              answer: "Compare the fingerprints with those of employees and visitors"
            }
          
          
      
      
  
  
];

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Game = ({ setScore, onGameOver }) => {
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Shuffle the questions when the component mounts
  useEffect(() => {
    setShuffledQuestions(shuffleArray(questions));
  }, []);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === shuffledQuestions[currentPuzzle].answer) {
      setScore((prevScore) => prevScore + 1);
      if (currentPuzzle + 1 < shuffledQuestions.length) {
        setCurrentPuzzle(currentPuzzle + 1);
      } else {
        onGameOver();
      }
    } else {
      onGameOver();
    }
  };

  return (
    <div className="game">
      {shuffledQuestions.length > 0 && (
        <Puzzle
          puzzle={shuffledQuestions[currentPuzzle]}
          onAnswerSelected={handleAnswer}
        />
      )}
    </div>
  );
};

export default Game;
