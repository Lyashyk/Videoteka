import React from 'react';

import DialogWindow from '../dialog-window/dialog-window';
import InputTitleContainer from '../../containers/input-title-container';
import InputReleaseYearContainer from '../../containers/input-relase-year-container';
import SelectFormatContainer from '../../containers/select-format-container';
import InputStarsContainer from '../../containers/input-stars-container';
import ButtonAddNewMovieContainer from '../../containers/button-add-new-movie-container';

import './dashboard.css';

const Dashboard = () => {
  return (
    <DialogWindow>
      <div className="Dashboard">
        <h3 className="Dashboard-title">Add movie</h3>
        <form className="Dashboard-form">
          <div className="Dashboard-formRow">
            <div className="Dashboard-inputName">
              <InputTitleContainer />
            </div>
          </div>
          <div className="Dashboard-formRow">
            <div className="Dashboard-inputYear">
              <InputReleaseYearContainer />
            </div>
            <div className="Dashboard-inputFormat">
              <SelectFormatContainer />
            </div>
          </div>
          <div className="Dashboard-formRow">
            <div className="Dashboard-inputStarsList">
              <InputStarsContainer />
            </div>
          </div>
          <div className="Dashboard-formRowButton">
            <ButtonAddNewMovieContainer title="Add movie" />
          </div>
        </form>
      </div>
    </DialogWindow>
  );
};

export default Dashboard;
