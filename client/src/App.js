import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Friends from './Friends/Friends';
import ChipInput from 'material-ui-chip-input'
import { TextField, Button } from '@material-ui/core'
import { fetchDataBySearch } from './api';

function App() {
  const [friends, setFriends] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [groupFriends, setGroupFriends] = useState([]);
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const res = await axios.get('/api/events');
    setEvents(res.data.events)
  }

  console.log(events)

  const fetchFriends = async () => {
    const res = await axios.get('/api/friends');
    const data = res.data;
    setFriends(data.friends)
  }

  // Without Creating API Folder and making a GET Request there
  // const fetchDataBySearch = (searchQuery) => {
  //   return axios.get(`/api/search?searchQuery=${searchQuery.searchTerm || 'none'}&tags=${searchQuery.tags}`)
  // }
  
  const searchHandler = async () => {
    if (searchTerm.trim().length !== 0 || tags.length !== 0) {
      const res = await fetchDataBySearch({ searchTerm, tags: tags.join(',') })
      const data = res.data;
      setFriends(data)
    } 
  }

  useEffect(() => {
    try {
      fetchFriends()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleKeyPress = (e) => {
    // keyCode 13 means the 'Enter' key
    if (e.keyCode === 13) {
      searchHandler();
    }
  }

  const handleAdd = (tag) => {
    setTags([...tags, tag])
  }

  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete))
  }


  console.log(friends)
  return (
    <div className="wrapper SearchEngine">
      <div className="ui search">
        <div>
          <h1>Friend Search Engine</h1>
          <TextField 
            name="search" 
            label="Search Friends"
            size='medium'
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            value={searchTerm}
            onKeyUp={handleKeyPress}
          />
          <ChipInput
            type="text"
            value={tags}
            placeholder='Search with Tags'
            className="SearchEngine-input"
            onAdd={handleAdd}
            onDelete={handleDelete}
            onChange={(e) => setTags(e.target.value)}
            variant="outlined"
            onKeyUp={handleKeyPress}
          />
          <Friends friends={friends} />
          <Button 
            onClick={searchHandler}
            variant='contained'
            color="primary"
          >
            Search Friends
          </Button>
          <Button onClick={fetchFriends}>See All Friends</Button>
          <button onClick={fetchEvents}>Fetch</button>
        </div>
      </div>
    </div>
  );
}

export default App;
