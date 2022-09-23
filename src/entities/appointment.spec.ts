import { expect, test } from "vitest";
import { getFutureDate } from "../tests/utils/get-future-date";

import { Appointment } from "./appointment";

test("create an appointment", () => {
  const startsAt = getFutureDate("2022-08-10");
  const endsAt = getFutureDate("2022-08-11");

  const appointment = new Appointment({
    customer: "John Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toBe("John Doe");
});

test("cannot create an appointment with start date before now", () => {
  const now = new Date();
  const startsAt = new Date(now.getTime() - 1000);
  const endsAt = getFutureDate("2022-08-11");
  expect(
    () => new Appointment({ customer: "John Doe", startsAt, endsAt })
  ).toThrow();
});

test("cannot create an appointment with end date before start date", () => {
  const startsAt = getFutureDate("2022-08-10");
  const endsAt = new Date(startsAt.getTime() - 1000);

  expect(
    () => new Appointment({ customer: "John Doe", startsAt, endsAt })
  ).toThrow();
});
