import React from 'react'

function Footer() {
  return (
    <div className='mt-4 container-fluid bg-primary bg-gradient text-white' style={{ minHeight:'12rem' }}>
        <div className='row pt-4 text-center'>
        
        <div className='col-lg-4 col-md-4 col-sm-12  '>
        <h5>Quick links</h5>
        <div className='d-flex flex-column'>
            <a className='text-white p-1' href=''>About us</a>
            <a className='text-white p-1' href=''>Our post</a>
            <a className='text-white p-1' href=''>Contact us</a>
        </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12  '>
        <h5>NewsLetter</h5>
        <div style={{minHeight:"8rem"}} className='d-flex flex-column justify-content-around'>
            <input type='text' className="form-control" placeholder='subscribe the newsletter' />
            <button className='btn btn-warning'>Subscribe</button>

        </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12  '>
        <h5>Contact Address</h5>
         <div className='d-flex flex-column'>
            <p>Ghorahi Dang</p>
            <p>Lumbani Province</p>
         </div>
        </div>
    </div>
    </div>
  )
}

export default Footer