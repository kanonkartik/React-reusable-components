


export default function Modal({id ,header , body , footer ,onClose}){

    return(
        <div id={id ||'modal'} className="modal">
         <div className="content">
            <div className="header">
                 <span onClick={onClose} className="close-modal-icon">CLOSE</span>
                 <h2>{header ? header: 'Header'}</h2>
            </div>
            <div className="body">
               {
                body? body: <div>
                    <h3>This is our Model Body</h3>
                </div>
               }
            </div>
            <div className="footer">
               {
                 footer ? footer: <div>
                    <h1>This is our Modal Footer</h1>
                 </div>
               }
            </div>

         </div>
        </div>
    )
}