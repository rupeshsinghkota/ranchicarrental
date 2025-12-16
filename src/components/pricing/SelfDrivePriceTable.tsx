"use client";

import { useState } from "react";
import { Button } from "@/components/ui/form-elements";
import Modal from "@/components/ui/Modal";
import BookingForm from "@/components/booking/BookingForm";
import { CAR_MODELS } from "@/lib/constants";
import { Car, Users } from "lucide-react";
import Image from "next/image";

export default function SelfDrivePriceTable() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState("");

    const handleBookClick = (carName: string) => {
        setSelectedCar(carName);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 mb-8 animate-in slide-in-from-bottom-5 duration-500">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 border-b pb-2">Self Drive Car Rental – 24 Hour Rates</h2>

            {/* Mobile Card Layout */}
            <div className="md:hidden grid gap-4 mb-6">
                {CAR_MODELS.map((car, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-secondary/10 px-3 py-1 rounded-bl-xl">
                            <span className="text-xs font-bold text-amber-700 tracking-wider">DAILY</span>
                        </div>

                        <div className="flex gap-4 items-center mb-4">
                            <div className="w-24 h-16 bg-slate-100 rounded-lg overflow-hidden shrink-0 relative">
                                <Image
                                    src={car.image}
                                    alt={car.name}
                                    fill
                                    className="object-cover"
                                    sizes="96px"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 leading-tight">{car.name}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full flex items-center gap-1">
                                        <Users size={12} /> {car.seats} Seats
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-end justify-between mt-2 pt-3 border-t border-slate-50">
                            <div>
                                <p className="text-xs text-slate-400 font-medium uppercase">Price / 24hrs</p>
                                <p className="text-2xl font-black text-slate-900">{car.price}</p>
                            </div>
                            <Button
                                onClick={() => handleBookClick(car.name)}
                                className="bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20 px-6"
                                size="sm"
                            >
                                Book Now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop Table Layout */}
            <div className="hidden md:block overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                        <tr className="bg-slate-100 text-slate-700">
                            <th className="p-4 rounded-tl-lg">Car Model</th>
                            <th className="p-4 text-center">Seats</th>
                            <th className="p-4 text-right">Rate (24 Hours)</th>
                            <th className="p-4 rounded-tr-lg text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-600 text-sm md:text-base">
                        {CAR_MODELS.map((car, idx) => (
                            <tr key={idx} className="border-b hover:bg-slate-50 transition-colors">
                                <td className="p-4 font-semibold text-slate-900">{car.name}</td>
                                <td className="p-4 text-center">{car.seats}</td>
                                <td className="p-4 text-right font-bold text-primary">{car.price}</td>
                                <td className="p-4 text-center">
                                    <Button
                                        onClick={() => handleBookClick(car.name)}
                                        size="sm"
                                        className="bg-secondary text-black hover:bg-amber-600 hover:text-white font-semibold"
                                    >
                                        Book Now
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Important Notes</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li><strong>Billing Cycle:</strong> Rates are for 24 hours. Full day rate applies even if used for less.</li>
                    <li><strong>Extra Time:</strong> Extra day charge applies if usage exceeds 24 hours.</li>
                    <li><strong>Mileage Limit:</strong> 200 KM limit per day.</li>
                    <li><strong>Extra KM Charge:</strong> ₹5 per KM for usage above 200 KM.</li>
                    <li><strong>Driver Available:</strong> ₹500 extra per day (Flat rate).</li>
                    <li>Fuel, toll, parking & fines are not included.</li>
                    <li>Valid driving license mandatory.</li>
                    <li>Security deposit may apply.</li>
                </ul>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={`Book ${selectedCar}`}
            >
                <BookingForm
                    initialValues={{
                        carType: selectedCar,
                        tripType: "self-drive",
                        message: `I want to book ${selectedCar} for Self Drive.`
                    }}
                    className="border-none shadow-none p-0"
                />
            </Modal>
        </div>
    );
}
