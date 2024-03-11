import React,{useEffect} from 'react';

export default function UseEffect() {
    useEffect(() => {
        console.log('useeffect ran')
    }, [])

  return (
    <div>
        UseEffect
    </div>
  )
}
