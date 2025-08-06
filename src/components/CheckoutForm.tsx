import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ShippingAddress {
  street: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}

interface CheckoutFormProps {
  email: string;
  total: number;
  cartItems: any[];
  onClose: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ email, total, cartItems, onClose }) => {
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    street: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });
  
  const [loading, setLoading] = useState(false);
  const { user, profile, clearCart } = useCart();
  const { toast } = useToast();

  const handleAddressChange = (field: keyof ShippingAddress, value: string) => {
    setShippingAddress(prev => ({ ...prev, [field]: value }));
  };

  const handleCardChange = (field: string, value: string) => {
    setCardInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!shippingAddress.street || !shippingAddress.city || !shippingAddress.state || !shippingAddress.zip) {
      toast({
        title: "Missing Information",
        description: "Please fill in all shipping address fields.",
        variant: "destructive"
      });
      return;
    }

    if (!cardInfo.cardNumber || !cardInfo.expiryDate || !cardInfo.cvv || !cardInfo.nameOnCard) {
      toast({
        title: "Missing Information", 
        description: "Please fill in all payment information.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    try {
      // For now, just simulate order creation
      // TODO: Integrate with actual payment processor and Hubspot
      
      toast({
        title: "Order Submitted!",
        description: "Your order has been received. You will receive a confirmation email shortly.",
      });
      
      clearCart();
      onClose();
    } catch (error) {
      toast({
        title: "Order Failed",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="border-b border-gold/20 pb-4">
        <h2 className="text-xl font-semibold text-[#B19528]">Checkout</h2>
        <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {user && profile?.first_name ? (
            `Welcome, ${profile.first_name}`
          ) : user ? (
            `Logged in as: ${user.email}`
          ) : (
            'GUEST'
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Shipping Address */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Shipping Address</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Street Address *</label>
              <Input
                value={shippingAddress.street}
                onChange={(e) => handleAddressChange('street', e.target.value)}
                placeholder="123 Main Street"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Address Line 2</label>
              <Input
                value={shippingAddress.address2}
                onChange={(e) => handleAddressChange('address2', e.target.value)}
                placeholder="Apartment, suite, etc. (optional)"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City *</label>
                <Input
                  value={shippingAddress.city}
                  onChange={(e) => handleAddressChange('city', e.target.value)}
                  placeholder="City"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State *</label>
                <Input
                  value={shippingAddress.state}
                  onChange={(e) => handleAddressChange('state', e.target.value)}
                  placeholder="State"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">ZIP Code *</label>
              <Input
                value={shippingAddress.zip}
                onChange={(e) => handleAddressChange('zip', e.target.value)}
                placeholder="12345"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Payment Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Payment Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name on Card *</label>
              <Input
                value={cardInfo.nameOnCard}
                onChange={(e) => handleCardChange('nameOnCard', e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Card Number *</label>
              <Input
                value={cardInfo.cardNumber}
                onChange={(e) => handleCardChange('cardNumber', e.target.value)}
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Expiry Date *</label>
                <Input
                  value={cardInfo.expiryDate}
                  onChange={(e) => handleCardChange('expiryDate', e.target.value)}
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVV *</label>
                <Input
                  value={cardInfo.cvv}
                  onChange={(e) => handleCardChange('cvv', e.target.value)}
                  placeholder="123"
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.title} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-2 font-semibold">
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="flex-1"
            disabled={loading}
          >
            Back to Cart
          </Button>
          <Button
            type="submit"
            className="flex-1"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Complete Order'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;