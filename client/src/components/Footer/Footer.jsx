import './footer.css'
import { SocialIcon } from 'react-social-icons'

export default function Footer () {
    return (
        <footer>
            <div className='footer--container'>
                <h2 className='footer-header'>Delicious and conscient food starts here:</h2>
            <form action="" className='footer-form'>
                <input type="text" name="newsletter" id="newsletter" placeholder='your@email.com'/>
                <button type="submit">Submit</button>
            </form>
            </div>
            <div className="social-media-icons">
                <SocialIcon url='mailto:brunocorraodev@gmail.com' bgColor='black' className='social-icon'/>
                <SocialIcon url='https://www.linkedin.com/in/bruno-corrao/' bgColor='black'className='social-icon'/>
                <SocialIcon url='https://github.com/imnotseneca' bgColor='black'className='social-icon'/>
            </div>
            <div className='copyright'>
                <span className='footer-text'><a href='https://www.linkedin.com/in/bruno-corrao/' className='footer-linkedin-anchor'>Bruno Corrao</a>. @ All rights reserved.</span>
            </div>

        </footer>
    )
}