const Error = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col p-5">
            <h1>Error 404</h1>
            <p m-5>El sitio que buscas no existe !</p>
          </div>
          <div className="col">
            <img src="./images/error404.jpg" className="img-fluid shadow-lg p-3 mb-5 bg-body rounded" alt="" sizes="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
