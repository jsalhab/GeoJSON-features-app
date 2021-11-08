import React from "react";
import { mount } from "enzyme";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoordinatesForm from "../components/coordinates/CoordinatesForm";
import Root from "../Root";
import { findByTestAttr } from "../../test/testUtils";

const setup = () => {
  return mount(
    <Root>
      <CoordinatesForm />
    </Root>
  );
};
let wrapper;
beforeEach(() => {
  wrapper = setup();
});

describe("Expect value changes for each filed after simulate change", () => {
  test("should update minLong field on change", async () => {
    const coordinatesForm = findByTestAttr(wrapper, "coordinates-form");
    const minLong = coordinatesForm.find('input[name="minLong"]');
    minLong.simulate("change", {
      persist: () => {},
      target: {
        name: "minLong",
        value: 11.54,
      },
    });
    await waitFor(() => {
      expect(minLong.html()).toMatch("11.54");
    });
  });

  test("should update minLat field on change", async () => {
    const coordinatesForm = findByTestAttr(wrapper, "coordinates-form");
    const minLat = coordinatesForm.find('input[name="minLat"]');
    minLat.simulate("change", {
      persist: () => {},
      target: {
        name: "minLat",
        value: 48.14,
      },
    });
    await waitFor(() => {
      expect(minLat.html()).toMatch("48.14");
    });
  });

  test("should update maxLong field on change", async () => {
    const coordinatesForm = findByTestAttr(wrapper, "coordinates-form");
    const maxLong = coordinatesForm.find('input[name="maxLong"]');
    maxLong.simulate("change", {
      persist: () => {},
      target: {
        name: "maxLong",
        value: 11.543,
      },
    });
    await waitFor(() => {
      expect(maxLong.html()).toMatch("11.543");
    });
  });

  test("should update maxLat field on change", async () => {
    const coordinatesForm = findByTestAttr(wrapper, "coordinates-form");
    const maxLat = coordinatesForm.find('input[name="maxLat"]');
    maxLat.simulate("change", {
      persist: () => {},
      target: {
        name: "maxLat",
        value: 48.145,
      },
    });
    await waitFor(() => {
      expect(maxLat.html()).toMatch("48.145");
    });
  });
});

describe("expect submitting the form", () => {
  test("rendering and submitting the Formik form", async () => {
    render(
      <Root>
        <CoordinatesForm />
      </Root>
    );

    await waitFor(() => {
      userEvent.type(screen.getByLabelText(/Minimum longitude/i), "11.54");
      userEvent.type(screen.getByLabelText(/Minimum latitude/i), "48.14");
      userEvent.type(screen.getByLabelText(/Maximum longitude/i), "11.543");
      userEvent.type(screen.getByLabelText(/Maximum latitude/i), "48.145");
    });

    await waitFor(() => {
      const submitButton = screen.getByRole("button", { name: "Submit" });
      userEvent.click(submitButton);
    });
  });
});
