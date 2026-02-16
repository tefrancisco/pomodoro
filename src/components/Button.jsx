export default function Button({ children, color = 'bg-blue-600', onClick }) {

    let classes = `text-xl px-12 py-3 border-1 rounded-lg ${color}`

    return (
        <button
            className={classes}
            onClick={onClick}
        >
            {children}
        </button>
    )
}