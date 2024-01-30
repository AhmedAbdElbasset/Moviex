import './SignBoard.css'

function SignBoard({headLine}){
    return(
        <div className="SignBoard">
            <p className='title'>Our<span>{headLine}</span></p>
            <div className="path">
                <p>home</p>
                <p>{headLine}</p>
            </div>
        </div>
    )
}

export default SignBoard