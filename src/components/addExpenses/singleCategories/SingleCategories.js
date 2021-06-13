import React from "react"
import $ from 'jquery';
import "./singlecategories.css"


const SingleCategories = ({ categories, setId }) => {


  $("input:checkbox").on('click', function () {
    var $box = $(this);
    if ($box.is(":checked")) {
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });

  return (
    <div>{
      categories.map((one) => {
        return (
          <div className="singleCategory">
            <div className="leftDiv">
              <div>
                <img src={one.icon_svg} alt="icon" />
              </div>
              <div>
                <h2>{one.name}</h2>
                <h3>{one.description}</h3>
              </div>
            </div>
              <input className="butt" onClick={setId} type="checkbox" id={one.id} name="" value="test"></input>
          </div>
        )
      })
    }</div>
  )
}

export default SingleCategories