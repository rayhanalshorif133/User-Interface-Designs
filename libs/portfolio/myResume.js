const ItemBox = (props) => {
    const { icon, title, desc } = props;
    return (
        <div className="box h-auto w-[23.5rem] rounded-xl mx-5 py-5 group/item">
            <div className="mt-[3rem] mx-[2.8rem] hover:mt-[2rem] transition-all duration-500 ease-in-out">
                <div className="h-10 w-10"><i class={`${icon} fa-2xl text-primary font-bold`}></i></div>
                <h2 className="text-2xl font-semibold text-white py-5 font-poppins tracking-wide text-start">{title}</h2>
                <p className="text-base font-normal text-white py-5 font-poppins tracking-wide text-start">{desc}</p>
                <div className="invisible group-hover/item:visible text-start">
                    <i class="fa-solid fa-arrow-right-long text-primarySub  transition-all duration-500 ease-in-out text-start fa-xl"></i>
                </div>
            </div>
        </div>
    );
}

const WhatIDo = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="py-10 mx-auto justify-center text-center">
                <h4 className="text-primarySub font-montserrat text-sm tracking-wide font-medium py-1 justify-center text-center">1.7+ YEARS OF EXPERIENCE</h4>
                <h2 className="text-[#c4cfde] text-6xl font-bold font-montserrat tracking-wide py-5 justify-center text-center">My Resume</h2>
            </div>
            <div className="btn-group btn-group-horizontal">
                <button className="btn btn-active">Button</button>
                <button className="btn">Button</button>
                <button className="btn">Button</button>
            </div>
            <div class="h-[2px] w-[75%] my-10 mt-[5rem] mx-auto bg-[#000000]/40"></div>
        </div>);
}


const container = document.getElementById('myResume');
const root = ReactDOM.createRoot(container);
root.render(<WhatIDo />)