import style from './styles.module.css';
import React, { useState } from 'react';

function Counter() {
    const [buttonColor, setButtonColor] = useState('aqua');

    const handleBackgroundChange = (color) => {
        setButtonColor(color);
      }

    return (
        <div>
            <p>{buttonColor}</p>
            <button  onClick={() => handleBackgroundChange('black')}>
                Night
            </button>
            <button  onClick={() => handleBackgroundChange('aqua')}>
                Day
            </button>

            <div 
                style={{background: buttonColor, height: '500px', width: '500px', margin: 'auto' }}
            > </div>
        </div>
    );
}

export default Counter;

// import React, { useState } from 'react';

// function App() {
//   const [backgroundColor, setBackgroundColor] = useState('blue');

//   const handleBackgroundChange = (color) => {
//     setBackgroundColor(color);
//   }

//   return (
//     <div style={{ backgroundColor}}>
//       <button onClick={() => handleBackgroundChange('blue')}>
//         Thay đổi background thành màu xanh
//       </button>
//       <button onClick={() => handleBackgroundChange('yellow')}>
//         Thay đổi background thành màu vàng
//       </button>

//       <div style={{ backgroundColor}}>a</div>
//     </div>
//   );
// }

// export default App;
