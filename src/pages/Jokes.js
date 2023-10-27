import JokeList from '../components/jokes/JokeList';

const DUMMY_JOKES = [
  {
    id: 'j1',
    topic: 'programming',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur qui ipsa quaerat?',
  },
  {
    id: 'j2',
    topic: 'general',
    text: 'Gorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur qui ipsa quaerat?',
  },
];

const Jokes = () => {
  return <JokeList jokes={DUMMY_JOKES} />;
};

export default Jokes;
