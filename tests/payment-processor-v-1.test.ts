import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { InvoiceAccepted } from "../generated/schema"
import { InvoiceAccepted as InvoiceAcceptedEvent } from "../generated/PaymentProcessorV1/PaymentProcessorV1"
import { handleInvoiceAccepted } from "../src/payment-processor-v-1"
import { createInvoiceAcceptedEvent } from "./payment-processor-v-1-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let invoiceId = BigInt.fromI32(234)
    let acceptedAt = BigInt.fromI32(234)
    let newInvoiceAcceptedEvent = createInvoiceAcceptedEvent(
      invoiceId,
      acceptedAt
    )
    handleInvoiceAccepted(newInvoiceAcceptedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("InvoiceAccepted created and stored", () => {
    assert.entityCount("InvoiceAccepted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "InvoiceAccepted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "invoiceId",
      "234"
    )
    assert.fieldEquals(
      "InvoiceAccepted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "acceptedAt",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
