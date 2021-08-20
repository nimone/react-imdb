import React, { useState } from 'react'

function TitleOverview({ text, limit=250, className: propClasses }) {
  const [showComplete, setShowComplete] = useState(false)

	return (
    <div className={propClasses}>
      {text.length > limit ? (
        <>
    			{showComplete 
    				? <span onClick={() => setShowComplete(false)}>{text}</span>
    				: <span onClick={() => setShowComplete(true)}>{text.substring(0, limit - 50)}</span>
    			}
          <span 
            className="text-gray-400 cursor-pointer"
            onClick={() => setShowComplete(!showComplete)}
          >{showComplete ? " less" : " ...more"}
          </span>
        </>
        ) : <p className="inline">{text}</p> 
      }
    </div>
	)
}
export default TitleOverview