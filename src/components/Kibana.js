import Iframe from "react-iframe";
import React from "react";

export default class KibanaFrame extends React.Component {
  render(){
    return (
      <Iframe url="http://localhost:5601/app/kibana#/dashboard/fe385fb0-e7be-11e8-8ff8-014064b9a4f6?embed=true&_g=()"
              width="100%"
              height="600px"
              position="relative"
              Iframe      styles={{padding: "10px"}}
              allowFullScreen/>
    )
  }
}