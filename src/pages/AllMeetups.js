import React, { useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [ladedMeetups, setLoadedMeetups] = useState([]);

  fetch(
    'https://react-getting-started-5f6f7-default-rtdb.firebaseio.com/meetups.json',
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setLoadedMeetups(data);
    });

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={ladedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
