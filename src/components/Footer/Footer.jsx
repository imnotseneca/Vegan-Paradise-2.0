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
                <SocialIcon url='mailto:brunocorraodev@gmail.com' bgColor='black'/>
                <SocialIcon url='https://www.linkedin.com/in/bruno-corrao/' bgColor='black'/>
                <SocialIcon url='https://github.com/imnotseneca' bgColor='black'/>
            </div>
            <div className='copyright'>
                <h5><a href='https://www.linkedin.com/in/bruno-corrao/'>Bruno Corrao</a>. @ All rights reserved.</h5>
            </div>

        </footer>
    )
}