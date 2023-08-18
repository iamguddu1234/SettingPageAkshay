import logo from "./logo.svg";
import classes from "./App.module.css";
import "typeface-roboto";
import {
  BsChevronRight,
  BsFillPersonFill,
  BsPhone,
  BsLaptop,
  BsFillCameraVideoFill,
} from "react-icons/bs";
import { MdPassword, MdEmail } from "react-icons/md";
import ReactSwitch from "react-switch";
import React, { useState } from "react";
import Switch from "react-switch";

function App() {
  const [showUserNameForm, setShowUserNameForm] = useState(false);

  const showUserNameFormHandler = () => {
    setShowUserNameForm(true);
  };

  const [hideUserNameForm, setHideUserNameForm] = useState(true);

  const hideUserNameFormHandler = () => {
    setShowUserNameForm(false);
  };

  const [showEmailForm, setShowEmailForm] = useState(false);

  const showEmailFormHandler = () => {
    setShowEmailForm(true);
  };

  const [hideEmailForm, setHideEmailForm] = useState(true);

  const hideEmailFormHandler = () => {
    setShowEmailForm(false);
  };

  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const showPasswordFromHandler = () => {
    setShowPasswordForm(true);
  };

  const [hidePasswordForm, setHidePasswordForm] = useState(true);

  const hidePasswordFromHandler = () => {
    setShowPasswordForm(false);
  };

  const [showPhoneForm, setShowPhoneForm] = useState(false);

  const showPhoneFormHandler = () => {
    setShowPhoneForm(true);
  };

  const [hidePhoneForm, setHidePhoneForm] = useState(true);

  const hidePhoneFormHandler = () => {
    setShowPhoneForm(false);
  };

  const [editMode, setEditMode] = useState(false);

  const handleChangeEditMode = () => {
    setEditMode((editMode) => !editMode);
  };

  return (
    <div className={classes.parentSetting}>
      <div className={classes.accountTitle}>Account :</div>

      <div className={classes.accountContainer}>
        <div className={classes.subcontainer}>
          <button
            onClick={showPasswordFromHandler}
            className={classes.passwordContainer}
          >
            <div className={classes.mainContainer}>
              <MdPassword className={classes.icondiv} />

              <div className={classes.title1}>Change Password</div>
            </div>

            <div className={classes.arrowiconContainer}>
              <BsChevronRight className={classes.arrowIcon} />
            </div>
          </button>

          {showPasswordForm && (
            <div className={classes.changePasswordform}>
              <div className={classes.horiLine}></div>

              <div className={classes.oldPasswordContainer}>
                <div className={classes.oldTitle}>Old Password :</div>

                <input
                  placeholder="Enter Old Password"
                  type="text"
                  className={classes.oldPasswordEditBox}
                />
              </div>

              <div className={classes.newPasswordContainer}>
                <div className={classes.newTitle}>New Password :</div>

                <input
                  placeholder="Enter New Password"
                  type="text"
                  className={classes.newPasswordEditBox}
                />
              </div>

              <div className={classes.confPasswordContainer}>
                <div className={classes.newTitle}>Confirm Password :</div>

                <input
                  placeholder="Enter New Password"
                  type="text"
                  className={classes.oldPasswordEditBox}
                />
              </div>

              <div className={classes.buttonContainer}>
                {hidePasswordForm && (
                  <button
                    onClick={hidePasswordFromHandler}
                    className={classes.cancelBtn}
                  >
                    Cancel
                  </button>
                )}

                <button className={classes.submitBtn}>Save</button>
              </div>
            </div>
          )}

          <div className={classes.horiLine}></div>

          <button
            onClick={showUserNameFormHandler}
            className={classes.usernameContainer}
          >
            <div className={classes.mainContainer}>
              <BsFillPersonFill className={classes.icondiv} />

              <div className={classes.title1}>Change Username</div>
            </div>

            <div className={classes.arrowiconContainer}>
              <BsChevronRight className={classes.arrowIcon} />
            </div>
          </button>

          {showUserNameForm && (
            <div className={classes.changeUsernameform}>
              <div className={classes.horiLine}></div>

              <div className={classes.oldUsernameContainer}>
                <div className={classes.oldTitle}>Old Username :</div>

                <input
                  placeholder="Enter Old Username"
                  type="text"
                  className={classes.oldUsernameEditBox}
                />
              </div>

              <div className={classes.newUsernameContainer}>
                <div className={classes.newTitle}>New Username :</div>

                <input
                  placeholder="Enter New Username"
                  type="text"
                  className={classes.newUsernameEditBox}
                />
              </div>

              <div className={classes.confUsernameContainer}>
                <div className={classes.confTitle}>Confirm Username :</div>

                <input
                  placeholder="Enter New Username"
                  type="text"
                  className={classes.confUserEditBox}
                />
              </div>

              <div className={classes.buttonContainer}>
                {hideUserNameForm && (
                  <button
                    onClick={hideUserNameFormHandler}
                    className={classes.usercancelBtn}
                  >
                    Cancel
                  </button>
                )}

                <button className={classes.usersubmitBtn}>Save</button>
              </div>
            </div>
          )}

          <div className={classes.horiLine}></div>

          <button
            onClick={showEmailFormHandler}
            className={classes.emailContainer}
          >
            <div className={classes.mainContainer}>
              <MdEmail className={classes.icondiv} />

              <div className={classes.title1}>Change Email</div>
            </div>

            <div className={classes.arrowiconContainer}>
              <BsChevronRight className={classes.arrowIcon} />
            </div>
          </button>

          {showEmailForm && (
            <div className={classes.changeEmailform}>
              <div className={classes.horiLine}></div>

              <div className={classes.oldEmailContainer}>
                <div className={classes.oldTitle}>Old Email :</div>

                <input
                  placeholder="Enter Old Email"
                  type="text"
                  className={classes.oldEmailEditBox}
                />
              </div>

              <div className={classes.newEmailContainer}>
                <div className={classes.newTitle}>New Email :</div>

                <input
                  placeholder="Enter New Email"
                  type="text"
                  className={classes.newEmailEditBox}
                />
              </div>

              <div className={classes.confEmailContainer}>
                <div className={classes.newTitle}>Confirm Email :</div>

                <input
                  placeholder="Enter New Email"
                  type="text"
                  className={classes.confEmailEditBox}
                />
              </div>

              <div className={classes.buttonContainer}>
                {hideEmailForm && (
                  <button
                    onClick={hideEmailFormHandler}
                    className={classes.emailcancelBtn}
                  >
                    Cancel
                  </button>
                )}

                <button className={classes.emailsubmitBtn}>Save</button>
              </div>
            </div>
          )}

          <div className={classes.horiLine}></div>

          <button
            onClick={showPhoneFormHandler}
            className={classes.phoneNumberContainer}
          >
            <div className={classes.mainContainer}>
              <BsPhone className={classes.icondiv} />

              <div className={classes.title1}>Change Phone Number</div>
            </div>

            <div className={classes.arrowiconContainer}>
              <BsChevronRight className={classes.arrowIcon} />
            </div>
          </button>

          {showPhoneForm && (
            <div className={classes.changePhoneform}>
              <div className={classes.horiLine}></div>

              <div className={classes.oldPhoneContainer}>
                <div className={classes.oldTitle}>Old Phone Number :</div>

                <input
                  placeholder="Enter Old Phone Number"
                  type="text"
                  className={classes.oldPhoneEditBox}
                />
              </div>

              <div className={classes.newPhoneContainer}>
                <div className={classes.newTitle}>New Phone Number :</div>

                <input
                  placeholder="Enter New Phone Number"
                  type="text"
                  className={classes.newPhoneEditBox}
                />
              </div>

              <div className={classes.confPhoneContainer}>
                <div className={classes.confTitle}>Confirm Phone Number :</div>

                <input
                  placeholder="Enter New Phone Number"
                  type="text"
                  className={classes.confPhoneEditBox}
                />
              </div>

              <div className={classes.buttonContainer}>
                {hidePhoneForm && (
                  <button
                    onClick={hidePhoneFormHandler}
                    className={classes.phonecancelBtn}
                  >
                    Cancel
                  </button>
                )}

                <button className={classes.phonesubmitBtn}>Save</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={classes.notificationTitle}>Notify Me On :</div>

      <div className={classes.norificationContainer}>
        <div className={classes.subcontainer}>
          <div className={classes.passwordContainer}>
            <div className={classes.mainContainer}>
              <MdEmail className={classes.icondiv} />

              <div className={classes.title1}>New Enrollment Request</div>
            </div>

            <div className={classes.arrowiconContainer1}>
              <div className={classes.toggleSwitch}>
                {<Switch onChange={handleChangeEditMode} checked={editMode} />}
                {/* {editMode &&  <span> Edit mode ON  </span>}
                {!editMode && <span> Edit mode OFF </span>} */}
              </div>
            </div>
          </div>

          <div className={classes.horiLine}></div>

          <div className={classes.passwordContainer}>
            <div className={classes.mainContainer}>
              <MdEmail className={classes.icondiv} />

              <div className={classes.title1}>New Meeting</div>
            </div>

            <div className={classes.arrowiconContainer1}>
              <div className={classes.toggleSwitch}>
                {<Switch onChange={handleChangeEditMode} checked={editMode} />}
                {/* {editMode &&  <span> Edit mode ON  </span>}
                {!editMode && <span> Edit mode OFF </span>} */}
              </div>
            </div>
          </div>

          <div className={classes.horiLine}></div>

          <div className={classes.passwordContainer}>
            <div className={classes.mainContainer}>
              <BsLaptop className={classes.icondiv} />

              <div className={classes.title1}>New Class</div>
            </div>

            <div className={classes.arrowiconContainer1}>
              <div className={classes.toggleSwitch}>
                {<Switch onChange={handleChangeEditMode} checked={editMode} />}
                {/* {editMode &&  <span> Edit mode ON  </span>}
                {!editMode && <span> Edit mode OFF </span>} */}
              </div>
            </div>
          </div>

          <div className={classes.horiLine}></div>

          <div className={classes.passwordContainer}>
            <div className={classes.mainContainer}>
              <MdEmail className={classes.icondiv} />

              <div className={classes.title1}>New Exam</div>
            </div>

            <div className={classes.arrowiconContainer1}>
              <div className={classes.toggleSwitch}>
                {<Switch onChange={handleChangeEditMode} checked={editMode} />}
                {/* {editMode &&  <span> Edit mode ON  </span>}
                {!editMode && <span> Edit mode OFF </span>} */}
              </div>
            </div>
          </div>

          <div className={classes.horiLine}></div>

          <div className={classes.passwordContainer}>
            <div className={classes.mainContainer}>
              <MdEmail className={classes.icondiv} />

              <div className={classes.title1}>New Notice</div>
            </div>

            <div className={classes.arrowiconContainer1}>
              <div className={classes.toggleSwitch}>
                {<Switch onChange={handleChangeEditMode} checked={editMode} />}
                {/* {editMode &&  <span> Edit mode ON  </span>}
                {!editMode && <span> Edit mode OFF </span>} */}
              </div>
            </div>
          </div>

          <div className={classes.horiLine}></div>

          <div className={classes.passwordContainer}>
            <div className={classes.mainContainer}>
              <MdEmail className={classes.icondiv} />

              <div className={classes.title1}>New Assignment</div>
            </div>

            <div className={classes.arrowiconContainer1}>
              <div className={classes.toggleSwitch}>
                {<Switch onChange={handleChangeEditMode} checked={editMode} />}
                {/* {editMode &&  <span> Edit mode ON  </span>}
                {!editMode && <span> Edit mode OFF </span>} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
