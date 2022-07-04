function Principal(props) {

  const {title,image_id,date_display} = props.datas;
    return(

  <div className="album py-5 bg-light">
    <div className="container">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
              <img src={"https://www.artic.edu/iiif/2/" +{image_id} + "/full/843,/0/default.jpg" } alt="nada"></img>
            <div className="card-body">
              <p className="card-text">{date_display} </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <small className="text-muted">{title} </small>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>

    )
};

export default Principal;