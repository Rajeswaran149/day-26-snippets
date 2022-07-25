import React from 'react'

const Card = (props) => {

    const tick = (props) =>{
        return  props === "true" ? <i className="fa fa-check"></i> :<i className="fa fa-times"></i> ;
       }
       // function for text-muted
       const classchecked = (props) =>{
        return props === "true" ? "" :"text-muted";
      }
      // function for text-bold
      const bold = (props) =>{
        return props === "true" ? "fw-bolder" :"";
      }
       // function for text-bold
      const bolder = (props) =>{
        return props === "true" ? "fw-bolder" :"";
      }
  return (
    <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{props.data.name}</h5>
                <h6 className="card-price text-center">{props.data.price}<span className="period">{props.data.duration}</span></h6>
                <hr/>
                <ul className="fa-ul">
                  {
                    // mapping the display,tick,cross and bold
                    props.data.features.map((ele)=>
                    <li className={`${classchecked(ele.value)} ${bold(ele.isBold)} ${bolder(ele.isBolder)}`} ><span className="fa-li">{tick(ele.value)}</span><strong>{ele.name1}</strong> {ele.name}</li>)
                  }
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Card