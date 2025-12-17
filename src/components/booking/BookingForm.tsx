"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button, Input, Label, Select } from "@/components/ui/form-elements";
import { cn } from "@/lib/utils";
import { CAR_MODELS } from "@/lib/constants";

interface BookingFormProps {
    className?: string;
    initialValues?: {
        carType?: string;
        tripType?: string;
        message?: string;
    };
}

export default function BookingForm({ className, initialValues }: BookingFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        pickup: "",
        drop: "",
        date: "",
        time: "",
        duration: "",
        tripType: initialValues?.tripType || "local",
        carType: initialValues?.carType || "sedan",
        driveType: "self_drive",
        message: initialValues?.message || ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx6tOGRwNiGo6bgM06AlV5LE1LU-daZpaIZm90DqdGc8npD56COARTuw_iMfi5wCgR6GA/exec";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Calculate Final Price for Sheet
            let finalPrice = 0;
            const selectedCar = CAR_MODELS.find(c => c.name === formData.carType);
            if (selectedCar && selectedCar.price) {
                const dailyRate = parseInt(selectedCar.price.replace(/[^\d]/g, ""), 10);
                let duration = parseInt(formData.duration || "1", 10);
                if (isNaN(duration) || duration < 1) duration = 1;
                finalPrice = dailyRate * duration;
                if (formData.driveType === "with_driver") {
                    finalPrice += (500 * duration);
                }
            }

            const submissionData = {
                ...formData,
                estimatedTotal: finalPrice > 0 ? `₹${finalPrice.toLocaleString('en-IN')}` : "N/A"
            };

            // 1. Send to Google Sheets
            // We use no-cors mode because Google Scripts doesn't support CORS headers easily for simple posts,
            // but the data still gets submitted.
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submissionData),
            });

            // 2. Simulate small delay for UX
            await new Promise(resolve => setTimeout(resolve, 800));

            setSuccess(true);
        } catch (error) {
            console.error("Error submitting form", error);
            // Even if sheet fails (e.g. adblocker), we mostly want to show success to prompt WhatsApp
            setSuccess(true);
        } finally {
            setLoading(false);
        }
    };

    const sendToWhatsApp = () => {
        const driveTypeText = formData.driveType === "with_driver" ? "With Driver" : "Self Drive (No Driver)";

        // Calculate Price for Message
        let estimatedPrice = 0;
        const selectedCar = CAR_MODELS.find(c => c.name === formData.carType);
        if (selectedCar && selectedCar.price) {
            const dailyRate = parseInt(selectedCar.price.replace(/[^\d]/g, ""), 10);
            let duration = parseInt(formData.duration || "1", 10);
            if (isNaN(duration) || duration < 1) duration = 1;
            estimatedPrice = dailyRate * duration;
            if (formData.driveType === "with_driver") {
                estimatedPrice += (500 * duration);
            }
        }

        const text = `*New Booking Request*%0A%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.mobile}%0A*Trip Type:* ${formData.tripType}%0A*Car Model:* ${formData.carType}%0A*Driver Option:* ${driveTypeText}%0A*Duration:* ${formData.duration ? formData.duration + " Days" : "N/A"}%0A*Total Amount:* ₹${estimatedPrice > 0 ? estimatedPrice.toLocaleString('en-IN') : 'Calculated on Call'}%0A*Pickup:* ${formData.pickup}%0A*Drop:* ${formData.drop}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Message:* ${formData.message}`;
        const url = `https://wa.me/918651144783?text=${text}`;
        window.open(url, '_blank');
    };

    if (success) {
        return (
            <div className={cn("bg-white p-8 rounded-xl shadow-xl text-center animate-in fade-in zoom-in", className)}>
                <div className="flex justify-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                        <CheckCircle className="text-green-600 w-12 h-12" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Booking Received!</h3>
                <p className="text-slate-600 mb-6">Thank you for your request. To confirm your booking instantly, please send the details to us on WhatsApp.</p>

                <Button
                    onClick={sendToWhatsApp}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-lg py-6"
                >
                    Send Booking Details on WhatsApp
                </Button>
                <button onClick={() => setSuccess(false)} className="mt-4 text-sm text-slate-500 underline">
                    Book another car
                </button>
            </div>
        );
    }

    // Calculate estimated price
    let estimatedPrice = 0;
    const selectedCar = CAR_MODELS.find(c => c.name === formData.carType);
    if (selectedCar && selectedCar.price) {
        // Parse numerical price from string like "₹1,000"
        const dailyRate = parseInt(selectedCar.price.replace(/[^\d]/g, ""), 10);
        let duration = parseInt(formData.duration || "1", 10);
        if (isNaN(duration) || duration < 1) duration = 1;

        estimatedPrice = dailyRate * duration;

        // Add Driver Charge if applicable (e.g. 500 per day)
        if (formData.driveType === "with_driver") {
            estimatedPrice += (500 * duration);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={cn("bg-white p-5 rounded-xl shadow-xl border-t-4 border-secondary", className)}>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Book Your Ride</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div>
                    <Label htmlFor="name" className="text-xs mb-1">Full Name</Label>
                    <Input id="name" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} className="h-9 text-sm" />
                </div>
                <div>
                    <Label htmlFor="mobile" className="text-xs mb-1">Mobile Number</Label>
                    <Input id="mobile" name="mobile" required type="tel" placeholder="+91 99999 99999" value={formData.mobile} onChange={handleChange} className="h-9 text-sm" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div>
                    <Label htmlFor="pickup" className="text-xs mb-1">Pickup Location</Label>
                    <Input id="pickup" name="pickup" required placeholder="Ranchi Airport / Home" value={formData.pickup} onChange={handleChange} className="h-9 text-sm" />
                </div>
                <div>
                    <Label htmlFor="drop" className="text-xs mb-1">Drop Location</Label>
                    <Input id="drop" name="drop" required placeholder="Destination" value={formData.drop} onChange={handleChange} className="h-9 text-sm" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                <div className="md:col-span-1">
                    <Label htmlFor="date" className="text-xs mb-1">Date</Label>
                    <Input id="date" name="date" required type="date" value={formData.date} onChange={handleChange} className="h-9 text-sm" />
                </div>
                <div>
                    <Label htmlFor="time" className="text-xs mb-1">Time</Label>
                    <Input id="time" name="time" required type="time" value={formData.time} onChange={handleChange} className="h-9 text-sm" />
                </div>
                <div>
                    <Label htmlFor="duration" className="text-xs mb-1">Days</Label>
                    <Input id="duration" name="duration" type="number" min="1" placeholder="Days" value={formData.duration} onChange={handleChange} className="h-9 text-sm" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div>
                    <Label htmlFor="tripType" className="text-xs mb-1">Trip Type</Label>
                    <Select
                        id="tripType"
                        name="tripType"
                        value={formData.tripType}
                        className="h-9 text-sm"
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                            const newTripType = e.target.value;
                            let newDriveType = formData.driveType;
                            if (newTripType === "self-drive") newDriveType = "self_drive";
                            else if (newTripType === "outstation" || newTripType === "airport") newDriveType = "with_driver";
                            setFormData({ ...formData, tripType: newTripType, driveType: newDriveType });
                        }}
                    >
                        <option value="local">Local Rental</option>
                        <option value="airport">Airport Transfer</option>
                        <option value="outstation">Outstation</option>
                        <option value="self-drive">Self Drive</option>
                    </Select>
                </div>
                <div>
                    <Label htmlFor="driveType" className="text-xs mb-1">Driver Preference</Label>
                    <Select
                        id="driveType"
                        name="driveType"
                        value={formData.driveType}
                        className="h-9 text-sm"
                        onChange={handleChange}
                    >
                        <option value="self_drive">Self Drive (No Driver)</option>
                        <option value="with_driver">With Driver (+₹500/day)</option>
                    </Select>
                </div>
            </div>

            <div className="mb-4">
                <Label htmlFor="carType" className="text-xs mb-1">Car Model</Label>
                <Select
                    id="carType"
                    name="carType"
                    value={formData.carType}
                    className="h-9 text-sm"
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Select a Car</option>
                    {CAR_MODELS.map((car) => (
                        <option key={car.name} value={car.name}>
                            {car.name} ({car.seats} Seater) - {car.price}/day
                        </option>
                    ))}
                    <option value="Other">Other / Not Listed</option>
                </Select>
            </div>

            {/* Price Estimation */}
            {estimatedPrice > 0 && (
                <div className="mb-4 p-3 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center">
                    <span className="text-sm text-slate-600">Estimated Total:</span>
                    <div className="text-right">
                        <span className="text-lg font-bold text-slate-900 block leading-none">₹{estimatedPrice.toLocaleString('en-IN')}</span>
                        <span className="text-[10px] text-slate-400">
                            {selectedCar?.price} x {formData.duration || 1} day(s)
                            {formData.driveType === 'with_driver' ? ' + Driver' : ''}
                        </span>
                    </div>
                </div>
            )}

            <Button type="submit" disabled={loading} className="w-full text-base py-5 bg-secondary text-black hover:bg-amber-600 hover:text-white font-bold transition-all shadow-md">
                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</> : "Book Now"}
            </Button>
        </form>
    );
}
