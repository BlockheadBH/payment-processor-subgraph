import {
  InvoiceAccepted as InvoiceAcceptedEvent,
  InvoiceCanceled as InvoiceCanceledEvent,
  InvoiceCreated as InvoiceCreatedEvent,
  InvoicePaid as InvoicePaidEvent,
  InvoiceRefunded as InvoiceRefundedEvent,
  InvoiceRejected as InvoiceRejectedEvent,
  InvoiceReleased as InvoiceReleasedEvent,
  OwnershipHandoverCanceled as OwnershipHandoverCanceledEvent,
  OwnershipHandoverRequested as OwnershipHandoverRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/PaymentProcessorV1/PaymentProcessorV1"
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
} from "../generated/schema"

export function handleInvoiceAccepted(event: InvoiceAcceptedEvent): void {
  let entity = new InvoiceAccepted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.invoiceId = event.params.invoiceId
  entity.acceptedAt = event.params.acceptedAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInvoiceCanceled(event: InvoiceCanceledEvent): void {
  let entity = new InvoiceCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.invoiceId = event.params.invoiceId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInvoiceCreated(event: InvoiceCreatedEvent): void {
  let entity = new InvoiceCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.invoiceId = event.params.invoiceId
  entity.creator = event.params.creator
  entity.price = event.params.price
  entity.createdAt = event.params.createdAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInvoicePaid(event: InvoicePaidEvent): void {
  let entity = new InvoicePaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.invoiceId = event.params.invoiceId
  entity.payer = event.params.payer
  entity.amountPayed = event.params.amountPayed
  entity.payedAt = event.params.payedAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInvoiceRefunded(event: InvoiceRefundedEvent): void {
  let entity = new InvoiceRefunded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.invoiceId = event.params.invoiceId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInvoiceRejected(event: InvoiceRejectedEvent): void {
  let entity = new InvoiceRejected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.invoiceId = event.params.invoiceId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInvoiceReleased(event: InvoiceReleasedEvent): void {
  let entity = new InvoiceReleased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.invoiceId = event.params.invoiceId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipHandoverCanceled(
  event: OwnershipHandoverCanceledEvent
): void {
  let entity = new OwnershipHandoverCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pendingOwner = event.params.pendingOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipHandoverRequested(
  event: OwnershipHandoverRequestedEvent
): void {
  let entity = new OwnershipHandoverRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pendingOwner = event.params.pendingOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
