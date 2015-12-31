import _ from 'lodash';
import React from 'react';

import Button from '../button';
import Overlay from '../overlay';
import { connectRedux } from '../../helpers/decorators';
import RestoreBackupProgressPopup from './restoreBackupProgressPopup';


// var RestoreOverlay = React.createClass({
//   getInitialState: function() {
//     return {
//       filePath: null,
//     }
//   },

//   render: function() {
//     let cancelBtn = null;

//     cancelBtn = (
//       <Button onClick={this.hide}>Cancel</Button>
//     );
    
//     return (
//       <Overlay ref="overlay">
//         <div className="restore-backup-dialog">
//           <div className="buttons">
//             <MakeBackupProgressPopup {...this.props}>
//               <Button>Begin</Button>
//             </MakeBackupProgressPopup>
            
//           </div>
//         </div>
//       </Overlay>
//     );
//   },

//   show: function(filePath) {
//     this.setState({
//       filePath: filePath
//     });

//     this.refs.overlay.show();
//   },

//   hide: function() {
//     this.refs.overlay.hide();
//   },
// });




var Component = React.createClass({
  render: function() {
    let { diary } = this.props.data;
    let { diaryMgr } = diary;

    let btnAttrs = {
      onClick: this._restoreBackup,
    };

    return (
      <div className="restore-file">
        <h2>Restore</h2>
        <RestoreBackupProgressPopup {...this.props}>
          <Button {...btnAttrs}>Restore from backup</Button>
        </RestoreBackupProgressPopup>
      </div>
    );
  },

  _restoreBackup: function() {
    this.props.actions.restoreBackup();
  },

});


module.exports = connectRedux([
  'restoreBackup',
])(Component);

