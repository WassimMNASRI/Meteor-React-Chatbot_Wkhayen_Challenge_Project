import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export const MainLayout = ({content})=>(
    <div className="main-layout">
        <header> 
            
                <h2> Build Your Career  </h2>
                <nav>
                    <a href="/workshops"> Workshops </a>
                    <a href="/about"> About </a>
                    <AccountsUI />
                </nav>

        </header>
                
                <main>
                    {content}
                </main>           
        <footer>   
                <center><h3>&#169;X-Termin&#170;te_2k18</h3></center>
        </footer>
    </div>
    
)

