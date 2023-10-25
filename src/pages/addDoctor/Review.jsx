import React from 'react'

export default function Review() {
    return ( <
        div className = 'border border-white border-solid mt-10  py-6' >
        <
        div className = 'py-5 px-6' > < h3 className = "font-medium text-base" > Basic information < /h3></div >
        <
        div className = 'flex justify-center items-start w-full gap-8 flex-grow max-w-screen-lg mx-auto  border-b border-white border-solid px-6 pb-8' >

        <
        div className = 'flex justify-items-start   w-[50%] h-full mb-1' >

        <
        div className = 'flex flex-col w-[100%] ' >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > User type < /label> <
        input placeholder = 'Select user type'
        disabled value = { "user type" }
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > First name < /label> <
        input placeholder = 'Your first name'
        disabled value = { "first name" }
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > Last name < /label> <
        input placeholder = 'Your last name'
        disabled value = { "last name" }
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > Email adress < /label> <
        input placeholder = 'Your email adress'
        disabled value = { "email adress" }
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >
        <
        /div> <
        /div> <
        div className = 'flex justify-items-start   w-[50%] h-full mb-1' >
        <
        div className = 'flex flex-col w-[100%] h-full ' >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > Your gender < /label> <
        input placeholder = 'select gender'
        disabled value = { "select gender" }
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > Designation < /label> <
        input placeholder = 'Your first name'
        disabled value = { "first name" }
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > Date of birth < /label> <
        input placeholder = 'Your last name'
        type = 'date'
        disabled value = { "last name" }
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >

        <
        /div> <
        /div> <
        /div> <
        div className = 'py-7 px-6' > < h3 className = "font-medium text-base" > Details < /h3></div >

        <
        div className = 'flex justify-center items-start w-full gap-8 flex-grow max-w-screen-lg mx-auto border-b border-white border-solid pb-8 px-6' >
        <
        div className = 'flex justify-items-start   w-[50%] h-full mb-1' >
        <
        div className = 'flex flex-col w-[100%] ' >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > First name < /label> <
        input placeholder = 'Your first name'
        disabled value = { "first name" }
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > Last name < /label> <
        input placeholder = 'Your last name'
        disabled value = { "last name" }
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >
        <
        /div> <
        /div> <
        div className = 'flex justify-items-start   w-[50%] h-full mb-1' >
        <
        div className = 'flex flex-col w-[100%] h-full ' >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > Designation < /label> <
        input placeholder = 'Your first name'
        disabled value = { "designation" }
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >

        <
        /div> <
        /div> <
        /div> <
        div className = 'py-7 px-6' > < h3 className = "font-medium text-base" > Services < /h3></div >
        <
        div className = 'flex justify-center items-start w-full gap-8 flex-grow max-w-screen-lg mx-auto  pb-8 px-6' >
        <
        div className = 'flex justify-items-start   w-[50%] h-full mb-1' >
        <
        div className = 'flex flex-col w-[100%] ' >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > Doctor type < /label> <
        input placeholder = 'Select doctor type'
        disabled value = { "Select doctor type" }
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >

        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > Your speciality < /label> <
        input placeholder = 'Your speciality'
        disabled value = { "your speciality" }
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >
        <
        /div> <
        /div> <
        div className = 'flex justify-items-start   w-[50%] h-full mb-1' >
        <
        div className = 'flex flex-col w-[100%] h-full ' >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > Your gender < /label> <
        input placeholder = 'Select gender'
        disabled value = { "Select gender" }
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >

        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > Designation < /label> <
        input placeholder = 'Your first name'
        disabled value = { "designation" }
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >


        <
        /div> <
        /div> <
        /div> <
        /div>
    )
}