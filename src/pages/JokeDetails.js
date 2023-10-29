import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedJoke from '../components/jokes/HighlightedJoke';
import useHttp from '../hooks/use-http';
import { getJoke } from '../utils/firebase-api';
import Loader from '../components/UI/Loader';

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

const JokeDetails = () => {
  const routeMatch = useRouteMatch();
  const params = useParams();
  // const joke = DUMMY_JOKES.find((joke) => joke.id === params.jokeId);

  const { jokeId } = params;

  const {
    sendHttpRequest,
    status,
    data: loadedJoke,
    error,
  } = useHttp(getJoke, true);

  useEffect(() => {
    sendHttpRequest(jokeId);
  }, [sendHttpRequest, jokeId]);

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

  if (!loadedJoke.text) {
    return <h1 className='centered'>Шуток не найдено</h1>;
  }

  return (
    <Fragment>
      <HighlightedJoke text={loadedJoke.text} topic={loadedJoke.topic} />
      {/* <Route path={`/jokes/${params.jokeId}`} exact> */}
      <Route path={`${routeMatch.path}`} exact>
        <div className='centered'>
          <Link className='btn--empty' to={`${routeMatch.url}/comments`}>
            Show Comments
          </Link>
        </div>
      </Route>
      {/* <Route path={`/jokes/${params.jokeId}/comments`}> */}
      <Route path={`${routeMatch.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default JokeDetails;
