import { z } from "zod";

export type TPaymentMethod = "credit" | "debit" | "cash";

export interface IDeliveryForm {
  cep: number;
  city: string;
  state: string;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  paymentMethod: TPaymentMethod;
}

export const newOrder = z.object({
  cep: z.number({ invalid_type_error: "Enter the ZIP code" }),
  street: z.string().min(1, "Enter the street"),
  number: z.string().min(1, "Enter the number"),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, "Enter the neighborhood"),
  city: z.string().min(1, "Enter the city"),
  state: z.string().min(1, "Enter the state"),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Select a payment method",
  }),
});

export type TOrderInfo = z.infer<typeof newOrder>;
