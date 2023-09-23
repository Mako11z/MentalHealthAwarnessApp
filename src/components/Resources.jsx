import React from "react";


const Resources = (props) => {
  return (
    <td className={'Resources ' + props.color}>
        <h5>{props.resource}</h5>
    </td>
  )
}
export default Resources;