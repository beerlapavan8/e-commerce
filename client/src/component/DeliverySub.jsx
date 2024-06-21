import React from 'react'

const DeliverySub = (props) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    const month = months[d.getMonth()];
    const date =d.getDate()+3
    const year = d.getFullYear(); 
    const dateoforder = date +" "+month+" "+year
  return (
    <div>
      <div class="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                        <div class="img-box max-lg:w-full">
                            <img src={props.image} alt="Premium Watch image" 
                                class="aspect-square w-full lg:max-w-[140px]"/>
                        </div>
                        <div class="flex flex-row items-center w-full ">
                            <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
                                <div class="flex items-center">
                                    <div class="">
                                        <h2 class="font-semibold text-xl leading-8 text-black mb-3">
                                           {props.name}</h2>
                                        {/* <p class="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                                            By: Dust Studios</p> */}
                                    </div>
                                </div>
                                <div class="grid grid-cols-5">
                                    <div class="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                        <div class="flex gap-3 lg:block">
                                            <p class="font-medium text-sm leading-7 text-black">price</p>
                                            <p class="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">₹{props.price}</p>
                                        </div>
                                    </div>
                                    <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                                        <div class="flex gap-3 lg:block">
                                            <p class="font-medium text-sm leading-7 text-black">Status
                                            </p>
                                            <p
                                                class="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                                {props.status}</p>
                                        </div>

                                    </div>
                                    <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                        <div class="flex gap-3 lg:block">
                                            <p class="font-medium text-sm whitespace-nowrap leading-6 text-black">
                                                Expected Delivery Time</p>
                                            <p class="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                               {dateoforder}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
    </div>
  )
}

export default DeliverySub
