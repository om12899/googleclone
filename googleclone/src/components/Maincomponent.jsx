import React from 'react'

function Maincomponent() {
  return (
    <div className='container justify-content-center position-absolute translate-middle top-50 start-50'>
            <div class="text-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="google" />
            </div>
                    <div className='d-flex border border-1 mt-2 justify-content-center rounded-5 p-2'>
                                    <svg className='mx-2 mt-2 my-2' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        <input class="w-50 form-control border border-0 px-2" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                        <datalist id="datalistOptions">
                        <option value="San Francisco"/>
                        <option value="New York"/>
                        <option value="Seattle"/>
                        <option value="Los Angeles"/>
                        <option value="Chicago"/>
                        </datalist>
                        <a className='py-1' href="/"> <img width='25px' src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png" alt="" /></a>
                        <div className='px-1'></div>
                        <a className='px-3 py-1' href="/"> <img width='15px' src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Google_mic.svg" alt="" /></a>
                    </div>
                    <div className='d-flex text-center justify-content-center mt-4'>
                        <button className='btn btn-light'>Google Search</button>
                        <div className='px-3'></div>
                        <button className='btn btn-light'>I am Feeling lucky</button>
                    </div>
                    <div className='d-flex text-center justify-content-center mt-4'>
                        Google offered in : <button className='btn btn-secondary-light py-0 px-1'><p className='text-primary'><u>Hindi</u></p></button>
                        <button className='btn btn-secondary-light py-0 px-1'><p className='text-primary'><u>Marathi</u></p></button>
                        <button className='btn btn-secondary-light py-0 px-1'><p className='text-primary'><u>Gujarati</u></p></button>
                        <button className='btn btn-secondary-light py-0 px-1'><p className='text-primary'><u>Bengali</u></p></button>
                        <button className='btn btn-secondary-light py-0 px-1'><p className='text-primary'><u>Tamil</u></p></button>
                        <button className='btn btn-secondary-light py-0 px-1'><p className='text-primary'><u>Telugu</u></p></button>
                        <button className='btn btn-secondary-light py-0 px-1'><p className='text-primary'><u>Kannada</u></p></button>
                        <button className='btn btn-secondary-light py-0 px-1'><p className='text-primary'><u>Punjabi</u></p></button>
                        <button className='btn btn-secondary-light py-0 px-1'><p className='text-primary'><u>Malyalam</u></p></button>
                        
                        </div>

            

    </div>
  )
}

export default Maincomponent