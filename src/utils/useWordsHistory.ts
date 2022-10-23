import {useState} from 'react';

import {WordType} from '../constants/types';

const useWordsHistory = () => {
  const [previousWords, setPreviousWords] = useState<WordType[]>([]);

  const clearHistory = () => {
    setPreviousWords([]);
  };

  return {
    previousWords,
    setPreviousWords,
    clearHistory,
  };
};

export default useWordsHistory;
