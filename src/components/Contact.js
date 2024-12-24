// export default function Contact () {

//     const config = {
//         email : 'madhusudhan93436@gmail.com',
//         phone: '+91 63805 17874'
//     }

//     return (
//     <section id="contact" className='flex flex-col bg-secondary px-5 py-32 text-white'>
//         <div className='flex flex-col items-center'>
           
//             <h1 className='text-4xl border-b-4  border-red-700 mb-5 w-[151] font-bold'>Contact</h1>
//             <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
//             <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
//             <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
//         </div>
//     </section>
//     )
// }

export default function Contact() {
    const config = {
        email: 'madhusudhan93436@gmail.com',
        phone: '+91 63805 17874',
    };

    return (
        <section
            id="contact"
            className="flex flex-col items-center bg-primary px-5 py-16 md:py-32 text-white"
        >
            <div className="w-full max-w-2xl text-center">
                {/* Section Heading */}
                <h1 className="text-4xl md:text-5xl border-b-4 border-red-700 mb-5 inline-block font-bold">
                    Contact
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 mb-5">
                    If you want to discuss more in detail, please feel free to contact me.
                </p>

                {/* Contact Details */}
                <div className="space-y-4">
                    <p className="text-lg md:text-xl">
                        <span className="font-bold text-red-700">Email:</span> {config.email}
                    </p>
                    <p className="text-lg md:text-xl">
                        <span className="font-bold text-red-700">Phone:</span> {config.phone}
                    </p>
                </div>
            </div>
        </section>
    );
}
