import React from "react"
import $ from 'jquery'; 


const SingleCategories = ({ categories,setId }) => {


$("input:checkbox").on('click', function() {
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
                    <div>
                        <h2>{one.name}</h2>
                        <h3>{one.description}</h3>
                        <img src={one.icon_svg} alt="icon"/>
                        <input onClick={setId} type="checkbox" id={one.id} name="" value="test"></input>
                    </div>
                )
            })
        }</div>
    )
}

export default SingleCategories