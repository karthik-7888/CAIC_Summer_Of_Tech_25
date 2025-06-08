import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome to the chat!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { id: Date.now(), text: input }]);
    setInput('');
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div style={{ border: '1px solid gray', height: '300px', overflowY: 'scroll', padding: '10px' }}>
        {messages.map(msg => (
          <p key={msg.id}>{msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chat;
