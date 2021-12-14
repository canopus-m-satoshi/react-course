import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  function addMeetHandler(meetupData) {}

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetHandler} />
    </section>
  );
}

export default NewMeetupPage;
