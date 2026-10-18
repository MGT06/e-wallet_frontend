const PaymentSummary = ({
  numAm,
  deliveryFee,
  taxFee,
  subTotal,
  formatRupiah,
}) => {
  return (
    <div className="space-y-6 mb-32 lg:mb-0">
      <h2 className="text-base font-bold text-dark">Payment</h2>

      <div className="space-y-3 border-b border-gray-100 pb-4 text-sm font-medium">
        <div className="flex justify-between text-dark-gray">
          <span>Order</span>
          <span className="font-bold text-dark">{formatRupiah(numAm)}</span>
        </div>
        <div className="flex justify-between text-dark-gray">
          <span>Delivery</span>
          <span className="font-bold text-dark">
            {formatRupiah(deliveryFee)}
          </span>
        </div>
        <div className="flex justify-between text-dark-gray">
          <span>Tax</span>
          <span className="font-bold text-dark">{formatRupiah(taxFee)}</span>
        </div>
      </div>

      <div className="flex justify-between text-base font-bold text-dark">
        <span>Sub Total</span>
        <span>{formatRupiah(subTotal)}</span>
      </div>

      <button
        type="submit"
        className="w-full rounded-2xl bg-primary py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 active:scale-[0.99]"
      >
        Submit
      </button>

      <p className="text-center text-xs leading-relaxed text-dark-gray">
        *Get Discount if you pay with Bank Central Asia
      </p>
    </div>
  );
};

export default PaymentSummary;
