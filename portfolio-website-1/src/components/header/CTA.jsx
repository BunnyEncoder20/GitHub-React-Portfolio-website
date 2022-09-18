import React from 'react'
import CV from '../../images/cv.docx'
// This line imports the CV.pdf file from the images folder
// have to make a CV

//Call To Action btns

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        {/* {} used for dynamic element, and download attribute is added to make the file downloadable */}
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        {/* Will take to the seciton with id=contact */}
    </div>
  )
}

export default CTA