var _ = require('lodash'),
  React = require('react');

import SelectBox from 'react-select-box';


var Detect = require('../../../utils/detect'),
  StringUtils = require('../../../utils/string'),
  Button = require('../../components/button'),
  IconButton = require("../../components/iconButton"),
  Popup = require("../../components/popup"),
  PasswordInput = require('../../components/passwordInput'),
  OpenDiaryProgressPopup = require('../../components/openDiaryProgressPopup');


import { connectRedux } from '../../helpers/decorators';



var Component = React.createClass({
  propTypes: {
    showStep: React.PropTypes.func.isRequired,
    isActive: React.PropTypes.bool.isRequired,
  },

  getInitialState: function() {
    return {
      password: null,
    };
  },

  render: function() { 
    let { opening, lastOpenedDiary, availableDiaries } = this.props.data.diary;

    var content = null;

    if (_.values(availableDiaries).length) {
      var lastDiaryName = !lastOpenedDiary ? null : StringUtils.formatDiaryName(
        lastOpenedDiary.name
      );

      var buttonAttrs = {
        onClick: this._openDiary,
        animActive: !!opening.inProgress,
      };

      if (!this.state.password || !this.state.password.length) {
        buttonAttrs.disabled = true;
      }

      content = (
        <div className="open-existing">
          <p>
            <label>Diary:</label>
            <span>{lastDiaryName}</span>
            {this._buildChooseAnotherDiaryButton()}
          </p>
          <form onSubmit={this._openDiary}>
            <div className="field row">
              <PasswordInput password={this.state.password} onChange={this._setPassword} />
            </div>
            <div className="action row">
              <OpenDiaryProgressPopup {...this.props}>
                <Button {...buttonAttrs}>Open</Button>
              </OpenDiaryProgressPopup>
            </div>
          </form>
        </div>
      );
    }

    content = (
      <div>
        {content}
        <div className="create-new">
          <Button onClick={this._createNew}>Create new diary</Button>
        </div>
      </div>
    );

    return (
      <div className="start step">
        {content}
      </div>
    );
  },



  _buildChooseAnotherDiaryButton: function() {
    let { lastOpenedDiary, availableDiaries } = this.props.data.diary;

    let options = _.map(availableDiaries, (name, id) => {
      return (
        <option value={id}>{name}</option>
      );
    });

    return (
      <SelectBox 
        label="Choose diary"
        className='choose-diary-select-box'
        onChange={this._chooseDiary}
        value={_.get(lastOpenedDiary, 'id')}>
          {options}
      </SelectBox>
    );
  },


  _openDiary: function(e) {
    e.preventDefault();

    this.props.actions.openDiary(
      _.get(this.props.data.diary.lastAccessedDiaryDetails, 'name'),
      this.state.password
    )
      .then(() => {
        this.props.showStep('loadDiary');
      });
  },


  _setPassword: function(p) {
    this.setState({
      password: p,
    });
  },


  _createNew: function() {
    this.props.showStep('newDiary');
  },

  _chooseDiary: function(id) {    
    this.props.actions.chooseDiary(id);
  },

});


module.exports = connectRedux([
  'chooseDiary',
  'openDiary'
])(Component);



