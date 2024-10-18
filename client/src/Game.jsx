import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Game.css';
import Navbar from './Navbar';

function Game() {

  const videoData = [
    {
      id: 1,
      title: 'Conservationist',
      videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1726207814/Conservationist_fvg3jp.mp4',
      question: 'How will you handle the poaching situation?',
      options: ['Approach villagers.', 'Involve law enforcement.', 'Community awareness.', 'Set up surveillance.'],
      correct: 'Community awareness.'
    },
    {
      id: 2,
      title: 'AI Researcher',
      videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1726207270/AI_Researcher_tkhjt8.mp4',
      question: 'How will you handle bias in the algorithm?',
      options: ['Release.', 'Delay to fix bias.', 'Release with disclaimer.', 'Seek more funding.'],
      correct: 'Delay to fix bias.'
    },
    {
      id: 3,
      title: 'Aerospace Engineer',
      videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1726206812/Aerospace_Engineer_sya9oa.mp4',
      question: 'How will you handle the hydraulic fault?',
      options: ['Fix immediately.', 'Proceed with launch.', 'Request more testing.', 'Inform authorities.'],
      correct: 'Fix immediately.'
    },
    {
      id: 4,
      title: 'Bank Manager',
      videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1726207554/Bank_Manager_zhuwdo.mp4',
      question: 'How should James handle potential financial abuse?',
      options: ['Report to APS.', 'Discuss with customer.', 'Monitor account.', 'Confront the son.'],
      correct: 'Report to APS.'
    },
    {
      id: 5,
      title: 'High School Teacher',
      videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1726240952/High_School_Teacher_ytigib.mp4',
      question: 'How should Ms. Johnson handle Sam’s situation?',
      options: ['Report cheating.', 'Retake test.', 'Offer extra help.', 'Ignore cheating.'],
      correct: 'Offer extra help.'
    },
    {
      id: 6,
      title: 'Entertainment',
      videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1726240971/Entertainment_q3xeun.mp4',
      question: 'How should Meera respond to the controversial scene?',
      options: ['Agree for marketability.', 'Refuse to protect integrity.', 'Suggest compromise.', 'Seek advice.'],
      correct: 'Refuse to protect integrity.'
    },
    {
      id: 7,
      title: 'Fire Safety',
      videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1726240963/FireSafety_ky9qxn.mp4',
      question: 'How should resources be allocated in the rescue?',
      options: ['Split team.', 'Focus on accessible victims.', 'Request backup.', 'Evacuate team.'],
      correct: 'Focus on accessible victims.'
    },
    {
      id: 8,
      title: 'Air Traffic Controller',
      videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1726207492/Air_Traffic_Controller_w971sg.mp4',
      question: 'Which plane should land first during a storm?',
      options: ['Larger commercial plane.', 'Smaller plane, low on fuel.', 'Divert one plane.', 'Assess with pilots.'],
      correct: 'Smaller plane, low on fuel.'
    }
  ];
  

  const { id } = useParams(); 
  const video = videoData.find(video => video.id === parseInt(id)); 
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
  
    setSelectedOption(null);
    setFeedback('');
  }, [id]);

  if (!video) {
    return <div>Video not found!</div>;
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === video.correct) {
      setFeedback('Correct!');
      setScore(prevScore => prevScore + 1);
    } else {
      setFeedback('Wrong answer!');
    }
  };

  const getOptionClass = (option) => {
    if (!selectedOption) return '';
    return option === video.correct ? 'correct' : 'wrong';
  };

  return (
    <div>
      <Navbar/>
      <div className="title"><h1>{video.title}</h1></div>
   <div className="score">  <h2>Score: {score}</h2></div> 
      <div className="video-container">
     
        <video
          key={video.id}
          controls
          autoPlay
          style={{ width: '100%', maxWidth: '95%', height: '100%', maxHeight: '350px', margin: '10px', borderRadius: '3px', background: '' }}
          className="video-player"
        >
          <source src={video.videoUrl} type="video/mp4" />
        </video>
      </div>
   <div className="q">   <h2>{video.question}</h2></div>
      <div className="g-container">
        {}
        
        <div className="option">
          {video.options.map((option, index) => (
            <p
              key={index}
              onClick={() => handleOptionClick(option)}
              className={selectedOption === option ? getOptionClass(option) : ''}
            >
              {option}
            </p>
          ))}
        </div>

      </div>
    <center>  <div className="g1">
          {}
          {video.id < videoData.length && (
            <Link to={`/video/${video.id + 1}`}>
              <button>Next Video</button>
            </Link>
          )}
        </div></center>
      {selectedOption && <div className="feedback">{feedback}</div>}
      
    </div>
  );
}

export default Game;
