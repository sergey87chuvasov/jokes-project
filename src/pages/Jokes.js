import Loader from '../components/UI/Loader';
import JokeList from '../components/jokes/JokeList';
import useHttp from '../hooks/use-http';
import { getJokes } from '../utils/firebase-api';
import { useEffect } from 'react';
import NoJokesFound from '../components/jokes/NoJokesFound';

// const DUMMY_JOKES = [
//   {
//     id: 'j1',
//     topic: 'programming',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur qui ipsa quaerat?',
//   },
//   {
//     id: 'j2',
//     topic: 'general',
//     text: 'Gorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur qui ipsa quaerat?',
//   },
// ];

const Jokes = () => {
  const {
    sendHttpRequest,
    status,
    data: loadedJokes,
    error,
  } = useHttp(getJokes, true);

  useEffect(() => {
    sendHttpRequest();
  }, [sendHttpRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedJokes || loadedJokes.length === 0)) {
    return <NoJokesFound />;
  }

  return <JokeList jokes={loadedJokes} />;
};

export default Jokes;
