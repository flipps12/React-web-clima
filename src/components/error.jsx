export default function Error({ errorMessage }) {
    return (
        <div className="bg-gray-900 w-screen h-screen flex justify-center items-center">
            <div className='text-white text-2xl'>{errorMessage}</div>
        </div>
    )
}