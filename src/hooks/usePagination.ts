import { useState } from "react";
import { paginate } from "../utils/utils";

import _ from 'lodash';

const usePagination = (itemsCount: number, pageSize: number) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const pagesCount: number = Math.ceil(itemsCount / pageSize);
  if (pagesCount <= 1) return null;

  const pages: number[] = _.range(1, pagesCount + 1);
  const totalIndex: number = Math.ceil(pages.length / 3);
  const pagesToDisplay = paginate(pages, currentIndex, 3);

  return {
    pagesToDisplay,
    previousRangeVisible: currentIndex > 1,
    nextRangeVisible: currentIndex < totalIndex,
    onPreviousRange: () => setCurrentIndex(currentIndex - 1),
    onNextRange: () => setCurrentIndex(currentIndex + 1),
  };
};

export default usePagination;
