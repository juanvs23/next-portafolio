import React from 'react'


const Footer = props => {
    return (
        <footer className="p-2 fixed-bottom bg-dark ">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <h4 className="text-center text-white text-light">&copy; Copyright {new Date().getFullYear()}</h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}



export default Footer
