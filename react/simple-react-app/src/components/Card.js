import React from 'react';
function Card(props) {
    return (
        <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={props.img} alt="" />
          <div class="card-body">
            <h4 class="card-title">{props.title}</h4>
            <p class="card-text">{props.content}</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
    );

}

export default Card;