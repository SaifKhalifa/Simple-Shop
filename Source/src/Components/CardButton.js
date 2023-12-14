const CardButton = (props) =>{
    
    return(
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" href="#" onClick={props.onClick}>
                    {props.buttonText || "Add to cart"}
                </a>
            </div>
        </div>
    );
}
export default CardButton