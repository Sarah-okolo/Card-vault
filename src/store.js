import { create } from 'zustand';

export const useCardDetailsStore = create((set) => ({
  cardNumber: '',
  cardHolder: '',
  expiryMonth: '',
  expiryYear: '',
  cvc: '',
  setCardNumber: (number) => set({ cardNumber: number }),
  setCardHolder: (name) => set({ cardHolder: name }),
  setExpiryMonth: (mth) => set({ expiryMonth: mth }),
  setExpiryYear: (year) => set({ expiryYear: year }),
  setCvc: (code) => set({ cvc: code }),
}));