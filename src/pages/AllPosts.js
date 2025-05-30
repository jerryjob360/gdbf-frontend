import api from '../utils/axios';
import React, { useEffect, useState } from 'react';
import '../styles/allPosts.css';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/contextProvider';

function AllPosts() {

  const [allPosts, setAllPosts] = useState([]);
  const [editPostId, setEditPostId] = useState(null);
  const [editedData, setEditedData] = useState({ title: '', body: '', image: null });


  useEffect(() => {
    api.get(`/activity`).then((response) => {
      setAllPosts(response.data.reverse());
    });
  }, []);


  const handleDelete = (id) => {
      api.delete(`/activity/${id}`).then(() => {
        setAllPosts(allPosts.filter(post => post.id !== id));
        alert("Event Deleted!")
      })
    };
  
    const handleEdit = (post) => {
      setEditPostId(post.id);
      setEditedData({ title: post.title, body: post.body, image: post.image });
    };
  
  
    const handleSave = (id) => {
      const formData = new FormData();
      formData.append('title', editedData.title);
      formData.append('body', editedData.body);

      if (editedData.image instanceof File) {
        formData.append('image', editedData.image);
      }

      api.put(`/activity/${id}`, formData, {
        headers: { 'Content-Type' : 'multipart/form-data' }
      }).then(() => {
        const updatedPosts = allPosts.map(post => {
          if (post.id === id) {
            return { ...post, ...formData };
          }
          return post;
        });
        setAllPosts(updatedPosts);
        setEditPostId(null);
      });
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedData({ ...editedData, [name]: value });
    };
  
  
  
  
    
  const { currentUser, setcurrentUser } = useStateContext();

  const [admin, setAdmin] = useState(false)
  useEffect(() => {
    if(currentUser){
      setAdmin(true);
    }
  }, [currentUser])

  const nav = useNavigate();
  const logOut = () => {
    setcurrentUser(null);
    localStorage.clear();
    nav('/');
  };


  return (
    <div className='allHome'>
      <div className='adminLinks' id={admin? "show":"hide"}>
        <h3>Hi {currentUser}!</h3>
        {
          currentUser && (
            <Link className='add-evnt-btn' to='/Activities'>Add Event</Link>
          )
        }       
        
        <button className='logOutBtn' onClick={logOut}>Log out</button>
      </div>

      {allPosts.map((value, key) => {

        const dt = new Date(value.createdAt).toDateString();
        return <div className='allPosts'>
          {/* Title */}
          {editPostId === value.id ? (

            <input
              className='edit-title-input'
              name='title'
              value={editedData.title}
              onChange={handleInputChange}
            />
          ) : (
              <p className='event-title'>{value.title}</p>
          )}

          {/* Body */}

          {editPostId === value.id ? (
              <textarea
              className='edit-body-textarea'
              name='body'
              value={editedData.body}
              onChange={handleInputChange}
              />
          ) : (
            <p className='event-body'>{value.body}</p>
          )}


          {/* Buttons */}

          {editPostId === value.id ? (
            <>
              <button className='adminBtn' onClick={() => handleSave(value.id)}>Save</button>
              <button className='adminBtn' onClick={() => setEditPostId(null)} >Cancel</button>
            </>
          ) : (
            admin && (
              <div className='adminBtns'>
                <button className='adminBtn' onClick={() => handleEdit( value)}>Edit</button>
                <button className='adminBtn' onClick={() => handleDelete(value.id)}>Delete</button>
              </div>
            )
          )}
          <br />

          {/* image */}

          {editPostId === value.id ? (
            (
              editedData.image = value.image
            ),
            <>
              {editedData.image && (
                <img
                src={typeof editedData.image === 'string' ? editedData.image : URL.createObjectURL(editedData.image)}
                alt='Preview'
                className='evnt-img'
                />
              )}
              <input
                type='file'
                accept='image/*'
                onChange={(e) => {
                  const file = e.target.files[0];
                  setEditedData({ ...editedData, image: file });
                }}
              />
            </>
          ) : (
            <img
            src={value.image}
            alt={value.title}
            className='evnt-img'
            />
          )
        }              
        <p>{dt}</p>
        </div>
      })
    }
    </div>
  )
}

export default AllPosts;