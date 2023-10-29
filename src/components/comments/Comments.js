import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getComments } from '../../utils/firebase-api';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { jokeId } = params();

  const {
    sendHttpRequest,
    status,
    data: loadedComments,
  } = useHttp(getComments);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  useEffect(() => {
    sendHttpRequest(jokeId);
  }, [jokeId, sendHttpRequest]);

  const commentAddedHandler = () => {};

  return (
    <section className={styles.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          jokeId={params.jokeId}
          onCommentAdded={commentAddedHandler}
        />
      )}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
