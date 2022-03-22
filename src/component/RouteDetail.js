import React from "react";
import '../index.css';

const RouteDetail = (props) => {

    return (
        <>
            <div className="container-fulid" style={{ width: '100%', marginTop: '100px' }}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-route">
                            <h2>{props.route}</h2>
                            <p>{props.path}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default RouteDetail;