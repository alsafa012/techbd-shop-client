import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
     return (
          <div>
                <div className="text-5xl text-center mt-32 space-y-5">
                    <p>ERROR...!</p>
                    <p>THIS PAGE DOES NOT EXISTS..</p>
                    <div>
                         <Link to="/">
                              <button className="btn btn-primary bg-red-400">
                                   Go To Home Page
                              </button>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default ErrorPage;