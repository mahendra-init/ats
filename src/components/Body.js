import {FaBookOpen} from 'react-icons/fa'
import {BsFillRecordCircleFill} from 'react-icons/bs'

const Body = () => {
    return ( 
        <div className="body relative" id='home'>
            <div className="quote">"I think the success of any school can be measured by the contribution the alumni make to our national life."</div>
            <FaBookOpen id="book" className='text-indigo-400 animate-bounce'/>
            <div className="body-img"><img src='bodyimg.png' alt="" /></div>
            <BsFillRecordCircleFill id="circle" className='text-indigo-400 animate-bounce' />
        </div>
    );
}
 
export default Body;