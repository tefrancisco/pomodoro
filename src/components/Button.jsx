export default function Button({ children, color = 'bg-blue-600', onClick }) {

    let classes = `px-8 py-2 rounded-lg ${color}`

    return (
        <button
            className={classes}
            onClick={onClick}
        >
            {children}
        </button>
    )
}