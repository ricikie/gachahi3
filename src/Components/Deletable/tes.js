import React, { Component } from 'react';

class Tes extends Component {
    tesFiles = (data) => {
        var context = require.context('../../resources/img/valk', true, /\.(png)$/);
        var files={};
        context.keys().forEach((filename)=>{
          files[filename] = context(filename);
        });
    return{
        files
    }
    }

}
export default Tes