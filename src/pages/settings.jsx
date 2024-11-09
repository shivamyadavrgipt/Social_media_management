import React, { useState } from 'react';
import './settings.css';

export default function Settings() {
  const [activeSection, setActiveSection] = useState('account');

  const sections = [
    { id: 'account', label: 'Account Settings' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'security', label: 'Security' },
    { id: 'display', label: 'Display & Accessibility' },
  ];

  return (
    <div className="settings-container">
      {/* Sidebar */}
      <div className="settings-sidebar">
        <h2 className="settings-title">Settings</h2>
        <ul className="settings-menu">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`settings-menu-item ${
                activeSection === section.id ? 'active' : ''
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="settings-content">
        {/* Account Settings */}
        {activeSection === 'account' && (
          <div className="settings-section">
            <h2 className="section-title">Account Settings</h2>
            <div className="settings-field">
              <label>Username</label>
              <input type="text" placeholder="Enter your username" disabled />
            </div>
            <div className="settings-field">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" disabled />
            </div>
            <div className="settings-field">
              <label>Change Password</label>
              <input type="password" placeholder="New password" />
            </div>
            <div className="settings-field">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" />
            </div>
          </div>
        )}

        {/* Privacy Settings */}
        {activeSection === 'privacy' && (
          <div className="settings-section">
            <h2 className="section-title">Privacy Settings</h2>
            <div className="settings-field">
              <label>Profile Visibility</label>
              <select>
                <option>Public</option>
                <option>Friends Only</option>
                <option>Private</option>
              </select>
            </div>
            <div className="settings-field">
              <label>Last Seen</label>
              <select>
                <option>Everyone</option>
                <option>Friends Only</option>
                <option>No One</option>
              </select>
            </div>
            <div className="settings-field">
              <label>Location Sharing</label>
              <select>
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>
        )}

        {/* Notification Settings */}
        {activeSection === 'notifications' && (
          <div className="settings-section">
            <h2 className="section-title">Notification Settings</h2>
            <div className="settings-field">
              <label>Email Notifications</label>
              <input type="checkbox" /> Receive notifications via email
            </div>
            <div className="settings-field">
              <label>Push Notifications</label>
              <input type="checkbox" /> Receive notifications on your device
            </div>
            <div className="settings-field">
              <label>Message Notifications</label>
              <input type="checkbox" /> Receive notifications for messages
            </div>
          </div>
        )}

        {/* Security Settings */}
        {activeSection === 'security' && (
          <div className="settings-section">
            <h2 className="section-title">Security Settings</h2>
            <div className="settings-field">
              <label>Two-Factor Authentication</label>
              <button>Enable 2FA</button>
            </div>
            <div className="settings-field">
              <label>Login Alerts</label>
              <input type="checkbox" /> Send alerts for unrecognized logins
            </div>
            <div className="settings-field">
              <label>Remember Devices</label>
              <input type="checkbox" /> Keep me signed in on trusted devices
            </div>
          </div>
        )}

        {/* Display & Accessibility Settings */}
        {activeSection === 'display' && (
          <div className="settings-section">
            <h2 className="section-title">Display & Accessibility</h2>
            <div className="settings-field">
              <label>Theme</label>
              <select>
                <option>Light</option>
                <option>Dark</option>
                <option>System Default</option>
              </select>
            </div>
            <div className="settings-field">
              <label>Font Size</label>
              <select>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <div className="settings-field">
              <label>High Contrast</label>
              <input type="checkbox" /> Enable high contrast mode
            </div>
          </div>
          
        )}
      </div>
    </div>
  );
}
