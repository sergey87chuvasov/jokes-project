import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedJoke from '../components/jokes/HighlightedJoke';

const DUMMY_JOKES = [
  {
    id: 'j1',
    topic: 'programming',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur qui ipsa quaerat?',
  },
  {
    id: 'j2',
    topic: 'general',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur qui ipsa quaerat?',
  },
];

const JokeDetails = () => {
  const params = useParams();
  const joke = DUMMY_JOKES.find((joke) => joke.id === params.jokeId);
  return (
    <Fragment>
      <HighlightedJoke text={joke.text} topic={joke.topic} />
      {/* <h1>Joke Details Page {params.jokeId}</h1> */}
      {/* <Route path={`jokes/${params.jokeId}/comments`}></Route> */}
      <Route path='/jokes/:jokeId/comments'>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default JokeDetails;
