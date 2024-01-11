// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Picker from "emoji-picker-react";
// import {IoMdSend} from 'react-icons/io';
// import {BsEmojiSmileFill} from 'react-icons/bs';


// export default function ChatInput({handleSendMsg}) {
//     const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//     const [msg, setMsg] = useState("");
   
//     const handleEmojiPickerHideShow = ()=>{
//       setShowEmojiPicker(!showEmojiPicker);
//     };

 

//     const sendChat =(event) =>{
//       event.preventDefault();
//       if(msg.length>0){
//         handleSendMsg(msg);
//         setMsg('');
//       }
//     }



// return (
//   <Container>
//     <div className="button-container">
//       <div className="emoji">
//         <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
        
//           {/* {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />} */}
//         {showEmojiPicker && <Picker onEmojiClick={(emojiObject)=> setMsg((prevMsg)=> prevMsg + emojiObject.emoji)}/> }
        
//       </div>
//     </div>
//     <form className="input-container" onSubmit={(event) => sendChat(event)}>
//       <input
//         type="text"
//         placeholder="type your message here"
//         onChange={(e) => setMsg(e.target.value)}
//         value={msg}
//       />
//       <button type="submit">
//         <IoMdSend />
//       </button>
//     </form>
//   </Container>
// );
// }
  
import React, { useState } from 'react';
import styled from 'styled-components';
import Picker from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io';
import { BsEmojiSmileFill } from 'react-icons/bs';

export default function ChatInput({ handleSendMsg }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState('');

  const handleEmojiClick = (emojiObject) => {
    setMsg((prevMsg) => prevMsg + emojiObject.emoji);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg('');
    }
  };

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={toggleEmojiPicker} />
          {showEmojiPicker && 
            <Picker onEmojiClick={handleEmojiClick} />
          }
        </div>
      </div>
      <form className="input-container" onSubmit={sendChat}>
        <input
          type="text"
          placeholder="Type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}




const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  // background-color: #080420;
  padding: 0 2rem;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }
  .button-container {
    display: flex;
    align-items: center;
 
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;

      }
      .EmojiPickerReact {
        position: absolute;
        top: -480px;
        background-color: #080420;
        box-shadow: 0 5px 10px #9a86f3;
        border-color: #9a86f3;
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
          &-thumb {
            background-color: #9a86f3;
          }
        }
        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }
        .emoji-search {
          background-color: transparent;
          border-color: #9a86f3;
        }
        .emoji-group:before {
          background-color: #080420;
        }
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    border:none;
    padding: 0.2rem;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #9a86f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9a86f3;
      border: none;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Picker from 'emoji-picker-react';

// export default function ChatInput({ handleSendMsg }) {
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [msg, setMsg] = useState('');

//   const handleEmojiClick = (emojiObject) => {
//     setMsg((prevMsg) => prevMsg + emojiObject.emoji);
//   };

//   const toggleEmojiPicker = () => {
//     setShowEmojiPicker(!showEmojiPicker);
//   };

//   const sendChat = (event) => {
//     event.preventDefault();
//     if (msg.length > 0) {
//       handleSendMsg(msg);
//       setMsg('');
//     }
//   };

//   return (
//     <Container>
//       <div className="button-container">
//         <div className="emoji">
//           <button onClick={toggleEmojiPicker}>Toggle Emoji Picker</button>
//           {showEmojiPicker && (
//             <Picker onEmojiClick={handleEmojiClick} disableSearchBar disableSkinTonePicker />
//           )}
//         </div>
//       </div>
//       <form className="input-container" onSubmit={sendChat}>
//         <input
//           type="text"
//           placeholder="Type your message here"
//           onChange={(e) => setMsg(e.target.value)}
//           value={msg}
//         />
//         <button type="submit">Send</button>
//       </form>
//     </Container>
//   );
// }

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   padding: 1rem;

//   .emoji {
//     position: relative;

//     button {
//       font-size: 1rem;
//       cursor: pointer;
//     }

//     .emoji-picker-react {
//       position: absolute;
//       top: 100%; // Position the emoji picker below the button
//       left: 0;
//       background-color: white;
//       border: 1px solid #ccc;
//       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     }
//   }

//   .input-container {
//     display: flex;
//     gap: 1rem;

//     input {
//       flex: 1;
//       padding: 0.5rem;
//       font-size: 1rem;
//     }

//     button {
//       padding: 0.5rem 1rem;
//       background-color: #007bff;
//       color: white;
//       border: none;
//       cursor: pointer;
//     }
//   }
// `;


 