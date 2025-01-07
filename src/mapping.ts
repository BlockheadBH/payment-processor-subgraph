import {
  InvoiceAccepted as InvoiceAcceptedEvent,
  InvoiceCanceled as InvoiceCanceledEvent,
  InvoiceCreated as InvoiceCreatedEvent,
  InvoicePaid as InvoicePaidEvent,
  InvoiceRefunded as InvoiceRefundedEvent,
  InvoiceRejected as InvoiceRejectedEvent,
  InvoiceReleased as InvoiceReleasedEvent,
} from "../generated/PaymentProcessorV1/PaymentProcessorV1";
import { Invoice, Creator, Payer } from "../generated/schema";

export function handleInvoiceCreated(event: InvoiceCreatedEvent): void {
  let entity = new Invoice(event.params.invoiceId.toString());

  const invoiceCreator = event.params.creator.toHex();
  let creator = Creator.load(invoiceCreator);

  if (!creator) {
    creator = new Creator(invoiceCreator);
    creator.save();
  }

  entity.status = "CREATED";
  entity.creator = invoiceCreator;
  entity.createdAt = event.block.timestamp;

  entity.save();
}

export function handleInvoicePaid(event: InvoicePaidEvent): void {
  let entity = Invoice.load(event.params.invoiceId.toString());
  if (!entity) return;

  let payer = Payer.load(event.params.payer.toString());

  if (!payer) {
    payer = new Payer(event.params.payer.toString());
    payer.save();
  }

  entity.payer = event.params.payer.toHex();
  entity.paidAt = event.block.timestamp;
  entity.status = "PAID";

  entity.save();
}

export function handleInvoiceAccepted(event: InvoiceAcceptedEvent): void {
  let entity = Invoice.load(event.params.invoiceId.toString());
  if (!entity) return;

  entity.status = "ACCEPTED";

  entity.save();
}

export function handleInvoiceCanceled(event: InvoiceCanceledEvent): void {
  let entity = Invoice.load(event.params.invoiceId.toString());
  if (!entity) return;

  entity.status = "CANCELED";

  entity.save();
}

export function handleInvoiceRefunded(event: InvoiceRefundedEvent): void {
  let entity = Invoice.load(event.params.invoiceId.toString());
  if (!entity) return;

  entity.status = "REFUNDED";

  entity.save();
}

export function handleInvoiceRejected(event: InvoiceRejectedEvent): void {
  let entity = Invoice.load(event.params.invoiceId.toString());
  if (!entity) return;

  entity.status = "REJECTED";

  entity.save();
}

export function handleInvoiceReleased(event: InvoiceReleasedEvent): void {
  let entity = Invoice.load(event.params.invoiceId.toString());
  if (!entity) return;

  entity.status = "RELEASED";

  entity.save();
}
