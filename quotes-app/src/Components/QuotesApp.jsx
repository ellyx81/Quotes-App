const QuotesApp = () => {
  return (
    <div className="container">
      <div className="quotes-app">
        <h1 className="app-heading">Quote.</h1>
        <i className="bx bxs-heart fav-icon"></i>
        <div className="quote-wrapper">
          <div className="quote">
            <i className="bx bxs-quote-alt-left left-quote"></i>
            <p className="quote-text">
              No act of kindness, no matter how small, is ever wasted.
            </p>
            <p className="quote-author">Aesop</p>
          </div>
          <div className="quote-bg"></div>
        </div>
        <div className="buttons">
          <i className="bx bx-heart"></i>
          <i className="bx bx-copy"></i>
          <button className="btn btn-new">New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default QuotesApp;
