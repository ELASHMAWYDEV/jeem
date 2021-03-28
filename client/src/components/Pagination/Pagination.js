import { useState, useEffect } from "react";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";

//Style
import "./style.scss";

const Pagination = ({ pagesNumber = 20 }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [shownPages, setShownPages] = useState([]);

  useEffect(() => {
    let firstArr = [];

    for (let i = 1; i <= pagesNumber; i++) {
      if (i !== 5) {
        firstArr.push(i);
      } else {
        break;
      }
    }

    setShownPages(firstArr);
  }, [pagesNumber]);

  const goNext = () => {
    if (selectedPage >= pagesNumber) {
      return;
    }

    if (shownPages.includes(selectedPage + 1)) {
      setSelectedPage(selectedPage + 1);
      return;
    } else {
      if (selectedPage < pagesNumber) {
        let toShowArray = shownPages;
        toShowArray.shift();
        toShowArray.push(selectedPage + 1);
        setShownPages(toShowArray);
        setSelectedPage(selectedPage + 1);
      }
    }
  };

  const goPrev = () => {
    if (selectedPage <= 1) {
      return;
    }

    if (shownPages.includes(selectedPage - 1)) {
      setSelectedPage(selectedPage - 1);
      return;
    } else {
      let toShowArray = shownPages;
      toShowArray.pop();
      toShowArray.unshift(selectedPage - 1);
      setShownPages(toShowArray);
      setSelectedPage(selectedPage - 1);
    }
  };

  return (
    <div className="pagination-container">
      <div
        className={`arrow-left ${selectedPage > 1 ? "active" : ""}`}
        onClick={goPrev}
      >
        <RiArrowLeftSFill />
      </div>
      {shownPages.map((num, i) => (
        <div
          key={i}
          className={`page-num ${selectedPage === num ? "active" : ""}`}
          onClick={() => setSelectedPage(num)}
        >
          {num}
        </div>
      ))}
      <div
        className={`arrow-right ${selectedPage < pagesNumber ? "active" : ""}`}
        onClick={goNext}
      >
        <RiArrowRightSFill />
      </div>
    </div>
  );
};

export default Pagination;
