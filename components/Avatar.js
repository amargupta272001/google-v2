function Avatar({url, className}) {
    return (
        <img 
            className={`rounded-full w-10 h-10 cursor-pointer animate-bounce transition duration-150 transform hover:scale-110 ${className}`}
            loading="lazy"
            src={url}
            alt="profile pic"
        
        />
    )
}

export default Avatar
