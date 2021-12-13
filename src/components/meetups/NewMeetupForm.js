import React, { useRef } from 'react';
import Card from '../ui/Card';

import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descrptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const entredTitle = titleInputRef.current.value; // get input title value
    const entredImage = imageInputRef.current.value; // get input image value
    const entredAddress = addressInputRef.current.value; // get input address value
    const entredDescription = descrptionInputRef.current.value; // get input description value

    const meetupData = {
      title: entredTitle,
      image: entredImage,
      address: entredAddress,
      descrption: entredDescription,
    };

    console.log(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            id="description"
            rows="5"
            ref={descrptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
