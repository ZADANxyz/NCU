import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import ContactAboutForm from "@/components/ContactAboutForm";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import MapSection from "./home/sections/MapSection";
import { usePageTitle } from "@/hooks/usePageTitle";

const ApplyFinal = () => {
  usePageTitle("Finalize Application");
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    ssnOrId: "",
    photoId: null as File | null,
    paymentMethod: "",
    creditCardNumber: "",
    expirationDate: "",
    cardType: "",
    billingAddress: "",
    zipCode: "",
    securityCode: "",
    authorized: false,
  });

  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleInputChange("photoId", file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.email) {
      toast({ title: "Error", description: "Applicant's email is required", variant: "destructive" });
      return;
    }
    if (!formData.ssnOrId) {
      toast({ title: "Error", description: "SSN or National ID is required", variant: "destructive" });
      return;
    }
    if (!formData.photoId) {
      toast({ title: "Error", description: "Photo ID is required", variant: "destructive" });
      return;
    }
    if (!formData.paymentMethod) {
      toast({ title: "Error", description: "Payment method is required", variant: "destructive" });
      return;
    }
    if (formData.paymentMethod === "credit-debit-card") {
      if (!formData.creditCardNumber || !formData.expirationDate || !formData.cardType || !formData.billingAddress || !formData.zipCode || !formData.securityCode) {
        toast({ title: "Error", description: "All credit card fields are required", variant: "destructive" });
        return;
      }
    }
    if (!formData.authorized) {
      toast({ title: "Error", description: "You must authorize the $50 enrollment fee", variant: "destructive" });
      return;
    }

    // Note: This would normally send emails via Supabase edge functions
    toast({
      title: "Backend Required",
      description: "To send emails, please connect your project to Supabase using the green button in the top right.",
      variant: "destructive"
    });
    
    // For demo purposes, show the thank you message
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-20">
        <section className="w-full py-16 bg-background">
          <div className="w-full px-6 sm:px-8 md:px-[60px]">
            {/* Header with Logo and University Info */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8 w-full">
              <div className="flex-shrink-0">
                <img
                  src="/ncu-seal.png"
                  alt="New Covenant University Seal"
                  className="w-auto h-36 md:h-44 lg:h-52 max-w-none"
                  style={{ aspectRatio: 'auto' }}
                />
              </div>
              
              <div className="flex-1 flex flex-col items-center text-center justify-center pt-4">
                <div className="text-base md:text-lg lg:text-xl xl:text-2xl font-roboto font-normal text-[#333] dark:text-gray-200 mb-4">
                  NEW COVENANT UNIVERSITY • ST. AUGUSTINE, FLORIDA • PHONE: 615-948-2212
                </div>
                <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-roboto font-bold text-[#181818] dark:text-white mb-4">
                  Application for Admission
                </h1>
                </div>
              </div>
            </div>

            {/* Thank You Message */}
            <div className="bg-white dark:bg-[#242836] rounded-2xl border-2 border-[#B19528]/30 p-8 shadow-lg text-center">
              <h2 className="text-2xl md:text-3xl font-roboto font-bold text-[#181818] dark:text-white mb-6">
                Thank You for Submitting Your Final Application Steps!
              </h2>
              <p className="text-lg font-roboto text-[#333] dark:text-gray-200 mb-4">
                We have received your application finalization and will contact you soon to finish processing your enrollment.
              </p>
              <p className="text-base font-roboto text-[#666] dark:text-gray-300">
                A confirmation email has been sent to {formData.email}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="w-full py-16 bg-background">
        <div className="w-full px-6 sm:px-8 md:px-[60px]">
          {/* Header with Logo and University Info */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8 w-full">
            <div className="flex-shrink-0">
              <img
                src="/ncu-seal.png"
                alt="New Covenant University Seal"
                className="w-auto h-36 md:h-44 lg:h-52 max-w-none"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
            
            <div className="flex-1 flex flex-col items-center text-center justify-center pt-4">
              <div className="text-base md:text-lg lg:text-xl xl:text-2xl font-roboto font-normal text-[#333] dark:text-gray-200 mb-4">
                NEW COVENANT UNIVERSITY • ST. AUGUSTINE, FLORIDA • PHONE: 615-948-2212
              </div>
              <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-roboto font-bold text-[#181818] dark:text-white mb-4">
                Application for Admission
              </h1>
                <p className="text-xs md:text-sm lg:text-base xl:text-lg font-roboto font-bold text-[#333] dark:text-gray-200 uppercase tracking-wide">
                  PLEASE TYPE OR PRINT CLEARLY USING THE SPACE PROVIDED:
                </p>
              </div>
            </div>
          </div>

          {/* Finalization Form */}
          <div className="bg-white dark:bg-[#242836] rounded-2xl border-2 border-[#B19528]/30 p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Identity Verification Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-roboto font-bold text-[#181818] dark:text-white mb-4 text-center">
                  IDENTITY VERIFICATION DOCUMENTATION:
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-[#333] dark:text-gray-200">
                      Applicant's E-Mail: *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ssnOrId" className="text-sm font-medium text-[#333] dark:text-gray-200">
                      SSN or NATIONAL ID#: *
                    </Label>
                    <Input
                      id="ssnOrId"
                      type="text"
                      required
                      value={formData.ssnOrId}
                      onChange={(e) => handleInputChange("ssnOrId", e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photoId" className="text-sm font-medium text-[#333] dark:text-gray-200">
                    Upload a photo copy of active/valid government issued photo ID: *
                  </Label>
                  <Input
                    id="photoId"
                    type="file"
                    accept="image/*,.pdf"
                    required
                    onChange={handleFileChange}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Payment Information Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-roboto font-bold text-[#181818] dark:text-white mb-4 text-center">
                  $50.00 USD APPLICATION FEE PAYMENT INFORMATION (NON-REFUNDABLE):
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="paymentMethod" className="text-sm font-medium text-[#333] dark:text-gray-200">
                      Payment Method: *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("paymentMethod", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="credit-debit-card">Credit/Debit Card</SelectItem>
                        <SelectItem value="check">Check</SelectItem>
                        <SelectItem value="money-order">Money Order</SelectItem>
                        <SelectItem value="cash">Cash</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {formData.paymentMethod === "credit-debit-card" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="creditCardNumber" className="text-sm font-medium text-[#333] dark:text-gray-200">
                          Credit Card Number: *
                        </Label>
                        <Input
                          id="creditCardNumber"
                          type="text"
                          required
                          value={formData.creditCardNumber}
                          onChange={(e) => handleInputChange("creditCardNumber", e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="expirationDate" className="text-sm font-medium text-[#333] dark:text-gray-200">
                          Expiration (MM/YY): *
                        </Label>
                        <Input
                          id="expirationDate"
                          type="text"
                          placeholder="MM/YY"
                          required
                          value={formData.expirationDate}
                          onChange={(e) => handleInputChange("expirationDate", e.target.value)}
                          className="w-full"
                        />
                      </div>
                    </>
                  )}
                </div>

                {formData.paymentMethod === "credit-debit-card" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardType" className="text-sm font-medium text-[#333] dark:text-gray-200">
                        Card Type (if applicable): *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("cardType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select card type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="visa">Visa</SelectItem>
                          <SelectItem value="mastercard">Mastercard</SelectItem>
                          <SelectItem value="american-express">American Express</SelectItem>
                          <SelectItem value="discover">Discover</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="billingAddress" className="text-sm font-medium text-[#333] dark:text-gray-200">
                        Billing Address, ZIP/Postal Code: *
                      </Label>
                      <Input
                        id="billingAddress"
                        type="text"
                        required
                        value={formData.billingAddress}
                        onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="securityCode" className="text-sm font-medium text-[#333] dark:text-gray-200">
                        Security Code: *
                      </Label>
                      <Input
                        id="securityCode"
                        type="text"
                        required
                        value={formData.securityCode}
                        onChange={(e) => handleInputChange("securityCode", e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Authorization Section */}
              <div className="space-y-4">
                <div className="flex items-start justify-center space-x-2">
                  <Checkbox
                    id="authorized"
                    checked={formData.authorized}
                    onCheckedChange={(checked) => handleInputChange("authorized", checked)}
                    className="mt-1"
                  />
                  <Label htmlFor="authorized" className="text-sm text-[#333] dark:text-gray-200 leading-relaxed text-center">
                    I hereby authorize NEW COVENANT MINISTRIES to utilize my payment method provided to process my enrollment fees.
                  </Label>
                </div>
              </div>

              {/* Mailing Information */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-[#333] dark:text-gray-200 text-center">
                  For expedited service please send all physical payments to our mailing address:<br />
                  <strong>PO Box 574, Fremont, OH 43420</strong>
                </p>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-12 py-4 text-xl font-medium border-2 border-blue-600 hover:border-blue-700 transition-all duration-300 rounded-lg dark:bg-gradient-to-r dark:from-[#B19528] dark:to-[#D4AF37] dark:hover:from-[#D4AF37] dark:hover:to-[#B19528] dark:border-[#B19528] dark:hover:border-[#D4AF37]"
                >
                  Finalize Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Divider */}
      <HeroDividerSection />

      {/* Degrees Section */}
      <DegreesOfferedSection />

      {/* Reviews Section */}
      <ReviewsSection />
      
      {/* About Us Sectional */}
      <AboutSectionalSUBPAGE />

      {/* Another Divider */}
      <HeroDividerSection />
      
      {/* Contact Form Section */}
      <div className="w-full bg-white dark:bg-[#242836] py-16 px-3 sm:px-6 md:px-[52px]">
        <ContactAboutForm />
      </div>
      
      {/* Map Section */}
      <MapSection />
    </div>
  );
};

export default ApplyFinal;