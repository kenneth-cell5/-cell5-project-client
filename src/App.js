import React from "react";
import "./App.css";
import ContentWrapper from "./components/ContentWrapper";

function App() {
  return (
    <div className="app">
      <div className="content-wrapper">
        <div className="content-wrapper__list-wrapper">
          <h1 className="list-wrapper__header">Famous Persons</h1>
          <ul className="list-wrapper__list">
            <li className="list-wrapper__list-item">Marilyn Monroe</li>
            <li className="list-wrapper__list-item">Abraham Lincoln</li>
            <li className="list-wrapper__list-item">Nelson Mandela</li>
            <li className="list-wrapper__list-item">John F. Kennedy</li>
            <li className="list-wrapper__list-item">Martin Luther King</li>
            <li className="list-wrapper__list-item">Queen Elizabeth II</li>
            <li className="list-wrapper__list-item">Winston Churchill</li>
            <li className="list-wrapper__list-item">Donald Trump</li>
            <li className="list-wrapper__list-item">Bill Gates</li>
          </ul>
          <div className="list__add">Add</div>
        </div>
        <div className="content-wrapper__side-wrapper">
          <div className="side-wrapper__details">
            <div className="side-wrapper__item">
              <h1 className="side-wrapper__person-name">Person Name</h1>
            </div>
            <div className="side-wrapper__item">
              <label className="side-wrapper__item-label">Date of Birth:</label>
              <span className="side-wrapper__item-span">Sept. 27, 1996</span>
            </div>
            <div className="side-wrapper__item">
              <label className="side-wrapper__item-label">Biography:</label>
              <textarea
                className="side-wrapper__item-textarea"
                spellCheck="false"
                defaultValue={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,cumque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ex cum impedit sit est! Culpa vitae laboriosam cum exercitationem reprehenderit.\n            "
                }
              />
            </div>
            <div className="side-wrapper__item">
              <div className="details__delete">Delete</div>
            </div>
          </div>
          <div className="side-wrapper__form-wrapper">
            <form className="side-wrapper__form">
              <input
                className="side-wrapper__form-input"
                type="text"
                placeholder="Enter Name"
              />
              <input
                className="side-wrapper__form-input"
                type="text"
                placeholder="Date of Birth"
              />
              <input
                className="side-wrapper__form-input"
                type="text"
                placeholder="Write Biography"
              />
              <button className="side-wrapper__form-submit" type=" submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
