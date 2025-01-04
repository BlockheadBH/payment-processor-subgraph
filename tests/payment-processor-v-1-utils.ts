import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  InvoiceAccepted,
  InvoiceCanceled,
  InvoiceCreated,
  InvoicePaid,
  InvoiceRefunded,
  InvoiceRejected,
  InvoiceReleased,
  OwnershipHandoverCanceled,
  OwnershipHandoverRequested,
  OwnershipTransferred
} from "../generated/PaymentProcessorV1/PaymentProcessorV1"

export function createInvoiceAcceptedEvent(
  invoiceId: BigInt,
  acceptedAt: BigInt
): InvoiceAccepted {
  let invoiceAcceptedEvent = changetype<InvoiceAccepted>(newMockEvent())

  invoiceAcceptedEvent.parameters = new Array()

  invoiceAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "invoiceId",
      ethereum.Value.fromUnsignedBigInt(invoiceId)
    )
  )
  invoiceAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "acceptedAt",
      ethereum.Value.fromUnsignedBigInt(acceptedAt)
    )
  )

  return invoiceAcceptedEvent
}

export function createInvoiceCanceledEvent(invoiceId: BigInt): InvoiceCanceled {
  let invoiceCanceledEvent = changetype<InvoiceCanceled>(newMockEvent())

  invoiceCanceledEvent.parameters = new Array()

  invoiceCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "invoiceId",
      ethereum.Value.fromUnsignedBigInt(invoiceId)
    )
  )

  return invoiceCanceledEvent
}

export function createInvoiceCreatedEvent(
  invoiceId: BigInt,
  creator: Address,
  price: BigInt,
  createdAt: BigInt
): InvoiceCreated {
  let invoiceCreatedEvent = changetype<InvoiceCreated>(newMockEvent())

  invoiceCreatedEvent.parameters = new Array()

  invoiceCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "invoiceId",
      ethereum.Value.fromUnsignedBigInt(invoiceId)
    )
  )
  invoiceCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  invoiceCreatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  invoiceCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "createdAt",
      ethereum.Value.fromUnsignedBigInt(createdAt)
    )
  )

  return invoiceCreatedEvent
}

export function createInvoicePaidEvent(
  invoiceId: BigInt,
  payer: Address,
  amountPayed: BigInt,
  payedAt: BigInt
): InvoicePaid {
  let invoicePaidEvent = changetype<InvoicePaid>(newMockEvent())

  invoicePaidEvent.parameters = new Array()

  invoicePaidEvent.parameters.push(
    new ethereum.EventParam(
      "invoiceId",
      ethereum.Value.fromUnsignedBigInt(invoiceId)
    )
  )
  invoicePaidEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  invoicePaidEvent.parameters.push(
    new ethereum.EventParam(
      "amountPayed",
      ethereum.Value.fromUnsignedBigInt(amountPayed)
    )
  )
  invoicePaidEvent.parameters.push(
    new ethereum.EventParam(
      "payedAt",
      ethereum.Value.fromUnsignedBigInt(payedAt)
    )
  )

  return invoicePaidEvent
}

export function createInvoiceRefundedEvent(invoiceId: BigInt): InvoiceRefunded {
  let invoiceRefundedEvent = changetype<InvoiceRefunded>(newMockEvent())

  invoiceRefundedEvent.parameters = new Array()

  invoiceRefundedEvent.parameters.push(
    new ethereum.EventParam(
      "invoiceId",
      ethereum.Value.fromUnsignedBigInt(invoiceId)
    )
  )

  return invoiceRefundedEvent
}

export function createInvoiceRejectedEvent(invoiceId: BigInt): InvoiceRejected {
  let invoiceRejectedEvent = changetype<InvoiceRejected>(newMockEvent())

  invoiceRejectedEvent.parameters = new Array()

  invoiceRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "invoiceId",
      ethereum.Value.fromUnsignedBigInt(invoiceId)
    )
  )

  return invoiceRejectedEvent
}

export function createInvoiceReleasedEvent(invoiceId: BigInt): InvoiceReleased {
  let invoiceReleasedEvent = changetype<InvoiceReleased>(newMockEvent())

  invoiceReleasedEvent.parameters = new Array()

  invoiceReleasedEvent.parameters.push(
    new ethereum.EventParam(
      "invoiceId",
      ethereum.Value.fromUnsignedBigInt(invoiceId)
    )
  )

  return invoiceReleasedEvent
}

export function createOwnershipHandoverCanceledEvent(
  pendingOwner: Address
): OwnershipHandoverCanceled {
  let ownershipHandoverCanceledEvent =
    changetype<OwnershipHandoverCanceled>(newMockEvent())

  ownershipHandoverCanceledEvent.parameters = new Array()

  ownershipHandoverCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownershipHandoverCanceledEvent
}

export function createOwnershipHandoverRequestedEvent(
  pendingOwner: Address
): OwnershipHandoverRequested {
  let ownershipHandoverRequestedEvent =
    changetype<OwnershipHandoverRequested>(newMockEvent())

  ownershipHandoverRequestedEvent.parameters = new Array()

  ownershipHandoverRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownershipHandoverRequestedEvent
}

export function createOwnershipTransferredEvent(
  oldOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
