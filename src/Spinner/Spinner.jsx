import { ThreeDots } from "react-loader-spinner";

const Spinner = () => {
    return (
        <div className='flex items-center flex-col my-20'>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#2663EB"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperclassName=""
            />
            <p className='text-sm text-primary opacity-60'>Loading the content...</p>
            <p className='text-xs text-primary opacity-50'>Loading depends on your connection speed!</p>
        </div>
    );
};

export default Spinner;