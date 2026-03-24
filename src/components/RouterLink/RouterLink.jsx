const RouterLink = (props) => {
    const {
        to, //href
        children,
        styles,
        ...rest
    }=props

    const handleClick = (event) => {
        event.preventDefault()
        window.history.pushState({}, '', to)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    return (
        <a 
        href={to}
        onClick={handleClick} {...rest}
        className={styles.href}
        >
            {children}
        </a>
    )
}

export default RouterLink