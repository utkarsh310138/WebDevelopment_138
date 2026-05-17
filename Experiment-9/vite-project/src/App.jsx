import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [users, setUsers] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.password) {
      setUsers([...users, { name: formData.name, email: formData.email }])
      setFormData({ name: '', email: '', password: '' })
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 2000)
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter Name" 
            value={formData.name}
            onChange={handleChange}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Enter Email" 
            value={formData.email}
            onChange={handleChange}
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Enter Password" 
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className="register-btn">Register</button>
        </form>
        
        {submitted && <p className="success">Registration Successful!</p>}
        
        {users.length > 0 && (
          <div className="users-section">
            <h3>Registered Users</h3>
            <ul>
              {users.map((user, index) => (
                <li key={index}>{user.name} - {user.email}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
