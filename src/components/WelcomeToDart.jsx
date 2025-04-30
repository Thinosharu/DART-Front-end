import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeToDart = () => {
  const navigate = useNavigate();

  const handleRoleSelect = () => {
    navigate('/signup');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome to Dart!</h2>
      <p style={styles.subtitle}>To create an account, choose your role</p>
      <div style={styles.optionsContainer}>
        <div style={styles.option}>
          <span style={styles.icon}>🏠</span>
          <span>I'm building a house</span>
          <input type="radio" name="role" style={styles.radioButton} />
        </div>
        <div style={styles.option}>
          <span style={styles.icon}>📐</span>
          <span>I'm a quantity surveyor</span>
          <input type="radio" name="role" style={styles.radioButton} />
        </div>
        <div style={styles.option}>
          <span style={styles.icon}>🛠️</span>
          <span>I'm a contractor</span>
          <input type="radio" name="role" style={styles.radioButton} />
        </div>
        <div style={styles.option}>
          <span style={styles.icon}>🔍</span>
          <span>Other</span>
          <input type="radio" name="role" style={styles.radioButton} />
        </div>
        <button style={styles.button} onClick={handleRoleSelect}>
                Go
              </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px',
    fontFamily: 'sans-serif',
  },
  title: {
    marginBottom: '1px',
    color: 'black',
  },
  subtitle: {
    marginTop: '1px',
    color: 'black',
  },
  optionsContainer: {
    width: '80%',
    maxWidth: '400px',
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px',
    margin: '10px 0',
    border: '3px solid Darkred',
    backgroundColor: '#f9f9f9',
    color: 'black',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  icon: {
    marginRight: '20px',
  },
  radioButton: {
    marginLeft: 'auto',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '2px solid Darkred',
    cursor: 'pointer',
  },
  button: {
    marginTop: '10px',
    marginLeft: '325px',
    padding: '10px 25px 10px 25px',
    backgroundColor: 'Darkred',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default WelcomeToDart;